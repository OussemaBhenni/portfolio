// All portfolio content lives here, in French and English.
// Edit this file to update the site — no component changes needed.

export type Lang = "fr" | "en";
export const languages: Lang[] = ["fr", "en"];

type L = Record<Lang, string>;
type LList = Record<Lang, string[]>;

export const profile = {
  name: "Oussema Benhenni",
  initials: "OB",
  email: "oussemabenhenni1@gmail.com",
  linkedin: "https://www.linkedin.com/in/oussemabenhenni",
  github: "https://github.com/OussemaBhenni",
  cv: "/CV-Oussema-Benhenni.pdf",
  location: { fr: "Marseille, France", en: "Marseille, France" } as L,
};

export const ui = {
  nav: {
    about: { fr: "Profil", en: "About" },
    experience: { fr: "Expérience", en: "Experience" },
    projects: { fr: "Projets", en: "Projects" },
    skills: { fr: "Compétences", en: "Skills" },
    contact: { fr: "Contact", en: "Contact" },
  },
  resume: { fr: "CV", en: "Resume" },
  status: { fr: "Ouvert aux opportunités en cybersécurité", en: "Open to cybersecurity opportunities" },
  role: { fr: "Ingénieur Cybersécurité · DevSecOps & Sécurité Opérationnelle", en: "Cybersecurity Engineer · DevSecOps & Security Operations" },
  tagline: {
    fr: "Je construis des infrastructures sécurisées par défaut — segmentées, surveillées, testées — et j'automatise tout ce qui peut l'être, du pipeline CI/CD jusqu'à la détection des attaques.",
    en: "I build infrastructure that is secure by default — segmented, monitored, tested — and I automate everything I can, from the CI/CD pipeline to attack detection.",
  },
  ctaWork: { fr: "Voir mon travail", en: "See my work" },
  ctaContact: { fr: "Me contacter", en: "Get in touch" },
  ctaCv: { fr: "Télécharger mon CV", en: "Download my resume" },
  stats: [
    { value: "3", label: { fr: "stages en entreprise", en: "industry internships" } },
    { value: "568", label: { fr: "alertes SIEM vérifiées", en: "verified SIEM alerts" } },
    { value: "6", label: { fr: "certifications", en: "certifications" } },
    { value: "SecNumEdu", label: { fr: "master labellisé ANSSI", en: "ANSSI-labelled master" } },
  ],
  sections: {
    about: { kicker: { fr: "Profil", en: "About" }, title: { fr: "Défendre, détecter, automatiser", en: "Defend, detect, automate" } },
    experience: { kicker: { fr: "Parcours", en: "Career" }, title: { fr: "Expérience", en: "Experience" }, sub: { fr: "Trois stages, de l'analyse de code à la sécurité d'infrastructure.", en: "Three internships, from code analysis to infrastructure security." } },
    projects: { kicker: { fr: "Réalisations", en: "Selected work" }, title: { fr: "Projets techniques", en: "Technical projects" }, sub: { fr: "Projets académiques et de recherche : infrastructure, conformité, pipelines et IA appliquée au pentest.", en: "Academic and research projects: infrastructure, compliance, pipelines and AI applied to pentesting." } },
    skills: { kicker: { fr: "Stack", en: "Tech stack" }, title: { fr: "Compétences", en: "Skills" } },
    education: { kicker: { fr: "Formation", en: "Education" }, title: { fr: "Formation & certifications", en: "Education & certifications" } },
    contact: { kicker: { fr: "Contact", en: "Contact" }, title: { fr: "Travaillons ensemble", en: "Let's work together" }, sub: { fr: "Je recherche un poste en cybersécurité (DevSecOps, SOC, sécurité d'infrastructure). Écrivez-moi, je réponds rapidement.", en: "I'm looking for a role in cybersecurity (DevSecOps, SOC, infrastructure security). Send me a message and I'll reply quickly." } },
  },
  outcome: { fr: "Résultat", en: "Outcome" },
  sourceCode: { fr: "Code source", en: "Source code" },
  certifications: { fr: "Certifications", en: "Certifications" },
  languagesTitle: { fr: "Langues", en: "Languages" },
  interestsTitle: { fr: "Centres d'intérêt", en: "Interests" },
  builtWith: { fr: "Conçu avec Next.js & Tailwind CSS", en: "Built with Next.js & Tailwind CSS" },
  rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
};

