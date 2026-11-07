<?php

declare(strict_types=1);

namespace AccessAudit;

final class AuditFinding
{
    public function __construct(
        public readonly string $code,
        public readonly string $severity,
        public readonly string $message,
        public readonly string $element,
        public readonly ?string $wcagCriterion = null,
        public readonly ?string $suggestion = null
    ) {
    }

    /** @return array<string, string|null> */
    public function toArray(): array
    {
        return [
            'code' => $this->code,
            'severity' => $this->severity,
            'message' => $this->message,
            'element' => $this->element,
            'wcag_criterion' => $this->wcagCriterion,
            'suggestion' => $this->suggestion,
        ];
    }
}