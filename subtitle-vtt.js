// KOMMENTOINTIOHJE / CODE MAP
// Tiedoston tarkoitus: WebVTT-tekstitystiedostojen jäsentäminen ja validointi.
// Rakenne: asetukset ja tietorakenteet ensin, käsittelyfunktiot seuraavaksi, tapahtumat tai testit lopuksi.

/* Focused WebVTT block parser. SRT parsing remains in app.js. */
(function (root) {
  function webVttTimeMs(value) {
    const match = String(value).trim().match(/^(?:(\d{2,}):)?(\d{2}):(\d{2})\.(\d{3})$/);
    if (!match) return null;

    const hours = Number(match[1] || 0);
    const minutes = Number(match[2]);
    const seconds = Number(match[3]);
    const milliseconds = Number(match[4]);

    if (minutes > 59 || seconds > 59) return null;
    return ((hours * 3600 + minutes * 60 + seconds) * 1000) + milliseconds;
  }

  function parseWebVttBlock(block, cueIndex) {
    const trimmed = String(block).trim();
    if (!trimmed) return { type: "ignored" };

    // File header and metadata, NOTE comments, STYLE blocks and REGION blocks
    // are not subtitle cues and must not be reported as malformed cues.
    if (/^WEBVTT(?:\s|$)/i.test(trimmed) ||
        /^NOTE(?:\s|$)/.test(trimmed) ||
        /^STYLE\s*(?:\n|$)/.test(trimmed) ||
        /^REGION\s*(?:\n|$)/.test(trimmed)) {
      return { type: "ignored" };
    }

    const lines = trimmed.split("\n");
    const timingIndex = lines.findIndex(line => line.includes("-->"));
    if (timingIndex < 0) return { type: "malformed", reason: "missing-timing" };

    const timing = lines[timingIndex].match(/^\s*(\S+)\s+-->\s+(\S+)(?:\s+(.*))?$/);
    if (!timing) return { type: "malformed", reason: "invalid-timing-line" };

    const start = webVttTimeMs(timing[1]);
    const end = webVttTimeMs(timing[2]);
    if (start === null || end === null || end <= start) {
      return { type: "malformed", reason: "invalid-timestamp" };
    }

    return {
      type: "cue",
      cue: {
        start,
        end,
        body: lines.slice(timingIndex + 1).join("\n").trim(),
        index: cueIndex,
        identifier: lines.slice(0, timingIndex).join("\n").trim() || null,
        settings: (timing[3] || "").trim().split(/\s+/).filter(Boolean),
        lines: lines.slice(timingIndex + 1).join("\n").trim()
          ? lines.slice(timingIndex + 1).join("\n").trim().split("\n")
          : []
      }
    };
  }

  const api = { webVttTimeMs, parseWebVttBlock };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.webVttParser = api;
})(globalThis);
