# GitHub Actions

This repository currently uses GitHub Actions for two automated workflows:

- `pages.yml` — builds and deploys the static browser demo to GitHub Pages when `index.html`, `styles.css`, `app.js` or the Pages workflow changes on `main`. It can also be started manually with `workflow_dispatch`.
- `php-auditor.yml` — checks PHP syntax and runs the PHP auditor's basic tests when the auditor or its workflow changes, and on pull requests.

## Planned checks

- Java compilation and unit tests after the Java subtitle module is implemented.
- SQL schema and migration validation after the database is implemented.
- Playwright functional, responsive and keyboard tests for the browser interface.
- axe-core automated accessibility scans, supplemented by manual assistive-technology testing.

A successful deployment confirms that the static files were published. It does not certify the application as accessible or WCAG-conformant.
