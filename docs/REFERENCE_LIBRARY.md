# Accessibility, usability and inclusion reference library
# Saavutettavuuden, käytettävyyden ja yhdenvertaisuuden lähdekirjasto

**Last reviewed / Viimeksi tarkistettu:** 2026-11-07  
**Purpose / Tarkoitus:** A curated starting point for project requirements, design decisions, testing and further study. This is a reference index, not legal advice or a claim of compliance.

## How to use this library / Näin käytät lähdekirjastoa

- Start with legislation and the standards applicable to the service. A recommendation is not automatically a legal requirement.
- Map each implemented check to a specific WCAG success criterion or other source where possible.
- Record the source version and review date when adding a rule to the auditor.
- Combine automated checks with manual inspection, assistive-technology testing and testing with people who use the service.
- Do not copy large portions of third-party guidance. Link to the source and check its licence before reusing text, images or code.

- Aloita palveluun sovellettavasta lainsäädännöstä ja standardeista. Suositus ei automaattisesti ole lakisääteinen vaatimus.
- Yhdistä jokainen toteutettu tarkistus mahdollisuuksien mukaan WCAG-kriteeriin tai muuhun yksilöityyn lähteeseen.
- Kirjaa säännön lähdeversio ja tarkistuspäivä, kun lisäät sen auditoijaan.
- Yhdistä automaattiset tarkistukset manuaaliseen arviointiin, avustavien teknologioiden testaukseen ja palvelun käyttäjien testaamiseen.
- Älä kopioi laajoja osia muiden tuottamista ohjeista. Linkitä alkuperäiseen lähteeseen ja tarkista lisenssi ennen tekstin, kuvien tai koodin uudelleenkäyttöä.

## 1. Legislation and public-sector requirements / Lainsäädäntö ja julkisten palvelujen vaatimukset

