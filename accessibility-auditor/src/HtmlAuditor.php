<?php

declare(strict_types=1);

namespace AccessAudit;

use DOMDocument;
use DOMElement;
use DOMXPath;

final class HtmlAuditor
{
    /** @return list<AuditFinding> */
    public function audit(string $html): array
    {
        $document = new DOMDocument('1.0', 'UTF-8');
        $previousSetting = libxml_use_internal_errors(true);

        try {
            $document->loadHTML(
                '<?xml encoding="UTF-8">' . $html,
                LIBXML_NONET | LIBXML_NOERROR | LIBXML_NOWARNING
            );
        } finally {
            libxml_clear_errors();
            libxml_use_internal_errors($previousSetting);
        }

        $xpath = new DOMXPath($document);
        $findings = [];

        if (trim($xpath->evaluate('string(//title)')) === '') {
            $findings[] = new AuditFinding(
                'page-title-missing',
                'error',
                'The document does not have a non-empty page title.',
                'title',
                '2.4.2',
                'Add a concise, descriptive title inside the head element.'
            );
        }

        $htmlElement = $xpath->query('/html')->item(0);
        if (!$htmlElement instanceof DOMElement || trim($htmlElement->getAttribute('lang')) === '') {
            $findings[] = new AuditFinding(
                'document-language-missing',
                'error',
                'The document language is not declared.',
                'html',
                '3.1.1',
                'Add a valid language attribute, for example lang="en" or lang="fi".'
            );
        }

        foreach ($xpath->query('//img') as $image) {
            if ($image instanceof DOMElement && !$image->hasAttribute('alt')) {
                $findings[] = new AuditFinding(
                    'image-alt-missing',
                    'error',
                    'An image is missing its alt attribute.',
                    $this->describeElement($image),
                    '1.1.1',
                    'Add alternative text, or alt="" when the image is purely decorative.'
                );
            }
        }

        $previousHeadingLevel = 0;
        foreach ($xpath->query('//h1 | //h2 | //h3 | //h4 | //h5 | //h6') as $heading) {
            if (!$heading instanceof DOMElement) {
                continue;
            }

            $level = (int) substr(strtolower($heading->tagName), 1);
            if ($previousHeadingLevel > 0 && $level > $previousHeadingLevel + 1) {
                $findings[] = new AuditFinding(
                    'heading-level-skipped',
                    'warning',
                    sprintf('Heading level jumps from h%d to h%d.', $previousHeadingLevel, $level),
                    $this->describeElement($heading),
                    '1.3.1',
                    'Review the heading outline and use levels that reflect the content hierarchy.'
                );
            }

            $previousHeadingLevel = $level;
        }

        foreach ($xpath->query('//input[not(translate(@type, "HIDDEN", "hidden") = "hidden")] | //select | //textarea') as $control) {
            if (!$control instanceof DOMElement || $this->hasAccessibleLabel($control, $xpath)) {
                continue;
            }

            $findings[] = new AuditFinding(
                'form-control-label-missing',
                'error',
                'A form control does not have a detectable accessible label.',
                $this->describeElement($control),
                '3.3.2',
                'Associate the control with a label, or provide an appropriate aria-label or aria-labelledby.'
            );
        }

        foreach ($xpath->query('//a | //button') as $interactive) {
            if (!$interactive instanceof DOMElement || $this->hasAccessibleName($interactive, $xpath)) {
                continue;
            }

            $findings[] = new AuditFinding(
                'interactive-name-missing',
                'error',
                'A link or button has no detectable accessible name.',
                $this->describeElement($interactive),
                '4.1.2',
                'Provide a meaningful accessible name, such as visible text, an image alternative, or a valid ARIA name.'
            );
        }

        return $findings;
    }

    private function hasAccessibleLabel(DOMElement $control, DOMXPath $xpath): bool
    {
        if (trim($control->getAttribute('aria-label')) !== ''
            || $this->hasValidIdReferences($control->getAttribute('aria-labelledby'), $xpath)) {
            return true;
        }

        $id = $control->getAttribute('id');
        if ($id !== '') {
            foreach ($xpath->query('//label[@for]') as $label) {
                if ($label instanceof DOMElement && $label->getAttribute('for') === $id) {
                    return true;
                }
            }
        }

        $parent = $control->parentNode;
        while ($parent instanceof DOMElement) {
            if (strtolower($parent->tagName) === 'label') {
                return true;
            }
            $parent = $parent->parentNode;
        }

        return false;
    }

    private function hasAccessibleName(DOMElement $element, DOMXPath $xpath): bool
    {
        if (trim($element->textContent) !== ''
            || trim($element->getAttribute('aria-label')) !== ''
            || trim($element->getAttribute('title')) !== ''
            || $this->hasValidIdReferences($element->getAttribute('aria-labelledby'), $xpath)) {
            return true;
        }

        foreach ($xpath->query('.//img[@alt]', $element) as $image) {
            if ($image instanceof DOMElement && trim($image->getAttribute('alt')) !== '') {
                return true;
            }
        }

        foreach ($xpath->query('.//svg/title', $element) as $title) {
            if (trim($title->textContent) !== '') {
                return true;
            }
        }

        return false;
    }

    private function hasValidIdReferences(string $references, DOMXPath $xpath): bool
    {
        $ids = preg_split('/\\s+/', trim($references));
        if ($ids === false || $ids === [] || $ids[0] === '') {
            return false;
        }

        foreach ($ids as $id) {
            $found = false;
            foreach ($xpath->query('//*[@id]') as $node) {
                if ($node instanceof DOMElement && $node->getAttribute('id') === $id) {
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                return false;
            }
        }

        return true;
    }

    private function describeElement(DOMElement $element): string
    {
        $description = strtolower($element->tagName);
        if ($element->hasAttribute('id')) {
            $description .= '#' . $element->getAttribute('id');
        }
        if ($element->hasAttribute('class')) {
            $classes = preg_split('/\\s+/', trim($element->getAttribute('class')));
            if ($classes !== false && $classes !== []) {
                $description .= '.' . implode('.', array_slice($classes, 0, 3));
            }
        }

        return $description;
    }
}