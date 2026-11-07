# Access & Subtitle QA Toolkit

An open-source toolkit for checking web accessibility and subtitle file quality.

## Modules
- **Accessibility Auditor:** PHP-based checks for selected accessibility issues in supplied HTML.
- **Subtitle Toolkit:** Java-based validator and analyzer for SRT and WebVTT subtitle files.
- **Database:** SQL / SQLite storage for scan history and findings, planned after the standalone tools work.

Automated checks can identify common issues, but cannot prove that a website is fully accessible or WCAG-conformant.

## Browser demo

The static browser interface is published with GitHub Pages:

**https://marikamatala.github.io/access-subtitle-qa-toolkit/**

The demo currently includes:
- HTML checks for a missing page title, document language, image alternative text, skipped heading levels, form labels, and accessible names on links and buttons.
- SRT / WebVTT checks for cue structure, timestamp validity, ordering, overlaps, empty cues, long lines, and basic timing statistics.
- Built-in examples, local file selection, downloadable text reports, and English / Finnish interface language.
- Local-only processing: pasted source and selected subtitle files are processed in the browser and are not uploaded.

The browser implementation is a lightweight JavaScript demonstration. It does **not** execute the PHP CLI auditor or a production Java subtitle engine, and its rules are not a complete WCAG audit.

## Status
**Early development.** The PHP command-line auditor is available as a separate module. The browser interface is a separate client-side demo; the Java subtitle module and database remain planned development work. The UI test plan describes further functional and accessibility testing still required.

## Technology

| Area | Technology |
|---|---|
| Accessibility Auditor | PHP |
| Subtitle Toolkit | Java |
| Database | SQL / SQLite |
| Web structure | HTML |
| Styling | CSS |
| Browser interactions | JavaScript |
| Planned browser testing | Playwright + axe-core |
| Automation | GitHub Actions |

## Accessibility commitment

The target baseline is WCAG 2.2 Level AA. Testing considers blindness and screen-reader use, low vision and eye conditions, color-vision differences, dyslexia and other reading differences, cognitive accessibility, motor access, hearing, and motion / photosensitivity.

The project combines automated regression tests with manual keyboard, magnification, contrast, screen-reader, text-spacing, reduced-motion, and responsive checks. Automated scans are not a substitute for manual evaluation or testing with people with lived experience.

## Repository structure
- accessibility-auditor/ — PHP accessibility checks
- subtitle-toolkit/ — Java subtitle validation
- database/ — SQL schema and migrations
- docs/ — project, accessibility, and UI test documentation
- index.html, styles.css, app.js — static browser demo
- tests/ — regression tests and synthetic test resources
- .github/workflows/ — CI workflows

## Planned capabilities

### Accessibility Auditor
- Inspect supplied HTML.
- Detect missing image alternative text.
- Check document title and language declarations.
- Inspect heading structure.
- Detect form controls without accessible labels.
- Identify links and buttons without detectable accessible names.
- Produce a report with findings and remediation hints.

### Subtitle Toolkit
- Parse SRT and WebVTT files.
- Validate cue structure and timestamps.
- Detect malformed, empty, or overlapping cues.
- Report unusually long lines and basic timing statistics.
- Export a validation report.

## Development principles
- Prefer official specifications and documentation.
- Keep both validators independently testable.
- Treat uploaded files as untrusted input.
- Use parameterized SQL queries.
- Explain what automated checks can and cannot establish.
- Document third-party dependencies and licenses.
- Include tests and reproducible setup instructions.

## Documentation

- [Open the browser demo](https://marikamatala.github.io/access-subtitle-qa-toolkit/)
- [Roadmap](docs/ROADMAP.md)
- [Inclusive accessibility test plan](docs/ACCESSIBILITY_TEST_PLAN.md)
- [Accessibility, usability and inclusion reference library (EN/FI)](docs/REFERENCE_LIBRARY.md)
- [International accessibility laws and standards comparison (EN/FI)](docs/INTERNATIONAL_COMPARISON.md)
- [Inclusive service design and equality (EN/FI)](docs/INCLUSIVE_SERVICE_DESIGN.md)
- [Usability and inclusive UI design (EN/FI)](docs/USABILITY_AND_UI.md)
- [Accessibility testing toolkit (EN/FI)](docs/TESTING_TOOLKIT.md)
- [User interface test plan](docs/UI_TEST_PLAN.md)
- [Accessibility regression testing](tests/ACCESSIBILITY_TESTING.md)
- [Security policy](SECURITY.md)
- [Sources and references](SOURCES.md)
- [Accessibility Auditor](accessibility-auditor/README.md)
- [Subtitle Toolkit](subtitle-toolkit/README.md)
- [Database](database/README.md)

---

# Suomeksi

Access & Subtitle QA Toolkit on avoimen lähdekoodin projekti, jolla tarkistetaan verkkosivujen saavutettavuutta ja tekstitystiedostojen teknistä laatua.

Projekti sisältää kaksi erillistä työkalua:
- **Accessibility Auditor** tarkistaa HTML-sisällöstä yleisiä saavutettavuusongelmia.
- **Subtitle Toolkit** tarkistaa SRT- ja WebVTT-tekstitystiedostojen rakennetta ja ajoituksia.
- **SQL-tietokanta** mahdollistaa myöhemmin tarkistushistorian ja tulosten tallentamisen.

Saavutettavuuden tavoitteena on WCAG 2.2 AA. Testauksessa huomioidaan muun muassa sokeus, heikkonäköisyys ja silmäsairaudet, värinäön poikkeamat, lukivaikeus, kognitiiviset haasteet, motoriset rajoitteet sekä ruudunlukijoiden ja muiden avustavien teknologioiden käyttö.

Testaus yhdistää automaattiset tarkistukset ja manuaalisen arvioinnin. Käyttöliittymätestien suunnitelma on lisätty valmiiksi, mutta niitä ei voi vielä suorittaa varsinaiselle sovellukselle, koska selainkäyttöliittymää ei ole toteutettu.

Automaattinen tarkistus auttaa löytämään ongelmia, mutta se ei yksin todista verkkosivun olevan täysin saavutettava tai WCAG-standardin mukainen.
