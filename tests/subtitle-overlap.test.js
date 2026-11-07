const test = require("node:test");
const assert = require("node:assert/strict");
const { detectSubtitleOverlaps } = require("../subtitle-overlap.js");

const cue = (index, start, end) => ({ index, start, end });

test("detects a long cue overlapping multiple later cues", () => {
  const overlaps = detectSubtitleOverlaps([
    cue(1, 1000, 10000),
    cue(2, 2000, 3000),
    cue(3, 4000, 5000),
    cue(4, 6000, 7000)
  ]);

  assert.deepEqual(overlaps.map(({ first, second }) => [first.index, second.index]), [
    [1, 2], [1, 3], [1, 4]
  ]);
});

test("detects nested and simultaneous overlaps", () => {
  const overlaps = detectSubtitleOverlaps([
    cue(1, 0, 10000),
    cue(2, 1000, 9000),
    cue(3, 2000, 8000),
    cue(4, 3000, 7000)
  ]);

  assert.equal(overlaps.length, 6);
});

test("does not count cues that only touch at a boundary", () => {
  assert.equal(detectSubtitleOverlaps([
    cue(1, 0, 1000),
    cue(2, 1000, 2000)
  ]).length, 0);
});

test("finds overlaps even when input cues are out of chronological order", () => {
  const overlaps = detectSubtitleOverlaps([
    cue(1, 5000, 9000),
    cue(2, 1000, 7000),
    cue(3, 8000, 10000)
  ]);

  assert.deepEqual(overlaps.map(({ first, second }) => [first.index, second.index]), [
    [2, 1], [1, 3]
  ]);
});

test("reports exact overlap duration in milliseconds", () => {
  const overlaps = detectSubtitleOverlaps([
    cue(1, 1000, 4500),
    cue(2, 3000, 5000)
  ]);

  assert.equal(overlaps[0].duration, 1500);
});
