---
title: Curriculum Vitae
layout: null
---

<style>
/* Print/PDF style for CV page */
.cv-pdf {
  max-width: 800px;
  margin: 40px auto;
  background: #fff;
  color: #222;
  font-family: 'Merriweather', serif;
  font-size: 1.05rem;
  line-height: 1.6;
  padding: 48px 56px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.cv-pdf h1,
.cv-pdf h2,
.cv-pdf h3 {
  font-family: 'Merriweather', serif;
  font-weight: 700;
  margin-top: 1.2em;
  margin-bottom: 0.5em;
  color: #222;
}
.cv-pdf h1 {
  font-size: 2.2rem;
  margin-top: 0;
}
.cv-pdf h2 {
  font-size: 1.3rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.2em;
}
.cv-pdf ul,
.cv-pdf ol {
  margin-left: 1.2em;
}
.cv-pdf hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 2em 0;
}
.cv-pdf strong {
  color: #111;
}
.cv-pdf a {
  color: #0056b3;
  text-decoration: underline;
}

/* Cool tech tags */
.cv-pdf code {
  font-family:
    'Segoe UI',
    system-ui,
    -apple-system,
    sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, #e8f4f8, #dceef6);
  color: #1a5276;
  border: 1px solid #b8d8e8;
  border-radius: 999px;
  padding: 3px 12px;
  display: inline-block;
  margin: 2px 2px;
  white-space: nowrap;
  line-height: 1.6;
}

/* Date range tags — inline with headlines */
.cv-pdf h4 > code,
.cv-pdf h3 > code {
  background: none;
  color: #666;
  border: none;
  font-weight: 400;
  font-size: 0.95rem;
  padding: 0;
  border-radius: 0;
  font-family: inherit;
  margin: 0 0 0 1em;
  float: right;
}


/* Table styling */
.cv-pdf table {
  width: 100%;
  border-collapse: collapse;
  margin: 1em 0;
  font-size: 0.95rem;
}
.cv-pdf thead th {
  text-align: left;
  font-weight: 700;
  border-bottom: 2px solid #ccc;
  padding: 8px 12px;
  color: #333;
}
.cv-pdf tbody td {
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
  vertical-align: top;
}
.cv-pdf tbody tr:last-child td {
  border-bottom: none;
}

/* H3 job titles */
.cv-pdf h3,
.cv-pdf h4 {
  font-size: 1.1rem;
  margin-top: 1.5em;
  margin-bottom: 0.3em;
  border-bottom: none;
}
.cv-pdf h3 em {
  font-weight: 400;
  color: #555;
}

