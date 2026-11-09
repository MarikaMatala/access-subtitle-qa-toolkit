// KOMMENTOINTIOHJE / CODE MAP
// Tiedoston tarkoitus: Testit SRT-tekstitystiedostojen jäsentämiselle ja virhetilanteille.
// Rakenne: testien apufunktiot ja testidata ensin, yksittäiset testitapaukset seuraavaksi.

const test = require("node:test");
const assert = require("node:assert/strict");
const { subtitleTimeMs, parseSrtBlock } = require("../subtitle-srt.js");

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("parses SRT timestamps with comma or dot and optional hours", () => {
  assert.equal(subtitleTimeMs("00:00:01,250"), 1250);
  assert.equal(subtitleTimeMs("00:01.25"), 1250);
  assert.equal(subtitleTimeMs("01:02:03.456"), 3723456);
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("rejects malformed timestamps and out-of-range minute or second values", () => {
  for (const value of ["", "00:01", "00:60.000", "00:00:60,000", "00:00:01.1234", "00:00:01.000x"]) {
    assert.equal(subtitleTimeMs(value), null, value);
  }
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("parses a numbered cue and preserves multiline subtitle text", () => {
  const parsed = parseSrtBlock("12\n00:00:01,000 --> 00:00:03,500\nFirst line\nSecond line", 4);
  assert.equal(parsed.type, "cue");
  assert.equal(parsed.cue.index, 4);
  assert.equal(parsed.cue.start, 1000);
  assert.equal(parsed.cue.end, 3500);
  assert.equal(parsed.cue.body, "First line\nSecond line");
  assert.deepEqual(parsed.cue.lines, ["First line", "Second line"]);
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("accepts a cue without a numeric sequence identifier", () => {
  const parsed = parseSrtBlock("00:00:01,000 --> 00:00:02,000\nCaption", 1);
  assert.equal(parsed.type, "cue");
  assert.equal(parsed.cue.body, "Caption");
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("reports missing timing and invalid timing lines", () => {
  assert.equal(parseSrtBlock("orphan text", 1).reason, "missing-timing");
  assert.equal(parseSrtBlock("00:01,000 -->\nCaption", 2).reason, "invalid-timing-line");
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("rejects zero-length and reversed cues", () => {
  assert.equal(parseSrtBlock("00:00:02,000 --> 00:00:02,000\nBad", 1).reason, "invalid-timestamp");
  assert.equal(parseSrtBlock("00:00:03,000 --> 00:00:01,000\nBad", 2).reason, "invalid-timestamp");
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("accepts empty cue text for the validator to report separately", () => {
  const parsed = parseSrtBlock("00:00:01,000 --> 00:00:02,000", 3);
  assert.equal(parsed.type, "cue");
  assert.equal(parsed.cue.body, "");
  assert.deepEqual(parsed.cue.lines, []);
});
