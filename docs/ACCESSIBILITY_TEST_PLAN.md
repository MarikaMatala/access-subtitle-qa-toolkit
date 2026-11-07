# Inclusive Accessibility Test Plan

## Purpose and scope

This plan defines how the project itself must be tested and how the Accessibility Auditor should be evaluated. It covers people with blindness, low vision and eye conditions, color-vision differences, dyslexia and other reading or learning differences, cognitive disabilities, hearing differences, motor disabilities, and people using assistive technology.

The target baseline is WCAG 2.2 Level AA, with selected usability improvements beyond the minimum where practical. WCAG conformance is assessed against the complete applicable criteria; a small automated scan must never be described as certification.

## Testing principles

1. Test with automation, manual inspection, assistive technologies, and (when possible) people with lived experience.
2. Do not infer a person's needs from a diagnosis. Offer flexible presentation and input options.
3. Never use color, shape, position, sound, or animation as the only way to communicate meaning.
4. Do not force a particular font, color theme, reading mode, or input method.
5. Record browser, operating system, assistive technology, viewport, zoom, test date, result, and reproduction steps.
6. Treat automated results as evidence for specific checks, not as proof of overall accessibility.

## Test groups and acceptance criteria

### 1. Blindness and screen-reader use

Test with keyboard-only navigation and screen readers such as NVDA with Firefox/Chrome, VoiceOver with Safari, and TalkBack with Chrome on Android.

- Page has a meaningful document title and declared language.
- Landmarks, headings, lists, tables, and form controls use semantic HTML.
- Heading levels communicate a meaningful hierarchy.
- Every form control has a programmatically associated label and instructions.
- Links and buttons have clear accessible names and distinguishable purposes.
- Images have appropriate text alternatives; decorative images use empty alt text.
- Icon-only controls have accessible names.
- Focus order follows the meaningful reading and interaction order.
- Dynamic status and validation messages are announced without unexpectedly moving focus.
- Dialogs manage focus, have a name, and return focus to the invoking control when closed.
- No information or action is available only visually or only by pointer.

Manual checks: navigate by landmarks, headings, links, form controls, and reading order; complete the main task without looking at the screen.

### 2. Low vision, eye conditions, and magnification

Include users who need larger text, high contrast, screen magnification, reduced glare, or browser-level presentation overrides.

- Normal text contrast is at least 4.5:1; large text contrast is at least 3:1 (WCAG 1.4.3).
- Essential non-text controls and graphical indicators have at least 3:1 contrast against adjacent colors (WCAG 1.4.11).
- Text can be resized to 200% without loss of content or functionality (WCAG 1.4.4).
- At a 320 CSS-pixel viewport / 400% zoom equivalent, ordinary content reflows without two-dimensional scrolling (WCAG 1.4.10), except for content that genuinely requires two-dimensional layout.
- Content remains usable with increased text spacing (WCAG 1.4.12).
- Focus indicators are clearly visible and not hidden by sticky headers, dialogs, or overlays.
- Layout does not rely on tiny text, thin low-contrast icons, or hover-only discovery.
- Users can zoom; do not disable pinch zoom or set restrictive viewport scaling.

Manual checks: browser zoom 200% and 400%; 320 CSS px viewport; operating-system high contrast / forced-colors mode; text-spacing override.

### 3. Color-vision differences

- Color is never the only means of conveying errors, success, selection, status, or chart meaning.
- Pair color with text, icons, patterns, borders, or another non-color cue.
- Status indicators remain understandable in grayscale and common color-vision simulations.
- Focus, selected, disabled, and error states remain distinguishable.

Manual checks: grayscale view and color-vision simulation as supplementary checks; verify every status has a text label.

### 4. Dyslexia and reading / learning differences

Do not assume one font or presentation works for everyone. Prioritize clear content and user control.

