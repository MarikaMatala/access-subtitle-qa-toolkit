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


## Finnish legislation, equality and inclusive services
- Finnish Act on the Provision of Digital Services 306/2019: https://www.finlex.fi/fi/laki/ajantasa/2019/20190306
- Finnish Non-Discrimination Act 1325/2014: https://www.finlex.fi/fi/laki/ajantasa/2014/20141325
- Act on Accessibility Requirements for Certain Products and Services 102/2023: https://www.finlex.fi/fi/laki/alkup/2023/20230102
- European Commission Web Accessibility policy: https://digital-strategy.ec.europa.eu/en/policies/web-accessibility
- W3C Accessibility Laws and Policies: https://www.w3.org/WAI/policies/

## Human-centred design, usability and plain language
- ISO 9241-210:2019: https://www.iso.org/standard/77520.html
- GOV.UK Service Manual: https://www.gov.uk/service-manual
- GOV.UK Design System: https://design-system.service.gov.uk/
- Microsoft Inclusive Design: https://inclusive.microsoft.design/
- Material Design accessibility: https://m3.material.io/foundations/accessible-design/overview
- Apple Human Interface Guidelines — Accessibility: https://developer.apple.com/design/human-interface-guidelines/accessibility
- Saavutettavasti.fi (Celia): https://www.saavutettavasti.fi/
- Selkokeskus — Selkokieli verkossa: https://selkokeskus.fi/selkokieli/selkokieli-verkossa/
- JOTPA — Saavutettava viestintä: https://www.jotpa.fi/fi/selkokieli/tyossa-oppiminen-sujuvaksi/vinkkeja-tyopaikoille/saavutettava-viestinta
- Kielitoimiston ohjepankki: https://kielitoimistonohjepankki.fi/

## Disability organisations and inclusive service practice
- Invalidiliitto: https://www.invalidiliitto.fi/
- Näkövammaisten liitto: https://www.nakovammaistenliitto.fi/
- Kuuloliitto: https://www.kuuloliitto.fi/
- Kehitysvammaliitto: https://www.kehitysvammaliitto.fi/
- ADHD-liitto: https://adhd-liitto.fi/
- Kulttuuria kaikille: https://www.kulttuuriakaikille.fi/

## Testing and visual evaluation tools
- WAVE: https://wave.webaim.org/
- Accessibility Insights: https://accessibilityinsights.io/
- Lighthouse: https://developer.chrome.com/docs/lighthouse/overview/
- Pa11y: https://pa11y.org/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- TPGi Colour Contrast Analyser: https://www.tpgi.com/color-contrast-checker/
- Coblis colour-vision simulator: https://www.color-blindness.com/coblis-color-blindness-simulator/
- NoCoffee vision simulator: https://accessgarage.wordpress.com/2013/02/09/458/
- JAWS screen reader: https://www.freedomscientific.com/products/software/jaws/
- Windows Narrator: https://support.microsoft.com/windows/complete-guide-to-narrator

See [the bilingual reference library](docs/REFERENCE_LIBRARY.md) for source descriptions, scope notes, metadata requirements and project interpretation rules. See [inclusive service design](docs/INCLUSIVE_SERVICE_DESIGN.md), [usability and UI design](docs/USABILITY_AND_UI.md), and the [testing toolkit](docs/TESTING_TOOLKIT.md) for practical implementation guidance.

**Source review date / Lähteiden tarkistuspäivä:** 2026-11-07. Verify live legal texts, standard editions, harmonisation status and tool documentation before relying on them for a release.
