/* Focused SRT block parser shared by the browser demo and Node.js regression tests. */
(function (root) {
  function subtitleTimeMs(value) {
    const match = String(value).trim().match(/^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{1,3})$/);
    if (!match) return null;

    const hours = Number(match[1] || 0);
    const minutes = Number(match[2]);
    const seconds = Number(match[3]);
    const milliseconds = Number(match[4].padEnd(3, "0"));

    if (minutes > 59 || seconds > 59) return null;
    return ((hours * 3600 + minutes * 60 + seconds) * 1000) + milliseconds;
  }

  function parseSrtBlock(block, cueIndex) {
    const trimmed = String(block).trim();
    if (!trimmed) return { type: "ignored" };

    const lines = trimmed.split("\n");
    const timingIndex = lines.findIndex(line => line.includes("-->"));
    if (timingIndex < 0) return { type: "malformed", reason: "missing-timing" };

    const timing = lines[timingIndex].match(/([^\s]+)\s+-->\s+([^\s]+)(?:\s+.*)?$/);
    if (!timing) return { type: "malformed", reason: "invalid-timing-line" };

    const start = subtitleTimeMs(timing[1]);
    const end = subtitleTimeMs(timing[2]);
    if (start === null || end === null || end <= start) {
      return { type: "malformed", reason: "invalid-timestamp" };
    }

    const body = lines.slice(timingIndex + 1).join("\n").trim();
    return {
      type: "cue",
      cue: {
        start,
        end,
        body,
        index: cueIndex,
        lines: body ? body.split("\n") : []
      }
    };
  }

  const api = { subtitleTimeMs, parseSrtBlock };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.srtParser = api;
})(globalThis);
