# Accessibility Auditor

PHP module for inspecting supplied HTML and reporting selected accessibility issues.

## First milestone
Build a local HTML input workflow and a testable rule engine. Initial rules will cover document title, language declaration, image alternative text, heading structure, form labels, and empty interactive elements.

## Design requirements
- Keep individual rules independently testable.
- Report the affected element and a practical remediation hint.
- Identify a WCAG success criterion only when the mapping is defensible.
- Distinguish automated failures, warnings, and checks requiring human review.
- Escape all untrusted content when displaying reports.

See the root roadmap at ../docs/ROADMAP.md.