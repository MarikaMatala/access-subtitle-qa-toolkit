# Accessibility Regression Testing

## Fixture policy

Create small synthetic HTML fixtures with explicit expected results. Include:
- Valid semantic page.
- Missing document language or title.
- Missing image alternative text and decorative images with empty alt.
- Heading hierarchy edge cases.
- Explicit, wrapping, and ARIA-labelled form controls.
- Hidden controls.
- Empty and icon-only links or buttons.
- Invalid ARIA references.
- Duplicate IDs and malformed markup.

Every rule needs:
1. A failing example.
2. A passing example.
3. A boundary or edge case.
4. A documented limitation where a human must decide.

## Current PHP test

Run from the repository root:

    php accessibility-auditor/tests/run.php

The GitHub Actions workflow runs PHP syntax checks and this test script. It does not currently run browser UI tests because the browser UI has not been implemented.

## Planned browser regression tests

When the UI exists, add Playwright tests and @axe-core/playwright scans. Scan each important page and each dynamic state after opening menus, dialogs, validation messages, and results. Keep manual screen-reader and keyboard checks as separate release gates.
