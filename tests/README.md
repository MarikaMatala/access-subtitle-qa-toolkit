# Shared Test Resources

Use synthetic HTML, SRT, and WebVTT fixtures created specifically for this repository.

Test cases should include valid and invalid examples, boundary conditions, malformed input, and empty files. Do not commit copyrighted subtitle files or personal data.

## Automated browser-parser regression tests

The browser demo shares its SRT block parser through `subtitle-srt.js`. Run the focused Node.js tests from the repository root with:

```sh
node --test tests/*.test.js
```

The SRT fixtures cover timestamp formats and boundaries, numbered and unnumbered cues, multiline and empty text, missing timing lines, malformed timing syntax, and zero-length or reversed cue timing. These unit tests exercise the shared parser module; they do not replace end-to-end browser testing of the UI.