@media print {
  /* Fjern nettleserens over-/undertekster (URL, dato, sidetall) */
  @page {
    margin: 18mm 15mm;
    size: A4;
  }

  body {
    background: #fff !important;
    color: #222 !important;
    margin: 0;
    padding: 0;
  }

  .cv-pdf {
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
  }

  /* Naturlige sideskift — hold overskrifter og innhold sammen */
  .cv-pdf h2,
  .cv-pdf h3 {
    page-break-after: avoid;
    break-after: avoid;
  }

  .cv-pdf h2 + *,
  .cv-pdf h3 + *,
  .cv-pdf h3 + * + * {
    page-break-before: avoid;
    break-before: avoid;
  }

  /* Ikke bryt midt i en jobb-seksjon, tabell eller liste */
  .cv-pdf ul,
  .cv-pdf ol,
  .cv-pdf table,
  .cv-pdf blockquote {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* La store seksjoner (h2) starte på ny side om de havner nær bunnen */
  .cv-pdf h2 {
    page-break-before: auto;
    break-before: auto;
    orphans: 3;
    widows: 3;
  }

  /* Unngå enkeltlinjer alene øverst/nederst */
  .cv-pdf p,
  .cv-pdf li {
    orphans: 2;
    widows: 2;
  }

  /* Skjul horisontale linjer som ikke trengs i print */
  .cv-pdf hr {
    display: none;
  }

  /* Klasse for eksplisitt sideskift i markdown */
  .page-break {
    page-break-before: always;
    break-before: always;
    height: 0;
    margin: 0;
    border: none;
  }
}
</style>

<div class="cv-pdf">
  # Lars-Erik Bruce

**Senior Systemutvikler · Frontend-spesialist**

Oslo, Norge · (+47) 41 65 06 02 · lebchen@gmail.com · [linkedin.com/in/lars-erik-bruce-0200951a](https://linkedin.com/in/lars-erik-bruce-0200951a)

---

## Profil

Senior utvikler med over 13 års erfaring med web- og systemutvikling, med frontend som spesialfelt og UI-arkitektur som kjernekompetanse. Har hatt roller som utvikler, arkitekt og techlead — og trives best der det er høye krav til både teknisk kvalitet og brukeropplevelse. Akademisk bakgrunn i språkteknologi og NLP gjør AI-arbeidet intuitivt, og de siste årene har dette kommet til nytte i arbeid med LLM, RAG og agentbaserte systemer.

---

## Nøkkelkompetanse

| Kategori | Teknologier |
|---|---|
| **Frontend** | React, Vue 3, TypeScript, JavaScript, HTML5, CSS/SCSS |
| **State management** | Redux, Pinia |
| **Backend** | Node.js/Express, Java (Tomcat/Spring/JSP), REST, Microservices, PostgreSQL/SQL |
| **Testing** | Playwright, Cypress, Cucumber, JUnit, Vitest |
| **Verktøy** | Git, Docker, OpenShift, Vite, Webpack/Gulp, Jenkins, CI/CD, GitHub Copilot, Claude |
| **Metode** | Scrum, Kanban, DevOps, WCAG/Universell utforming |
| **AI/ML** | LLM-integrasjon, RAG-systemer, semantiske embeddings, MCP-servere, Vertex AI |

---

## Arbeidserfaring

### Senior Software Engineer — *Redpill Linpro*

`Januar 2022 – nå`

Konsulent utleid til to store oppdrag: først Skatteetaten (3 år), deretter Telenor (pågående).

---

#### Oppdrag: Telenor — Agentic AI Platform

`April 2025 – nå`

Medlem av Agentic AI Platform-teamet, som bygger verktøy og infrastruktur for AI-agenter i Telenors kundesupport — fra LLM-integrasjon og kunnskapsforvaltning til GUI-verktøy for AI-trenere.

**Prosjekt: GUI-applikasjon for AI-trenere**
Utviklet fra bunnen av en Vue 3-applikasjon som lar AI-trenere konfigurere og feilsøke AI-agentenes samtaleflyt. Verktøyet gir innsyn i pre-definerte samtaleflyter og muliggjør debugging av JavaScript-logikk i API Connectors — sentrale integrasjonspunkter i chatbot-plattformen.

- Vue 3 med Composition API, Pinia for state management, TypeScript
- Integrasjon med LLM-APIer (Claude, Gemini) og boost.ai
- Visualisering av samtaleflyt og feilsøkingsverktøy for API Connectors

**Prosjekt: Fullstendig WCAG 2.2 AA-dekning for chatboten Telmi**
Tilpasset GUI-et for chatklienten Telmi til å tilfredsstille WCAG 2.2 AA-kravene. Spesielt utfordrende var håndtering av skjermleser-opplevelsen: nye meldinger måtte annonseres uten at hele samtalehistorikken ble lest opp ved minimering/gjenåpning av chatvinduet. Løste også tilgjengelighet for interaktive komponenter som dukker opp dynamisk i chatflyten.

- ARIA live regions med nøye kalibrering av `aria-live` og `aria-relevant`
- Keyboard-navigasjon for dynamisk innhold i chatflyt
- Testing med skjermlesere (NVDA, VoiceOver)

**Prosjekt: LLM-pipeline for kunnskapsartikler**
Designet og implementerte en pipeline som automatisk genererer knowledge base-artikler fra kundeserviceinnhold. Pipelinen bruker temaekstraksjon og deduplisering for å identifisere unike kunnskapsområder, og genererer deretter strukturerte artikler tilpasset agentenes behov.

- Vertex AI Gemini batch inference for temaekstraksjon i stor skala
- Dedupliseringslogikk basert på stringlikhet og LLM-raffinering
- TypeScript, @google/genai SDK, Google Cloud (Vertex AI, GCS)

**Prosjekt: RAG-systemer og MCP-servere**
Bygget retrieval-augmented generation (RAG) pipelines og Model Context Protocol (MCP) servere som gir AI-agentene tilgang til strukturert og ustrukturert kunnskapsdata.

- Semantiske embeddings med mxbai-embed-large-v1
- Vektordatabase med sqlite-vec
- Custom MCP-servere i TypeScript/Node.js

`Vue 3 · Pinia · TypeScript · Node.js · LLM · RAG · MCP · Vertex AI · Google Cloud`

---

#### Oppdrag: Skatteetaten — Skatteprosessen, Min skatt

`Januar 2022 – Mars 2025`

Fullstack-utvikler på tvers av flere team i Skatteetaten, med spesielt ansvar for frontend-arkitektur og WCAG/UU-compliance. Jobbet med modernisering av offentlige skatteløsninger, inkludert Min Skatt.

**Prosjekt: Modernisering av web-applikasjoner**
Videreutvikling og modernisering av web-applikasjoner i Skatteetatens portefølje. Fokus på å løfte eldre Java-baserte løsninger til moderne React/TypeScript-arkitektur, med gjennomgående krav til universell utforming.

- React med hooks og TypeScript for nye moduler og migrering av eldre kode
- Node.js/Express for BFF-lag (Backend for Frontend)
- Java med OpenShift for backend-tjenester
- PostgreSQL og Elasticsearch for datapersistering og søk

**Prosjekt: WCAG-compliance og universell utforming**
Systematisk arbeid med å sikre at alle brukergrensesnitt tilfredsstiller WCAG 2.1 AA-kravene. Holdt interne presentasjoner om semantisk HTML, ARIA-attributter, og samspillet mellom CSS-normalizers, designsystemer og tilgjengelighet.

- Gjennomgang og utbedring av eksisterende grensesnitt
- Etablering av best practices for tilgjengelighet i nye komponenter
- Fokus på keyboard-navigasjon, skjermleser-kompatibilitet og kontrast

**Prosjekt: Automatisert testing**
Oppsett og vedlikehold av automatiserte testløsninger med Playwright og Cucumber for ende-til-ende-testing av skatteløsningene.

- Playwright for browser-automatisering
- Cucumber/Gherkin for BDD-baserte testscenarioer
- Jenkins CI/CD-pipelines for kontinuerlig bygg og deploy

`React · TypeScript · Node.js · Java · OpenShift · PostgreSQL · Playwright · Cucumber · Jenkins`

---

### Frontend Techlead — *Tripletex*

`Oktober 2012 – Desember 2021`

Startet som utvikler med å bygge mobiltilpassede regnskapsmoduler, og vokste deretter inn i rollen som Frontend Techlead i Tripletex, Norges ledende skybaserte regnskapssystem. Startet og drev innføringen av React og TypeScript i en stor Java/JSP-kodebase — over 1 500 komponenter og 400+ sider gradvis modernisert. Innførte og eide hele frontend-toolchain: Node.js, Gulp, Webpack, SCSS-moduler. Satte retning for teknologistack, arbeidsmetodikk og UX-standarder på tvers av domeneteam, og ledet design-sprints, POCer og workshops.

---

**Prosjekt: Nytt visuelt design — lansering høsten 2017**
Ledet den tekniske gjennomføringen av et komplett visuelt redesign av hele Tripletex-applikasjonen. Alle ca. 400 regnskapssider fikk ny stildrakt — rapporttabeller, skjemaer, navigasjon og dialoger ble redesignet for å gi en moderne og konsistent brukeropplevelse.

- Implementering av nytt designsystem basert på Material Design Lite (MDL)
- Omfattende reskriving av CSS/SCSS for å sikre konsistens på tvers av 400+ sider
- Tilpasning av eksisterende jQuery UI-komponenter og JSP-templates til nytt design
- Tett samarbeid med UX-lead i et dedikert team bestående av to UX-designere og fire utviklere

`CSS/SCSS · jQuery UI · Material Design Lite · JSP · JavaScript`

**Prosjekt: Mobiltilpassede regnskapsmoduler**
Utviklet mobiltilpassede versjoner av sentrale regnskapsmoduler — timeføring, prosjektering og fakturering — slik at brukerne kunne utføre daglige oppgaver direkte fra mobilenheter.

- Responsivt design med CSS media queries og tilpassede UI-komponenter
- Optimalisering av brukerflyt for berøringsskjermer
- JSP og JavaScript med jQuery/jQuery UI

`JSP · JavaScript · jQuery · CSS · Responsivt design`

**Prosjekt: Onboarding- og hjelpesystem**
Designet og implementerte et integrert onboarding- og hjelpesystem som veiledet nye brukere gjennom Tripletex sine moduler. Systemet inkluderte kontekstuell hjelp, steg-for-steg-veiledninger og en hjelpeseksjon tilgjengelig fra enhver side i applikasjonen.

- JavaScript/jQuery for dynamisk innholdsvisning
- Integrasjon med eksisterende JSP-sidestruktur
- Innholdsproduksjon i samarbeid med supportteam og UX

`JavaScript · jQuery · JSP · HTML/CSS`

**Prosjekt: Felles komponentbibliotek**
Bygget og vedlikeholdt et felles komponentbibliotek med gjenbrukbare UI-elementer — skjemavalidering, periodevelgere, dialoger, rapporttabeller og navigasjonskomponenter — som ble brukt av alle utviklingsteam.

- Først i JSP med custom tag libraries og jQuery UI
- Senere introduksjon av React-komponenter som erstatning for de eldste modulene
- Standardisering av API-mønster og prop-interfaces for konsistent bruk
- Dokumentasjon og opplæring av utviklere i bruk av biblioteket

`React · Redux · JSP · Custom Tag Libraries · jQuery UI · TypeScript · JavaScript`

**Prosjekt: Introduksjon av React**
Initierte og ledet arbeidet med å innføre React som ny frontend-teknologi i Tripletex. Startet med nye moduler og isolerte sidekomponenter, og etablerte mønstre og arkitekturprinsipper som resten av organisasjonen kunne bygge videre på.

- Evaluering og valg av React/Redux-stack
- Oppsett av build-pipeline med Node.js, Webpack og Gulp
- Etablering av kodestandarder og arkitekturguides for React-utvikling
- Mentoring av utviklere som var nye med React

`React · Redux · TypeScript · Node.js · Webpack · Gulp`

**Faglig lederskap**
Som Frontend Techlead og leder av frontend-forumet hadde jeg ansvar for faglig retning og kompetanseutvikling:

- Ledet et tverrfaglig frontend-forum med medlemmer fra flere produktteam
- Bistod utviklere som satt fast i egne prosjekter — feilsøking, arkitekturvalg, code reviews
- Holdt interne presentasjoner og workshops om frontend-teknologier
- Deltok i arkitekturgruppen med ansvar for tekniske beslutninger på tvers

`React · Redux · TypeScript · Java · Node.js · Docker · DevOps · Scrum/Kanban`

---

### Systemutvikler (sommerintern) — *cXense*

`Mai – August 2011`

Implementerte en JavaScript-basert parser for RDF/A-syntax i HTML-dokumenter. Bygget grafmodell over metadata brukt som input til AI-plattform for kontekstuell annonsering.

`JavaScript · jQuery · YUI · RDF/A · AI`

---

### Forskningsassistent / Gruppelærer / Sensor — *Universitetet i Oslo*

`2009 – 2011`

Utforsket bruk av semantiske teknologier for visualisering av Statistikkbanken i Semicolon-prosjektet (samarbeid UiO, DNV, SSB, Cambridge Semantics). Underviste i Logikk og beregninger og Introduksjon til kognitive vitenskaper; medsensor i eksamen.

`Java · Semantisk web · Datalingvistikk`

---

## Utdanning

### Master of Computer Science — *Universitetet i Oslo*

`2010 – 2012`

Fordypning: språkteknologi og informasjonsuttrekk. Masteroppgave: automatisk diagnostisering med NLP og ontologier.

### Bachelor of Science, Computer Science — *Universitetet i Oslo*

`2007 – 2010`

Objektorientert (Java) og funksjonell programmering (Scheme, Common Lisp), språkteknologi og filosofi.

---

## Annet

- Publikasjoner: Leserinnlegg i [Kode24](https://kode24.no/) om moderne HTML og teknisk vedlikehold av kodebasen
- Workshop om RAG og semantiske embeddings (internt, Redpill Linpro)
- Språk: Norsk (morsmål), Engelsk (flytende)

---

Referanser oppgis ved forespørsel · Oppdatert april 2026
</div>