export const about = {
  paragraphs: {
    fr: [
      "Étudiant en Master 2 Fiabilité et Sécurité Informatique à Aix-Marseille Université (label SecNumEdu de l'ANSSI), après une licence appliquée en technologies de l'informatique à l'ISET Radès.",
      "Mon parcours m'a mené du développement backend à la sécurité opérationnelle : analyse statique de code chez Sopra Banking Software, outillage DevSecOps chez ARA Consulting, puis construction d'une infrastructure de détection complète chez Teamwill.",
      "Ce qui me motive : qu'une attaque soit bloquée, détectée et documentée — et que tout l'environnement puisse être reconstruit à l'identique en quelques minutes.",
    ],
    en: [
      "Master's student in Computer Reliability & Security at Aix-Marseille University (ANSSI SecNumEdu label), after a bachelor's in computer technology at ISET Radès, Tunisia.",
      "My path has taken me from backend development to security operations: static code analysis at Sopra Banking Software, DevSecOps tooling at ARA Consulting, then building a complete detection infrastructure at Teamwill.",
      "What drives me: an attack that is blocked, detected and documented — and an environment that can be rebuilt identically in minutes.",
    ],
  } as LList,
  focus: [
    { title: { fr: "Infrastructure as Code", en: "Infrastructure as Code" }, body: { fr: "Terraform, Ansible, Docker, Kubernetes — des environnements reproductibles et versionnés.", en: "Terraform, Ansible, Docker, Kubernetes — reproducible, versioned environments." } },
    { title: { fr: "Détection & SOC", en: "Detection & SOC" }, body: { fr: "SIEM Wazuh / Splunk, règles mappées MITRE ATT&CK, alerting et supervision.", en: "Wazuh / Splunk SIEM, MITRE ATT&CK-mapped rules, alerting and monitoring." } },
    { title: { fr: "Sécurité applicative", en: "Application security" }, body: { fr: "OWASP Top 10, SAST / DAST / SCA, pipelines CI/CD sécurisés (shift-left).", en: "OWASP Top 10, SAST / DAST / SCA, secured CI/CD pipelines (shift-left)." } },
    { title: { fr: "Offensif & conformité", en: "Offensive & compliance" }, body: { fr: "Tests d'intrusion (PTES), durcissement ANSSI, ISO 27001 et RGPD.", en: "Penetration testing (PTES), ANSSI hardening, ISO 27001 and GDPR." } },
  ],
};

export type Experience = {
  company: string;
  role: L;
  type: L;
  period: L;
  place: L;
  context: L;
  bullets: LList;
  outcome?: L;
  tags: string[];
  link?: string;
};

