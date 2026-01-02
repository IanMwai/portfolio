import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Mail from 'lucide-react/dist/esm/icons/mail';

export const personalInfo = {
  name: "Ian Toyota",
  role: "Harvard Electrical Engineering Junior",
  tagline: "Power Systems + Data and AI",
  bio: "I'm an Electrical Engineering student at Harvard with a passion for power systems, analog circuit design, microelectronics, and leveraging data/AI for energy solutions. My work bridges the gap between engineering and intelligent data systems.",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/ianmwai", 
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ian-toyota", 
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:mwaitoyota@gmail.com", 
      icon: Mail,
    }
  ],
  headshot: "headshot.jpg"
};

export const experiences = [
  {
    role: "Project Lead",
    company: "Engineers Without Borders (EWB) – Harvard Chapter",
    period: "Nov 2025 – Present",
    description: "Co-lead a team of 20 students in the design and development of a sustainable community water system. Utilize EPANET for hydraulic modeling, QGIS for spatial analysis, and Revit for BIM design. Oversee on-site construction and maintain technical documentation.",
    category: "Leadership"
  },
  {
    role: "Peer Advising Fellow (PAF)",
    company: "Advising Programs Office, Harvard University",
    period: "April 2025 – Present",
    description: "Provide academic advising on course and concentration selection. Help first-year students integrate into the Harvard community and organize entryway meetings.",
    category: "Service"
  },
  {
    role: "Director General",
    company: "Harvard Model United Nations Africa (HNMUN)",
    period: "May 2025 – March 2026",
    description: "Supported the Secretary General in managing staff, establishing local partnerships, and overseeing logistics and post-conference planning.",
    category: "Leadership"
  },
  {
    role: "Intern, Design & Construction Department",
    company: "Kenya Electricity Transmission Company (KETRACO)",
    period: "May 2025 – August 2025",
    description: "Supported design and simulation of high-voltage transmission lines. Used PSCAD and Simulink for grid modeling and fault analysis. Assisted with SCADA operations and protective relay testing.",
    category: "Engineering"
  },
  {
    role: "Intern, Data Engineering Team",
    company: "Qhala",
    period: "May 2025 – Aug 2025",
    description: "Developed interactive dashboards and adapted LLMs to client data, improving analytical accuracy and reducing manual processing time by 30%. Mapped African languages to improve AI tokenizer accessibility.",
    category: "Engineering"
  },
  {
    role: "Peer Tutor & PCA",
    company: "Harvard University / SEAS",
    period: "June 2025 – Present",
    description: "Provide academic support for Circuits courses. Advise first-year students on academic planning in Electrical Engineering and organize community engagement events.",
    category: "Service"
  },
  {
    role: "Research Assistant",
    company: "Bonmassar Lab, Martinos Center, Harvard Medical School",
    period: "Feb 2025 – May 2025",
    description: "Contributed to Deep Brain Stimulation (DBS) MRI-compatible electrodes. Utilized photolithography in Harvard CNS cleanrooms to etch micro-scale patterns on wafers.",
    category: "Engineering"
  },
  {
    role: "Communications Intern",
    company: "Harvard Center for African Studies",
    period: "Feb 2024 – Present",
    description: "Manage digital communication channels, design marketing materials for events, and support administrative operations for the Africa Office.",
    category: "Work"
  },
  {
    role: "Summer Intern",
    company: "Equity Bank Kenya",
    period: "Jun – Aug 2022",
    description: "Increased biller recruitment by 10% and merchant onboarding. Mentored students applying to U.S. colleges with significant success in full-funding admissions.",
    category: "Work"
  }
];

export const skills = {
  technical: [
    { name: "Simulink", category: "Power Systems" },
    { name: "PSCAD", category: "Power Systems" },
    { name: "PowerWorld", category: "Power Systems" },
    { name: "MatPower", category: "Power Systems" },
    { name: "MOST", category: "Power Systems" },
    { name: "Pandapower", category: "Power Systems" },
    { name: "Python", category: "Data" },
    { name: "R", category: "Data" },
    { name: "Pandas", category: "Data" },
    { name: "MATLAB", category: "Data" },
    { name: "SQL", category: "Data" },
    { name: "ESP32", category: "Hardware" },
    { name: "Arduino", category: "Hardware" },
    { name: "LTSpice", category: "Hardware" },
    { name: "Fusion 360", category: "Hardware" },
    { name: "EPANET", category: "Infrastructure & Design" },
    { name: "QGIS", category: "Infrastructure & Design" },
    { name: "REVIT", category: "Infrastructure & Design" },
    { name: "React", category: "Web" },
    { name: "HTML/CSS", category: "Web" },
  ],
  soft: [
  "Analytical Thinking",
  "Systems-Level Problem Solving",
  "Technical Writing and Documentation",
  "Project Leadership",
  "Team Coordination and Mentorship",
  "Cross-Disciplinary Collaboration",
  "Stakeholder Communication",
  "Field Implementation and Adaptability",
  "Decision-Making Under Constraints",
  "Long-Term Project Planning",
  "Accountability and Ownership"
]
};

