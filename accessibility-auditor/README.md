# Accessibility Auditor

PHP module for inspecting supplied HTML and reporting selected accessibility issues.

## Requirements
- PHP 8.1 or later.
- PHP DOM and libxml extensions.

## Run the first command-line version

From the repository root:

```bash
php accessibility-auditor/bin/audit.php path/to/page.html
```

The command prints a JSON report to standard output. It does not modify the input file.

## Run basic tests

```bash
cd accessibility-auditor
php tests/run.php
```

## Current checks
- Missing or empty document title.
- Missing document language declaration.
- Images without an alt attribute.
- Skipped heading levels.
- Form controls without a detectable label.
- Links and buttons without a detectable name.

## Important limitations

This is an early rule-based checker, not a complete WCAG audit. It does not currently compute the full accessible name, inspect CSS contrast, execute JavaScript, or test keyboard and screen-reader behavior. Some findings require human review, and the current rules may produce false positives or miss issues.

## Next improvements
- Add more robust accessible-name calculation.
- Add fixtures for edge cases and malformed HTML.
- Add rule metadata and severity documentation.
- Build a browser-based interface after the audit engine is stable.

See the root roadmap at ../docs/ROADMAP.md.
