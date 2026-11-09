// KOMMENTOINTIOHJE / CODE MAP
// Tiedoston tarkoitus: Testit WebVTT-tekstitystiedostojen jäsentämiselle ja virhetilanteille.
// Rakenne: testien apufunktiot ja testidata ensin, yksittäiset testitapaukset seuraavaksi.

const test = require("node:test");
const assert = require("node:assert/strict");
const { webVttTimeMs, parseWebVttBlock } = require("../subtitle-vtt.js");

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("parses WebVTT timestamps with and without an hour field", () => {
  assert.equal(webVttTimeMs("01:02.345"), 62345);
  assert.equal(webVttTimeMs("01:02:03.456"), 3723456);
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("rejects SRT comma timestamps and out-of-range minute or second values", () => {
  assert.equal(webVttTimeMs("00:01,000"), null);
  assert.equal(webVttTimeMs("60:00.000"), null);
  assert.equal(webVttTimeMs("00:60.000"), null);
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("preserves cue identifiers, text and cue settings", () => {
  const parsed = parseWebVttBlock(
    "intro-card\n00:00:01.000 --> 00:00:04.000 line:90% position:50% align:center\nHello world",
    7
  );

  assert.equal(parsed.type, "cue");
  assert.equal(parsed.cue.identifier, "intro-card");
  assert.deepEqual(parsed.cue.settings, ["line:90%", "position:50%", "align:center"]);
  assert.equal(parsed.cue.body, "Hello world");
  assert.equal(parsed.cue.index, 7);
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("accepts cues without an identifier or settings", () => {
  const parsed = parseWebVttBlock("00:01.000 --> 00:02.000\nCaption", 1);
  assert.equal(parsed.type, "cue");
  assert.equal(parsed.cue.identifier, null);
  assert.deepEqual(parsed.cue.settings, []);
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("ignores file headers, NOTE comments, STYLE and REGION blocks", () => {
  for (const block of [
    "WEBVTT\nKind: captions\nLanguage: en",
    "NOTE this is a comment\nComment text",
    "STYLE\n::cue { color: white; }",
    "REGION\nid:bottom\nwidth:40%"
  ]) {
    assert.equal(parseWebVttBlock(block, 1).type, "ignored");
  }
});

// TESTIOSIO ALKAA: seuraava tapaus tarkistaa yhden toiminnallisuuden.
test("reports malformed cue blocks and invalid timestamp order", () => {
  assert.equal(parseWebVttBlock("orphan text", 1).reason, "missing-timing");
  assert.equal(parseWebVttBlock("00:02.000 --> 00:01.000\nBad", 2).reason, "invalid-timestamp");
});
