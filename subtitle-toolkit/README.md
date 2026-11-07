# Subtitle Toolkit

Java module for validating and analyzing SRT and WebVTT subtitle files.

## First milestone
Implement parsers and validators using synthetic test files. Keep parsing separate from validation so both formats can share the same cue model.

## Planned checks
- Invalid or missing timestamps.
- Invalid cue ordering.
- Empty cue text.
- Overlapping cues.
- Unusually long lines.
- Basic duration and cue-count statistics.

The first version will report issues without silently modifying the user's subtitle file.

See the root roadmap at ../docs/ROADMAP.md.