- Use plain, literal language and explain technical terms.
- Prefer short paragraphs, descriptive headings, concise labels, and step-by-step instructions.
- Use left-aligned text for long passages; avoid justified text and long all-caps passages.
- Avoid unnecessarily long line lengths and dense blocks of text.
- Keep navigation, terminology, button labels, and page structure consistent.
- Do not make instructions depend on color, memory, or information shown only on a previous screen.
- Let users enlarge text and adjust spacing using browser settings.
- Avoid auto-advancing content, unnecessary time limits, flashing, and distracting motion.
- Where practical, allow content to be copied and used with browser reading and text-to-speech tools.
- If a reading-friendly mode or font option is offered, make it optional and preserve user choice.

Manual checks: complete common tasks using only visible instructions; ask whether labels, error messages, and instructions are understandable; test with text-to-speech.

### 5. Cognitive accessibility, attention, and memory

- Keep page structure and navigation predictable.
- Make the primary action easy to identify.
- Break complex tasks into manageable steps and show progress where useful.
- Provide clear instructions before input, not only after an error.
- Preserve entered data after recoverable validation errors.
- Explain errors in text and identify the field that needs attention.
- Avoid unexpected context changes, unnecessary interruptions, and avoidable timeouts.
- Provide confirmation before destructive or irreversible actions.
- Use consistent terms and avoid ambiguous icon-only actions.

### 6. Motor and mobility access

- All functionality works using keyboard alone.
- No keyboard trap exists; users can enter and leave every component.
- Focus order is logical and focus is visible.
- Pointer targets meet WCAG 2.2 AA minimum target-size requirements (24 by 24 CSS px or applicable spacing / exception); aim for 44 by 44 CSS px for comfortable use where practical.
- Dragging has a single-pointer alternative.
- Avoid requiring precise pointer movement, multi-finger gestures, or rapid repeated actions.
- Controls have enough spacing and can be activated without accidental neighboring clicks.

### 7. Hearing and multimedia

- Audio-only information has an equivalent text alternative.
- Video with meaningful audio has captions; prerecorded video may also need audio description depending on content.
- Important audio alerts have a visual equivalent.
- Audio does not autoplay unexpectedly; users can pause or control it.

### 8. Photosensitivity and motion sensitivity

- No content flashes more than three times per second unless it is below applicable flash thresholds.
- Respect the prefers-reduced-motion user preference.
- Avoid parallax, autoplay animation, and continuous movement unless essential.
- Provide pause, stop, or hide controls for moving content where required.
- Motion is never the only indication of state or progress.

## Project-specific checks

### Accessibility Auditor
- Use synthetic fixtures with known expected findings.
- Verify that findings identify the element, severity, rationale, and remediation.
- Check both positive and negative cases to reduce false positives.
- Verify that the report itself is semantic, keyboard-operable, and screen-reader understandable once the UI exists.
- Clearly label checks that need human review.

### Subtitle Toolkit
- The file upload and results UI must be keyboard-operable and screen-reader understandable.
- Validation errors must identify the file, cue number or timestamp, and correction needed.
- Do not communicate severity by color alone.
- Make long reports searchable, filterable, and navigable by headings.
- Do not autoplay subtitle previews; provide pause and keyboard controls.

## Defect severity

- Blocker: core task cannot be completed with keyboard or assistive technology; content is unavailable to a major user group.
- Critical: serious barrier with no reasonable workaround, such as keyboard trap or unlabeled primary controls.
- Major: significant difficulty, such as unreadable contrast, lost focus, or inaccessible validation feedback.
- Minor: inconvenience with an available workaround.
- Enhancement: improvement beyond the current baseline.

## Exit criteria for a release

- No known blocker or critical accessibility defects in core flows.
- Automated checks run in CI and results are reviewed, not blindly suppressed.
- Keyboard-only tests pass for all core flows.
- Manual screen-reader checks are recorded for supported platforms.
- 200% text resize and 400% zoom / 320 CSS px reflow checks pass.
- Text and non-text contrast are measured for the final design.
- Text-spacing, reduced-motion, and forced-colors checks are recorded.
- Open issues and limitations are documented in the release notes.
