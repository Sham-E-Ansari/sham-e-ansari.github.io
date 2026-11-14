/* Edit this file to update the portfolio content. */
window.portfolioContent = {
  siteTitle: 'Sham-E-Ansari - Portfolio',
  name: 'Sham-E-Ansari',
  initials: 'S · A',
  photo: {
    src: 'resources/profile.jpg',
    alt: 'Sham-E-Ansari'
  },
  cv: 'resources/SHAM.pdf',
  hero: {
    eyebrow: 'Unit Head, RPA Development · BRAC Bank PLC',
    titleFirst: 'Sham-E-',
    titleSecond: 'Ansari',
    lead: 'I build in-house automation for banking.',
    description: "Built BRAC Bank's first AI agent integrated with RPA. 55+ automations across 12 business areas save 300+ man-hours of manual work every day, all built in-house and running fully on-premise.",
    primaryAction: 'Get in Touch',
    secondaryAction: 'View Experience →'
  },
  highlights: {
    automations: '55+',
    manHoursDaily: '300+',
    liveBots: '43'
  },
  about: {
    paragraphs: [
      "I'm <b>Sham-E-Ansari</b> - currently leading RPA Development in the <b>AI Automation</b> team of the Technology Division at <b>BRAC Bank PLC</b>, where I automate manual and repetitive processes with RPA and AI to make banking operations more efficient.",
      "I designed and deployed the bank's first <b>AI agent integrated with RPA</b>, enabling end-to-end process automation, and I lead and mentor a lean team of 4 RPA developers while working closely with business stakeholders.",
      "My team builds every automation <b>in-house in Python</b>: Selenium and PyAutoGUI for browser and desktop automation, EasyOCR, PaddleOCR, and Tesseract for document extraction, OpenCV and YOLO for image detection, and locally deployed LLMs such as Qwen and GLM for AI agents. The result is <b>55+ automations across 12 business areas</b>, with 43 bots in live production saving <b>300+ man-hours of manual work every day</b>, all running on-premise and fully compliant.",
      "My banking journey began in 2022 as a <b>Young Leader (Management Trainee Officer)</b>, which gave me a broad understanding of banking operations and technology. Before that, I built my technical foundation as an <b>IT Officer</b> and <b>Web Developer</b>.",
      "I hold a <b>BSc in Computer Science & Engineering</b> from Ahsanullah University of Science and Technology. I enjoy finding practical ways to use RPA, AI, and emerging technologies to solve business problems and simplify everyday work."
    ]
  },
  experience: [
    ['Sep 2025 - Present', 'BRAC Bank PLC · AI Automation, Technology Division', 'Unit Head, RPA Development', 'Lead RPA and AI-driven automation initiatives within the AI Automation team. Designed and deployed an AI agent integrated with RPA for end-to-end process automation. Develop and deliver automation solutions that improve banking processes and reduce manual work. Lead and mentor a lean team of 4 RPA developers, identify automation opportunities, guide initiatives from requirement gathering to deployment, and ensure every solution meets quality, security, and compliance requirements.'],
    ['Feb 2023 - Sep 2025', 'BRAC Bank PLC · AI Automation, Technology Division', 'Associate Manager, RPA Development', 'Personally built and deployed around 20 automation bots for banking operations, managing each from requirement gathering through development to deployment and support. Owned the release governance cycle for every bot: user acceptance testing (UAT) with business teams, change management approvals, and resolution of IS vulnerability assessment (VA) findings before go-live. Worked with business stakeholders and cross-functional teams to turn manual processes into practical, reliable automation.'],
    ['Feb 2022 - Jan 2023', 'BRAC Bank PLC · Dhaka', 'Young Leader - Management Trainee Officer', 'Gained exposure to different areas of banking through departmental rotations, on-the-job training, classroom training, and group projects. Developed a broad understanding of banking operations and business processes.'],
    ['Dec 2020 - Oct 2021', 'GraphicPeople · Dhaka', 'Junior Web Developer', 'Worked on website localization projects for global clients including Pfizer and GSK. Developed and modified web components and fixed bugs based on project requirements, using Adobe Experience Manager (AEM) and modern web technologies.'],
    ['Jun 2020 - Nov 2020', 'GraphicPeople · Dhaka', 'Trainee Web Developer', 'Built hands-on expertise in application development and Adobe Experience Manager (AEM) within a professional agency environment.'],
    ['Aug 2019 - Nov 2019', 'SAIR AIR BD LTD · Gulshan, Dhaka', 'IT Officer', 'Maintained the company website and managed website content. Developed an employee management system for internal operations and provided technical support and troubleshooting for end-users.']
  ],
  projects: [
    { date: '2022 - Present', org: 'BRAC Bank PLC', name: '55+ Automations · 300+ Man-Hours Saved Daily', desc: 'Automation programme spanning 12 business areas, with 43 bots in live production. It covers account and card onboarding, loan settlement, operations, and multiple Bangladesh Bank regulatory reporting processes, and cut one compliance review cycle from 15 days to near-instant. Web portals are automated with Selenium and PyAutoGUI, document-heavy processes with OCR (EasyOCR, PaddleOCR, Tesseract) and computer vision (OpenCV, YOLO), and decision steps with locally deployed LLM agents, all backed by Oracle DB and PL/SQL. Every solution is built in-house and runs on-premise. Process details are confidential.', tags: ['Python', 'Selenium', 'OCR', 'Computer Vision', 'Local LLMs', 'Oracle DB'], featured: true },
    { date: 'Nov 2026', org: 'Personal · Open source', name: 'QueryBuddy - RAG Q&A over Your PDFs', desc: 'Desktop chat widget that answers questions from your own PDFs with a retrieval-augmented generation (RAG) pipeline. PDFs are chunked and indexed in a local ChromaDB vector store, the most relevant passages are retrieved for each question, and the answer cites the source file and page. The index re-syncs automatically when PDFs are added or removed, and it works with any OpenAI-compatible provider, falling back to the next model if one is rate-limited.', tags: ['Python', 'RAG', 'ChromaDB', 'LLM', 'customtkinter'], link: 'https://github.com/Sham-E-Ansari/QueryBuddy' },
    { date: 'Oct 2026', org: 'Personal · Open source', name: 'FlowPilot - Selenium Workflow Builder', desc: 'Visual builder for creating, recording, running, and exporting Selenium browser workflows. Drag-and-drop action canvas, browser session recording, and generated Python scripts.', tags: ['Python', 'FastAPI', 'Selenium', 'Vite'], link: 'https://github.com/Sham-E-Ansari/flowPilot-selenium-workflow-builder' },
    { date: 'Sep 2026', org: 'Personal · Open source', name: 'DocLens - Personal AI Doc Assistant', desc: 'Local document portal for browsing PDFs and reviewing AI-generated summaries, keywords, and metadata. Uploaded PDFs are summarized by a configured LLM and stored in a local SQLite database.', tags: ['Node.js', 'SQLite', 'LLM', 'Alpine.js'], link: 'https://github.com/Sham-E-Ansari/personal-doc-assistant' },
    { date: 'Jul 2026', org: 'BRAC Bank PLC', name: 'Bangla QR Merchant Onboarding Automation', desc: 'Automated the Bangla QR Merchant Onboarding process end to end with RPA, reducing 32 man-days of daily effort and enabling faster, seamless operations. Recognised with the Technology Division Spotlight Award.', tags: ['RPA', 'Python', 'Selenium'] },
    { date: 'Feb 2026 - May 2026', org: 'BRAC Bank PLC', name: 'Agentic AI-based Loan Settlement Automation', desc: 'Agentic AI and RPA-based automation for loan settlement processes. An n8n workflow orchestrates a locally deployed LLM agent together with in-house RPA for end-to-end handling.', tags: ['Agentic AI', 'n8n', 'Local LLM', 'RPA'] },
    { date: 'Feb 2026', org: 'Personal · Open source', name: 'VaultScan - AI-Powered VA Assessment Tool', desc: 'React and Vite frontend for AI-assisted vulnerability assessments. Upload a ZIP or RAR code archive, send it to an n8n webhook, and review the structured security report generated by Groq LLaMA 3.3.', tags: ['React', 'Vite', 'n8n', 'LLM'], link: 'https://github.com/Sham-E-Ansari/va-assessment-using-n8n' },
    { date: 'Apr 2025 - Aug 2025', org: 'BRAC Bank PLC', name: 'AI-Powered Credit Card Onboarding', desc: 'AI-powered automation solution to streamline the credit card onboarding process.', tags: ['AI', 'RPA', 'Python'] }
  ],
  skills: {
    'Automation & AI': ['Agentic AI Development', 'Artificial Intelligence (AI)', 'Robotic Process Automation (RPA)', 'Large Language Models (LLM)', 'Local LLMs (Qwen, GLM)', 'Retrieval-Augmented Generation (RAG)', 'n8n'],
    'Automation Stack': ['Selenium', 'PyAutoGUI', 'EasyOCR', 'PaddleOCR', 'Tesseract OCR', 'OpenCV', 'YOLOv5 / YOLOv11'],
    'Development & Data': ['Python', 'FastAPI', 'pandas', 'openpyxl', 'PyMuPDF', 'pdfplumber', 'ChromaDB (vector database)', 'PL/SQL', 'Oracle DB (python-oracledb)', 'SMTP', 'Application Development'],
    'Leadership & Management': ['Team Leadership', 'Project Management'],
    Languages: ['English (Full Professional)', 'Bengali (Native)']
  },
  awards: [
    ['Aug 2026', 'BRAC Bank PLC · Technology Division', 'Spotlight Award', 'For outstanding performance in automating the Bangla QR Merchant Onboarding process through RPA, reducing 32 man-days of daily effort and enabling faster, seamless operations.', 'resources/awards/spotlight-award.jpg'],
    ['Jul 2025', 'BRAC Bank PLC · Operations Division', 'Certificate of Appreciation', 'Awarded by the DMD & Head of Operations for exceptional performance and contributions within the Process Automation & R&D team.', 'resources/awards/certificate-of-appreciation.jpg'],
    ['Apr 2025', 'BRAC Bank PLC', 'Learning Luminaries Award 2024 - Unsung Hero', 'Recognised in the Unsung Hero category. Presented by the MD & CEO, CTO, and Head of HR in recognition of outstanding contributions to learning and development initiatives.', 'resources/awards/learning-luminaries-2024.jpg'],
    ['Nov 2018', 'BUP ICT FEST 2018', '1st Runner Up - Hackathon Category', 'Achieved 1st Runner Up in the hackathon competition, demonstrating strong problem-solving and rapid development skills under competitive conditions.', 'resources/awards/bup-ict-fest-2018.jpg']
  ],
  certifications: [
    ['Nov 2026', 'Oracle University', 'Oracle Certified Foundations Associate - Agentic AI Certified Foundations Associate', 'Credential ID: 333297189AAI26OFA · Valid until Nov 14, 2028'],
    ['May 2026', 'BRAC Bank PLC', 'Leadership Development Workshop - "Rise to the Challenge"', ''],
    ['Nov 2025', 'Institute of Business Administration (IBA) · University of Dhaka', 'Advanced Certificate for Management Professionals (ACMP) 4.0', ''],
    ['Aug 2025', 'Financial Excellence Limited · via BRAC Bank PLC', 'Certificate of Completion - Project Management', 'Completed an intensive programme covering Agile, Waterfall, and Scrum methodologies, along with project budgeting, timeline planning, risk analysis, and stakeholder management.'],
    ['Jun 2020', 'Coursera', 'Natural Language Processing in TensorFlow', 'Credential ID: 6ZANDPMJL976'],
    ['Apr 2020', 'Coursera', 'Neural Networks and Deep Learning', 'Credential ID: RAAY7E3VQQ8Z'],
    ['Mar 2020', 'Coursera', 'Data Visualization with Python', 'Credential ID: MAEPTFAVBMJA']
  ],
  publications: [
    'A Comparative Analysis of Different Approaches for Basic Emotions Recognition from Speech',
    'A Neural Network Based Approach for Recognition of Basic Emotions from Speech'
  ],
  education: [
    ['2015 - 2019', 'Ahsanullah University of Science and Technology', 'BSc, Computer Science & Engineering', 'CGPA: 3.43 / 4.00. Built a strong foundation in software engineering, algorithms, systems design, and programming - skills that continue to underpin every technical endeavour.'],
    ['2011 - 2013', 'Police Lines School and College, Rangpur', 'Higher Secondary Certificate (HSC) - Science', 'GPA: 5.00 / 5.00'],
    ['2003 - 2011', 'Rangpur Zilla School, Rangpur', 'Secondary School Certificate (SSC) - Science', 'GPA: 5.00 / 5.00']
  ],
  contact: {
    headlineFirst: 'Driving Efficiency',
    headlineSecond: '& Innovation.',
    description: 'Open to collaborations, automation consulting, and meaningful conversations.',
    links: [
      ['LinkedIn', 'https://www.linkedin.com/in/sham-e-ansari/'],
      ['Email', 'mailto:saprince93@gmail.com'],
      ['GitHub', 'https://github.com/Sham-E-Ansari/'],
      ['Blog', 'https://backpackersden.wordpress.com/']
    ]
  },
  footer: 'AI Automation, Technology Division · BRAC Bank PLC'
};
