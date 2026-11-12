# Access & Subtitle QA Toolkit — TODO

Internal development checklist; not shown in the published browser demo.

## High priority
- [ ] Run existing PHP, JavaScript and other available tests; document module coverage.
- [ ] Verify the GitHub Pages demo against current source files.
- [ ] Update the README last-updated information only after a verified change.
- [ ] Clearly distinguish the browser demo, PHP CLI auditor and Java subtitle module.
- [ ] Ensure automated findings explain limitations and do not claim full WCAG conformance.

## Accessibility auditor
- [ ] Review PHP checks against relevant WCAG 2.2 AA criteria and document the mapping.
- [ ] Add regression cases for valid markup, invalid markup, edge cases and false positives.
- [ ] Review ARIA, hidden content, SVG, form controls and accessible names.
- [ ] Explain which checks require manual review or assistive-technology testing.
- [ ] Check output escaping and safe handling of untrusted HTML.

## Subtitle toolkit
- [ ] Verify SRT and WebVTT parsing against valid, malformed and edge-case files.
- [ ] Test timestamp ordering, overlaps, empty cues, duration, long lines and unusual characters.
- [ ] Document language, encoding and format limitations.
- [ ] Clarify which checks run in the browser and which belong to the Java module.

## Browser demo and maintenance
- [ ] Test keyboard operation, focus, labels, status announcements and responsive layouts.
- [ ] Check Finnish and English text consistency.
- [ ] Verify selected files are processed locally and not uploaded.
- [ ] Review reports for clear findings, severity and remediation guidance.
- [ ] Review SOURCES.md, THIRD_PARTY_LICENSES.md, privacy and security statements against actual implementation.
- [ ] Add CI checks for modules that can be tested automatically.