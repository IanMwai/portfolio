export const personalInfo = {
  name: "Ian Toyota",
  brand: "IAN_TOYOTA_ENGINEERING",
  brandTagline: "POWER SYSTEMS // POWER ELECTRONICS // DATA TOOLS",
  role: "Senior in Electrical Engineering at Harvard University",
  statusBadge: "Power Systems + Power Electronics + Data Tools",
  navIndicator: "HARVARD // SEAS",
  introduction: [
    "I was born and raised in Kenya, and I’m now a senior studying Electrical Engineering at Harvard. Within engineering, I’m especially interested in power systems, power electronics, and building tools that make complicated technical ideas easier to understand.",
    "I enjoy moving between simulation, hardware, and software—whether I’m modeling an electrical grid, debugging a circuit, or finding a clearer way to present data. I also care a lot about the people around the work, which has led me toward teaching, peer advising, and leading project teams.",
    "This site is a collection of things I’ve built, questions I’ve explored, and a little of what I care about outside engineering. Please have a look around.",
  ],
  headshot: "headshot.jpg",
  links: {
    github: "https://github.com/ianmwai",
    linkedin: "https://linkedin.com/in/ian-toyota",
    email: "mailto:mwaitoyota@gmail.com",
    resume: "resume.pdf",
  },
};

export const proofCards = [
  {
    title: "Engineering focus",
    body: "Power systems, grid modeling, power electronics, hardware prototyping, and data visualization.",
  },
  {
    title: "Current direction",
    body: "Power systems tools used for simulation, and reliable software interfaces.",
  },
  {
    title: "Availability",
    body: "Seeking full-time engineering roles after graduating in May 2027; open to a gap year opportunity from September 2026 for the right energy, hardware, or infrastructure team.",
  },
];

export type TagVariant = "leadership" | "research" | "industrial" | "data";

export const experiences = [
  {
    role: "Summer Research Assistant",
    company: "Xie Lab, Harvard SEAS",
    period: "Jun 2026 – Present",
    active: true,
    tags: [
      { label: "Hardware Research", variant: "research" as TagVariant },
      { label: "NI-DAQ Instrumentation", variant: "industrial" as TagVariant },
      { label: "GPU Power Measurement", variant: "data" as TagVariant },
    ],
    description:
      "Building a GPU power logging workflow using NI-DAQ voltage and current sensing at 10 kHz sampling. Develop live monitoring and full-run data logging, moving verified runs to shared lab storage.",
  },
  {
    role: "Lab Teaching Assistant",
    company: "Harvard John A. Paulson School of Engineering and Applied Sciences",
    period: "Jan – May 2026",
    active: false,
    tags: [
      { label: "Teaching", variant: "leadership" as TagVariant },
      { label: "Circuits Lab", variant: "research" as TagVariant },
      { label: "Instrumentation", variant: "data" as TagVariant },
    ],
    description:
      "Supported intro EE lab courses with circuit assembly, measurement, and debugging. Guided students on oscilloscopes, multimeters, power supplies, and function generators, and mentored final projects from schematic to working breadboard prototype.",
  },
  {
    role: "Co-Project Lead – Kibuon Project",
    company: "Engineers Without Borders USA – Harvard SEAS Chapter",
    period: "Dec 2025 – Present",
    active: true,
    tags: [
      { label: "Leadership", variant: "leadership" as TagVariant },
      { label: "Water Infrastructure", variant: "research" as TagVariant },
      { label: "Project Management", variant: "data" as TagVariant },
    ],
    description:
      "Co-lead a multidisciplinary team designing and implementing community-scale water distribution networks for an underserved community in Migori, Kenya. Coordinate timelines, technical documentation, and stakeholder conversations to ensure project continuity.",
  },
  {
    role: "Intern, Design & Construction",
    company: "Kenya Electricity Transmission Company (KETRACO)",
    period: "Jun – Aug 2025",
    active: false,
    tags: [
      { label: "Industrial Internship", variant: "industrial" as TagVariant },
      { label: "Substation Testing", variant: "research" as TagVariant },
      { label: "SCADA & Protection", variant: "data" as TagVariant },
    ],
    description:
      "Supported design and simulation of high-voltage transmission lines using PSCAD and Simulink for grid modeling and fault analysis. Assisted with SCADA operations, tested substation equipment and protective relays, and observed commissioning during site visits.",
  },
  {
    role: "Intern, Data Engineering Team",
    company: "Qhala Data Engineering",
    period: "Jun – Aug 2025 · Hybrid",
    active: false,
    tags: [
      { label: "Industrial Internship", variant: "industrial" as TagVariant },
      { label: "Linguistic Data Systems", variant: "data" as TagVariant },
      { label: "LLM Adaptation", variant: "research" as TagVariant },
    ],
    description:
      "Developed interactive dashboards and adapted LLMs to client data, reducing processing time by 30%. Mapped regional African dialects to optimize AI tokenizer bounds and model contexts.",
  },
  {
    role: "Peer Advising Fellow",
    company: "Advising Programs Office, Harvard University",
    period: "Apr 2025 – Present",
    active: true,
    tags: [
      { label: "Mentorship", variant: "leadership" as TagVariant },
      { label: "Academic Advising", variant: "data" as TagVariant },
    ],
    description:
      "Advise first-year students on course and concentration selection and help them integrate into the Harvard community. Also served as an EE Peer Concentration Advisor and Peer Tutor for circuits and devices (2025–26).",
  },
  {
    role: "Research Assistant",
    company: "Athinoula A. Martinos Center, Harvard Medical School",
    period: "Feb – May 2025",
    active: false,
    tags: [
      { label: "Medical Research", variant: "research" as TagVariant },
      { label: "Microfabrication", variant: "industrial" as TagVariant },
      { label: "E-Beam Lithography", variant: "data" as TagVariant },
    ],
    description:
      "Contributed to a DBS leads project developing MRI-safe electrodes. Specialized in assembly and fabrication, refining micro-welding of delicate components, with e-beam lithography, SEM imaging, and optical microscopy at Harvard CNS.",
  },
];

