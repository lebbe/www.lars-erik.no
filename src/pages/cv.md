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
  margin-top: 2.2em;
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

/* Date range tags — subtler style */
.cv-pdf h3 + p > code,
.cv-pdf h3 > code,
.cv-pdf p > strong ~ code {
  background: #f5f5f5;
  color: #555;
  border-color: #ddd;
  font-weight: 500;
  font-size: 0.82rem;
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
.cv-pdf h3 {
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
    visibility: hidden;
    margin: 0.5em 0;
    height: 0;
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

Oslo, Norge

---

## Profil

Over 12 års erfaring med web- og systemutvikling, med frontend som spesialfelt og UI-arkitektur som kjernekompetanse. Har hatt roller som utvikler, arkitekt og techlead — og trives best der det er høye krav til både teknisk kvalitet og brukeropplevelse. Akademisk bakgrunn i språkteknologi og NLP gjør AI-arbeidet intuitivt, og de siste årene har dette kommet til nytte i arbeid med LLM, RAG og agentbaserte systemer.

---

## Nøkkelkompetanse

| Kategori     | Teknologier                                                                        |
| ------------ | ---------------------------------------------------------------------------------- |
| **Frontend** | React, Vue, TypeScript, JavaScript, HTML5, CSS/SCSS                                |
| **Backend**  | Node.js/Express, Java (Spring/JSP), REST, Microservices, PostgreSQL/SQL            |
| **Testing**  | Playwright, Cypress, Cucumber, JUnit, Vitest                                       |
| **Verktøy**  | Git, Docker, OpenShift, Vite, Webpack/Gulp, Jenkins, CI/CD, GitHub Copilot, Claude |
| **Metode**   | Scrum, Kanban, DevOps, WCAG/Universell utforming                                   |
| **AI/ML**    | LLM-integrasjon, RAG-systemer, semantiske embeddings, MCP-servere                  |

---

## Arbeidserfaring

### Senior Software Engineer — _Redpill Linpro_

`Januar 2022 – nå`

**Telenor — Agentic AI Platform**

`April 2025 – nå`

- Konsulent på et team som fasiliterer verktøy og infrastruktur for AI-agenter i Telenor kundesupport
- Frontend-utvikling i Vue for chatbot og agentverktøy
- Arbeider med LLM-integrasjon, RAG-systemer og MCP-servere

`Vue · Pinia · TypeScript · LLM · RAG · MCP · Node.js`

**Skatteetaten — Skatteprosessen**

`Januar 2022 – Mars 2025`

- Fullstack-utvikling på tvers av flere team, med spesielt ansvar for frontend-arkitektur og WCAG/UU-compliance
- Modernisering av web-applikasjoner med React, TypeScript og Node/Express
- Automatisert testing med Playwright og Cucumber
- Oppsett og vedlikehold av CI/CD-pipelines i Jenkins

`React · TypeScript · Node.js · Java · OpenShift · PostgreSQL · Playwright`

---

### Frontend Techlead — _Tripletex (Visma)_

`Oktober 2012 – Desember 2021`

- Teknisk leder for frontend-utvikling i et stort team bak en SaaS-plattform for regnskap, lønn og prosjektstyring
- Startet og drev innføringen av React og TypeScript i en stor Java/JSP-kodebase — over 1 500 komponenter og 400+ sider gradvis modernisert
- Innførte og eide hele frontend-toolchain: Node.js, Gulp, Webpack/Vite, SCSS-moduler
- Satte retning for teknologistack, arbeidsmetodikk og UX-standarder på tvers av domene-team
- Ledet design-sprints, POCer og workshops

`React · Redux · TypeScript · Java · Node.js · Docker · DevOps · Scrum/Kanban`

---

### Systemutvikler (sommerintern) — _cXense_

`Mai – August 2011`

- Implementerte JavaScript-basert parser for RDF/A-syntax i HTML-dokumenter
- Bygget grafmodell over metadata brukt som input til AI-plattform for kontekstuell annonsering

`JavaScript · jQuery · RDF · AI`

---

### Forskningsassistent / Gruppelærer / Sensor — _Universitetet i Oslo_

`2009 – 2011`

- Utforsket bruk av semantiske teknologier for visualisering av Statistikkbanken (samarbeid UiO, DNV, SSB, Cambridge Semantics)
- Underviste i Logikk og beregninger og Introduksjon til kognitive vitenskaper; medsensor i eksamen

---

## Utdanning

**Master of Computer Science** — Universitetet i Oslo

`2010 – 2012`

Fordypning: språkteknologi og informasjonsuttrekk. Masteroppgave: automatisk diagnostisering med NLP og ontologier.

**Bachelor of Science, Computer Science** — Universitetet i Oslo

`2007 – 2010`

Objektorientert (Java) og funksjonell programmering (Scheme, Common Lisp), språkteknologi og filosofi.

---

## Annet

- **Publikasjoner:** Leserinnlegg i [Kode24](https://kode24.no) om moderne HTML og teknisk vedlikehold av kodebasen
- **Språk:** Norsk (morsmål), Engelsk (flytende)

---

_Referanser oppgis ved forespørsel · Oppdatert mars 2026_

</div>