| Source | What it is useful for | Scope note |
|---|---|---|
| [Act on the Provision of Digital Services 306/2019 (Finland)](https://www.finlex.fi/fi/laki/ajantasa/2019/20190306) | Finnish digital-service accessibility obligations, accessibility statement and feedback channel. | Check the current consolidated text and whether the service/provider is in scope. |
| [Non-Discrimination Act 1325/2014 (Finland)](https://www.finlex.fi/fi/laki/ajantasa/2014/20141325) | Equality, prohibition of discrimination and reasonable accommodation (including section 15). | Applies in its legally defined scope; assess the actual service and provider. |
| [Act on Accessibility Requirements for Certain Products and Services 102/2023](https://www.finlex.fi/fi/laki/alkup/2023/20230102) | Accessibility requirements for specified products and services; applicable requirements began to apply on 28 June 2025. | Does not mean every website or every feature is covered in the same way. Check scope, exceptions and transition rules. |
| [European Commission — Web Accessibility](https://digital-strategy.ec.europa.eu/en/policies/web-accessibility) | EU Web Accessibility Directive policy and harmonised standards information. | A published standard edition is not automatically a harmonised legal reference. Check the current Official Journal citation. |
| [W3C — Accessibility Laws and Policies](https://www.w3.org/WAI/policies/) | International overview and country-specific policy references. | Use the actual legislation for legal interpretation. |

**Project rule:** label findings as (a) a mapped technical standard failure, (b) a usability concern, (c) a possible equality/access-to-service concern requiring human assessment, or (d) a recommendation. The tool must not automatically declare that a provider has committed unlawful discrimination.

**Projektin sääntö:** luokittele havainnot erikseen teknisen standardin poikkeamiksi, käytettävyysongelmiksi, mahdollisiksi yhdenvertaisuuteen tai palveluun pääsyyn liittyviksi huoliksi, jotka vaativat ihmisen arviointia, sekä suosituksiksi. Työkalu ei saa automaattisesti julistaa palveluntarjoajaa syylliseksi lainvastaiseen syrjintään.

## 2. Technical accessibility standards / Teknisen saavutettavuuden standardit

| Source | Main use |
|---|---|
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Normative web-content accessibility success criteria. Use Level AA as this project's target baseline, while documenting applicable scope and exceptions. |
| [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) | Explanations and examples for individual success criteria. |
| [W3C WAI — How People with Disabilities Use the Web](https://www.w3.org/WAI/people-use-web/) | Understand varied access needs, barriers and assistive technologies. |
| [W3C WAI — Cognitive Accessibility](https://www.w3.org/WAI/cognitive/) | Cognitive and learning accessibility guidance that supplements WCAG. |
| [ETSI EN 301 549](https://www.etsi.org/standards) | ICT accessibility requirements, including web and software contexts. Verify the current edition and whether it is harmonised for the relevant EU legal instrument. |
| [MDN — Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) | Practical implementation guidance for semantic HTML, ARIA, keyboard interaction and browser behavior. |

WCAG is organised around four principles: perceivable, operable, understandable and robust. WCAG does not cover every aspect of inclusive service provision, and conformance cannot be established by a small automated scan alone.

WCAG perustuu neljään periaatteeseen: havaittavuus, hallittavuus, ymmärrettävyys ja toimintavarmuus. WCAG ei kata kaikkia osallistavan palvelun osa-alueita, eikä vaatimustenmukaisuutta voi todistaa pelkällä suppealla automaattisella skannauksella.

## 3. Human-centred design and usability / Ihmiskeskeinen suunnittelu ja käytettävyys

| Source | Main use |
|---|---|
| [ISO 9241-210:2019](https://www.iso.org/standard/77520.html) | Human-centred design process for interactive systems. The standard is copyrighted; consult the official publication for its requirements. |
| [GOV.UK Service Manual](https://www.gov.uk/service-manual) | Research, design, build and continuous improvement of public services. |
| [GOV.UK Design System](https://design-system.service.gov.uk/) | Reusable accessible components and interaction patterns. |
| [Nielsen Norman Group](https://www.nngroup.com/) | Usability research, heuristics, information architecture and user testing articles. Treat articles as professional guidance, not legislation. |
| [Microsoft Inclusive Design](https://inclusive.microsoft.design/) | Designing for a wide range of human abilities and contexts; useful inclusive-design exercises. |
| [Material Design — Accessibility](https://m3.material.io/foundations/accessible-design/overview) | Component and interface accessibility guidance. |
| [Apple Human Interface Guidelines — Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility) | Platform-specific accessible interaction and interface guidance. |

## 4. Plain language, reading and communication / Selkeä kieli, lukeminen ja viestintä

| Source | Main use |
|---|---|
| [Saavutettavasti.fi — Celia](https://www.saavutettavasti.fi/) | Finnish-language digital accessibility guidance, including clear communication. |
| [Selkokeskus — Selkokieli verkossa](https://selkokeskus.fi/selkokieli/selkokieli-verkossa/) | Easy-to-read Finnish and web content. Selkokieli is not the same as ordinary plain language. |
| [JOTPA — Saavutettava viestintä](https://www.jotpa.fi/fi/selkokieli/tyossa-oppiminen-sujuvaksi/vinkkeja-tyopaikoille/saavutettava-viestinta) | Practical guidance on understandable communication. |
| [Kielitoimiston ohjepankki](https://kielitoimistonohjepankki.fi/) | Finnish language, clarity and writing guidance. |

Practical baseline: use descriptive headings, short paragraphs, familiar words, active voice, explicit instructions, consistent terms and error messages that explain how to recover. Do not assume that a special font or a single reading mode works for everyone.

Käytännön perustaso: käytä kuvaavia otsikoita, lyhyitä kappaleita, tuttuja sanoja, aktiivimuotoa, täsmällisiä ohjeita, johdonmukaisia termejä ja virheilmoituksia, jotka kertovat miten tilanteesta pääsee eteenpäin. Älä oleta, että yksi erityinen fontti tai lukutila sopii kaikille.

## 5. Disability organisations and inclusive service provision / Vammaisjärjestöt ja yhdenvertainen palvelu

| Source | Main use |
|---|---|
| [Invalidiliitto](https://www.invalidiliitto.fi/) | Physical accessibility, accessible services, participation and accessibility mapping. |
| [Näkövammaisten liitto](https://www.nakovammaistenliitto.fi/) | Blind and low-vision perspectives and practical guidance. |
| [Kuuloliitto](https://www.kuuloliitto.fi/) | Hearing accessibility and communication. |
| [Kehitysvammaliitto](https://www.kehitysvammaliitto.fi/) | Intellectual disability, communication and easy-to-understand information. |
| [ADHD-liitto](https://adhd-liitto.fi/) | Attention-related needs and everyday support perspectives. |
| [Kulttuuria kaikille](https://www.kulttuuriakaikille.fi/) | Accessibility, diversity and inclusion in cultural services. |

Inclusive service provision also concerns the whole service journey: finding information, understanding eligibility, contacting the provider, booking, arriving, using the service, paying, receiving support and giving feedback. Where reasonable and relevant, consider alternative contact and information channels (web, phone, email, in-person service and accessible formats).

Osallistava palvelu koskee koko palvelupolkua: tiedon löytämistä, ehtojen ymmärtämistä, yhteydenottoa, varaamista, paikalle saapumista, palvelun käyttämistä, maksamista, tuen saamista ja palautteen antamista. Huomioi tilanteen mukaan vaihtoehtoiset yhteydenotto- ja tiedonsaantikanavat (verkko, puhelin, sähköposti, kasvokkainen palvelu ja saavutettavat aineistomuodot).

## 6. Source register metadata / Lähderekisterin metatiedot

When adding a source or translating guidance into a test rule, record:

- Title and publisher.
- Canonical URL.
- Source category: legislation, standard, official guidance, research, advocacy organisation or tool documentation.
- Relevant audience or access need.
- Related WCAG criterion or requirement, if applicable.
- Whether the source is normative, advisory or informative.
- Version / publication date and last-checked date.
- Licence or reuse terms, if content is copied or adapted.

Kun lisäät lähteen tai muutat ohjeen testisäännöksi, kirjaa:

- Otsikko ja julkaisija.
- Virallinen verkko-osoite.
- Lähteen tyyppi: laki, standardi, viranomaisohje, tutkimus, järjestö tai työkalun dokumentaatio.
- Kenelle tai mihin saavutettavuustarpeeseen lähde liittyy.
- Liittyvä WCAG-kriteeri tai vaatimus, jos sellainen on.
- Onko lähde velvoittava, suositteleva vai taustoittava.
- Versio / julkaisupäivä ja viimeisin tarkistuspäivä.
- Lisenssi tai uudelleenkäytön ehdot, jos sisältöä kopioidaan tai muokataan.