export type ProjectLinkKind = "external" | "github" | "video" | "pdf" | "none";

export const projects = [
  {
    title: "ERCOT Congestion Study",
    description:
      "Built with a partner. Studied renewables, storage, and electricity affordability. Used fixed-effects price analysis. Simulated Texas 2,000-bus SCUC/SCED dispatch under storage siting cases.",
    tech: ["MATPOWER", "MOST", "Gurobi", "Python"],
    video: null,
    links: [
      {
        kind: "pdf" as ProjectLinkKind,
        label: "Project Report (PDF)",
        url: "ES215_Project_Report.pdf",
      },
    ],
  },
  {
    title: "Grid-Following Inverter Prototype",
    description:
      "Built with a partner. Designed a low-voltage SPWM inverter prototype. Moved from LTspice models to breadboard tests. Demonstrated filtered output and voltage-following behavior.",
    tech: ["Power Electronics", "LTspice", "SPWM", "STM32"],
    video: null,
    links: [
      {
        kind: "pdf" as ProjectLinkKind,
        label: "Project Report (PDF)",
        url: "ES_145_Final_Project_Report.pdf",
      },
    ],
  },
  {
    title: "Real-Time Grid Dashboard",
    description:
      "Built a Streamlit grid dashboard. Tracked regional capacity and load indicators. Connected the interface to live data. Made operating conditions easier to scan, explain, and share.",
    tech: ["Python", "Streamlit", "Live API"],
    video: null,
    links: [
      {
        kind: "external" as ProjectLinkKind,
        label: "Live App",
        url: "https://energy-dashboard-kenya.streamlit.app/",
      },
      {
        kind: "github" as ProjectLinkKind,
        label: "Project Repo",
        url: "https://github.com/IanMwai/ai-energy-usage",
      },
    ],
  },
  {
    title: "IoT Bicycle Telemetry",
    description:
      "Built ESP32 bicycle telemetry firmware. Read live speed signals from sensors. Added adaptive speed logic. Working on hardware to demo this with real-time response on the bike.",
    tech: ["ESP32", "C++", "Firmware"],
    video: {
      url: "https://www.youtube.com/watch?v=MXp-lmJnmMQ",
      thumbnail: "https://img.youtube.com/vi/MXp-lmJnmMQ/hqdefault.jpg",
    },
    links: [
      {
        kind: "video" as ProjectLinkKind,
        label: "Video Demo",
        url: "https://www.youtube.com/watch?v=MXp-lmJnmMQ",
      },
      {
        kind: "github" as ProjectLinkKind,
        label: "Project Repo",
        url: "https://github.com/IanMwai/ps70_spring2025",
      },
    ],
  },
  {
    title: "Let's Grab a Meal",
    description:
      "This app helps me track catch-up cadence, birthdays, and notes so I can keep up with friendships. Sends daily email nudges. Helps keep close people from slipping away quietly over time.",
    tech: ["React", "TypeScript", "Cloudflare Workers", "D1"],
    video: null,
    links: [
      {
        kind: "github" as ProjectLinkKind,
        label: "Project Repo",
        url: "https://github.com/IanMwai/letsgrabameal",
      },
    ],
  },
  {
    title: "GPU Power Logging Workflow",
    description:
      "Ongoing summer project. Measures GPU power with NI-DAQ voltage and current signals. Shows live monitoring and saves full logs. Moves verified runs to shared lab storage.",
    tech: ["NI-DAQ", "10 kHz Sampling", "Visualization", "Data Logging"],
    video: null,
    links: [
      {
        kind: "github" as ProjectLinkKind,
        label: "Project Repo",
        url: "https://github.com/IanMwai/paihardware",
      },
    ],
  },
  {
    title: "LiDAR Ladder-Fuel Risk Mapping",
    description:
      "Framed ladder-fuel mapping as signal detection. Built synthetic labeled point clouds. Tested ROC performance across detector variants. Related to my senior thesis so might get back to it.",
    tech: ["Signal Detection", "LiDAR", "Python", "NEON"],
    video: null,
    links: [
      {
        kind: "github" as ProjectLinkKind,
        label: "Project Repo",
        url: "https://github.com/IanMwai/ES156-Final-Project",
      },
    ],
  },
];

