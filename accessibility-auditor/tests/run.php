<?php

declare(strict_types=1);

require_once __DIR__ . '/../src/AuditFinding.php';
require_once __DIR__ . '/../src/HtmlAuditor.php';

use AccessAudit\HtmlAuditor;

$auditor = new HtmlAuditor();

/** @return list<string> */
function findingCodes(HtmlAuditor $auditor, string $html): array
{
    return array_map(
        static fn ($finding): string => $finding->code,
        $auditor->audit($html)
    );
}

function assertContainsAll(array $expected, array $actual, string $scenario): void
{
    foreach ($expected as $code) {
        if (!in_array($code, $actual, true)) {
            fwrite(STDERR, "FAIL [{$scenario}]: expected finding not found: {$code}\n");
            exit(1);
        }
    }
}

function assertNotContainsAny(array $unexpected, array $actual, string $scenario): void
{
    foreach ($unexpected as $code) {
        if (in_array($code, $actual, true)) {
            fwrite(STDERR, "FAIL [{$scenario}]: unexpected finding: {$code}\n");
            exit(1);
        }
    }
}

$badHtml = '<html><head></head><body><img src="poster.jpg"><h1>Title</h1><h3>Skipped level</h3><input id="email"><a href="/next"></a></body></html>';
$badCodes = findingCodes($auditor, $badHtml);
assertContainsAll([
    'page-title-missing',
    'document-language-missing',
    'image-alt-missing',
    'heading-level-skipped',
    'form-control-label-missing',
    'interactive-name-missing',
], $badCodes, 'basic missing accessibility information');

$goodHtml = '<!doctype html><html lang="fi"><head><title>Esimerkkisivu</title></head><body><img src="decorative.svg" alt=""><h1>Otsikko</h1><label for="email">Sähköposti</label><input id="email"><a href="/next">Jatka</a><button type="button">Tallenna</button></body></html>';
$goodCodes = findingCodes($auditor, $goodHtml);
assertNotContainsAny([
    'page-title-missing',
    'document-language-missing',
    'image-alt-missing',
    'heading-level-skipped',
    'form-control-label-missing',
    'interactive-name-missing',
], $goodCodes, 'basic valid semantic page');

$ariaHtml = '<html lang="en"><head><title>ARIA labels</title></head><body><span id="email-label">Email address</span><input aria-labelledby="email-label"><input aria-label="Search"><a href="/logo"><img src="logo.svg" alt="Home"></a><button aria-labelledby="missing-label"></button></body></html>';
$ariaCodes = findingCodes($auditor, $ariaHtml);
assertContainsAll(['interactive-name-missing'], $ariaCodes, 'invalid ARIA reference is detected');
assertNotContainsAny(['form-control-label-missing'], $ariaCodes, 'valid ARIA labels and references');
if (count(array_filter($auditor->audit($ariaHtml), static fn ($f): bool => $f->code === 'interactive-name-missing')) !== 1) {
    fwrite(STDERR, "FAIL [ARIA names]: expected only the button with the broken reference to be flagged.\n");
    exit(1);
}

$hiddenInputHtml = '<html lang="en"><head><title>Hidden control</title></head><body><input type="hidden" name="token"></body></html>';
assertNotContainsAny(
    ['form-control-label-missing'],
    findingCodes($auditor, $hiddenInputHtml),
    'hidden input is ignored'
);

echo "All Accessibility Auditor regression tests passed.\n";