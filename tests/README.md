# Shared Test Resources

Use synthetic HTML, SRT, and WebVTT fixtures created specifically for this repository.

Test cases should include valid and invalid examples, boundary conditions, malformed input, and empty files. Do not commit copyrighted subtitle files or personal data.

## Automated browser-parser regression tests

The browser demo shares its SRT block parser through `subtitle-srt.js`. Run the focused Node.js tests from the repository root with:

```sh
node --test tests/*.test.js
```

The SRT fixtures cover timestamp formats and boundaries, numbered and unnumbered cues, multiline and empty text, missing timing lines, malformed timing syntax, and zero-length or reversed cue timing. These unit tests exercise the shared parser module; they do not replace end-to-end browser testing of the UI.


## Document language tag tests

The browser HTML checker uses `language-tag.js` to validate the syntax of the root document's `lang` value with the platform's `Intl.getCanonicalLocales()` implementation. The regression tests cover primary language tags, regional and script subtags, malformed values, whitespace and canonicalization.

This is a syntax-level check only. It does not verify that the declared language matches the actual page content or that a language subtag is recognized in the current BCP 47 registry. Those checks require further validation and, for content matching, human review.
