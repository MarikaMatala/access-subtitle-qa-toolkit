# Sources and References

This project uses official specifications and primary documentation wherever possible.

## Web accessibility standards
- W3C, Web Content Accessibility Guidelines (WCAG) 2.2: https://www.w3.org/TR/WCAG22/
- W3C, Understanding WCAG 2.2: https://www.w3.org/WAI/WCAG22/Understanding/
- W3C WAI, Cognitive Accessibility: https://www.w3.org/WAI/cognitive/
- W3C WAI, How People with Disabilities Use the Web — Cognitive and Learning: https://www.w3.org/WAI/people-use-web/abilities-barriers/cognitive/
- W3C WAI, Cognitive Accessibility Objective — Help Users Find What They Need: https://www.w3.org/WAI/WCAG2/supplemental/objectives/o2-find/
- MDN, Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility

Automated checks will be mapped to specific criteria where appropriate. A passing scan must not be presented as proof of full WCAG conformance. Cognitive accessibility guidance supplements WCAG and does not replace the normative success criteria.

## Accessibility and browser testing
- Playwright, Accessibility Testing: https://playwright.dev/docs/accessibility-testing
- axe-core: https://github.com/dequelabs/axe-core
- NVDA screen reader: https://www.nvaccess.org/
- VoiceOver user guide: https://support.apple.com/guide/voiceover/welcome/mac
- Android Accessibility Help: https://support.google.com/accessibility/android/

Playwright and axe-core can identify some automatically detectable issues. Manual keyboard, screen-reader, magnification, and user testing are also required.

## Subtitle formats
- W3C, WebVTT: https://www.w3.org/TR/webvtt1/

SRT support will follow the commonly used SubRip text structure. Parser assumptions and edge cases will be documented because implementations can differ.

## Programming languages and database
- PHP documentation: https://www.php.net/docs.php
- Java documentation: https://docs.oracle.com/en/java/
- SQLite documentation: https://www.sqlite.org/docs.html

## Test data
Use synthetic HTML and subtitle examples created for this repository. Do not commit copyrighted subtitle files, commercial media, personal data, or material without a clear right to redistribute it.

Any third-party dependency must be recorded with its version, purpose, upstream project, and license in THIRD_PARTY_LICENSES.md.
