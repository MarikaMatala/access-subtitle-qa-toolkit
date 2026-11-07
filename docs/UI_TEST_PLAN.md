# User Interface Test Plan

## Current status

The repository contains a published, client-side browser demo alongside the PHP command-line auditor. The demo currently provides HTML accessibility checks and SRT / WebVTT subtitle validation. This plan defines the functional, responsive and accessibility test approach for that interface. Browser tests must target the live demo and real controls before being marked as passing.

**Live demo:** https://marikamatala.github.io/access-subtitle-qa-toolkit/

The demo is an early-stage implementation. Do not describe it as a complete WCAG audit or production-ready subtitle engine.

## Test status

The interface has been implemented and deployed, but this document is a test plan, not a test report. No Playwright, axe-core, NVDA, VoiceOver or TalkBack result should be treated as passed until it has actually been executed and recorded with a date, build SHA, browser and assistive-technology details.

## Planned test stack

- Playwright for browser-based functional, keyboard, responsive, and interaction tests.
- axe-core through @axe-core/playwright for automatically detectable accessibility issues.
- Manual assistive-technology testing with NVDA, VoiceOver, and TalkBack.
- Browser developer tools and contrast analyzers for visual checks.

Automated axe scans are a useful baseline, not a complete accessibility audit. Manual checks remain required.

## Browser and viewport coverage

At minimum, test:
- Chromium, Firefox, and WebKit where supported.
- Desktop keyboard-only use.
- Mobile viewport and touch input.
- 320 CSS px width and 200% / 400% zoom scenarios.
- High contrast / forced-colors mode.
- Reduced-motion preference.
- Text-spacing overrides.

Record browser and OS versions for each release test.

## Functional UI tests

### Navigation and page structure
- Skip link is first in the tab order and moves focus to main content.
- Header, navigation, main, and footer landmarks are present and named where needed.
- Navigation works without a pointer.
- Current page or selected navigation item is programmatically identifiable.
- Focus is not hidden behind sticky UI.

### Forms and file uploads
- Every field has a visible label and programmatic name.
- Required fields and accepted file formats are explained before submission.
- File picker can be opened using keyboard.
- Invalid file type, empty file, and oversized file produce clear text errors.
- Errors are associated with the relevant control and announced.
- User input is preserved after recoverable errors.
- Submission status is announced and does not rely on color alone.

### Results and reports
- Results have a meaningful heading and summary.
- Findings can be navigated using headings and semantic lists/tables.
- Severity includes text, not just a color.
- Filters have labels and work with keyboard.
- Empty states and loading states are announced appropriately.
- Export actions have clear names and feedback.

### Dialogs, menus, and dynamic content
- Menus open, close, and expose expanded/collapsed state correctly.
- Escape closes dismissible dialogs and returns focus to the trigger.
- Focus is contained in modal dialogs when appropriate.
- Dynamic updates do not unexpectedly move focus.
- No content is available only on hover.

## Visual and responsive checks

- Text contrast: at least 4.5:1 for normal text and 3:1 for large text.
- Essential UI boundaries and graphical state indicators: at least 3:1.
- Text remains usable at 200% resize.
- At 320 CSS px width / 400% zoom equivalent, content reflows without unnecessary horizontal scrolling.
- Text spacing overrides do not clip, overlap, or hide content.
- Buttons and controls have sufficiently large targets; aim for 44 x 44 CSS px where practical.
- Layout remains understandable in grayscale and forced-colors mode.
- Focus indicators remain visible in every theme.
- Reduced-motion preference suppresses non-essential transitions and animation.

## Readability and cognitive load

- Use descriptive page titles and clear heading hierarchy.
- Keep labels, navigation names, and action wording consistent.
- Use short instructions and explain unfamiliar terms.
- Avoid dense walls of text, justified paragraphs, excessive all-caps, and unnecessary animation.
- Do not rely on color, memory, or spatial position alone.
- Make errors specific and provide a clear correction.
- Give users time to read and complete tasks; warn before session expiry if time limits ever exist.

## Manual assistive-technology matrix

| Platform | Assistive technology | Core checks |
|---|---|---|
| Windows + Firefox | NVDA | Landmarks, headings, form labels, status announcements, dialog behavior |
| Windows + Chrome | NVDA | Same core flow and browser compatibility |
| macOS + Safari | VoiceOver | Reading order, rotor navigation, controls, dialogs |
| Android + Chrome | TalkBack | Touch exploration, labels, focus order, upload and results |
| Keyboard only | Browser keyboard | Skip link, tab order, visible focus, no traps |

These are planned test targets, not claims that the app has already been verified with each combination.

## Test execution and defect reporting

For each test record:
- Test ID and date.
- Build / commit SHA.
- Browser, OS, viewport, zoom, and assistive technology.
- Steps and expected result.
- Actual result and evidence.
- Severity and issue link.

Do not mark a test passed merely because an automated scanner reports zero violations.