export type SkillAccent = "accent" | "accent2" | "accent3" | "accent4";

export const skillGroups = [
  {
    title: "Power Systems",
    accent: "accent" as SkillAccent,
    skills: ["Simulink", "PSCAD", "RSCAD FX", "MatPower", "Pandapower"],
  },
  {
    title: "Data Engineering",
    accent: "accent2" as SkillAccent,
    skills: ["Python", "MATLAB", "R Language", "SQL"],
  },
  {
    title: "Hardware Core",
    accent: "accent3" as SkillAccent,
    skills: [
      "ESP32",
      "Arduino",
      "LTSpice",
      "Lithography",
      "Oscilloscope",
      "Multimeter",
      "Bench-Top & Battery Power Supplies",
    ],
  },
  {
    title: "Civil Design",
    accent: "accent4" as SkillAccent,
    skills: ["EPANET", "QGIS", "Revit BIM"],
  },
];

export const writing = [
  {
    title: "Ian thinks, therefore this!",
    platform: "Blogspot",
    url: "https://iantoyota.blogspot.com/",
    summary:
      "This is where I write most personally—about experiences, questions, and the parts of society I keep turning over in my head.",
  },
  {
    title: "Travel Journal",
    platform: "FindPenguins",
    url: "https://findpenguins.com/iantoyota",
    summary:
      "When I travel, I try to record more than the itinerary. These are personal notes on places, people, infrastructure, food, and what wowed me.",
  },
  {
    title: "Technical Journal",
    platform: "Medium",
    url: "https://medium.com/@iantoyota",
    summary:
      "For the more technical side of my brain: explanations and reflections on energy and the technologies I am learning about.",
  },
];

export const interests = [
  {
    title: "Model UN",
    description:
      "I’ve chaired two committees and helped run a conference. I enjoy the research and debate, but also the challenge of keeping a room moving toward something productive.",
  },
  {
    title: "African Literature",
    description:
      "I read a lot of African literature. Some of my favorite writers are Ngũgĩ wa Thiong’o, Chimamanda Ngozi Adichie, NoViolet Bulawayo, and Barbara Kimenye.",
  },
  {
    title: "Soccer",
    description:
      "I usually play defense, either right back or center back. I am not good by any stretch but it is fun so I keep doing it. ",
  },
  {
    title: "Cooking",
    description:
      "I cook primarily Kenyan food, especially the meals that remind me of home, like Ugali or Chapati.",
  },
  {
    title: "Cycling",
    description:
      "One of my favorite ways to explore Boston is by following its designated bike lanes and seeing where they take me. The emerald necklace is a favorite!",
  },
  {
    title: "Travel",
    description:
      "I enjoy visiting new countries and cities, particularly when I have enough time and money to understand how people actually live there.",
  },
  {
    title: "Hiking",
    description:
      "I like low-stakes hiking: enough movement and scenery to feel worthwhile, without pretending I’m climbing Everest.",
  },
];