export const experiences: Experience[] = [
  {
    company: "Teamwill",
    role: { fr: "Ingénieur Cybersécurité & Infrastructure", en: "Cybersecurity & Infrastructure Engineer" },
    type: { fr: "Stage de fin d'études", en: "Final-year internship" },
    period: { fr: "Mai – Oct 2026", en: "May – Oct 2026" },
    place: { fr: "Paris, France", en: "Paris, France" },
    context: {
      fr: "Groupe de conseil spécialisé en fintech. Objectif : construire un environnement de test de sécurité complet, automatisé et reproductible, avec détection et alerting de bout en bout.",
      en: "A consulting group specialised in fintech. Goal: build a complete, automated and reproducible security test environment, with end-to-end detection and alerting.",
    },
    bullets: {
      fr: [
        "Infrastructure as Code : environnement complet (réseaux, 8 conteneurs, pare-feu, détection, alertes) recréable à l'identique en quelques minutes avec Terraform, Ansible et Git",
        "Segmentation : deux zones isolées par un pare-feu en « deny by default » — 100 % des connexions non autorisées bloquées, 0 port ouvert sur 380 tests",
        "SIEM Wazuh : déploiement centralisé et 3 règles de détection (scan réseau, brute-force) mappées sur MITRE ATT&CK, validées sur 568 alertes vérifiées",
        "Alerting & supervision : alertes email en temps réel, tableaux de bord Prometheus / Grafana et outil de mesure du pare-feu développé en Python",
        "Test d'intrusion : simulation d'une attaque réelle en 5 étapes (méthode PTES, 12 catégories d'outils) pour valider protections et détection",
      ],
      en: [
        "Infrastructure as Code: a complete environment (networks, 8 containers, firewall, detection, alerting) rebuilt identically in minutes with Terraform, Ansible and Git",
        "Segmentation: two zones isolated by a deny-by-default firewall — 100% of unauthorised connections blocked, 0 open ports across 380 tests",
        "Wazuh SIEM: centralised deployment and 3 detection rules (network scans, brute force) mapped to MITRE ATT&CK, validated on 568 verified alerts",
        "Alerting & monitoring: real-time email alerts, Prometheus / Grafana dashboards and a firewall measurement tool written in Python",
        "Penetration test: a 5-stage real-world attack simulation (PTES, 12 tool categories) to validate both protection and detection",
      ],
    },
    outcome: {
      fr: "Un laboratoire de sécurité reproductible où chaque attaque testée est bloquée ou détectée, et où toute l'infrastructure se reconstruit d'une seule commande.",
      en: "A reproducible security lab where every tested attack is blocked or detected, and the whole infrastructure rebuilds with a single command.",
    },
    tags: ["Terraform", "Ansible", "Docker", "Wazuh", "MITRE ATT&CK", "Prometheus", "Grafana", "Python", "PTES", "Git"],
    link: "https://github.com/OussemaBhenni/fortisiem-iac",
  },
  {
    company: "ARA Consulting",
    role: { fr: "DevSecOps", en: "DevSecOps" },
    type: { fr: "Stage de fin d'études (licence)", en: "Final-year internship (bachelor's)" },
    period: { fr: "Fév – Juin 2024", en: "Feb – Jun 2024" },
    place: { fr: "Tunis, Tunisie", en: "Tunis, Tunisia" },
    context: {
      fr: "Les résultats des différents scanners de sécurité étaient dispersés, ce qui ralentissait l'identification et la correction des failles.",
      en: "Results from several security scanners were scattered, which slowed down finding and fixing vulnerabilities.",
    },
    bullets: {
      fr: [
        "Développement d'une application Spring Boot / React qui centralise les résultats de 4 types d'analyses de sécurité",
        "Automatisation du traitement des failles, réduisant de 30 % le délai de correction",
        "Contrôle d'accès par rôle (RBAC) et correction de 100 % des failles critiques (référentiel OWASP) en production",
      ],
      en: [
        "Built a Spring Boot / React application that centralises results from 4 types of security scans",
        "Automated vulnerability triage, cutting remediation time by 30%",
        "Role-based access control (RBAC) and remediation of 100% of critical (OWASP) vulnerabilities in production",
      ],
    },
    outcome: {
      fr: "Une vue unique des vulnérabilités pour les équipes, et des corrections plus rapides.",
      en: "A single view of vulnerabilities for the teams, and faster fixes.",
    },
    tags: ["Spring Boot", "React", "OWASP", "RBAC", "SAST", "DAST", "SCA"],
  },
  {
    company: "Sopra Banking Software",
    role: { fr: "Développeur Backend", en: "Backend Developer" },
    type: { fr: "Stage", en: "Internship" },
    period: { fr: "Juil – Sept 2023", en: "Jul – Sep 2023" },
    place: { fr: "Tunis, Tunisie", en: "Tunis, Tunisia" },
    context: {
      fr: "Éditeur de logiciels bancaires. Mission : améliorer la qualité et la sécurité du code d'un module backend Java.",
      en: "A banking software vendor. Mission: improve the quality and security of a Java backend module.",
    },
    bullets: {
      fr: ["Mise en place de contrôles automatiques de qualité et de sécurité du code (SonarLint, SpotBugs), réduisant de 25 % la dette technique"],
      en: ["Set up automated code quality and security checks (SonarLint, SpotBugs), cutting technical debt by 25%"],
    },
    tags: ["Java", "SAST", "SonarLint", "SpotBugs"],
  },
];

export type Project = {
  year: string;
  category: L;
  title: L;
  summary: L;
  bullets: LList;
  tags: string[];
  metrics?: { value: string; label: L }[];
  link?: string;
};

