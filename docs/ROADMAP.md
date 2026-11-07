# Project Roadmap & TODO

This is the working task list for the project. Work through tasks step by step.
Only mark an item as complete after the implementation or test has been verified.
Use these status conventions:

- [ ] TODO — not started or not yet verified
- [~] IN PROGRESS — currently being worked on
- [x] DONE — implemented and verified
- [!] BLOCKED — cannot proceed until a dependency is resolved

Last reviewed: 2026-11-07

## Current focus

- [x] Fix subtitle overlap detection in the browser demo so a cue is checked against all earlier cues that may still be active, not only the immediately preceding cue.
- [x] Add regression tests for nested and multiple subtitle overlaps (5 Node.js tests pass locally).
- [x] Verify that the GitHub Pages build and deployment workflow completed successfully for the latest browser-demo changes.
- [ ] Open the live demo and confirm in a browser that the deployed page loads the updated overlap detector and behaves correctly.

## Phase 1 — Repository foundation

- [x] Create repository and initial documentation.
- [x] Define license and security guidance.
- [x] Add inclusive accessibility test plan.
- [x] Add UI test plan and regression strategy.
- [x] Add bilingual accessibility, usability, inclusion and testing reference documentation.
- [ ] Add contribution guidelines.
- [ ] Review all README and documentation links for accuracy.
- [ ] Keep project scope, implementation status and roadmap consistent across documentation.

## Phase 2 — Browser demo: subtitle validation

- [x] Add browser-based SRT and WebVTT text validation.
- [x] Check basic timestamp syntax and invalid cue timing.
- [x] Check empty cue text.
- [x] Check cue ordering.
- [x] Check long subtitle lines.
- [x] Report cue count, overlaps and average duration.
- [x] Add example subtitle content and downloadable reports.
- [x] Fix overlap detection to compare each cue with every earlier cue whose end time is after the current cue's start time.
- [x] Add tests for one long cue overlapping several later cues.
- [x] Add tests for multiple simultaneous overlaps and out-of-order cues.
- [x] Review WebVTT-specific features and add parsing support/tests for cue identifiers, cue settings, NOTE, STYLE and REGION blocks. Cue settings are preserved, not yet semantically validated.
- [x] Add WebVTT timestamp and malformed-block regression fixtures (6 tests pass locally); broader SRT/browser-parser fixtures remain planned.
- [x] Clarify in Finnish and English that the 42-character line threshold is a heuristic, not a universal subtitle standard.
- [x] Run all 11 focused subtitle-overlap and WebVTT parser regression tests locally; all passed.
- [ ] Add automated regression tests for the browser parser and validator.

## Phase 3 — Browser demo: HTML accessibility checks

- [x] Check for a missing or empty document title.
- [x] Check for a missing document language declaration.
- [x] Check images without an alt attribute.
- [x] Check heading-level jumps.
- [x] Check form controls for detectable labels.
- [x] Check links and buttons for detectable accessible names.
- [ ] Validate language values, not only the presence of a lang attribute.
- [ ] Improve accessible-name calculation and ARIA reference validation.
- [ ] Add fixtures for labels, fieldsets, hidden text, SVGs, image links and ARIA naming.
- [ ] Review false positives and false negatives in each rule.
- [ ] Document the exact scope and limitations of every browser check.

## Phase 4 — Accessibility Auditor (PHP)

- [x] Set up PHP project and test runner.
- [x] Define a consistent finding/report format.
- [x] Implement initial title and language checks.
- [x] Implement image alternative-text checks.
- [x] Implement heading hierarchy checks.
- [x] Implement form-label and common ARIA naming-reference checks.
- [x] Implement detectable link and button accessible-name checks.
- [x] Add basic positive and negative regression tests.
- [ ] Improve accessible-name computation and ARIA validation.
- [ ] Add broader HTML fixtures and edge-case tests.
- [ ] Add rule metadata, severity rationale and references.
- [ ] Verify findings manually against browser accessibility trees and screen readers.
- [ ] Document PHP version and extension requirements and verify setup instructions.

## Phase 5 — Subtitle Toolkit (Java)

- [ ] Set up Java project and test runner.
- [ ] Define a shared subtitle cue model.
- [ ] Parse SRT files.
- [ ] Parse WebVTT files.
- [ ] Validate timestamps and cue ordering.
- [ ] Detect empty and overlapping cues.
- [ ] Report line-length and timing statistics.
- [ ] Add synthetic fixtures and automated tests.
- [ ] Document supported format features and known limitations.

## Phase 6 — SQL and integration

- [ ] Design a normalized SQLite schema.
- [ ] Add versioned SQL migrations.
- [ ] Persist scan metadata and findings.
- [ ] Keep original uploaded file contents out of the database by default.
- [ ] Define data retention and deletion behavior.
- [ ] Add integration tests.
- [ ] Review privacy and security implications before connecting components.

## Phase 7 — User interface, accessibility and quality assurance

- [x] Build the first semantic, responsive browser demo.
- [x] Add accessible result summaries and status announcements.
- [x] Add downloadable text report export.
- [x] Add Finnish and English interface text.
- [ ] Add Playwright functional and keyboard tests.
- [ ] Add axe-core automated scans for pages and dynamic states.
- [ ] Perform manual NVDA, VoiceOver and TalkBack checks.
- [ ] Test 200% text resize and 400% zoom / 320 CSS px reflow.
- [ ] Test text spacing, forced colors and reduced motion.
- [ ] Measure text and non-text contrast.
- [ ] Check keyboard focus visibility and focus order on desktop and mobile.
- [ ] Check mobile layouts at narrow viewport widths.
- [ ] Document actual test results, including date, build SHA, browser, operating system and assistive technology.
- [ ] Fix verified defects and rerun regression tests.

## Phase 8 — Security, privacy and release readiness

- [x] Add a security policy and responsible vulnerability-reporting guidance.
- [x] Explain local browser processing and warn against entering confidential data.
- [ ] Review all input parsing and output rendering for injection risks.
- [ ] Add and verify upload size and file-type safeguards in every relevant component.
- [ ] Review planned database access for parameterized queries.
- [ ] Design and test SSRF protections before any remote URL scanning is implemented.
- [ ] Review dependencies and GitHub Actions permissions.
- [ ] Complete accessibility and security release checklists.
- [ ] Verify GitHub Pages deployment and all public links.
- [ ] Document a reproducible local setup and test procedure.

## Phase 9 — Documentation and first release

- [ ] Document setup and usage in English and Finnish.
- [ ] Add screenshots of the current working features.
- [ ] Clearly distinguish implemented features from planned modules.
- [ ] Add a first versioned release after the release checklist is complete.
- [ ] Review the project information section and attribution on the live site.

## Out of scope for the first version

- Claims of complete WCAG conformance or certification.
- Automatic correction of source websites.
- Remote URL scanning before SSRF protections are designed and tested.
- Cloud storage of uploaded files.
- User accounts before they are demonstrably needed.

## Testing status and reporting rules

The browser UI, PHP command-line auditor and planned Java subtitle engine are separate components. A test in one component does not prove that another component works.

The UI test plan is a plan, not a test report. Do not mark Playwright, axe-core, NVDA, VoiceOver, TalkBack or manual visual checks as passed until they have actually been run and their results recorded.

When working through this roadmap:
1. Pick one task at a time.
2. Change [ ] to [~] when work begins.
3. Change [~] to [x] only after verification.
4. Record blockers with [!] and explain what is needed.
5. Update the date above when the roadmap is reviewed.
