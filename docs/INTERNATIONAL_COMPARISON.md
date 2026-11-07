# International Accessibility Laws and Standards: Comparison
# Kansainväliset saavutettavuuslait ja standardit: vertailu

**Last checked / Tarkistettu:** 2026-11-07  
**Purpose / Tarkoitus:** A practical comparison of selected jurisdictions. This is not a complete global legal survey and is not legal advice. Always verify the current consolidated law, local regulations, scope, exemptions and enforcement guidance before using a rule for a real service.

## 1. Why country-by-country research matters / Miksi maakohtainen tarkastelu on tärkeää

There is no single worldwide accessibility law. WCAG is an international technical standard, but each country or region decides how it is referenced, which organisations and services are covered, what conformance level is required, what exceptions apply, and how complaints or enforcement work.

Maailmassa ei ole yhtä kaikissa maissa samalla tavalla sovellettavaa saavutettavuuslakia. WCAG on kansainvälinen tekninen standardi, mutta kukin maa tai alue määrittelee, miten siihen viitataan, mitä organisaatioita ja palveluja velvoitteet koskevat, mitä vaatimustasoa edellytetään, millaisia poikkeuksia sovelletaan ja miten valvonta tai kantelut toimivat.

**Important distinction / Tärkeä ero:**
- **Law / laki:** legally binding obligations within its jurisdiction and scope.
- **Technical standard / tekninen standardi:** measurable requirements; it becomes legally decisive only as specified by the relevant law or regulation.
- **Guidance / ohjeistus:** helps interpret and implement duties but is not automatically binding law.
- **Good practice / hyvä käytäntö:** may improve inclusion beyond the legal minimum.

## 2. Selected jurisdictions / Valitut maat ja alueet

| Jurisdiction | Main legal / policy framework | Technical reference and practical distinction |
|---|---|---|
| **European Union (EU)** | Web Accessibility Directive (WAD) for public-sector websites and mobile apps; European Accessibility Act (EAA) for specified products and services, with national implementation. | EN 301 549 is the ICT standard used in the EU framework. Do not assume every private website is covered by WAD. EAA applies to defined products/services and has scope rules and exemptions. Member States can have national details and enforcement routes. |
| **Finland** | Act on the Provision of Digital Services 306/2019; Non-Discrimination Act 1325/2014; Act 102/2023 implementing accessibility requirements for certain products and services. | Finnish law has its own scope, supervisory arrangements, accessibility statement and feedback requirements. The Non-Discrimination Act and reasonable accommodation analysis are broader than a technical website scan. |
| **United Kingdom** | Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018; Equality Act 2010 in Great Britain; Disability Discrimination Act 1995 in Northern Ireland. | Public bodies must meet accessibility requirements and publish an accessibility statement. Service providers also have reasonable-adjustment duties under equality law. UK guidance currently refers to the latest published WCAG version; verify the relevant national guidance and current requirements. |
| **United States** | Americans with Disabilities Act (ADA); Section 508 of the Rehabilitation Act for covered federal ICT; 2024 DOJ Title II web/mobile rule for state and local government entities. | The 2024 Title II rule specifies WCAG 2.1 AA for state/local government web content and apps, with phased compliance dates. Section 508 applies to federal agencies and covered ICT/procurement. ADA Title III applies to public accommodations, but there is not one identical detailed federal WCAG rule for every private website; legal analysis depends on the ADA and applicable case law/regulations. |
| **Canada** | Accessible Canada Act (federal jurisdiction) and provincial/territorial accessibility laws, including Ontario's Accessibility for Ontarians with Disabilities Act (AODA). | Accessibility Standards Canada has adopted CAN/ASC-EN 301 549:2024, based on EN 301 549:2021. It is a national standard/model reference; do not assume that adoption alone makes it a universal mandatory rule for every Canadian organisation. Check federal vs provincial/territorial coverage and standards adopted in each jurisdiction. |
| **Australia** | Disability Discrimination Act 1992 (DDA), covering disability discrimination in defined areas including goods and services; government policies and procurement requirements also matter. | Australian Human Rights Commission guidance recommends WCAG 2.2 AA as a minimum baseline and discusses AS EN 301 549:2024 for broader ICT. The DDA is a general anti-discrimination law, not simply a website checklist. Reasonable steps and actual equal access matter. |
| **Germany** | Behindertengleichstellungsgesetz (BGG), BITV 2.0 for federal public-sector digital accessibility, and the Barrierefreiheitsstärkungsgesetz (BFSG) for specified products and services. | Germany implements EU obligations through national legislation and has additional federal rules. BITV 2.0 concerns public-sector information technology; BFSG applies to specified consumer products/services, not every digital service without exception. Länder may have their own public-sector rules. |
| **Japan** | Act for Eliminating Discrimination against Persons with Disabilities and national JIS accessibility standards, notably JIS X 8341-3 for web content. | JIS X 8341-3:2016 is Japan's national web-content standard, based on WCAG 2.0-era criteria. Government websites publish conformance policies and test results using Japanese conventions. Check current JIS revisions and the applicable legal duties; do not label JIS and WCAG 2.2 as identical. |
| **International baseline** | UN Convention on the Rights of Persons with Disabilities (CRPD), especially Articles 9 (accessibility) and 21 (access to information and communication). | A treaty obligation for States Parties, implemented through national law and policy. It is not a direct replacement for each country's detailed technical standard. WCAG is the common international web benchmark, not a complete equality/service-access framework. |