export const projects: Project[] = [
  {
    year: "2026",
    category: { fr: "Recherche · IA", en: "Research · AI" },
    title: { fr: "LLM appliqués au pentest", en: "LLMs applied to pentesting" },
    summary: {
      fr: "Projet de recherche (TER) au LIS, Aix-Marseille Université : que valent les grands modèles de langage sur des tâches offensives réelles ?",
      en: "Research project (TER) at LIS, Aix-Marseille University: how well do large language models perform on real offensive tasks?",
    },
    bullets: {
      fr: [
        "Étude de plus de 20 publications scientifiques sur l'IA appliquée à la sécurité offensive",
        "Comparaison de 4 familles de modèles (GPT, Claude, Llama, Mixtral) sur des tâches de test d'intrusion et d'analyse de failles",
      ],
      en: [
        "Review of 20+ research papers on AI applied to offensive security",
        "Benchmark of 4 model families (GPT, Claude, Llama, Mixtral) on penetration testing and vulnerability analysis tasks",
      ],
    },
    metrics: [
      { value: "20+", label: { fr: "publications étudiées", en: "papers reviewed" } },
      { value: "4", label: { fr: "familles de modèles", en: "model families" } },
    ],
    tags: ["LLM", "Pentest", "Benchmark", "GPT", "Claude", "Llama", "Mixtral"],
  },
  {
    year: "2026",
    category: { fr: "Durcissement · IaC", en: "Hardening · IaC" },
    title: { fr: "SI multi-sites durci avec Ansible", en: "Hardened multi-site IS with Ansible" },
    summary: {
      fr: "Déploiement automatisé d'un système d'information sécurisé sur plusieurs sites, conforme aux recommandations de l'ANSSI.",
      en: "Automated deployment of a secured multi-site information system, compliant with ANSSI guidelines.",
    },
    bullets: {
      fr: [
        "Durcissement système automatisé sur 5 serveurs virtuels",
        "7 réseaux séparés (VLANs) et une DMZ, 100 % conformes aux recommandations de l'ANSSI",
      ],
      en: [
        "Automated system hardening across 5 virtual servers",
        "7 segregated networks (VLANs) and a DMZ, 100% compliant with ANSSI guidelines",
      ],
    },
    metrics: [
      { value: "5", label: { fr: "serveurs durcis", en: "hardened servers" } },
      { value: "7", label: { fr: "VLANs + DMZ", en: "VLANs + DMZ" } },
    ],
    tags: ["Ansible", "Linux", "VLAN", "DMZ", "ANSSI"],
  },
  {
    year: "2025",
    category: { fr: "Conformité", en: "Compliance" },
    title: { fr: "Audit RGPD automatisé", en: "Automated GDPR audit" },
    summary: {
      fr: "Outil d'audit de la conformité des traitements de données personnelles, modélisés sous forme de graphe.",
      en: "A tool that audits the GDPR compliance of personal-data processing, modelled as a graph.",
    },
    bullets: {
      fr: [
        "Modélisation des traitements, données et acteurs dans Neo4j et requêtes de contrôle en Cypher",
        "Réduction de 80 % du temps de traitement des audits",
      ],
      en: [
        "Processing activities, data and actors modelled in Neo4j, with compliance checks written in Cypher",
        "Cut audit processing time by 80%",
      ],
    },
    metrics: [{ value: "−80 %", label: { fr: "temps d'audit", en: "audit time" } }],
    tags: ["Neo4j", "Cypher", "RGPD / GDPR", "Compliance as Code"],
  },
  {
    year: "2025",
    category: { fr: "DevSecOps", en: "DevSecOps" },
    title: { fr: "Pipeline CI/CD sécurisé", en: "Secured CI/CD pipeline" },
    summary: {
      fr: "Approche shift-left : la sécurité est vérifiée automatiquement à chaque modification du code.",
      en: "Shift-left approach: security is checked automatically on every code change.",
    },
    bullets: {
      fr: [
        "Analyses SAST et SCA à chaque commit dans GitLab CI/CD — détection des failles 40 % plus rapide",
        "Scan des images Docker avec Trivy, bloquant 100 % des images contenant une faille critique",
      ],
      en: [
        "SAST and SCA scans on every commit in GitLab CI/CD — vulnerabilities found 40% faster",
        "Docker image scanning with Trivy, blocking 100% of images with a critical vulnerability",
      ],
    },
    metrics: [
      { value: "40 %", label: { fr: "détection plus rapide", en: "faster detection" } },
      { value: "100 %", label: { fr: "images critiques bloquées", en: "critical images blocked" } },
    ],
    tags: ["GitLab CI/CD", "SAST", "SCA", "Trivy", "Docker"],
  },
];

