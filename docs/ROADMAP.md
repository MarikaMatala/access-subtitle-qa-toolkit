# Roadmap

## Phase 1 — Repository foundation
- [x] Create repository and initial documentation.
- [x] Define license and security guidance.
- [x] Add inclusive accessibility test plan.
- [x] Add UI test plan and regression strategy.
- [x] Add bilingual accessibility, usability, inclusion and testing reference documentation.
- [ ] Add contribution guidelines.

## Phase 2 — Accessibility Auditor (PHP)
- [x] Set up PHP project and test runner.
- [x] Define a consistent finding/report format.
- [x] Check document title and language.
- [x] Check image alternative text.
- [x] Check heading hierarchy.
- [x] Check form labels and common ARIA naming references.
- [x] Check links and buttons for detectable accessible names.
- [x] Add basic positive and negative regression tests.
- [ ] Improve accessible-name computation and ARIA validation.
- [ ] Add broader HTML fixtures and edge-case tests.
- [ ] Add manual verification of auditor findings against screen readers.

## Phase 3 — Subtitle Toolkit (Java)
- [ ] Set up Java project and test runner.
- [ ] Define a shared subtitle cue model.
- [ ] Parse SRT and WebVTT files.
- [ ] Validate timestamps and cue ordering.
- [ ] Detect empty and overlapping cues.
- [ ] Report line-length and timing statistics.
- [ ] Add synthetic fixtures and automated tests.

## Phase 4 — SQL and integration
- [ ] Design a normalized SQLite schema.
- [ ] Add versioned SQL migrations.
- [ ] Persist scan metadata and findings.
- [ ] Keep original uploaded file contents out of the database by default.
- [ ] Add integration tests.

## Phase 5 — User interface and testing
- [x] Build the first semantic, responsive browser demo.
- [x] Add accessible result summaries and status announcements.
- [x] Add downloadable text report export.
- [ ] Add Playwright functional and keyboard tests.
- [ ] Add axe-core automated scans for pages and dynamic states.
- [ ] Perform manual NVDA, VoiceOver, and TalkBack checks.
- [ ] Test 200% text resize, 400% zoom / 320 CSS px reflow, text spacing, forced colors, and reduced motion.
- [ ] Measure text and non-text contrast.
- [ ] Document test results and known limitations.

## Phase 6 — Release
- [ ] Document setup and usage in English and Finnish.
- [ ] Add screenshots and a first release.
- [ ] Complete accessibility release checklist.

## Out of scope for the first version
- Claims of complete WCAG conformance.
- Automatic correction of source websites.
- Remote URL scanning before SSRF protections are designed and tested.
- Cloud storage of uploaded files.
- User accounts before they are demonstrably needed.

## Current UI testing limitation

The first browser UI is implemented and published on GitHub Pages. It is a lightweight JavaScript demo, separate from the PHP CLI auditor and the planned Java subtitle engine. The test plan is ready, but Playwright / axe-core and assistive-technology tests must still be run against the live interface before any UI test can be reported as passing.
