# Access & Subtitle QA Toolkit

An open-source toolkit for checking web accessibility and subtitle file quality.

## Modules
- **Accessibility Auditor:** PHP-based checks for selected accessibility issues in supplied HTML.
- **Subtitle Toolkit:** Java-based validator and analyzer for SRT and WebVTT subtitle files.
- **Database:** SQL / SQLite storage for scan history and findings, planned after the standalone tools work.

Automated checks can identify common issues, but cannot prove that a website is fully accessible or WCAG-conformant.

## Status
**Early development — repository scaffold.** The first versions will process local HTML and subtitle files. Remote URL scanning and persistent scan history will be added only after the basic workflows and security controls are in place.

## Technology

| Area | Technology |
|---|---|
| Accessibility Auditor | PHP |
| Subtitle Toolkit | Java |
| Database | SQL / SQLite |
| Web structure | HTML |
| Styling | CSS |
| Browser interactions | JavaScript |
| Automation | GitHub Actions |

## Repository structure
- accessibility-auditor/ — PHP accessibility checks
- subtitle-toolkit/ — Java subtitle validation
- database/ — SQL schema and migrations
- docs/ — project and technical documentation
- tests/ — synthetic test resources
- .github/workflows/ — CI workflows

## Planned capabilities

### Accessibility Auditor
- Inspect supplied HTML.
- Detect missing image alternative text.
- Check document title and language declarations.
- Inspect heading structure.
- Detect form controls without accessible labels.
- Identify empty links and buttons.
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
- [Roadmap](docs/ROADMAP.md)
- [Security policy](SECURITY.md)
- [Sources and references](SOURCES.md)
- [Accessibility Auditor](accessibility-auditor/README.md)
- [Subtitle Toolkit](subtitle-toolkit/README.md)
- [Database](database/README.md)

---

# Suomeksi

Access & Subtitle QA Toolkit on avoimen lähdekoodin projekti, jonka tarkoituksena on tarkistaa verkkosivujen saavutettavuutta ja tekstitystiedostojen teknistä laatua.

Projekti sisältää kaksi erillistä työkalua:
- **Accessibility Auditor** tarkistaa HTML-sisällöstä yleisiä saavutettavuusongelmia.
- **Subtitle Toolkit** tarkistaa SRT- ja WebVTT-tekstitystiedostojen rakennetta ja ajoituksia.
- **SQL-tietokanta** mahdollistaa myöhemmin tarkistushistorian ja tulosten tallentamisen.

Projekti on alkuvaiheessa. Ensimmäiseksi toteutetaan paikallisen HTML-sisällön ja tekstitystiedostojen tarkistukset. Verkkosivujen URL-tarkistus ja tietojen pysyvä tallennus lisätään vasta, kun perustyökalut ja niiden tietoturva ovat kunnossa.

Automaattinen tarkistus auttaa löytämään ongelmia, mutta se ei yksin todista verkkosivun olevan täysin saavutettava tai WCAG-standardin mukainen.
