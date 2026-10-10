import type { WorkEntry } from "./work"

export const earlierWork: WorkEntry[] = [
  {
    slug: "agrihub", title: "AgriHub", subtitle: "An earlier agricultural platform prototype.",
    summary: "A team project bringing farming information, marketplace workflows, and AI-assisted agricultural tools into a shared web interface.",
    kind: "software", status: "Earlier project", publish: true,
    sections: [
      { title: "Problem and contribution", paragraphs: ["AgriHub explored a common interface for connecting farmers and buyers, finding farming information, and using image and language tools for crop-related questions. I contributed to the team’s agricultural platform work. The historical portfolio documents the project and its interface screenshots."] },
      { title: "Approach and implementation", paragraphs: ["The recorded approach combines a marketplace and dashboard with QuickFarm chatbot interactions, crop-image analysis, and agricultural information. The historical stack names Python, PyTorch, SQL, YOLOv8, and language-model components including TinyLlama, Llama-2-7B, and Phi-3-mini.", "The project describes image-based leaf disease detection, fruit counting, and crop classification alongside language-based information access. These components have different data and evaluation requirements. Their appearance in the platform account does not establish agronomic accuracy or effectiveness in the field."] },
      { title: "Evidence and boundaries", paragraphs: ["The archived study contains four interface screenshots and a source-code link. It lists future work including database optimization, agricultural model training, frontend development, and expanded language support.", "Planned features are not treated as completed deployments. No adoption, yield improvement, or marketplace impact is claimed. Detailed individual ownership beyond the documented team contribution is not asserted."] },
    ], links: [{ label: "Archived interfaces & project details", href: "/archive/projects/agrihub" }],
  },
  {
    slug: "breathy-sweet", title: "Breathy Sweet", subtitle: "A breath-sensing and health-interface prototype.",
    summary: "An earlier team prototype exploring breath-acetone sensing, connected hardware, and a mobile health-data interface.",
    kind: "applied-ai", status: "Earlier prototype", publish: true,
    sections: [
      { title: "Context and contribution", paragraphs: ["Breathy Sweet explored breath analysis as an input to a connected health-monitoring concept. The project report names me as team leader of the Igniters team. The work brought together sensing, data processing, a prediction concept, and a mobile interface."] },
      { title: "Proposed system", paragraphs: ["The report describes breath-sample acquisition, acetone and CO₂ sensors, an ESP32 microcontroller, and transfer of processed measurements to a mobile application. It proposes machine-learning analysis of sensor data and visualization of trends.", "The system description also includes calibration equipment, cloud storage, alerts, and health insights. These are recorded as the report’s design scope; the material does not independently establish a complete validated medical device."] },
      { title: "Evidence and limitations", paragraphs: ["The report and historical interface image are available for review. Its results section makes qualitative claims about correlation and prediction but does not provide a sample size, error analysis, or clinical validation protocol sufficient to substantiate medical accuracy.", "This is an exploratory prototype, not a validated glucose monitor. Proposed readings are not evidence for clinical decisions. No patent or regulatory status is claimed."] },
    ], links: [{ label: "Project report (PDF)", href: "/breathy-sweet-report.pdf" }, { label: "Archived prototype interface", href: "/archive/projects/breathy-sweet" }],
  },
  {
    slug: "crosslink", title: "CrossLink", subtitle: "Event and attendance tooling for Youth Red Cross.",
    summary: "A progressive web application for YRC event administration, QR-based attendance, member records, and document generation.",
    kind: "engineering", status: "Earlier project", context: "Youth Red Cross", publish: true,
    sections: [
      { title: "Problem and contribution", paragraphs: ["CrossLink addresses the administrative work around student service events: maintaining member information, recording attendance, and preparing documents. I contributed to this YRC software project as part of the organization’s technical work."] },
      { title: "Implementation", paragraphs: ["The historical implementation describes a React 18 frontend built with Vite and a Flask REST API backend. MongoDB stores member and event data; the backend account describes Blueprint modules and JWT authentication. The progressive web application includes service-worker support and an installable interface.", "QR-based attendance and template-driven document generation form the central workflow. Related automation tools include ID-card generation from CSV data using Pillow and ReportLab, and a Google Drive organization utility. These are related contributions, rather than a claim that every capability shares one deployment."] },
      { title: "Evidence and limitations", paragraphs: ["The archived case study includes the source repository and supporting automation projects. It separates existing work from future directions such as ERP integration, predictive analytics, and expanded native-device capabilities.", "No quantified reduction in administrative time or independently verified offline reliability is reported. The project is preserved as earlier engineering work without inferring its current deployment status."] },
    ], links: [{ label: "Archived implementation & source links", href: "/archive/projects/crosslink" }], related: ["life-connect", "yrc-website"],
  },
  {
    slug: "medinote-ai", title: "MediNote AI", subtitle: "A medical-documentation workflow prototype.",
    summary: "An earlier team project exploring speech transcription, language-model processing, and structured document generation.",
    kind: "software", status: "Earlier prototype", publish: true,
    sections: [
      { title: "Problem and contribution", paragraphs: ["MediNote AI explored turning a spoken interaction into a structured document. I contributed to this team project combining speech recognition, language-model processing, and report generation. Its intended setting was medical documentation, where preserving the meaning of a conversation is central to the task."] },
      { title: "Recorded workflow", paragraphs: ["The historical project describes capturing speech, transcribing it, processing the transcript with GPT-4, and generating a PDF report. The application account also describes multilingual support and a documentation interface.", "Portfolio materials include interface images and a source-code link. They support describing a functional prototype and its components, but do not establish that the generated documents are medically accurate or suitable for autonomous use."] },
      { title: "Evidence and limitations", paragraphs: ["A transcription or language-model error can propagate into a structured report. The materials do not provide a clinical validation study, a documented error rate, or an independently audited privacy and deployment assessment.", "This is an earlier documentation prototype. It does not establish clinical deployment, reliable prescription generation, or a replacement for professional review. Dates are omitted because historical sources disagree."] },
    ], links: [{ label: "Archived interfaces & source link", href: "/archive/projects/medinote-ai" }],
  },
  {
    slug: "yrc-website", title: "Youth Red Cross Website", subtitle: "A content-managed website for a student service organization.",
    summary: "Website and content-management work supporting Youth Red Cross communication and organizational continuity.",
    kind: "engineering", status: "Earlier project", context: "Youth Red Cross · Velammal Engineering College", publish: true,
    sections: [
      { title: "Context and contribution", paragraphs: ["The YRC website supported communication about activities, events, and membership. I contributed to its technical work. Its purpose is separate from LifeConnect’s blood-donation coordination and CrossLink’s event-administration workflow."] },
      { title: "Implementation approach", paragraphs: ["The historical project describes a WordPress site with a content-management interface suitable for non-technical contributors. Customization, responsive presentation, event content, and member-facing information were part of the recorded scope.", "A content-management system allowed ongoing updates by the organization without requiring a developer for every content change. The legacy account also discusses hosting, backups, and maintenance responsibilities."] },
      { title: "Evidence and limitations", paragraphs: ["The archived page preserves the website’s original description, its content-management approach, and the organization’s plans for future enhancements.", "Expanded member portals and analytics belonged to the project roadmap. The case study focuses on website and content-management work rather than treating those plans as completed features."] },
    ], links: [{ label: "Historical website project", href: "/archive/projects/yrc-website" }], related: ["life-connect", "crosslink"],
  },
  {
    slug: "mterbs", title: "MT-ERBS", subtitle: "Simulation-based exploration of emergency traffic prioritization.",
    summary: "Earlier research into signal coordination for emergency vehicles, with a Python benchmarking tool and a broader proposed traffic-management architecture.",
    kind: "research", status: "Earlier research prototype", publish: true,
    sections: [
      { title: "Problem and authorship", paragraphs: ["MT-ERBS explores traffic-signal coordination for ambulance passage. The manuscript title is “Manipulating Traffic for Effective Rescue by Bypassing the Signals.” I co-authored it with Arjun V L and Gokulramanan V.", "The work combines a broad proposed architecture with a narrower simulation study. A proposed citywide emergency coordination system is much broader than a grid-based traffic benchmark."] },
      { title: "Implemented simulation", paragraphs: ["The manuscript describes a Python benchmarking tool with a grid of intersections, stochastic vehicle arrivals, queues, traffic signals, and a single ambulance on a predetermined route. It compares a fixed-time baseline with signal manipulation along the ambulance corridor.", "Recorded outputs include blocking time, travel time, vehicle delay, spillbacks, throughput, and signal switching. The paper includes two visual test cases and links to benchmark code."] },
      { title: "Proposed architecture", paragraphs: ["The wider design includes perception, route planning, coordinated signal control, and multi-ambulance handling. The future-work section places richer road networks, deployed IoT infrastructure, AI-based control, dynamic rerouting, and multiple concurrent ambulances beyond the implemented benchmark."] },
      { title: "Evaluation and limitations", paragraphs: ["The benchmark explores signal-control behavior in a simplified simulation. Its assumptions include a predetermined route and one ambulance; richer road networks, concurrent emergencies, and real-world driver behavior remain outside that evaluation.", "This is simulation-based earlier research. The manuscript and archived demonstration document the prototype; field deployment and safety validation remain separate research and engineering tasks."] },
    ], links: [{ label: "Manuscript (PDF)", href: "/research-papers/MTERBS-Research-Paper.pdf" }, { label: "Archived research details", href: "/archive/research/mterbs" }], related: ["ossarth", "ecofloater"],
  },
]
