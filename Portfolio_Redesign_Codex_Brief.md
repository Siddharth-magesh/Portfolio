# Siddharth Magesh - Graduate Research Portfolio

**Codex implementation brief · Prepared October 1, 2026 (Pacific time)**

**How to use:** give this file and the three source attachments to Codex inside the actual repository. Section 18 contains the launch instruction. The brief includes an explicit access limitation: its author reviewed the supplied documents and complete directory listing, but could not retrieve the live source code.

**Quick navigation:** [Scope and sources](#1-assignment-and-intended-outcome) · [Content and homepage copy](#3-positioning-and-content-selection) · [Project pages](#6-individual-work-pages-structure-and-content-requirements) · [Visual design](#8-visual-direction-a-contemporary-academic-folio) · [Archive migration](#9-preserve-and-migrate-the-existing-site) · [Factual conflicts](#12-conflicts-and-owner-review-queue) · [Implementation](#13-required-repository-audit-before-coding) · [Acceptance criteria](#16-acceptance-criteria-and-verification-plan) · [Codex task](#18-copy-paste-task-for-the-implementing-codex)

## 1. Assignment and intended outcome

Build a new, polished portfolio at `https://siddharth-magesh.me/` that presents Siddharth as a USC M.S. Computer Science student working on language-model reasoning and verification, multimodal learning, and AI systems engineering.

The new homepage must be a single, vertically scrolling, responsive page. It should introduce the current direction quickly, show a selective set of substantial work, and lead interested readers to fuller section pages and individual technical case studies. Preserve the existing section-based website as a working archive, accessible through a small footer link.

The intended audience is faculty, research collaborators, research internship teams, and employers evaluating technical depth. The tone should be precise, confident, and credible. Graduate-level presentation comes from explaining the work well and distinguishing evidence from ambition; do not manufacture seniority or add an unsupported “expert” title.

Interpret “a new cover on top of the old portfolio” as a new primary website experience. It does **not** mean a literal cover image, a splash screen, or a full-height hero that delays access to the work.

### Non-negotiable requirements

- New primary homepage at `/`; functional historical site at `/archive` and its nested routes.
- Clean academic/editorial visual language, with the clarity of a researcher's website and the readability of a well-typeset paper.
- Original design informed by the reference, without copying its text, branding, code, or exact layout.
- Current research and strongest technical work first; older material available through section indexes and the archive.
- Dedicated substantive pages for projects, with problem, contribution, approach, implementation, evidence, and limitations when supported.
- Visible education, experience, organizations/service, awards, and selected certifications.
- No hackathon section in the new homepage or primary navigation.
- No flashy cards, neon effects, animated backgrounds, skill meters, spinning objects, typewriter titles, forced loading animations, or decorative dashboards.
- Excellent reading and navigation on mobile, keyboard access, and working deep links.
- Preserve working assets, useful history, and old incoming links through an explicit migration map.
- Do not invent results, metrics, publication status, affiliations, links, or project details.

This document is a build specification, not a report that the redesign has already been implemented or deployed.

## 2. Sources, inspection boundary, and factual policy

### 2.1 Sources available for this brief

| ID | Source | What was actually reviewed | How to use it |
|---|---|---|---|
| S1 | `Profile (1)(2).pdf` | All four pages of the supplied LinkedIn export | Primary source for current positioning and fuller descriptions of roles |
| S2 | `current.pdf` | The supplied one-page résumé | Main source for selected achievements, project scope, skills, and current résumé download |
| S3 | `project_structure.txt` | Complete 461-line supplied directory listing, including 31 `page.tsx` files | Starting inventory of routes, components, documents, and assets; not evidence of file contents |
| S4 | [Current portfolio](https://siddharth-magesh.me/) | Retrieval unavailable in this preparation environment | Inspect directly during implementation; do not assume current appearance or behavior |
| S5 | [Portfolio repository](https://github.com/Siddharth-magesh/Portfolio) | Repository retrieval and cloning blocked in this preparation environment | Inspect the actual checkout before changing code |
| S6 | [Design reference](https://spkreddy.org/) | Readable page content and information structure; rendered visual preview was blocked | Inspiration for concise identity, research themes, selected work, and restrained hierarchy |

**Important boundary:** the source code has not been read line by line. The supplied tree strongly suggests a Next.js App Router/TypeScript application, but installed versions, actual dependencies, component behavior, hosting, build health, and deployment settings remain unverified. All repository observations below refer to the supplied tree unless explicitly stated otherwise. The implementing Codex must complete the repository audit in Section 13.

The LinkedIn export has no dedicated Projects section. Its experience descriptions support related project case studies; it must not be represented as containing detailed specifications for every older project.

### 2.2 Source precedence

1. Follow the user's instructions in this brief and any later corrections.
2. Use the updated LinkedIn narrative to establish current identity and emphasis.
3. Use the résumé for concise project scope and selected credentials.
4. Use actual repository content, project repositories, and supporting documents to expand technical descriptions and recover older work.
5. Treat the old website as historical material. Reconcile it with newer sources before promoting claims into the current portfolio.

Prefer specific evidence over promotional language. A folder named `Publications` is not proof of peer-reviewed publication. A filename is not proof of implementation, authorship, validity, or current status.

### 2.3 Internal provenance and missing facts

Maintain an internal content ledger with fields for claim, source, source location, status, and resolution. Use these statuses:

- **Source-backed:** present in an attachment or inspected primary artifact.
- **Editorial synthesis:** a faithful rewrite that adds no new factual claim.
- **Needs reconciliation:** sources disagree or do not establish the claim.
- **Proposed:** a design choice, research question, or future evaluation idea, not a completed result.

Keep this ledger and owner-review notes out of the public UI. When a factual conflict is unresolved, use the safe public wording in Section 12 or omit the disputed field. Continue implementing the rest of the site. Do not render `TBD`, invented numbers, fake links, empty cards, or internal uncertainty badges to visitors.

## 3. Positioning and content selection

### 3.1 Primary identity

**Name:** Siddharth Magesh  
**Academic line:** M.S. Computer Science, University of Southern California  
**Focus line:** Language Model Reasoning & Verification · Multimodal Learning · AI Systems  
**Location:** Los Angeles, California  
**Preferred contact:** `smagesh@usc.edu`  
**Expected graduation:** May 2028

Use professional first-person writing for the introduction and compact, factual descriptions elsewhere. Avoid “aspiring,” “visionary,” “guru,” “AI enthusiast,” and claims of being a USC researcher or lab member unless a separate source establishes that appointment. USC student status does not itself establish a research affiliation.

### 3.2 What the first page should communicate

Within the opening screen and first short scroll, a visitor should understand:

1. Who Siddharth is and that he is currently a USC master's student.
2. His current research question: reasoning/answer verification across autoregressive and diffusion language models, including verifier diversity and inference constraints.
3. Evidence of prior work: IIT Madras multimodal research, OSSARTH, Sentimatrix, and EcoFloater.
4. How to read a project, download the résumé, and make contact.

“On the first page” means on the primary scrolling homepage. Do not squeeze all selected work into the first viewport or use tiny text to fit it.

### 3.3 Selection and placement

| Work or activity | Homepage treatment | Fuller destination | Rationale |
|---|---|---|---|
| Language-model reasoning and verification | First current-work entry | `/work/reasoning-verification` | Current intellectual direction |
| Vision-language research at SGBC, IIT Madras | Selected research + compact experience row | `/work/multimodal-neuroscience` | Strong research experience |
| OSSARTH | Selected research prototype | `/work/ossarth` | Agent orchestration and systems research |
| Sentimatrix | First selected software project | `/work/sentimatrix` | Substantial reusable open-source engineering |
| EcoFloater | Second selected systems project + compact experience row | `/work/ecofloater` | On-device perception and deployment constraints |
| Retail and Smart Café ML/CV work | Compact experience row | `/work/retail-vision-systems` | Applied ML and dataset development |
| VEC production website | Organizations/service summary | `/work/vec-website` | Production backend engineering and leadership |
| LifeConnect | Mention in YRC summary | `/work/life-connect` | Technical contribution to service |
| MTERBS | Earlier research, after actual source review | `/work/mterbs` or its existing archived page until ready | Preserve earlier research without overstating status |
| AgriHub, Breathy Sweet, CrossLink, MediNote AI, YRC website | Earlier work on relevant indexes | Their own `/work/...` pages after source extraction | Depth remains discoverable without dominating the homepage |
| GradGear | Archived experience unless current sources substantiate promotion | `/archive/experience/gradgear` | Present only in the supplied tree |
| General AI articles | Archive | `/archive/articles` | Separate older commentary from current research evidence |
| Hackathons and participation certificates | Archive | `/archive/hackathons` and existing document links | Not a primary current category |

Do not repeat complete project descriptions in several sections. Research and Projects explain the work; Experience explains role and context; Organizations explains leadership and service. These can link to the same canonical case study.

## 4. Information architecture and navigation

### 4.1 Three layers

| Layer | Purpose | Scope |
|---|---|---|
| Homepage | Concise current professional introduction | Selected work and short summaries |
| Current detail pages | Explain work and provide fuller professional history | Section indexes plus substantive case studies |
| Archive | Preserve the old site's organization and historical content | All existing pages and required assets |

The homepage remains single-page and scrollable even though supporting pages exist.

### 4.2 Homepage order

| Order | Visible section name | Anchor | Content budget |
|---|---|---|---|
| 1 | Name, affiliation, and research summary | `#overview` | Approximately 100–130 words, excluding links |
| 2 | Research & Current Work | `#research` | Three entries, approximately 35–60 words each |
| 3 | Selected Projects & Open Source | `#projects` | Two entries, approximately 40–65 words each |
| 4 | Research & Industry Experience | `#experience` | Three compact role summaries |
| 5 | Education | `#education` | Two degree rows plus one supported IIT Madras credential row |
| 6 | Organizations & Service | `#organizations` | Two short entries |
| 7 | Awards & Recognition | `#awards` | One strongest award, with a fuller-history link |
| 8 | Licenses & Certifications | `#certifications` | Three selected credentials |
| 9 | Contact and footer | `#contact` | One invitation, contact links, small archive link |

These are maximum editorial budgets, not instructions to pad sparse content. Aim for roughly 850–1,150 homepage words overall. Shorten repeated role descriptions if the page feels like a résumé pasted into a website.

### 4.3 Primary navigation

Use the name as a home link and a short navigation: **Research · Projects · Experience · About · Contact**. “About” links to `/#education`; `/about` provides the fuller biography. Keep a visible **Résumé (PDF)** link near the introduction and optionally in the desktop navigation if space permits.

Use real anchors such as `/#research`, not JavaScript-only scroll handlers. On secondary pages, the same links must return to the correct homepage section. Use a compact wrapping navigation on mobile where it fits; otherwise use a simple accessible menu, never horizontal overflow or a full-screen animation.

### 4.4 Current routes

| Route | Purpose |
|---|---|
| `/` | New scrolling homepage |
| `/about` | Expanded biography, education, compact technical focus, and professional background |
| `/research` | Current research, research prototypes, and earlier research with explicit status labels |
| `/projects` | Selected software/systems work, then earlier projects |
| `/experience` | Fuller research and industry history, with links to relevant work |
| `/organizations` | WebOps and YRC leadership/service history |
| `/awards` | Verified award and recognition history; clearly distinguish presentations from awards |
| `/certifications` | Curated credential list with valid evidence links when available |
| `/work/[slug]` | Shared design for technical case studies and research project pages |
| `/archive` | Preserved historical homepage |
| `/archive/...` | Preserved historical sections and detail pages |

Using `/work/[slug]` gives a project one canonical detail page even when it belongs to research, experience, and software categories. Keep the homepage section indexes at their existing familiar paths where appropriate; archive equivalents exist separately.

### 4.5 “Read more” behavior

- Under each relevant section, use a descriptive link: “Research details,” “All projects,” “Full experience,” “More about my background,” “Organizations & service,” “All recognition,” or “All certifications.”
- Each project title opens its own detail page; section-level links open the relevant index.
- Links must have meaningful accessible names. Avoid a page full of indistinguishable “Read more” links.
- Optional inline disclosure is suitable for a short explanation or extra credential rows, not entire technical case studies.
- A detail page must be addressable, directly loadable, shareable, and usable with browser Back.
- Do not use modal-only project pages or load long biographies only after client-side interaction.

## 5. Homepage draft copy

The following is source-grounded editorial copy. Adjust rhythm and line breaks during design, while preserving the factual limits and conflict rules.

### 5.1 Introduction

**Siddharth Magesh**  
**M.S. Computer Science, University of Southern California**  
**Language Model Reasoning & Verification · Multimodal Learning · AI Systems**

> I’m a master’s student in Computer Science at USC, interested in how language models reason and how their answers can be verified reliably. My current research explores autoregressive and diffusion language models, with a focus on verifier diversity, error correlation, calibration, and practical inference constraints.
>
> Previously, I worked on vision-language models and multimodal brain imaging at IIT Madras’s Sudha Gopalakrishnan Brain Centre. My broader experience spans on-device computer vision, agent orchestration, reusable Python tools, and production backend systems. I’m interested in research and engineering collaborations that connect model behavior with dependable AI systems.

Links: **Email · GitHub · LinkedIn · Résumé (PDF)**. Use the clean profile URLs in Section 11. A small real portrait is optional and subordinate to the text.

### 5.2 Research & Current Work

**Language Model Reasoning & Verification**  
*Ongoing research*

> I’m investigating whether autoregressive and diffusion language models provide complementary signals for answer verification, and how sampling and decoding choices affect verifier diversity under practical inference budgets. Current interests include correlated errors, calibration, and verifier ensembles.

Destination: `/work/reasoning-verification`.

**Vision-Language Models for Computational Neuroscience**  
*Research experience · SGBC, IIT Madras · Dec 2025–Feb 2026*

> At IIT Madras’s Sudha Gopalakrishnan Brain Centre, I worked on adapting vision-language models for digital histology and neuroscience workflows. My work included OpenCLIP and BLIP-2 fine-tuning, multimodal data pipelines, and tools for model inference and research workflows using NVIDIA DGX A100 infrastructure.

Destination: `/work/multimodal-neuroscience`.

**OSSARTH - LLM-Native Operating System Prototype**  
*Research prototype · May 2024–Mar 2026*

> A prototype exploring language-model-driven task planning and orchestration over a Linux-based system. My work included hierarchical agent orchestration, MCP tool integration, and a simulated task-management interface. I co-authored a research manuscript submitted for publication.

Destination: `/work/ossarth`. “Submitted for publication” is the résumé's supplied status, not an independently verified current acceptance status; recheck before changing that label.

Section link: **Research details** → `/research`.

### 5.3 Selected Projects & Open Source

**Sentimatrix - Multimodal Sentiment Intelligence**  
*Open-source Python project · Aug 2024–Jun 2026*

> A Python package for asynchronous data collection, sentiment and emotion analysis, and multimodal inputs. I built cloud/local LLM integration, CLI and REST API interfaces, and structured exports for analysis and reporting. The project connects reusable analysis workflows with practical developer interfaces.

Destination: `/work/sentimatrix`. Add the exact repository and PyPI links only after locating and validating them.

**EcoFloater - On-Device Perception for an Autonomous Water Drone**  
*Applied AI systems · Scrapify Ecotech · 2024–2025*

> At Scrapify Ecotech, I contributed to EcoFloater’s onboard AI stack for aquatic waste detection and navigation. My work included computer vision models, sensor integration, and deployment on NVIDIA Jetson Nano, addressing perception and inference constraints in a resource-limited system.

Destination: `/work/ecofloater`.

Section link: **All projects** → `/projects`.

### 5.4 Research & Industry Experience

Use compact rows with organization, supported role/date information, one contribution sentence, and a related-work link.

| Organization | Safe display label | Short description |
|---|---|---|
| Sudha Gopalakrishnan Brain Centre, IIT Madras | Large Language Model Researcher · Dec 2025–Feb 2026 | Adapted vision-language models and built multimodal research and inference workflows for computational neuroscience. |
| Scrapify Ecotech | AI engineering for EcoFloater · 2024–2025 | Developed and deployed perception components for an autonomous water drone on constrained edge hardware. |
| Inzpire Solutions | Applied machine learning & computer vision | Built stock-analysis and visual automation workflows for retail and café operations; developed custom datasets and model pipelines. |

The latter two safe labels describe the work, not a replacement official job title. Reconcile exact employment titles and Inzpire dates before displaying them. Section link: **Full experience** → `/experience`.

### 5.5 Education

- **University of Southern California** - M.S. Computer Science; expected May 2028. The LinkedIn export gives an August 2026 start.
- **Velammal Engineering College, Anna University** - B.Tech, Artificial Intelligence and Data Science; 2026. Honors in Full Stack Development. Keep 8.97/10.0 CGPA on `/about` if included.
- **IIT Madras** - Diploma in Data Science; 2022–2026, as stated in the résumé. Reconcile the separate B.S. wording in LinkedIn before presenting a completed bachelor's degree.

The final public display should contain the safe credential wording, not these internal reconciliation explanations. Section link: **More about my background** → `/about`.

### 5.6 Organizations & Service

**WebOps Club, Velammal Engineering College**

> Served as Vice Chairman and Lead Backend Developer, contributing to the college’s production website and mentoring the succeeding development team. The work combined backend architecture, team coordination, deployment, and engineering practices.

**Youth Red Cross, Velammal Engineering College**

> Progressed from Volunteer to Joint Secretary and Technical Head. Contributed to community programs and built technical tools, including work on LifeConnect, a blood-donation platform connecting donors with people in need.

Section link: **Organizations & service** → `/organizations`.

### 5.7 Awards & Recognition

**Inquisitive Innovator Award, Riddhi-26** - Velammal Engineering College, March 2026. Recognition for research and product development.

Section link: **All recognition** → `/awards`. Put the NCAIBIA 2025 presentation in a separately labeled presentation/recognition subsection there. Keep hackathon participation and competition history in the archive by default.

### 5.8 Licenses & Certifications

- **Natural Language Processing Specialization** - four-course specialization, Coursera; July 2024.
- **Generative AI with Large Language Models** - Coursera; August 2024.
- **TensorFlow for AI, ML, and Deep Learning** - Coursera; November 2024.

Section link: **All certifications** → `/certifications`. The heading is a professional category name; do not imply a professional license exists. Verify precise course titles and issuing organizations against certificates before expanding these entries.

### 5.9 Contact and footer

> I’m happy to connect about language-model reasoning, verification, multimodal learning, and AI systems. Email is the best way to reach me.

Use `smagesh@usc.edu`, GitHub, LinkedIn, and the résumé link. Keep the phone number off the web page by default; the supplied résumé may remain downloadable as provided.

Footer text: **Earlier portfolio (archive)** → `/archive`. Use normal, readable secondary text; the archive link should be discreet but easy to find.

## 6. Individual work pages: structure and content requirements

### 6.1 Shared case-study structure

Each promoted project gets a readable document-style page, not an enlarged version of a homepage card.

1. **Title and one-sentence contribution.** Say what the system or investigation does.
2. **Context.** Project type, role, organization if applicable, supported date range, and status.
3. **Overview.** Approximately 80–140 words explaining the problem and work.
4. **Problem and constraints.** The practical or research need and the constraints that shaped the work.
5. **My contribution.** Clearly distinguish personal contributions from team achievements.
6. **Approach / system design.** Components, interfaces, data flow, and design choices supported by the source.
7. **Implementation.** Concrete methods, models, infrastructure, or software capabilities actually used.
8. **Evaluation or evidence.** Measured findings if available; otherwise verifiable artifacts and an honest qualitative description.
9. **Limitations / current status.** Explain prototype scope, unfinished work, missing evaluation, or dependence on nonpublic artifacts when relevant.
10. **Links and related work.** Valid code, package, manuscript, report, dataset, demo, or related case-study links.

Use approximately 600–1,000 words for rich, well-supported case studies; use a shorter page when evidence supports less. A brief early project can be 250–450 useful words. Never invent details to meet a word count.

Use technical diagrams only when verified architecture benefits from one. Label a conceptual diagram as conceptual, a proposed design as proposed, and an implemented pipeline as implemented. Use accessible SVG or another precise rendering, not decorative generated architecture images.

For pages longer than roughly 800 words, include a compact contents list. End with “Back to research” or “Back to projects” and a link to the homepage section. Related work should be a few text links, not another recommendation grid.

### 6.2 Language Model Reasoning & Verification

**Slug:** `reasoning-verification`  
**Sources:** S1 p.1; S2 summary and technical skills  
**Type/status:** Ongoing research; not a publication, completed benchmark, or named USC lab project

Frame the page around the question: **Can different generative processes provide complementary signals for verifying language-model answers under practical inference constraints?**

Source-backed content includes:

- Autoregressive and diffusion language models for reasoning and answer verification.
- Sampling and decoding strategies as possible influences on verifier diversity.
- Verifier ensembles, error correlation, calibration, and inference constraints.

Suggested page sections are Motivation, Research Questions, Current Direction, Evaluation Plan, and Status. The evaluation plan may discuss comparing individual verifiers and combinations at comparable inference budgets, inspecting correlated errors, and assessing calibration. These are **proposed evaluation directions** unless actual experiment artifacts establish that they were performed.

Do not fabricate model names, datasets, supervisor names, benchmarks, accuracy gains, experimental findings, or research start dates. Do not say diffusion verification is more diverse or better; that is the question being investigated. If there are no shareable results yet, write: “This is ongoing work; results will be added as the investigation develops.”

### 6.3 Vision-Language Models for Computational Neuroscience

**Slug:** `multimodal-neuroscience`  
**Sources:** S1 pp.1–2; S2 Experience; existing `app/experience/iitm-brain-centre/page.tsx` after inspection  
**Context:** SGBC, IIT Madras; Dec 2025–Feb 2026

Explain the adaptation of language and vision-language models to digital histology and neuroscience workflows. Cover the source-supported areas:

- High-resolution Nissl/H&E-stained imagery, MRI-linked data, annotations, and biomedical metadata.
- Preprocessing, image/text alignment, annotation encoding, model adaptation, inference, and evaluation workflows.
- OpenCLIP and BLIP-2 fine-tuning; the résumé describes million-scale histology imaging datasets.
- NVIDIA DGX A100 experimentation and internal inference tools/REST APIs.

Be precise about evidence. The attachments describe a collection of activities; they do not establish that every modality was fed jointly into one end-to-end model. Separate workflows when needed. Describe DHARANI only as context for work around the initiative, as stated in LinkedIn; do not imply ownership of the entire platform.

Inspect `public/CERTIFICATIONS/Intern Certifications/SGBC/SGBC_certificate.pdf` for role corroboration if present. Do not invent training schedules, model checkpoints, losses, quantitative results, clinical validation, or anatomical performance claims. Use only cleared, already-public research visuals.

### 6.4 OSSARTH

**Slug:** `ossarth`  
**Sources:** S2 Projects; existing research page, paper, and diagrams after inspection  
**Dates:** May 2024–Mar 2026  
**Status:** Research prototype; manuscript submitted according to the résumé

Describe the intended architecture and implemented prototype separately:

- **Proposed architecture:** language models interpret intent, plan tasks, and guide scheduling/resource-management workflows through hierarchical agents and MCP tools over a Linux kernel.
- **Implemented scope stated in the résumé:** orchestration components and a simulated task-management prototype with a seven-panel system monitor.
- **Authorship:** co-authored a research manuscript; verify author list and current submission/publication status before adding a formal citation.

Candidate assets: `ossarth-architecture-diagram.png`, `ossarth-interface-1.png` through `ossarth-interface-4.png`, and `research-papers/OSSARTH-Research-Paper.pdf`. Inspect all before use. Reconcile older paper claims with the newer résumé's more careful prototype wording.

Avoid suggesting this is a production operating system, a replaced Linux kernel, a proven new scheduler, or a peer-reviewed publication. A public manuscript link should read “Manuscript (PDF)” unless another status is established.

### 6.5 Sentimatrix

**Slug:** `sentimatrix`  
**Sources:** S2 Projects; existing project page and actual package/repository after inspection  
**Dates:** Aug 2024–Jun 2026  
**Type:** Open-source Python package / multimodal sentiment intelligence platform

Explain the developer problem addressed by a reusable analysis package. Cover asynchronous collection, sentiment/emotion analysis, multimodal inputs, cloud/local LLM integration, CLI and REST API interfaces, and structured exports.

Recover exact supported input modalities, package name, providers, API behavior, and maintained versions from the actual project. Show a short real example only if it can be validated against the package; do not invent an SDK call or install command. Inspect `sentimatrix-structure.png` for accuracy before reuse.

The résumé supports saying the package was published on PyPI. It does not provide the package URL, download counts, stars, user counts, test coverage, or measured throughput. Do not turn the old hackathon prototype into the whole project story; explain the later package and engineering work. Historical competition context can stay in the archive.

### 6.6 EcoFloater

**Slug:** `ecofloater`  
**Sources:** S1 pp.3–4; S2 Experience; existing research and Scrapify pages after inspection  
**Dates:** 2024–2025; LinkedIn gives Nov 2024–Jan 2025  
**Type:** Applied AI/robotics engineering

Describe Siddharth's contribution to the onboard AI stack, not sole ownership of the full water drone. Cover aquatic-debris perception, sensor/depth integration, on-device deployment, and constrained compute/power/connectivity.

The sources mention YOLO/YOLOv8, vision transformers, DeepLabV3+, NVIDIA Jetson Nano, and RealSense depth sensing. LinkedIn also describes LLM decision components, mission sequencing, compression, quantization, and latency optimization. Organize these by role in the system and verify what was integrated together versus explored separately.

Do not imply every named model ran simultaneously at a proven real-time rate on the Nano. Do not add FPS, energy, navigation accuracy, deployment scale, or autonomous-mission success percentages without logs or documentation. Inspect `ecofloater-system.jpg` and relevant source pages for usable diagrams/photos.

### 6.7 Retail and Smart Café Vision Systems

**Slug:** `retail-vision-systems`  
**Sources:** S1 p.3; S2 Experience; existing Inzpire page after inspection  
**Organization:** use Inzpire Solutions provisionally; reconcile spelling, dates, and role title

Describe applied ML/CV work for retail and café operations, primarily Aaladipattiyan Karupatti Coffee. Separate the work into:

- Stock analysis and supply/transfer verification from central warehouse to outlets.
- Clean-versus-dirty utensil/glass classification and detection.
- Inventory monitoring and inference/application integration.
- Dataset development: image acquisition, annotation, preprocessing, augmentation, splitting, and quality review.

LinkedIn names three Kaggle datasets: **Clean/Dirty Glass Classification**, **Clean/Dirty Glass Object Detection**, and **Rangoli Detection**. Locate exact dataset links from a verified profile or source page. Describe Rangoli Detection as an additional dataset contribution unless evidence connects it to the café workflow.

Explain variable lighting, backgrounds, and camera angles as engineering challenges. Do not invent sales impact, percentage accuracy, stock savings, or deployment scope.

### 6.8 VEC Website Backend and Engineering Leadership

**Slug:** `vec-website`  
**Sources:** S1 p.2; S2 Leadership; existing project, experience, and WebOps pages after inspection

This is an engineering case study, with a separate organization entry for WebOps. Source-backed details include leading a 17-member team, Node.js/Express.js/MongoDB/Mongoose backend work, 50+ RESTful endpoints, authentication/database schemas, MERN integration, AWS deployment, CI/CD, monitoring, and access/security controls. Attribute the 17-member team statement to the role described in LinkedIn; do not imply personally writing all team output.

Explain personal architecture and implementation responsibilities, team practices, documentation, code review, and handover to the next cohort. Source assets include `vec-website-cover.png` and files under `public/webops/`. Keep team images on the detail page, subordinate to the technical story.

### 6.9 LifeConnect

**Slug:** `life-connect`  
**Sources:** S2 Leadership; S1 YRC technical role; existing `app/projects/life-connect/page.tsx`

The supported summary is a blood-donation platform connecting donors with people in urgent need, built/contributed to through YRC technical work. Recover the actual workflows, implementation, team roles, and supported scope from source code and existing project copy.

Do not invent donor counts, successful matches, clinical outcomes, launch geography, or emergency-service reliability. Keep a clear distinction between the platform contribution and the broader YRC volunteering history.

### 6.10 Earlier project pages requiring source extraction

| Canonical candidate | Existing source page | Known asset clues | Required before writing the case study |
|---|---|---|---|
| `/work/agrihub` | `app/projects/agrihub/page.tsx` | `public/agrihub/agrihub-interface-1.png` through `-4.png` | Establish problem, contribution, stack, implemented scope, and dates |
| `/work/breathy-sweet` | `app/projects/breathy-sweet/page.tsx` | `breathy-sweet-interface.png`, `breathy-sweet-report.pdf` | Read report; distinguish prototype results from claims or plans |
| `/work/crosslink` | `app/projects/crosslink/page.tsx` | `crosslink-project-banner.jpg` | Recover actual functionality; the name/banner establishes no technical facts |
| `/work/medinote-ai` | `app/projects/medinote-ai/page.tsx` | `public/medinote/product1.png` through `product3.png` | Establish the implemented workflow and limitations; do not infer clinical validation |
| `/work/yrc-website` | `app/projects/yrc-website/page.tsx` | Existing YRC assets | Separate this website from LifeConnect and other YRC tools |
| `/work/mterbs` | `app/research/mterbs/page.tsx` | `mterbs-system-diagram.jpeg`, two certificate images, research PDF | Read the paper; verify title expansion, authorship, contribution, evaluation, and publication status |

Every project listed on a current section index must link to a substantive individual page. If an older project cannot yet be responsibly migrated, link explicitly to its **existing archived project page** and label it “Earlier project - archived details.” Do not count an empty new route or “coming soon” screen as a completed case study. The goal is to migrate all source-supported project pages, while the archive provides continuity during gaps.

## 7. Expanded professional sections

### 7.1 Research index

Group entries as **Current investigations**, **Research prototypes**, and **Earlier research**. State project status in ordinary text. Do not create a Publications heading containing all projects. A Publications subsection may be added only when formal bibliographic details and actual status are established.

### 7.2 Projects index

Lead with Sentimatrix and EcoFloater, followed by retail ML/CV and VEC backend work. Then show earlier projects as compact rows. Cross-link research systems such as OSSARTH without duplicating their canonical pages. Start with a static list; filtering is unnecessary for this inventory size.

### 7.3 Experience index

Provide richer SGBC, Scrapify, and Inzpire descriptions, with source-supported dates and role titles. Keep WebOps primarily under Organizations, with a cross-reference if useful. Show GradGear only if source review establishes enough detail; otherwise retain it in the archive. Do not infer a current employer from a past project or educational affiliation.

### 7.4 About page

Use a short expanded biography, education, and a compact technical-focus list. Source-backed skills include Python/async/package development; intermediate C++ and CUDA; PyTorch/Hugging Face; vision-language model adaptation; multi-agent orchestration, MCP and RAG; REST APIs; caching, logging, and batch/pipeline engineering. Avoid proficiency percentages, logo walls, and every tool ever used.

### 7.5 Organizations and service

For WebOps, show role, engineering contribution, mentoring, and continuity practices. Reconcile the broad 2024–2026 résumé range with the narrower Feb 2025–Feb 2026 LinkedIn role.

For YRC, the LinkedIn export supports this progression:

| Role | Dates | Focus |
|---|---|---|
| Volunteer | Nov 2022–Sep 2023 | Participation in community initiatives; LinkedIn states 15+ initiatives |
| Joint Secretary | Sep 2023–Aug 2024 | Planning, logistics, volunteer coordination, and execution |
| Technical Head | Aug 2024–Oct 2025 | Technical tools, automation, internal software, and blood-donation platform work |

Use a simple chronological list, not an animated timeline. Put event galleries and individual participation certificates in the archive.

### 7.6 Awards and certifications

Distinguish awards, conference presentations, and course credentials. The résumé reports a research presentation at NCAIBIA 2025 in March 2025; it does not establish a best-paper award or an accepted journal article. The INNOTHAN/INNOTHON 2024 spelling differs across sources; keep competition history archived unless the owner later requests its inclusion.

The fuller certifications page can include verified PyTorch and other relevant credentials recovered from the actual PDFs. Dates and issuer names must come from the certificates. Displaying a filename or a course name in the old tree is not enough to claim a completed specialization. Avoid a wall of certificate thumbnails and duplicate certificates for each module when a specialization credential suffices.

## 8. Visual direction: a contemporary academic folio

### 8.1 Reference interpretation

The readable reference page introduces identity and affiliation first, explains research themes, presents selected work, and places supporting material later. Use that **clarity of hierarchy** as inspiration. Its rendered typography and spacing were not visually verified for this brief, so the specifications below are an original proposed design, not measured properties of the reference.

The desired impression is a carefully edited research profile: quiet, readable, technically substantive, and personal. Use whitespace, typography, alignment, and well-chosen language to establish quality.

### 8.2 Proposed design tokens

| Token | Proposed value | Use |
|---|---|---|
| Page background | `#FAF9F6` | Very light warm paper tone; no paper-texture image |
| Surface | `#FFFFFF` | Occasional figure/table background, not a card for every entry |
| Main ink | `#202522` | Primary text |
| Secondary ink | `#5A615C` | Dates and secondary metadata; verify contrast |
| Accent | `#245B4A` | Muted deep green for links and small emphasis |
| Divider | `#D8DCD6` | Thin section rules; not meaningful text |
| Reading width | Around `68ch` | Long case-study paragraphs |
| Homepage max width | Approximately `980px` | Main content envelope |
| Page gutter | `20px` mobile; `32–48px` desktop | Comfortable edges |
| Body text | `17–18px` desktop; `16–17px` mobile | Adjust after visual review |
| Body line-height | About `1.6–1.7` | Long-form readability |
| Main name | `42–52px` desktop; `32–38px` mobile | Strong identity without dominating the page |
| Section headings | `24–28px` desktop; `22–25px` mobile | Clear hierarchy |
| Metadata | `14–15px` | Still legible on mobile |
| Section spacing | `44–64px` desktop; `32–44px` mobile | Consistent vertical rhythm |
| Radius | `0–4px` where needed | Understated controls and figures |

These are starting values, not immutable pixels. Verify contrast and wrapping in the actual design. Do not use muted text so lightly that the academic aesthetic sacrifices accessibility.

### 8.3 Typography

Use a restrained serif for the name and major headings and a highly readable sans-serif for body/UI. One possible combination is a locally served Source Serif 4 heading family with an existing system sans-serif body stack. Georgia with a system sans-serif is an acceptable low-dependency fallback. Use at most two font families; code can use the system monospace stack.

Do not load fonts from the reference site or add a large font dependency solely for a fashionable pairing. Respect existing build/deployment constraints. Use actual typographic hierarchy instead of making every line bold or uppercase.

### 8.4 Layout behavior

- Keep a slim header with text navigation and a fine divider.
- Use a short introduction; avoid `min-height: 100vh` or a giant empty banner.
- On desktop, an optional portrait can occupy a small secondary column, approximately 140–180px wide. Keep prose dominant.
- Research and project entries should read as an ordered document: title link, brief metadata line, summary, and a small link row.
- Use a thin divider or whitespace between entries. Avoid repeated rounded, shadowed boxes.
- A compact date column can work on wide screens; stack dates above or below the title on narrow screens.
- No full-width stock image or campus-photo banner is required. The “research paper” character comes from the reading experience.
- Use actual project screenshots/diagrams only where they clarify the work. Homepage imagery is optional; case-study imagery should have captions.
- Links should be recognizable without relying on hover alone. Keep hover effects to subtle color/underline changes.

### 8.5 Mobile and accessibility

- Validate at 320, 375/390, 768, 1024, and 1440 CSS pixels. These are checks, not mandatory framework breakpoints.
- Use a single-column content layout on narrow screens; avoid fixed widths that create horizontal scrolling.
- Long project titles, URLs, affiliation text, and contact links must wrap cleanly.
- Keep navigation and interactive targets comfortably touchable, targeting roughly 44px for standalone controls.
- Use semantic `header`, `nav`, `main`, `section`, `article`, and `footer`; one page-level `h1` and ordered subheadings.
- Provide a visible-on-focus skip link and clear keyboard focus styles.
- Ensure all menus/disclosures work by keyboard, expose their expanded state, and restore focus appropriately.
- Respect reduced motion. Essential content must be visible without scroll-triggered reveal effects.
- Make anchor targets readable below a sticky header, if one is used, via an appropriate scroll offset.
- Keep the page usable at 200% zoom. Do not hide overflow globally to disguise a broken layout.
- Give meaningful images accurate alternative text; decorative images get empty alt text.
- On detail pages, allow wide technical tables/code to scroll in their own containers without widening the whole page.

### 8.6 Print and reading

Provide simple print styling for case studies and the About page: legible black text, white background, no sticky navigation, and sensible breaks around headings/figures. Do not introduce a new generated CV unless separately requested; the attached résumé remains the résumé download.

## 9. Preserve and migrate the existing site

### 9.1 Archive contract

The archive must preserve the historical site's visual identity, section structure, pages, and supporting media. It may receive the routing/layout changes needed to function under `/archive`, an archive notice, and fixes for migration regressions. A screenshot, a Git branch alone, or a link to GitHub does not satisfy the archive requirement.

Show a restrained notice on archive pages:

> Earlier portfolio - preserved as a historical record. Some details may be outdated. View the current portfolio.

The notice links to `/`. Record the actual archive snapshot date and original commit when implementation happens; do not label this brief's preparation date as the snapshot date without evidence.

### 9.2 Snapshot before editing

1. Inspect the working tree and preserve uncommitted user changes.
2. Record the source commit and the current route/asset inventory.
3. Create an implementation branch or isolated worktree using the repository's established workflow.
4. Capture the original site at representative desktop/mobile sizes when it can run.
5. Preserve the original résumé and other mutable downloads before replacing current versions.
6. Record a rollback path to the original site. Do not force-push or discard history.

A repository snapshot helps recovery; the browsable archive is a separate deliverable.

### 9.3 Legacy-route mapping

All 31 page routes identifiable from the supplied tree are accounted for below. Confirm the live checkout does not contain additional routes. “Current destination” means the destination of an incoming **old URL after migration**; the original page remains separately accessible in the archive.

| Existing URL | Preserved archive URL | Current destination or behavior |
|---|---|---|
| `/` | `/archive` | New homepage at `/` |
| `/about` | `/archive/about` | New About page at `/about` |
| `/articles` | `/archive/articles` | Redirect to `/archive/articles` |
| `/articles/agi-next-step-humanity` | `/archive/articles/agi-next-step-humanity` | Redirect to matching archive page |
| `/articles/ai-operating-systems-future` | `/archive/articles/ai-operating-systems-future` | Redirect to matching archive page |
| `/articles/ai-replacing-humans-jobs` | `/archive/articles/ai-replacing-humans-jobs` | Redirect to matching archive page |
| `/articles/ai-sports-commentary-future` | `/archive/articles/ai-sports-commentary-future` | Redirect to matching archive page |
| `/contact` | `/archive/contact` | Redirect to `/#contact` |
| `/experience` | `/archive/experience` | New Experience index at `/experience` |
| `/experience/gradgear` | `/archive/experience/gradgear` | Redirect to matching archive page unless supported migration is completed |
| `/experience/iitm-brain-centre` | `/archive/experience/iitm-brain-centre` | Redirect to `/work/multimodal-neuroscience` |
| `/experience/inzpire-solutions` | `/archive/experience/inzpire-solutions` | Redirect to `/work/retail-vision-systems` |
| `/experience/scrapify` | `/archive/experience/scrapify` | Redirect to `/work/ecofloater` |
| `/experience/vec-website` | `/archive/experience/vec-website` | Redirect to `/work/vec-website` |
| `/hackathons` | `/archive/hackathons` | Redirect to `/archive/hackathons` |
| `/leadership` | `/archive/leadership` | Redirect to `/organizations` |
| `/leadership/webops` | `/archive/leadership/webops` | Redirect to `/organizations#webops` |
| `/leadership/youth-red-cross` | `/archive/leadership/youth-red-cross` | Redirect to `/organizations#youth-red-cross` |
| `/projects` | `/archive/projects` | New Projects index at `/projects` |
| `/projects/agrihub` | `/archive/projects/agrihub` | `/work/agrihub` when ready; otherwise matching archive page |
| `/projects/breathy-sweet` | `/archive/projects/breathy-sweet` | `/work/breathy-sweet` when ready; otherwise matching archive page |
| `/projects/crosslink` | `/archive/projects/crosslink` | `/work/crosslink` when ready; otherwise matching archive page |
| `/projects/life-connect` | `/archive/projects/life-connect` | `/work/life-connect` when source-supported case study is ready; otherwise archive page |
| `/projects/medinote-ai` | `/archive/projects/medinote-ai` | `/work/medinote-ai` when ready; otherwise matching archive page |
| `/projects/sentimatrix` | `/archive/projects/sentimatrix` | Redirect to `/work/sentimatrix` |
| `/projects/vec-website` | `/archive/projects/vec-website` | Redirect to `/work/vec-website` |
| `/projects/yrc-website` | `/archive/projects/yrc-website` | `/work/yrc-website` when ready; otherwise matching archive page |
| `/research` | `/archive/research` | New Research index at `/research` |
| `/research/ecofloater` | `/archive/research/ecofloater` | Redirect to `/work/ecofloater` |
| `/research/mterbs` | `/archive/research/mterbs` | `/work/mterbs` when ready; otherwise matching archive page |
| `/research/ossarth` | `/archive/research/ossarth` | Redirect to `/work/ossarth` |

Use one explicit route manifest for migrations. Do not add a blanket `/projects/:path*` redirect that also captures the new index or routes. Confirm every redirect destination exists before enabling a redirect. Use permanent redirects only when the mapping is final and the host supports them.

### 9.4 Navigation and asset rebasing

- Archive navigation, logo/home links, breadcrumbs, project links, related-work links, and footer links should stay inside the archive unless explicitly labeled as links to the current site.
- Audit both `Link`/anchor hrefs and programmatic navigation. Check hard-coded absolute URLs pointing to the old domain too.
- A root-relative image such as `/ossarth-interface-1.png` may remain valid if the public file stays in place. Do **not** blindly prepend `/archive` to every URL.
- Preserve query strings and existing anchors when they matter. Check same-page anchors independently from cross-page links.
- Keep unchanged legacy assets at stable URLs where practical. Copy or namespace only assets that must differ between current and archived versions.
- Put the old résumé at a stable archived asset path, for example `/archive-assets/resume-before-redesign.pdf`, and update archive download links to that exact copy.
- Serve the supplied `current.pdf` as the current résumé, preferably at the existing public URL `/resume-siddharth-magesh.pdf` after preserving the original. Verify the downloaded bytes match the supplied file.
- Preserve original capitalization and spaces in legacy asset references on case-sensitive deployments. For newly added assets, prefer lowercase kebab-case names.
- Do not expose documents from `docs/official documents/` merely because they exist locally. Only intentionally published, relevant assets belong under `public/`.

### 9.5 Layout and style isolation

The tree includes theme providers, client wrappers, loading overlays, animation utilities, and global CSS. Their behavior is unverified; inspect them before designing the archive boundary.

Preferred approach when the legacy theme is strongly global: use **separate root layouts** for the current site and archive within the same App Router application, with the real `archive` path segment beneath the legacy route group. Keep new and legacy CSS/provider imports in their respective roots. Crossing between roots can use a normal document navigation. Multiple root layouts must be implemented according to the installed Next.js version; avoid retaining a conflicting top-level root layout. See Technical Reference T1.

If the existing architecture makes a shared neutral root simpler, it is acceptable only after scoping theme variables and legacy/global rules, separating providers and navigation, and proving there is no styling/state leakage in either navigation direction. Route groups alone do not scope CSS. Next.js documents that global styles can remain loaded during route navigation; use scoped styling or a genuine document boundary. See T2.

Do not set the whole application's `basePath` to `/archive`; the new homepage must remain at `/`. Do not place the old application in an iframe. Do not copy an old `.next` directory into `public` and expect a working standalone archive.

Keep required old dependencies until archive usage has been checked. Keeping the new homepage small does not justify breaking the archive by deleting components that only the archive imports.

### 9.6 Archive search behavior

Make archive pages clearly historical and exclude them from the current sitemap. Prefer `noindex, follow` metadata for archive HTML so obsolete biographies do not compete with current pages. Allow crawling of those pages so crawlers can see `noindex`; do not rely on a `robots.txt` disallow rule to remove them from search. See T5.

Give current pages their own canonical URLs. Do not canonicalize every archived detail page to the homepage; that incorrectly treats different content as equivalent. Archived PDFs require a separate hosting/header decision if their indexing matters.

## 10. Existing file structure: what to inspect and how to treat it

This inventory is based on S3. It identifies responsibility and migration intent, not verified implementation internals.

| Existing area | Files or contents identified in the tree | Implementation treatment |
|---|---|---|
| Root configuration | `package.json`, `package-lock.json`, `pnpm-lock.yaml`, `next.config.mjs`, `postcss.config.mjs`, `tsconfig.json`, `components.json` | Read actual versions, scripts, package-manager selection, build/export settings, aliases, and UI configuration before changes |
| Repository guidance | `README.md`, `LICENSE`, ignore/npm configuration | Preserve license and established workflow; read any actual `AGENTS.md` found in the checkout |
| App shell | `app/layout.tsx`, `app/page.tsx`, `app/globals.css` | Preserve original shell in the archive; create the current shell without leaking legacy presentation |
| Error and metadata routes | `app/error.tsx`, `app/not-found.tsx`, `app/sitemap.ts`, `public/robots.txt` | Update for the new route architecture and retain appropriate error handling |
| Existing page directories | `about`, `articles`, `contact`, `experience`, `hackathons`, `leadership`, `projects`, `research` | Migrate every route in Section 9; read every page's actual content |
| Main navigation | `components/navigation.tsx`, `components/footer.tsx` | Separate current and archived navigation/link logic |
| Client/provider layer | `client-provider-wrapper.tsx`, `client-provider.tsx`, `theme-provider.tsx` | Determine hydration/theme assumptions; keep old presentation providers archive-only where possible |
| Loading state | `global-loading-overlay.tsx`, `loading-screen.tsx`, `card-skeleton.tsx`, `contexts/LoadingContext.tsx`, project-specific `loading.tsx` | Preserve needed legacy behavior; do not import artificial loading experience into the new site |
| Presentation helpers | `animations.tsx`, `scroll-to-top.tsx`, `skills-visualization.tsx`, `page-templates.tsx` | Inspect coupling and consumers; new pages should use simpler layouts |
| Image and metadata helpers | `optimized-image.tsx`, `json-ld.tsx` | Reuse only after verifying compatibility, correctness, and current identity metadata |
| UI primitives | `components/ui/` includes buttons, links/navigation helpers, dialogs, forms, disclosure, charts, tables, and other components | Reuse only the needed primitives; do not rebuild the homepage as a grid of generic cards; retain archive dependencies |
| Hooks | `hooks/use-mobile.ts`, `use-mounted.ts`, `use-toast.ts`; similarly named helpers also appear under `components/ui/` | Inspect consumers before deduplicating; do not expand this redesign into unrelated cleanup |
| Utilities | `lib/utils.ts` | Reuse existing conventions where suitable |
| Project documentation | `docs/OVERVIEW.md`, `STYLE-GUIDE.md`, `IMPROVEMENTS.md`, `LINKS-UPDATE.md`, `TASKS.md` | Read for context; reconcile outdated design guidance with the user's current redesign instructions |
| Supporting documents | `docs/official documents/certifications/` and its professional, internship, presentation, publication, and service subfolders | Evidence to inspect selectively, not a folder to publish wholesale |
| Public project assets | Root project images; `agrihub/`, `medinote/`, `research-papers/` | Inspect and reuse accurately; preserve historical references |
| Public organization assets | `webops/`, `yrc/`, organization/team images | Use selectively on detail pages; preserve archive galleries |
| Public certificates | `CERTIFICATIONS/` with multiple subcategories, plus duplicated internship documents elsewhere | Verify exact credential and asset paths; do not delete duplicates until link usage is known |
| Legacy event assets | `hackathons/` and service photos | Preserve for the archive; exclude from primary homepage |
| Portraits and résumé | `professional-ai-researcher-portrait.JPG`, `siddharth-profile-vertical.png`, `resume-siddharth-magesh.pdf` | Visually inspect portrait authenticity/suitability; preserve old résumé and replace current download with S2 |
| Placeholder assets | Placeholder logos, user image, and image/SVG files | Never use placeholders in the finished current site; retain only if the archive still needs them |

For the live audit, produce a complete tracked-file inventory and inspect all application source/configuration/documentation files. Read lockfiles for resolved versions and package-manager consistency; there is no need to reproduce generated dependency metadata in the redesign documentation. Inventory binaries and visually inspect all assets chosen for the new site.

## 11. Link, document, and media handling

### 11.1 Source-backed contact destinations

| Label | Destination | Evidence |
|---|---|---|
| Email | `mailto:smagesh@usc.edu` | S1 summary and S2 |
| GitHub | `https://github.com/Siddharth-magesh` | Link embedded in S2 |
| LinkedIn | `https://www.linkedin.com/in/siddharth-magesh` | Clean link embedded in S2 |
| Current site | `https://siddharth-magesh.me/` | User-provided domain |
| Résumé (PDF) | `/resume-siddharth-magesh.pdf` | Existing public filename; replace with S2 after preserving prior version |
| Earlier portfolio | `/archive` | New local route |

Do not reuse the LinkedIn export's tracking/query parameters. Do not add Google Scholar, ORCID, a lab page, Kaggle profile, project repository, or publication link by guessing its URL. Discover those from the actual sources and validate them. If a project link is unavailable, omit the link and retain the supported prose.

### 11.2 Media selection

- Inspect the two existing portrait candidates. Use a real, recognizable photo if appropriate; a filename alone does not establish whether an image is authentic or generated. If neither is suitable, a text-only hero is a complete design.
- Reuse the OSSARTH diagrams/screenshots, Sentimatrix diagram, EcoFloater image, and relevant project screenshots only after checking they match current page claims.
- Preserve source aspect ratios and give images explicit dimensions to prevent layout shifts.
- Optimize new delivery copies without overwriting originals. Lazy-load below-the-fold figures; load the portrait promptly only if it is actually above the fold.
- Avoid huge certificate PDFs or image galleries loading with the homepage. Link to relevant documents on detail pages.
- Use captions to distinguish architecture sketches, implemented interfaces, prototypes, and team photos.
- Keep file labels honest: “Report,” “Manuscript,” “Certificate,” and “Résumé” are different artifacts.

### 11.3 Source documents are not public pages

The LinkedIn export and internal content ledger are authoring references, not new public downloads. The supplied résumé is intended to be the current résumé download. Do not copy the full source PDFs or working extraction text into a publicly served directory indiscriminately.

## 12. Conflicts and owner-review queue

These are concrete differences found in the supplied materials. The implementation can proceed using safe wording; review the affected facts before replacing them with a more specific public claim.

| Topic | LinkedIn export | Résumé | Safe default and next action |
|---|---|---|---|
| Inzpire organization spelling | Inzpire Solutions | Inspire Solutions | Use Inzpire provisionally because S1 and existing route agree; verify official spelling |
| Inzpire dates | Feb–May 2025 | 2023–2024 | Omit dates from public rows until reconciled; do not combine into an invented 2023–2025 role |
| Inzpire title | Software Developer Internship | AI/ML Intern | Use a functional work description; verify official title separately |
| Café client spelling | Aaladipattiyan Karupatti Coffee | Aladipattiyan Karupatti Coffee | Use S1 spelling provisionally; verify when adding a formal organization link |
| Scrapify title | AI Software Engineer | AI Research Intern | Describe AI engineering work without asserting employment seniority/status; confirm exact title |
| Scrapify dates | Nov 2024–Jan 2025 | 2024–2025 | Use 2024–2025 safely; detailed months can use S1 after reconciliation |
| VEC degree completion | March 2026 | May 2026 | Show 2026 until confirmed |
| IIT Madras credential | B.S. Programming and Data Science, Sep 2022–May 2026 | Diploma in Data Science, 2022–2026 | Show the résumé-supported diploma; confirm whether the B.S. was awarded and whether both credentials should be listed |
| WebOps duration | Backend role Feb 2025–Feb 2026 | Combined leadership role 2024–2026 | Avoid conflating membership/leadership duration with backend role duration; verify chronology |
| OSSARTH publication status | Not specified in export | Manuscript submitted for publication | Use “research prototype”; submitted status can be stated with the supplied-source caveat in internal records; verify latest bibliographic status |
| MTERBS publication status | Not specified | Not specified | Read actual paper and records; do not infer publication from folder name |
| Competition name | INNOTHON ’24 | INNOTHAN 2024 | Keep in archive by default; verify spelling against certificate if surfaced later |
| Research award wording | Inquisitive Innovator, described as Best Researcher | Inquisitive Innovator Award, Riddhi-26 | Use the common official-looking award name; verify “Best Researcher” before using as a separate title |
| Project/package links | No dedicated Projects section or exact package links | Describes package publication but no exact package URL | Recover actual links; do not guess |

The queue should also record any source-only gaps: project dates, sole/team ownership, current maintenance, exact repository locations, current paper status, and availability of public evidence. These are not a reason to interrupt every implementation step with questions. Finish the reviewable site using safe defaults, then present one concise list of remaining factual decisions.

## 13. Required repository audit before coding

Perform this inside the actual repository. Do not claim this audit has already happened merely because S3 exists.

1. **Establish the checkout.** Read applicable repository instructions, inspect `git status`, record the current commit, and identify the intended branch. Do not overwrite uncommitted changes.
2. **Inventory the actual files.** Start with `rg --files` and version-control tracking. Compare all route files, assets, and docs with S3. Identify additions, removals, dynamic routes, and redirects.
3. **Read the application.** Inspect every page, layout, provider, navigation/footer, shared page template, global style file, metadata helper, and relevant hook. Search route paths, asset references, and external links across source files.
4. **Read configuration.** Establish actual Next.js/React versions, TypeScript settings, dependency usage, package-manager choice, and deployment mode. Both npm and pnpm lockfiles appear in the supplied tree; check `packageManager`, CI, and the current workflow before choosing commands or removing anything.
5. **Establish baseline behavior.** Run the repository's documented install/build/type/lint commands as available. Record pre-existing failures separately from regressions. Inspect the site at desktop/mobile sizes when execution is possible.
6. **Audit content.** Compare existing biographies, education, role dates, project statuses, paper citations, and contacts with S1/S2. Extract older work descriptions without carrying unsupported claims into the new site.
7. **Audit assets and documents.** Open selected images and relevant project/certificate PDFs. Determine which assets are referenced, duplicated, obsolete, or placeholders.
8. **Choose the archive boundary.** Decide between the isolated root-layout approach and a demonstrably safe shared root based on actual coupling.
9. **Write audit notes.** Record real findings in `docs/portfolio-redesign-audit.md`, including versions, hosting evidence, route count, actual commands, known issues, and migration decisions.

If the source checkout is unavailable in the implementation environment, request the repository ZIP or a usable checkout. Continue content preparation, but do not simulate having inspected code. This brief already provides defaults for design and content; ordinary layout choices do not need further clarification.

## 14. Implementation architecture

### 14.1 Stay within the established stack

The file tree suggests Next.js App Router with TypeScript and reusable UI primitives. Confirm this, then build on it. Do not replace the framework, add a CMS/database, introduce authentication, add a chatbot, or perform a major dependency upgrade merely to redesign a content website.

Prefer prerendered/server-rendered content and small client components only for genuine interactions. Do not mark the entire homepage or all case-study content `use client`. Keep legacy animation/loading dependencies out of the current-page import graph where possible.

Use the installed framework's APIs and documentation. The technical references at the end of this brief describe current conventions; they are not evidence of the repository's version.

### 14.2 Suggested organization

The following is a proposed responsibility map, not a claim about files already present. Adjust it to the audited app without introducing duplicate URL paths.

| Proposed path/area | Responsibility |
|---|---|
| `app/(current)/layout.tsx` | Current root shell, current styling, metadata defaults, navigation and footer |
| `app/(current)/page.tsx` | Homepage composition |
| `app/(current)/about/page.tsx` | Expanded background and education |
| `app/(current)/research/page.tsx` | Research index |
| `app/(current)/projects/page.tsx` | Projects index |
| `app/(current)/experience/page.tsx` | Experience index |
| `app/(current)/organizations/page.tsx` | Organizations/service index |
| `app/(current)/awards/page.tsx` | Recognition index |
| `app/(current)/certifications/page.tsx` | Credential index |
| `app/(current)/work/[slug]/page.tsx` | Shared case-study route |
| `app/(legacy)/layout.tsx` | Legacy root shell and isolated legacy providers/styles |
| `app/(legacy)/archive/...` | Copies/moves of all old routes with corrected internal links |
| `components/portfolio/` | Current header/footer, section, work-entry, role-row, document-link, case-study components |
| `components/legacy/` or equivalent | Legacy components that need preservation or archive-specific link behavior |
| `content/profile.ts` | Public biography, contact links, education, and navigation data |
| `content/work/` | Case-study metadata and substantive body content |
| `content/experience.ts` | Role history |
| `content/organizations.ts` | Organization/service history |
| `content/credentials.ts` | Awards and certifications |
| `lib/portfolio-routes.ts` | Canonical routes and explicit legacy mappings |
| `docs/portfolio-content-ledger.md` | Internal claim/source/conflict records; never a public content export |
| `docs/portfolio-redesign-audit.md` | Actual source audit findings |
| `docs/portfolio-migration.md` | Snapshot, route mapping, archive implementation, and rollback notes |
| `docs/portfolio-content-guide.md` | How to update selected work, add a case study, or replace the résumé |

With the separate-root approach, move the responsibilities of the existing top-level `app/layout.tsx` into the appropriate roots; do not keep an unintended third root wrapper. Handle not-found/error pages using the installed version's supported conventions. Route-group names in parentheses do not appear in URLs, so the real `archive` directory is necessary. See T1.

### 14.3 A single source for current work

Use structured content so the same project title, status, summary, and canonical URL stay consistent across homepage, index, metadata, and detail page. MDX is suitable if already supported; otherwise typed data and server-rendered content components are sufficient. Do not add a complex content pipeline for fourteen candidate work pages.

An illustrative public model:

```ts
type WorkKind = "research" | "software" | "applied-ai" | "engineering";
type WorkStatus = "ongoing" | "prototype" | "completed" | "earlier-work";

type WorkEntry = {
  slug: string;
  title: string;
  summary: string;
  kind: WorkKind;
  status: WorkStatus;
  roleLabel?: string;
  organization?: string;
  dateLabel?: string;
  homepageSection?: "research" | "projects";
  homepageOrder?: number;
  publish: boolean;
  sections: Array<{ id: string; title: string; paragraphs: string[] }>;
  links: Array<{ label: string; href: string; kind: "code" | "paper" | "package" | "dataset" | "demo" | "report" }>;
  media?: Array<{ src: string; alt: string; caption: string; width: number; height: number }>;
  relatedSlugs?: string[];
};
```

This is a design example, not a requirement to flatten every page into paragraphs. Add lists, tables, or typed blocks when the content needs them. Keep private provenance, unresolved claims, and source-document paths in separate internal records. Do not import those records into a client bundle or serve them from `public`.

Publication status belongs in a separate, evidenced field if needed; the fact that a software project is completed says nothing about paper acceptance. Homepage selection must be explicit, not “the first N files in a folder.”

### 14.4 Routes, metadata, and deployment

- Derive case-study paths and sitemap entries from the same published-work registry. Exclude drafts, archived pages, redirect aliases, and unavailable placeholders.
- For statically generated dynamic case-study pages, generate the published slugs with the installed version's supported `generateStaticParams` behavior. Unknown slugs should return a proper 404, not a generic project template. See T4.
- Determine whether hosting uses a Next.js runtime or static export. Do not assume the repository is on Vercel or GitHub Pages.
- **If using static export:** generate all detail paths; Next.js runtime redirects, rewrites, headers, and the default image optimizer are not available in that mode. Use supported host-level redirect rules when available, and configure a compatible image strategy. If the host has no redirect support, use explicit static legacy landing pages with a working destination link and document that they are not HTTP redirects. See T3.
- **If using a Next.js runtime:** implement explicit server/host redirects using the installed version's conventions. Verify response codes and destinations.
- Keep one authoritative `/robots.txt`; the supplied tree already has `public/robots.txt`. If switching to a generated metadata route, remove the competing route/file intentionally rather than serving both. See T6.
- Give pages specific titles/descriptions, a consistent canonical domain, and accurate social previews. Reuse `json-ld.tsx` only after verifying that it does not retain outdated titles, education, or publication claims.
- Use conservative structured data such as a person/profile and relevant creative work types. Do not mark every project as a scholarly publication.
- Keep the existing domain and hosting arrangement unless migration is separately required. Do not introduce DNS or account changes merely to create the archive.

### 14.5 Error handling and performance

Use a useful current-site 404 with links to the homepage, projects, and archive; legacy missing links should also lead readers somewhere sensible. The new experience should render content immediately, without timers, fake loading screens, or route-transition overlays.

Optimize image delivery and avoid loading archive galleries, heavy animation code, or unused UI widgets on the homepage. Retain only functionality that supports reading, navigating, or understanding the work. Treat performance as a measured implementation property, not a claim to place in the biography.

## 15. Implementation sequence and deliverables

### Phase 1 - Audit and preservation

Complete Section 13, establish the actual baseline, save the archive snapshot, and finalize the route manifest. Record all source conflicts in the internal ledger. Establish a working archive before replacing the original root experience.

**Exit condition:** the original pages and assets are recoverable, the proposed routing is compatible with hosting, and the actual code structure is understood.

### Phase 2 - Design foundation and current homepage

Implement the current shell, typography, spacing, responsive navigation, and source-grounded homepage content. Review the desktop and mobile layout using real copy. Establish the case-study typography before populating every detail page.

**Exit condition:** the homepage communicates the graduate identity and current research clearly, shows the five selected work entries, and is visually coherent at narrow and wide widths.

### Phase 3 - Substantive work and expanded sections

Complete the six primary case studies: reasoning/verification, SGBC multimodal research, OSSARTH, Sentimatrix, EcoFloater, and retail vision systems. Complete VEC backend and LifeConnect pages using source evidence. Extract the six earlier project/research pages in Section 6.10 and migrate all that can be supported; otherwise retain their substantive archived destinations with explicit archive labels.

Build the seven expanded sections: About, Research, Projects, Experience, Organizations, Awards, and Certifications. Populate them from structured content rather than duplicating independent claims throughout the app.

**Exit condition:** every public project link reaches real content, and readers can go from summary to technical detail without dead ends or placeholder pages.

### Phase 4 - Migration and verification

Complete legacy aliases, archive links, résumé replacement, metadata, current sitemap, and archive indexing policy. Check links and downloads in a production build, then inspect cross-navigation between the two visual systems.

**Exit condition:** the new site and preserved archive both work; regression and content checks in Section 16 pass or have specific documented blockers.

### Phase 5 - Reviewable handoff

Provide:

- The implemented source changes in the working branch/check-out.
- A local or preview build using the existing authorized workflow.
- Desktop and mobile screenshots of the new homepage, a representative case study, and the archive.
- A concise change report covering what changed, how the archive works, validation performed, and remaining factual questions.
- The audit, content ledger, migration/rollback notes, and content-maintenance guide.
- A list of any unavailable source artifacts or checks that could not run, without calling them passes.

Prepare the complete reviewable result before requesting any genuinely necessary final decisions. Production publication should follow the owner's existing authorization and deployment workflow; this brief alone does not supply hosting credentials or authorize unrelated account changes.

## 16. Acceptance criteria and verification plan

### 16.1 Content and hierarchy

- [ ] The first section identifies Siddharth as a USC M.S. Computer Science student and provides the preferred email and résumé.
- [ ] Current reasoning/verification research is prominent and accurately labeled ongoing.
- [ ] SGBC, OSSARTH, Sentimatrix, and EcoFloater are visible on the primary homepage.
- [ ] The new homepage contains the requested professional categories without becoming an exhaustive activity list.
- [ ] Education uses safe credential/date wording; the IIT Madras B.S./Diploma difference is not silently resolved by inventing a degree claim.
- [ ] There is no new hackathon section or prominent event/participation gallery.
- [ ] Projects have personal contribution, implementation scope, evidence, and limitations where sources support them.
- [ ] Manuscripts, prototypes, research directions, and publications are not conflated.
- [ ] Unsupported metrics, fake citations, fake repository links, and placeholder text are absent.
- [ ] Current contact links and the actual downloaded résumé match the chosen source data.

### 16.2 Visual and interaction checks

- [ ] The site is restrained and text-led, with no decorative loading experience or animated card grid.
- [ ] The opening viewport is useful and the first work section arrives after a short scroll.
- [ ] Real content is reviewed at 320px, a typical phone width, tablet width, and desktop width.
- [ ] There is no page-level horizontal overflow, clipped navigation, overlapping headings, or tiny metadata.
- [ ] At 200% zoom, content and controls remain usable.
- [ ] Section links, Back navigation, direct detail URLs, and mobile menu behavior work.
- [ ] Focus styles, skip navigation, semantic headings, alt text, and reduced-motion behavior are checked.
- [ ] Long project pages have readable paragraphs, figures, captions, lists, and tables.
- [ ] A fresh page load and in-app navigation produce the same intended styles.

### 16.3 Migration checks

- [ ] Every original route found in the actual checkout has an archive equivalent or an explicitly documented exception.
- [ ] All 31 routes from Section 9 are covered at minimum; additions found during audit are included too.
- [ ] Archive navigation stays within `/archive` except explicit links to the current site.
- [ ] All original required images and downloads resolve, including case-sensitive and space-containing paths.
- [ ] The archived résumé is the old file; the current résumé is S2.
- [ ] Old public URLs resolve to valid current or archived destinations without loops or accidental catch-all capture.
- [ ] Current pages and archive pages have the intended metadata and indexing behavior.
- [ ] Navigation current → archive → current does not carry over a theme, loading overlay, typography, or incorrect header/footer.
- [ ] A documented rollback restores the earlier root experience if needed.

### 16.4 Meaningful technical verification

Use the repository's real scripts; do not invent passing command names. At minimum, run the supported production build, type checks, and configured linting. Record pre-existing issues separately.

A compact automated smoke check is justified for this migration because broken deep links and archive regressions are concrete risks. Check the route manifest for destination availability, the 31+ archive pages, the new indexes, all published work slugs, unknown-slug 404 behavior, and required asset/download responses. Verify content titles where a generic 200 response could hide a missing route.

Use browser checks for the primary reading flow, responsive navigation, representative detail pages, and bidirectional archive transitions. Test a production build because CSS behavior and hosting redirects can differ from development. An accessibility scan can supplement keyboard/manual review; it does not replace it.

Set practical project performance goals such as fast first content, no artificial waiting, minimal layout shift, and small current-page assets. If Lighthouse is available, record actual mobile results and fix material problems. A useful aspirational target is 90+ Performance and 95+ Accessibility on representative current pages; do not claim these scores without measuring. Do not rewrite unrelated systems merely to optimize a score.

Stop adding tests once these concrete migration and usability risks are adequately covered. The goal is a reliable, reviewable portfolio, not a new testing platform.

## 17. Maintenance rules for the finished portfolio

- A new work item should require adding one structured entry/body and selecting its homepage placement, not editing several independent copies.
- Keep homepage selections capped at three research entries and two software/systems entries by default. A new highlight should replace an older selection, not endlessly lengthen the front page.
- Add results only when there is a source and clear evaluation context.
- Update publication status, role dates, and education status deliberately; do not infer them from elapsed time.
- Keep original project and archive URLs stable after launch where possible.
- Replace the current résumé using the documented process without modifying the historical copy.
- Treat the archive as a historical snapshot. New achievements belong in the current site, not retroactively in the old biography.
- Do not add a news feed, blog, filter system, CMS, analytics service, or contact-form backend unless there is a real maintenance need or a later request.

## 18. Copy-paste task for the implementing Codex

Give Codex this entire Markdown file, the actual repository checkout, and the three source attachments. Use this instruction:

> Implement the portfolio redesign described in `Portfolio_Redesign_Codex_Brief.md` in the existing Portfolio repository. Read the full brief and repository instructions before editing. First audit the actual code, routes, assets, package versions, and hosting configuration; the brief was prepared from the supplied PDFs and directory tree because repository access was blocked. Preserve a working copy of the old site under `/archive`, then build the new responsive academic-style homepage, expanded sections, and substantive project pages. Use the included source-grounded copy and safe factual defaults. Keep ongoing research, prototypes, and publication claims distinct. Complete all source-supported work, verify the production build and migration behavior, and provide a reviewable preview, screenshots, and concise handoff notes. Do not stop after producing another plan. Do not invent facts or silently replace unverified project details with generic copy.

If the attachments are not already in the implementation workspace, provide `Profile (1)(2).pdf`, `current.pdf`, and `project_structure.txt` alongside this brief. Do not rely on temporary paths from the environment that created this document.

## 19. Reference register

### Owner-supplied sources

- **S1:** `Profile (1)(2).pdf`, four-page LinkedIn export. Key locations: p.1 summary/current research; p.2 SGBC, WebOps, and YRC Technical Head; p.3 YRC progression, Inzpire, and Scrapify; p.4 Scrapify continuation and Education.
- **S2:** `current.pdf`, one-page résumé. Sections: Professional Summary, Education, Experience, Projects, Technical Skills, Licenses & Certifications, Achievements & Honors, Technical Leadership & Service.
- **S3:** `project_structure.txt`, complete supplied directory listing. Paths in this brief originate from that listing and require verification against the actual checkout.
- **S4:** [Current portfolio](https://siddharth-magesh.me/) - not retrieved during preparation.
- **S5:** [Portfolio source repository](https://github.com/Siddharth-magesh/Portfolio) - not retrieved during preparation.
- **S6:** [Sai Praneeth Karimireddy's website](https://spkreddy.org/) - readable information structure reviewed as design inspiration; rendered appearance not verified.

### Primary technical references

Consult the documentation matching the installed framework version during implementation. These pages were consulted for the planning constraints, not to determine repository versions.

| ID | Reference | Relevant constraint |
|---|---|---|
| T1 | [Next.js route groups](https://nextjs.org/docs/app/api-reference/file-conventions/route-groups) | Groups do not add URL segments; multiple root layouts and route conflicts need deliberate handling |
| T2 | [Next.js CSS guidance](https://nextjs.org/docs/app/getting-started/css) | Global styles can persist during navigation; scope or isolate styles and test production behavior |
| T3 | [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports) | Export mode lacks runtime redirects/rewrites/headers and default server image optimization |
| T4 | [Next.js generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) | Build-time generation of dynamic detail-page paths |
| T5 | [Google Search: noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing) | Crawlers must be able to retrieve pages to observe their noindex directive |
| T6 | [Next.js robots metadata](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) | Choose one deliberate robots.txt implementation |
