# Roadmap

## Phase 1 — Repository foundation
- [x] Create repository and initial documentation.
- [x] Define license and security guidance.
- [ ] Add contribution guidelines.
- [ ] Add CI workflows.

## Phase 2 — Accessibility Auditor (PHP)
- [ ] Set up PHP project and test runner.
- [ ] Define a consistent finding/report format.
- [ ] Accept HTML from a local file or pasted input.
- [ ] Check document title and language.
- [ ] Check image alternative text.
- [ ] Check heading hierarchy.
- [ ] Check form labels.
- [ ] Check empty links and buttons.
- [ ] Add synthetic fixtures and automated tests.

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

## Phase 5 — User interface and release
- [ ] Build a responsive interface.
- [ ] Add accessible result summaries and filters.
- [ ] Add report export.
- [ ] Document setup and usage in English and Finnish.
- [ ] Add screenshots and a first release.

## Out of scope for the first version
- Claims of complete WCAG conformance.
- Automatic correction of source websites.
- Remote URL scanning before SSRF protections are designed and tested.
- Cloud storage of uploaded files.
- User accounts before they are demonstrably needed.