## 3. What differs in practice? / Mitä erot tarkoittavat käytännössä?

### A. Who is covered? / Keitä velvoitteet koskevat?
- EU WAD and many national digital-accessibility rules focus primarily on public-sector bodies. The EAA separately covers defined product and service categories, including some private-sector services.
- The UK public-sector regulations are distinct from the wider reasonable-adjustment duties under equality legislation.
- US Section 508 is federal ICT-specific; ADA Title II concerns state/local government, while Title III concerns public accommodations. The 2024 Title II rule gives a specific WCAG 2.1 AA technical benchmark for state/local government web and mobile content.
- Canada's requirements are distributed across federal and provincial/territorial frameworks.
- Australia's DDA is a broad anti-discrimination framework for services; WCAG is a recognised technical benchmark and guidance, not the entire law.
- Japan combines general anti-discrimination duties with national JIS standards and government implementation/testing practices.

### B. Which WCAG version? / Mitä WCAG-versiota käytetään?
Do not store one global field such as `legally_required_wcag = 2.2`. Store jurisdiction, service type, organisation type, legal instrument, technical standard/version, conformance level, effective/compliance date, exemptions and source date separately.

**EU standards update — important 2026 note:** EN 301 549 v4.1.1 was published in September 2026 and updates the standard to use WCAG 2.2 for relevant web/software/document requirements. The AccessibleEU update reported on 7 September 2026 that v4.1.1 had not yet been cited in the EU Official Journal as a harmonised standard for WAD/EAA. Until formal citation, the legal presumption-of-conformity reference remains the harmonised v3.2.1. Check the Official Journal immediately before making a compliance claim: publication of a new standard and legal harmonisation are separate events.

**EU:n standardipäivitys — tärkeä huomio vuonna 2026:** EN 301 549 v4.1.1 julkaistiin syyskuussa 2026 ja se päivittää standardin verkkosisältöön, ohjelmistoihin ja dokumentteihin liittyviä vaatimuksia WCAG 2.2:n suuntaan. AccessibleEU:n 7.9.2026 julkaiseman tiedon mukaan v4.1.1:tä ei ollut vielä tuolloin viitattu EU:n virallisessa lehdessä WAD/EAA-direktiivien harmonisoituna standardina. Ennen virallista viittausta vaatimustenmukaisuuden olettaman antava harmonisoitu viite oli v3.2.1. Tarkista EU:n virallinen lehti ennen vaatimustenmukaisuusväitettä: uuden standardin julkaiseminen ja sen oikeudellinen harmonisointi ovat eri asioita.

### C. What is outside WCAG? / Mitä WCAG ei yksin kata?
National laws and service duties may require more than a web-page checklist: reasonable accommodation, accessible customer support, procurement, hardware, software, documents, kiosks, telecommunications, captions, accessible formats, complaint handling and public reporting. EN 301 549 is broader than WCAG web criteria because it also addresses non-web ICT and support documentation.

Kansalliset lait ja palveluvelvoitteet voivat edellyttää muutakin kuin verkkosivun tarkistuslistaa: kohtuullisia mukautuksia, saavutettavaa asiakastukea, hankintoja, laitteita, ohjelmistoja, asiakirjoja, itsepalvelupäätteitä, tietoliikennettä, tekstityksiä, vaihtoehtoisia aineistomuotoja, palautteiden käsittelyä ja julkista raportointia. EN 301 549 on WCAG:n verkkokriteerejä laajempi, sillä se käsittelee myös muita ICT-tuotteita ja -palveluja sekä tukidokumentaatiota.

### D. Equality and accommodation / Yhdenvertaisuus ja mukautukset
A website can pass automated WCAG checks while the service still excludes someone because the only support channel is inaccessible, a booking process is phone-only, a user cannot request an accommodation, or essential information is unavailable in an appropriate format. These require human and service-level assessment.

Verkkosivusto voi läpäistä automaattiset WCAG-tarkistukset, vaikka palvelu silti sulkisi jonkun ulkopuolelle esimerkiksi siksi, että ainoa tukikanava ei ole saavutettava, ajanvaraus onnistuu vain puhelimitse, mukautusta ei voi pyytää tai olennainen tieto ei ole saatavilla sopivassa muodossa. Nämä vaativat ihmisen tekemää palvelutason arviointia.

## 4. Recommended data model for this project / Suositeltu tietomalli projektille

For each rule, keep these fields separate:

