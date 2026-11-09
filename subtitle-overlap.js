// CODE MAP / COMMENTING GUIDE
// File purpose: Checks for overlapping subtitle cues and timestamp conflicts.
// Structure: settings and data structures first, followed by processing functions, then events or tests.

/* Detect every positive-duration overlap between subtitle cues.
 * Cues use millisecond start/end values and retain their original cue index.
 * The sweep-line approach avoids comparing cues that have already ended.
 */
(function (root) {
  function detectSubtitleOverlaps(cues) {
    const ordered = [...cues].sort((a, b) => a.start - b.start || a.index - b.index);
    const active = [];
    const overlaps = [];

    for (const cue of ordered) {
      // A cue ending exactly when the next starts is not an overlap.
      for (let i = active.length - 1; i >= 0; i -= 1) {
        if (active[i].end <= cue.start) active.splice(i, 1);
      }

      for (const earlierCue of active) {
        overlaps.push({
          first: earlierCue,
          second: cue,
          duration: Math.min(earlierCue.end, cue.end) - Math.max(earlierCue.start, cue.start)
        });
      }

      active.push(cue);
    }

    return overlaps;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { detectSubtitleOverlaps };
  }
  root.detectSubtitleOverlaps = detectSubtitleOverlaps;
})(globalThis);
