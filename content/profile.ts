export const profile = {
  name: "Siddharth Magesh",
  affiliation: "M.S. Computer Science, University of Southern California",
  location: "Los Angeles, California",
  email: "smagesh@usc.edu",
  github: "https://github.com/Siddharth-magesh",
  linkedin: "https://www.linkedin.com/in/siddharth-magesh",
  resume: "/resume-siddharth-magesh.pdf",
  resumeLabel: "Résumé (PDF)",
  introduction: [
    "I’m a master’s student in Computer Science at the University of Southern California, working at the intersection of language-model verification, multimodal learning, and agentic systems. My current research examines autoregressive–diffusion complementarity, verifier error correlation, and calibration under constrained inference budgets. Through GRIDS, I’m also developing permission mechanisms that reconcile adaptive agent behavior with explicit user-defined boundaries.",
    "Previously, at IIT Madras’s Sudha Gopalakrishnan Brain Centre, I adapted language and vision-language models for computational neuroscience and digital histology. My engineering experience spans resource-constrained perception, hierarchical agent orchestration, reusable Python infrastructure, and production backend architecture, connecting model-level experimentation with dependable system design.",
  ],
}
export const education = [
  { name: "University of Southern California", degree: "M.S. Computer Science", date: "2026–2028", detail: "Expected May 2028 · Los Angeles, California" },
  { name: "Velammal Engineering College, Anna University", degree: "B.Tech, Artificial Intelligence and Data Science", date: "2026", detail: "Honors in Full Stack Development" },
  { name: "Indian Institute of Technology Madras", degree: "Diploma in Data Science", date: "2022–2026", detail: "" },
]
export const experience = [
  { name: "Graduates Rising in Data Science (GRIDS)", role: "Member", date: "Oct 2026–Present", location: "Los Angeles, California", summary: "Developing Permissions That Learn: fixed user-defined boundaries, a decision gatekeeper, and approval-learning memory for AI agents. Evaluating interruptions, unauthorized actions, and permission creep in simulated AgentDojo tasks." },
  { name: "Sudha Gopalakrishnan Brain Centre, IIT Madras", role: "LLM Researcher", date: "Dec 2025–Feb 2026", location: "Chennai, India", summary: "Adapted LLMs and vision-language models for computational neuroscience and digital histology. Built pipelines for Nissl/H&E imagery, MRI-linked data, and biomedical annotations, covering alignment, fine-tuning, inference, and evaluation on NVIDIA DGX A100 infrastructure.", slug: "multimodal-neuroscience" },
  { name: "WebOps Club, Velammal Engineering College", role: "Vice Chairman & Lead Backend Developer", date: "Feb 2025–Feb 2026", location: "Chennai, India", summary: "Helped lead a 17-member team building the college’s production website. Architected Node.js/Express/MongoDB services and 50+ REST endpoints, with authentication, AWS deployment, CI/CD, monitoring, and security controls; established reviews, documentation, and successor mentoring.", slug: "vec-website" },
  { name: "Youth Red Cross, Velammal Engineering College", role: "Technical leadership & community service", date: "Nov 2022–Oct 2025", location: "Chennai, India", summary: "Progressed through three roles spanning community programs, volunteer coordination, and software development.", slug: "life-connect", roles: [
    { role: "Technical Head", date: "Aug 2024–Oct 2025", summary: "Led technical tools and automation, including a blood-donation platform connecting donors with people in urgent need." },
    { role: "Joint Secretary", date: "Sep 2023–Aug 2024", summary: "Coordinated event planning, volunteers, logistics, scheduling, and on-ground delivery." },
    { role: "Volunteer", date: "Nov 2022–Sep 2023", summary: "Participated in 15+ community initiatives, including donation drives, awareness campaigns, and outreach." },
  ] },
  { name: "Inzpire Solutions", role: "Software Developer Intern", date: "Feb–May 2025", location: "Tamil Nadu, India", summary: "Developed ML stock-transfer prediction and verification, utensil-cleanliness classification, and inventory vision workflows for retail and Smart Café operations. Built end-to-end datasets and model pipelines; published clean/dirty glass classification, object detection, and Rangoli Detection datasets on Kaggle.", slug: "retail-vision-systems" },
  { name: "Scrapify Ecotech Private Limited", role: "AI Software Engineer", date: "Nov 2024–Jan 2025", location: "Tamil Nadu, India", summary: "Developed EcoFloater’s onboard AI for aquatic-waste detection and navigation. Integrated LLM decision components, YOLOv8, DeepLabV3+, lightweight vision transformers, and sensor inputs on Jetson Nano; applied compression, quantization, and latency optimization for local mission execution.", slug: "ecofloater" },
]
export const organizations = [
  { id: "webops", name: "WebOps Club", role: "Vice Chairman & Lead Backend Developer", summary: "Contributed to the college’s production website and mentored the succeeding development team. The work combined backend architecture, team coordination, deployment, and engineering practices.", slug: "vec-website", linkLabel: "Website engineering case study" },
  { id: "youth-red-cross", name: "Youth Red Cross", role: "Volunteer → Joint Secretary → Technical Head", summary: "Contributed to community programs and built technical tools, including LifeConnect, a blood-donation platform connecting donors with people in need. My responsibilities grew from volunteering to organizing initiatives and supporting the team through software.", slug: "life-connect", linkLabel: "LifeConnect case study" },
]
export const serviceRoles = [
  { role: "Volunteer", date: "Nov 2022–Sep 2023", description: "Participated in community initiatives and service activities." },
  { role: "Joint Secretary", date: "Sep 2023–Aug 2024", description: "Helped plan initiatives, manage logistics, and coordinate volunteers." },
  { role: "Technical Head", date: "Aug 2024–Oct 2025", description: "Built technical tools, automation, and internal software, including blood-donation platform work." },
]
export const award = { title: "Inquisitive Innovator Award", context: "Riddhi-26 · Velammal Engineering College", date: "March 2026", description: "Recognition for research and product development." }
export const credentials = [
  { title: "Natural Language Processing", type: "Four-course specialization", issuer: "DeepLearning.AI · Coursera", date: "July 2024", href: "/CERTIFICATIONS/professional certificates/NLP/Coursera NLP.pdf", selected: true },
  { title: "Generative AI with Large Language Models", type: "Course", issuer: "DeepLearning.AI & Amazon Web Services · Coursera", date: "August 2024", href: "/CERTIFICATIONS/professional certificates/GenAI.pdf", selected: true },
  { title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning", type: "Course", issuer: "DeepLearning.AI · Coursera", date: "November 2024", href: "/CERTIFICATIONS/professional certificates/TensorFlow Certification.pdf", selected: true },
  { title: "PyTorch for Deep Learning", type: "Professional certificate", issuer: "DeepLearning.AI · Coursera", date: "December 2025", href: "/CERTIFICATIONS/professional certificates/PyTorch/Pytorch Specialization Certificate.pdf", selected: false },
  { title: "Introduction to Generative AI", type: "Course", issuer: "Duke University · Coursera", date: "April 2025", href: "/CERTIFICATIONS/professional certificates/Coursera GENAI.pdf", selected: false },
]