export const skills: { title: L; items: string[] }[] = [
  { title: { fr: "Cloud & DevSecOps", en: "Cloud & DevSecOps" }, items: ["AWS (IAM, S3, VPC)", "Docker", "Kubernetes", "Terraform", "Ansible", "GitLab CI/CD", "Jenkins", "Vault"] },
  { title: { fr: "Sécurité opérationnelle", en: "Security operations" }, items: ["Wazuh", "Splunk", "Prometheus", "Grafana", "Log analysis", "MITRE ATT&CK", "Wireshark", "Zeek"] },
  { title: { fr: "Sécurité applicative", en: "Application security" }, items: ["OWASP Top 10", "SAST / DAST / SCA", "PTES", "Nmap", "Burp Suite", "Secure SDLC", "SonarQube", "Trivy"] },
  { title: { fr: "Développement", en: "Development" }, items: ["Java (Spring Boot)", "Python", "Bash", "Node.js", "React", "Neo4j", "SQL"] },
  { title: { fr: "Gouvernance & conformité", en: "Governance & compliance" }, items: ["ISO 27001", "RGPD / GDPR", "Compliance as Code", "Recommandations ANSSI"] },
];

export const education = [
  {
    title: { fr: "Master Fiabilité & Sécurité Informatique", en: "Master's in Computer Reliability & Security" },
    school: { fr: "Aix-Marseille Université · Label SecNumEdu (ANSSI)", en: "Aix-Marseille University · SecNumEdu label (ANSSI)" },
    period: "→ 2027",
  },
  {
    title: { fr: "Licence appliquée en Technologies de l'Informatique", en: "Applied Bachelor's in Computer Technology" },
    school: { fr: "ISET Radès · Tunisie", en: "ISET Radès · Tunisia" },
    period: "2024",
  },
];

export const certifications: { name: string; issuer: L }[] = [
  { name: "SecNumAcadémie", issuer: { fr: "MOOC · ANSSI", en: "MOOC · ANSSI" } },
  { name: "L'Atelier RGPD", issuer: { fr: "MOOC · CNIL", en: "MOOC · CNIL" } },
  { name: "Advanced Secure Coding With Pseudocode", issuer: { fr: "SecureFlag", en: "SecureFlag" } },
  { name: "Advanced Prompt Injection Attacks", issuer: { fr: "SecureFlag", en: "SecureFlag" } },
  { name: "Advanced Secure Coding With Spring Boot", issuer: { fr: "SecureFlag", en: "SecureFlag" } },
  { name: "Intermediate AWS Security With Terraform", issuer: { fr: "SecureFlag", en: "SecureFlag" } },
];

export const spokenLanguages: { name: L; level: L }[] = [
  { name: { fr: "Arabe", en: "Arabic" }, level: { fr: "Langue maternelle", en: "Native" } },
  { name: { fr: "Français", en: "French" }, level: { fr: "C1", en: "C1" } },
  { name: { fr: "Anglais", en: "English" }, level: { fr: "C1", en: "C1" } },
  { name: { fr: "Italien", en: "Italian" }, level: { fr: "A1", en: "A1" } },
];

export const interests: { title: L; body: L }[] = [
  { title: { fr: "Cybersécurité offensive", en: "Offensive security" }, body: { fr: "TryHackMe, SecureFlag", en: "TryHackMe, SecureFlag" } },
  { title: { fr: "Veille technologique", en: "Tech watch" }, body: { fr: "Menaces, CVE, outils", en: "Threats, CVEs, tooling" } },
  { title: { fr: "Gaming", en: "Gaming" }, body: { fr: "Stratégie & réflexes", en: "Strategy & reflexes" } },
];
