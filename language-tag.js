// KOMMENTOINTIOHJE / CODE MAP
// Tiedoston tarkoitus: Kielen ja kielitunnisteiden tunnistaminen sekä validointi.
// Rakenne: asetukset ja tietorakenteet ensin, käsittelyfunktiot seuraavaksi, tapahtumat tai testit lopuksi.

/* Syntax-level validation for BCP 47 language tags.
 * Intl.getCanonicalLocales validates tag structure; it does not prove that
 * the tag matches the actual language of the page content.
 */
(function (root) {
  function validateLanguageTag(value) {
    const raw = String(value ?? "");
    if (!raw || raw !== raw.trim()) {
      return { valid: false, reason: "empty-or-whitespace" };
    }

    if (typeof Intl === "undefined" || typeof Intl.getCanonicalLocales !== "function") {
      return { valid: null, reason: "intl-unavailable" };
    }

    try {
      const canonical = Intl.getCanonicalLocales(raw);
      return canonical.length === 1
        ? { valid: true, canonical: canonical[0] }
        : { valid: false, reason: "invalid-tag" };
    } catch {
      return { valid: false, reason: "invalid-tag" };
    }
  }

  const api = { validateLanguageTag };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.languageTagValidator = api;
})(globalThis);