| Field | Example |
|---|---|
| `jurisdiction` | EU / Finland / United States / Ontario |
| `organisation_scope` | public sector / federal agency / private service / specified consumer service |
| `service_scope` | website / mobile app / ICT product / banking / e-commerce / customer support |
| `legal_instrument` | WAD / EAA / ADA Title II / Section 508 / DDA |
| `technical_standard` | WCAG / EN 301 549 / JIS X 8341-3 |
| `standard_version` | 2.1 / 2.2 / v3.2.1 / v4.1.1 / 2016 |
| `conformance_level` | A / AA / AAA / standard-specific |
| `legal_status` | binding / harmonised presumption / adopted model standard / guidance / recommendation |
| `effective_date` | date the requirement applies |
| `exceptions` | documented statutory exceptions or exclusions |
| `source_url` | primary legal or standards source |
| `last_verified` | date checked |

This enables the toolkit to report **“potential requirement to verify for this jurisdiction and service type”** instead of incorrectly asserting that one WCAG version or law applies to every site worldwide.

Näin työkalu voi ilmoittaa **"tarkista mahdollinen vaatimus tässä maassa ja tämän tyyppisessä palvelussa"** sen sijaan, että se väittäisi virheellisesti yhden WCAG-version tai lain koskevan kaikkia verkkosivustoja maailmanlaajuisesti.

## 5. Primary sources by jurisdiction / Ensisijaiset lähteet maittain

### International and European Union
- [UN Convention on the Rights of Persons with Disabilities](https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities)
- [W3C — Web Accessibility Laws and Policies](https://www.w3.org/WAI/policies/)
- [European Commission — Web Accessibility Directive](https://digital-strategy.ec.europa.eu/en/policies/web-accessibility)
- [European Commission — EN 301 549 harmonisation status](https://digital-strategy.ec.europa.eu/en/policies/web-accessibility-directive-standards-and-harmonisation)
- [AccessibleEU — EN 301 549 v4.1.1 update (7 September 2026)](https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en)

### Finland
- [Act on the Provision of Digital Services 306/2019](https://www.finlex.fi/fi/laki/ajantasa/2019/20190306)
- [Non-Discrimination Act 1325/2014](https://www.finlex.fi/fi/laki/ajantasa/2014/20141325)
- [Act 102/2023 on accessibility requirements for certain products and services](https://www.finlex.fi/fi/laki/alkup/2023/20230102)

### United Kingdom
- [Public Sector Bodies Accessibility Regulations — GOV.UK](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)
- [Equality Act 2010](https://www.legislation.gov.uk/ukpga/2010/15/contents)
- [Northern Ireland — Disability Discrimination Act 1995](https://www.legislation.gov.uk/ukpga/1995/50/contents)

### United States
- [ADA.gov — Web Accessibility Guidance](https://www.ada.gov/resources/web-guidance/)
- [ADA.gov — 2024 Title II Web Rule](https://www.ada.gov/resources/2024-03-08-web-rule/)
- [Section508.gov — Laws and Policies](https://www.section508.gov/manage/laws-and-policies/)
- [U.S. Access Board — ICT Standards](https://www.access-board.gov/ict/)

### Canada
- [Accessible Canada Act](https://laws-lois.justice.gc.ca/eng/acts/A-0.6/)
- [Accessibility Standards Canada — CAN/ASC-EN 301 549:2024](https://accessible.canada.ca/standards-and-technical-guides/standards-and-technical-guides-database/can-asc-en-301-5492024-accessibility-requirements-ict-products-and-services-en-301-5492021-idt)
- [Ontario — Accessibility for Ontarians with Disabilities Act](https://www.ontario.ca/laws/statute/05a11)

### Australia
- [Disability Discrimination Act 1992](https://www.legislation.gov.au/C2004A04426/latest)
- [Australian Human Rights Commission — Guidelines on equal access to digital goods and services](https://humanrights.gov.au/resource-hub/by-resource-type/guidelines-and-standards/guides-and-standards-disability-rights/guidelines-equal-access-digital-goods-and-services)

### Germany
- [BITV 2.0 — official federal legislation](https://www.gesetze-im-internet.de/bitv_2_0/)
- [Behindertengleichstellungsgesetz (BGG)](https://www.gesetze-im-internet.de/bgg/)
- [Barrierefreiheitsstärkungsgesetz (BFSG)](https://www.gesetze-im-internet.de/bfsg/)

### Japan
- [Government Public Relations Online — Web Accessibility Policy (JIS X 8341-3:2016)](https://www.gov-online.go.jp/webaccessibility/)
- [Government Public Relations Online — 2024 accessibility test results](https://www.gov-online.go.jp/webaccessibility/testresult_2024.html)

## 6. Maintenance / Ylläpito

This comparison is a curated starting point, not a complete country inventory. Before adding another country, identify its national equality/disability law, digital-accessibility regulation, adopted technical standard, regulator, complaint/enforcement mechanism and authoritative government guidance. Record the date checked and avoid inferring that an English-language summary is the legally controlling text.

Tämä vertailu on koottu lähtökohta, ei täydellinen maaluettelo. Kun lisäät uuden maan, selvitä sen yhdenvertaisuus- ja vammaislainsäädäntö, digitaalisen saavutettavuuden sääntely, käyttöön otettu tekninen standardi, valvova viranomainen, kantelu-/valvontamenettely sekä virallinen viranomaisohjeistus. Kirjaa tarkistuspäivä äläkä oleta englanninkielisen tiivistelmän olevan oikeudellisesti ratkaiseva teksti.