export const projects = [
  {
    title: "EWB Water System Project",
    category: "Hardware",
    description: "Project Lead for a sustainable community water system. Leveraged EPANET for hydraulic modeling, QGIS for site mapping, and Revit for structural design. Directed implementation trips and oversaw on-site construction.",
    tech: ["EPANET", "QGIS", "Revit", "Engineering Design"],
    links: {
      demo: "",
      code: ""
    }
  },
  {
    title: "Single Cycle MIPS Processor",
    category: "Hardware",
    description: "Designed and implemented a single-cycle MIPS processor using Verilog in Vivado. Handled instruction fetching, decoding, execution, and memory access.",
    tech: ["Verilog", "Vivado", "MIPS"],
    links: {
      demo: "",
      code: ""
    }
  },
  {
    title: "Renewable Integration Analysis",
    category: "Power Systems",
    description: "Built an optimization model on the ERCOT 2000-bus synthetic grid using MATPOWER to evaluate battery co-location strategies and mitigate grid congestion.",
    tech: ["MATPOWER", "Simulink", "Data Analysis"],
    links: {
      demo: "", 
      code: ""
    }
  },
  {
    title: "Energy Dashboard",
    category: "Data",
    description: "Streamlit app pulling real-time electricity data from electricitymaps API.",
    tech: ["Python", "Streamlit", "API"],
    links: {
      demo: "https://energy-dashboard-kenya.streamlit.app/",
      code: "https://github.com/IanMwai/ai-energy-usage"
    }
  },
  {
    title: "Football Analytics",
    category: "Data",
    description: "Pipeline transforming API-Football data into Metabase dashboards via PostgreSQL.",
    tech: ["Python", "PostgreSQL", "Docker"],
    links: {
      demo: "",
      code: "https://github.com/IanMwai/football_dashboard"
    }
  },
  {
    title: "African Languages Map",
    category: "Web",
    description: "Interactive web map using Glottolog data to explore African languages.",
    tech: ["JavaScript", "Leaflet", "GeoJSON"],
    links: {
      demo: "https://ianmwai.github.io/african-languages/",
      code: "https://github.com/IanMwai/african-languages"
    }
  },
  {
    title: "Resume Builder",
    category: "Web",
    description: "React app using Gemini CLI to automate tailoring resumes to job descriptions.",
    tech: ["React", "Firebase", "Gemini API"],
    links: {
      demo: "https://resume-builder-ian.web.app/",
      code: "https://github.com/IanMwai/resume-builder"
    }
  },
  {
    title: "IoT Cycling System",
    category: "Hardware",
    description: "Custom bike lighting and speed-sensing system with speed-adaptive brightness.",
    tech: ["ESP32", "C++", "Electronics"],
    links: {
      demo: "https://www.youtube.com/watch?v=MXp-lmJnmMQ",
      code: "https://github.com/IanMwai/ps70_spring2025"
      
    }
  },
  {
    title: "MyMindscape",
    category: "Web",
    description: "Flask-based mindfulness tracker for mood logs and journals.",
    tech: ["Flask", "SQL", "Python", "CSS/HTML"],
    links: {
      code: "https://github.com/IanMwai/mymindscape"
    }
  }
];

export const writingIntro = "I believe that engineering is as much about communication as it is about technical implementation. Here, I share my thoughts on technology, my travel experiences, and my personal thoughts.";

export const writing = [
  {
    title: "Ian thinks, therefore this!",
    platform: "Blogspot",
    url: "https://iantoyota.blogspot.com/" 
  },
  {
    title: "Travel Log",
    platform: "FindPenguins",
    url: "https://findpenguins.com/iantoyota"
  },
  {
    title: "Tech Articles",
    platform: "Medium",
    url: "https://medium.com/@iantoyota"
  }
];

export const interests = [
 "Model UN",
 "African Literature",
 "Soccer",
 "Cooking",
 "Cycling",
 "Traveling",
 "Hiking"
];