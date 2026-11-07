# Accessibility Testing Toolkit
# Saavutettavuuden testausvälineet

Tools help identify issues; no single tool can establish that a service is accessible. Verify findings manually and test with assistive technologies and people who use them.

Työkalut auttavat löytämään ongelmia, mutta yksikään työkalu ei yksin todista palvelua saavutettavaksi. Tarkista löydökset manuaalisesti ja testaa avustavilla teknologioilla sekä niitä käyttävillä ihmisillä.

## 1. Automated and browser-based tools / Automaattiset ja selaimessa käytettävät työkalut

| Tool | Use | Limit |
|---|---|---|
| [axe-core](https://github.com/dequelabs/axe-core) | Automated rule checks for common web accessibility issues; integrates with browser tests. | Cannot assess every WCAG criterion, meaning, task usability or all accessible-name cases. |
| [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing) | Browser automation and integration with accessibility scans. | Automation does not replace manual and assistive-technology testing. |
| [WAVE](https://wave.webaim.org/) | Visual overlay of accessibility errors, alerts and structural information. | Automated output needs interpretation; not a certification. |
| [Accessibility Insights](https://accessibilityinsights.io/) | Fast automated checks and guided manual assessment. | Follow the manual assessment steps; do not rely only on automated results. |
| [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) | Browser audit signals and performance-related diagnostics, including accessibility checks. | A score is not a WCAG conformance statement. |
| [Pa11y](https://pa11y.org/) | Repeatable command-line accessibility checks in development and CI. | Rules and page states are limited to what the configured test can inspect. |

## 2. Visual checks / Visuaaliset tarkistukset

| Tool | Use |
|---|---|
| [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | Check foreground/background contrast ratios. |
| [TPGi Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) | Inspect contrast in desktop applications and screen content. |
| [Coblis colour-blindness simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/) | Supplementary simulation of selected colour-vision differences. |
| [NoCoffee vision simulator](https://accessgarage.wordpress.com/2013/02/09/458/) | Supplementary visual simulation for exploring potential barriers. |

Simulators are not substitutes for feedback from people with relevant lived experience. Contrast must be measured, not judged by appearance alone.

Simulaattorit eivät korvaa palautetta ihmisiltä, joilla on kyseisiä kokemuksia. Kontrasti pitää mitata, ei arvioida pelkän ulkonäön perusteella.

## 3. Assistive technologies / Avustavat teknologiat

| Technology | Platform / purpose |
|---|---|
| [NVDA](https://www.nvaccess.org/) | Free screen reader for Windows. |
| [JAWS](https://www.freedomscientific.com/products/software/jaws/) | Commercial Windows screen reader. |
| [VoiceOver](https://www.apple.com/accessibility/vision/) | Built-in screen reader on Apple platforms. |
| [TalkBack](https://support.google.com/accessibility/android/answer/6283677) | Android screen reader. |
| [Windows Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator) | Built-in Windows screen reader. |

Test real workflows, not only whether the screen reader announces individual controls. Check navigation, forms, validation, dynamic updates, dialogs, uploads and result reports.

Testaa oikeita käyttötapauksia, älä vain sitä, lukeeko ruudunlukija yksittäisten ohjainten nimet. Tarkista navigointi, lomakkeet, validointi, dynaamiset päivitykset, dialogit, tiedostojen lataus ja tulosraportit.

## 4. Manual test matrix / Manuaalinen testimatriisi

| Area | Minimum test |
|---|---|
| Keyboard | Complete core tasks with Tab, Shift+Tab, Enter, Space, arrow keys and Escape where expected. |
| Screen reader | Navigate by headings, landmarks, links and form controls; complete the main task. |
| Magnification | Test 200% text resize and 400% zoom / 320 CSS px reflow. |
| Contrast | Measure text and essential non-text contrast; check focus and error states. |
| Text spacing | Apply WCAG 1.4.12 spacing overrides; check clipping and overlap. |
| Forced colours | Check Windows high-contrast / forced-colors behavior. |
| Reduced motion | Enable prefers-reduced-motion and verify non-essential motion is reduced. |
| Touch and motor | Test target size, spacing, gestures and alternatives to dragging. |
| Captions and transcripts | Check accuracy, synchronisation and access to equivalent text for relevant media. |
| Cognitive and reading | Check clarity, consistency, task steps, error recovery and time pressure. |

## 5. Project test record / Projektin testikirjaus

For each run, record:
- Test ID, date and tested commit.
- Page or component and user task.
- Browser, operating system, device and viewport.
- Zoom / text size and relevant settings.
- Assistive technology and version, if used.
- Steps, expected result and actual result.
- Evidence and reproducible details, without unnecessary personal data.
- Finding type, severity, mapped criterion/source and suggested remediation.
- Retest result and remaining limitations.

Kirjaa jokaisesta testistä:
- Testitunnus, päivämäärä ja testattu commit.
- Sivu tai komponentti ja käyttäjän tehtävä.
- Selain, käyttöjärjestelmä, laite ja näkymän koko.
- Suurennus / tekstikoko ja olennaiset asetukset.
- Avustava teknologia ja versio, jos käytössä.
- Vaiheet, odotettu tulos ja toteutunut tulos.
- Näyttö ja toistettavat tiedot ilman tarpeettomia henkilötietoja.
- Havainnon tyyppi, vakavuus, liittyvä kriteeri/lähde ja korjausehdotus.
- Uusintatestin tulos ja jäljelle jäävät rajoitukset.

## 6. Interpretation / Tulosten tulkinta

A zero-violation automated report means only that the configured rules did not report a violation in the tested page state. It does not establish full WCAG conformance, legal compliance, usability or equality of access.

Nollan virheen automaattinen raportti tarkoittaa vain sitä, ettei määritetty tarkistus ilmoittanut rikkomuksia testatussa sivun tilassa. Se ei osoita täyttä WCAG-vaatimustenmukaisuutta, lain noudattamista, käytettävyyttä tai yhdenvertaista palveluun pääsyä.
