# Photosensitive Seizures, Light Sensitivity and Migraine Accessibility

This project should account for people with photosensitive epilepsy, light sensitivity, migraine and related sensory sensitivities. These considerations are part of inclusive design, not optional decoration.

## Design requirements

- Do not use flashing, strobing, rapid brightness changes, flicker effects or repeated high-contrast transitions.
- Avoid animated backgrounds, pulsing status indicators, blinking cursors added for decoration, rapidly moving elements and auto-playing motion.
- Do not make essential information depend on animation, colour alone, sound alone or a time-limited visual effect.
- Respect `prefers-reduced-motion`; provide a persistent in-product way to pause, stop or hide non-essential motion if motion is introduced.
- Avoid autoplaying video, animated previews and moving decorative content. Any media preview should be user-initiated and have clear playback controls.
- Keep the interface visually calm and predictable. Avoid sudden full-screen overlays, unexpected movement, intense saturation and unnecessary visual clutter.
- Provide readable text, adjustable zoom, adequate spacing and clear focus indicators. Do not assume that one dark theme or one contrast setting works for everyone.
- Consider offering a low-stimulation appearance: no decorative animation, subdued non-essential decoration, stable layout and user-adjustable contrast/brightness where feasible. Do not reduce text contrast to achieve a subdued appearance.
- Ensure errors and status changes are communicated in text and are not indicated only by flashing, colour or movement.

## Epilepsy and flashing content

WCAG 2.2 Success Criterion 2.3.1 (Three Flashes or Below Threshold) is a minimum safety requirement, not a target to design up to. The safest default for this project is to avoid flashing content entirely. Do not add content that flashes more than three times in any one-second period, and do not rely on a threshold calculation as permission to add decorative flashing.

If user-generated or imported media is ever previewed, do not autoplay it. Explain that the toolkit does not currently perform a complete photosensitive seizure risk analysis of video or animation unless such a feature is specifically implemented and validated.

## Migraine and light sensitivity

- Avoid large areas of pure white or highly saturated colour and abrupt changes between very bright and very dark screens.
- Provide comfortable line length, typography, spacing and clear hierarchy.
- Keep visual effects subtle and static by default.
- Avoid parallax, zooming, auto-scrolling and motion that follows pointer movement.
- Do not force users to use a dark theme; if themes are added, offer calm light and dark options and preserve user choice.
- Keep controls for reducing motion and visual stimulation easy to find and persistent.

## Testing checklist

- [ ] Confirm no flashing or strobing content exists in the interface.
- [ ] Inspect all transitions, hover/focus effects, loading indicators and status feedback for flicker or unexpected movement.
- [ ] Verify `prefers-reduced-motion: reduce` disables non-essential motion and smooth scrolling.
- [ ] Verify there is no autoplaying animation, video or moving preview.
- [ ] Test at different zoom levels and narrow viewport widths without introducing horizontal scrolling.
- [ ] Review both themes, if offered, for glare, contrast and readability; do not assume dark mode is universally preferable.
- [ ] Ensure any future motion/media controls are keyboard accessible, labelled and persistent.
- [ ] Document the tested browser, operating system, date and any limitations.

## Scope and safety note

These design measures reduce avoidable sensory triggers but cannot guarantee that a website is safe for every person or prevent migraine or seizures. Automated accessibility tools cannot certify photosensitive safety. Include manual review and user testing, and avoid medical or safety guarantees.

## References

- W3C, WCAG 2.2 — 2.3.1 Three Flashes or Below Threshold: https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html
- W3C, WCAG 2.2 — 2.3.3 Animation from Interactions (Level AAA): https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- W3C, Understanding Success Criterion 2.2.2 Pause, Stop, Hide: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
- W3C, prefers-reduced-motion media query technique: https://www.w3.org/WAI/WCAG22/Techniques/css/C39
