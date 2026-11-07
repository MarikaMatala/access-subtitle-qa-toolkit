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


## International and country-specific legal frameworks
- UN Convention on the Rights of Persons with Disabilities: https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities
- W3C international accessibility laws and policies database: https://www.w3.org/WAI/policies/
- European Commission — Web Accessibility Directive: https://digital-strategy.ec.europa.eu/en/policies/web-accessibility
- European Commission — EN 301 549 harmonisation: https://digital-strategy.ec.europa.eu/en/policies/web-accessibility-directive-standards-and-harmonisation
- AccessibleEU — EN 301 549 v4.1.1 update (2026-09-07): https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en
- UK — Public Sector Bodies Accessibility Regulations: https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps
- UK — Equality Act 2010: https://www.legislation.gov.uk/ukpga/2010/15/contents
- US — ADA web accessibility guidance: https://www.ada.gov/resources/web-guidance/
- US — 2024 ADA Title II web rule: https://www.ada.gov/resources/2024-03-08-web-rule/
- US — Section 508 laws and policies: https://www.section508.gov/manage/laws-and-policies/
- Canada — Accessible Canada Act: https://laws-lois.justice.gc.ca/eng/acts/A-0.6/
- Canada — CAN/ASC-EN 301 549:2024: https://accessible.canada.ca/standards-and-technical-guides/standards-and-technical-guides-database/can-asc-en-301-5492024-accessibility-requirements-ict-products-and-services-en-301-5492021-idt
- Australia — Disability Discrimination Act 1992: https://www.legislation.gov.au/C2004A04426/latest
- Australia — AHRC digital accessibility guidance: https://humanrights.gov.au/resource-hub/by-resource-type/guidelines-and-standards/guides-and-standards-disability-rights/guidelines-equal-access-digital-goods-and-services
- Germany — BITV 2.0: https://www.gesetze-im-internet.de/bitv_2_0/
- Germany — BFSG: https://www.gesetze-im-internet.de/bfsg/
- Japan — Government Web Accessibility Policy (JIS X 8341-3): https://www.gov-online.go.jp/webaccessibility/

See [International Accessibility Laws and Standards Comparison](docs/INTERNATIONAL_COMPARISON.md) for jurisdiction scope, standards differences, legal-status distinctions and the proposed rule data model.

**Source review date / Lähteiden tarkistuspäivä:** 2026-11-07. Country-specific rules change; confirm the current official text and enforcement guidance before relying on them.
