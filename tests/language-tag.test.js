const test = require("node:test");
const assert = require("node:assert/strict");
const { validateLanguageTag } = require("../language-tag.js");

test("accepts common primary language tags", () => {
  assert.equal(validateLanguageTag("en").valid, true);
  assert.equal(validateLanguageTag("fi").valid, true);
});

test("accepts well-formed regional and script subtags", () => {
  assert.equal(validateLanguageTag("en-GB").valid, true);
  assert.equal(validateLanguageTag("zh-Hant").valid, true);
  assert.equal(validateLanguageTag("sr-Latn-RS").valid, true);
});

test("rejects empty, whitespace-padded and malformed language tags", () => {
  for (const value of ["", " ", " en ", "en_US", "english language", "en--GB", "123", "en-"]) {
    assert.equal(validateLanguageTag(value).valid, false, JSON.stringify(value));
  }
});

test("returns a canonical language tag without changing the original input", () => {
  const result = validateLanguageTag("EN-us");
  assert.equal(result.valid, true);
  assert.equal(result.canonical, "en-US");
});
