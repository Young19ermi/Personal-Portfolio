import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Threejs } from "@/components/ui/svgs/threejs";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Redux } from "@/components/ui/svgs/redux";
import { FigmaLogoIcon } from "@radix-ui/react-icons";

export const DATA = {
  name: "Ermias S. Endale",
  initials: "EE",
  url: "https://your-portfolio-url.com", // TODO: replace with your site
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://www.google.com/maps/place/addis+ababa",
  description:
    "Full-stack engineer & Three.js/WebGL specialist. I build fast, interactive web experiences and love solving hard problems.",
  summary:
    "I'm a self-taught full-stack engineer with hands-on experience from front-end interfaces to backend/API work, using React, Next.js, and Redux in Agile teams. Within months of joining a live SaaS product, I was shipping production-grade WebGL/Three.js features and leading LCP/INP performance work typically owned by senior engineers. I [graduated in Environmental Engineering](/#education), trained at [Africa To Silicon Valley (A2SV)](/#education), solved 800+ algorithmic problems on LeetCode and Codeforces, and was a quarterfinalist in [Africa's largest AI hackathon](/#hackathons). I'm currently available for B2B and remote work (GMT+3).",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Javascript },
    { name: "Redux", icon: Redux },
    { name: "Three.js / WebGL", icon: Threejs },
    // { name: "Flutter", icon: Flutter },
    { name: "Figma", icon: FigmaLogoIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ermiasendale19@gmail.com",
    tel: "+251920931565",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Young19ermi", // TODO
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ermias-seleshi", // TODO
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/youngermi/", // TODO
        icon: Icons.globe,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ermiasendale19@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ideeza",
      href: "https://ideeza.com",
      badges: [],
      location: "Tel Aviv, Israel",
      title: "Lead Three.js Developer",
      logoUrl: "/ideeza.webp",
      start: "August 2025",
      end: "Present",
      description:
        "Built and optimized complex Three.js features for a large-scale 3D PCB design system (Altium-style), delivering smooth real-time interactions, animations, and high-fidelity rendering in the browser. Improved WebGL performance across heavy scenes by optimizing shaders, reducing draw calls, and restructuring rendering logic, resulting in significantly better LCP, INP, and frame consistency.",
    },
    {
      company: "Eskalate",
      href: "https://eskalate.io",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "Software Engineer Intern",
      logoUrl: "/eskalate.png",
      start: "February 2024",
      end: "July 2024",
      description:
        "Worked in a team of 7 web developers to build a starter project using Next.js, RTK Query, and Tailwind CSS, achieving a 20% reduction in project delivery time through effective use of Agile methodologies. Reviewed code for quality assurance, ensuring adherence to best practices and high standards. Set up Redux with a teammate and built the user interface for a single blog view page.",
    },
  ],
  education: [
    {
      school: "Addis Ababa Science and Technology University",
      href: "https://www.aastu.edu.et",
      degree:
        "BSc in Environmental Engineering (GIS & Spatial Analysis, Environmental Modeling, Simulation)",
      logoUrl: "/aastu.jpeg",
      start: "2021",
      end: "2026",
    },
    {
      school: "Africa To Silicon Valley (A2SV)",
      href: "https://www.a2sv.org",
      degree:
        "Coding Academy (Backed by Google) - Data Structures & Algorithms in Python",
      logoUrl: "/a2sv.png",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "AASTU Maps",
      href: "#", // TODO: add live link
      dates: "June 2024 - May 2025",
      active: true,
      description:
        "Interactive campus navigation app with 3,000+ active users, integrating OpenStreetMap and Gebeta Maps for real-time navigation. Revamped the Flutter app's UI and event alerts, collaborating with GDG AASTU on 3+ releases to improve navigation accuracy by 30% and boost daily user engagement by 40%.",
      technologies: ["Flutter", "OpenStreetMap", "Gebeta Maps", "AI"],
      links: [],
      image: "/maps.png",
      video: "",
    },
    {
      title: "Hahu Globes",
      href: "#", // TODO: add live link
      dates: "August 2024 - September 2024",
      active: true,
      description:
        "A 3D planet visualizer for kids. Engineered an interactive Three.js globe interface with custom shaders, responsive animations, and immersive orbital motion synchronized to user interactions. Integrated GSAP for smooth transitions, scroll-based animations, easing, and layered sequence effects.",
      technologies: ["Three.js", "WebGL", "GLSL Shaders", "GSAP", "JavaScript"],
      links: [],
      image: "/planet.png",
      video: "",
    },
    {
      title: "FurnishET",
      href: "#", // TODO: add live link
      dates: "January 2025 - March 2025",
      active: true,
      description:
        "A 3D furniture website where users can interact with 3D objects, change lighting and color, and rotate and animate furniture models. Delivered a clean interface, fast performance, and mobile compatibility to improve the shopping experience.",
      technologies: ["Three.js", "WebGL", "JavaScript", "Responsive Design"],
      links: [],
      image: "/furnish.png",
      video: "",
    },
    {
      title: "Abyline",
      href: "#", // TODO: add live link
      dates: "March 2025 - May 2025",
      active: true,
      description:
        "An immersive interactive 3D web experience built with Three.js and WebGL to showcase creative brand content, with smooth transitions and animated 3D elements. Implemented performance-focused rendering techniques and optimized scene flow for seamless engagement across devices.",
      technologies: [
        "Three.js",
        "WebGL",
        "JavaScript",
        "Performance Optimization",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "IONO",
      href: "#", // TODO: add live link
      dates: "May 2024 - August 2024",
      active: true,
      description:
        "An AI-powered research tool. Built a web interface using the OpenAI API to source relevant research materials and surface real-time, context-aware suggestions based on the user's topic. Built an OCR pipeline to digitize hardcopy research into searchable, AI-queryable text.",
      technologies: ["React", "Python", "OpenAI API", "OCR"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "800+ Problems Solved on LeetCode & Codeforces",
      dates: "February 2023 - Present",
      location: "Online",
      description:
        "Solved 800+ algorithmic challenges across LeetCode and Codeforces, sharpening the problem-solving instincts I now apply to real-world engineering work.",
      image: "/leetcode.png",
      win: "800+ Solved",
      links: [
        {
          types: "LeetCode",
          href: "https://leetcode.com/u/youngermi/",
        },
      ],
    },
    {
      title: "A2SV Grand AI Hackathon",
      dates: "July 2024 - September 2024",
      location: "Africa",
      description:
        "Reached the top 128 in Africa's largest hackathon, competing against 1,100+ teams from 48 countries to build AI solutions for real-world challenges.",
      image: "/a2sv.png",
      win: "Quarterfinalist (Top 128)",
      links: [
        {
          types: "Certificate",
          href: "https://drive.google.com/file/d/1zOjCR1mN6hhrl6_lP5P16T1M6V4RlCTz/view?usp=sharing",
        },
      ],
    },
    {
      title: "GDSC AASTU Grand Hackathon",
      dates: "June 2024",
      location: "Addis Ababa, Ethiopia",
      description:
        "Honored for exceptional leadership, strong team collaboration and unwavering dedication throughout the 2024 hackathon.",
      image: "/gdsc.jpg",
      win: "Outstanding Team Leadership",
      links: [
        {
          types: "Certificate",
          href: "https://drive.google.com/drive/folders/1H9jtedSPikeR5g3nVafu77Ukmfpg7T4r?usp=sharing",
        },
      ],
    },
    {
      title: "Outstanding Team Leadership, GDSC AASTU",
      dates: "February 2023 - Present",
      location: "InPerson, Addis Ababa, Ethiopia",
      description:
        "Recognized for leadership and team collaboration during the 2024 GDSC AASTU Grand Hackathon, leading a team through the competition.",
      image: "/gdsc.jpg",
      win: "Leadership Award",
      links: [
        {
          types: "Certificate",
          href: "https://drive.google.com/file/d/10SUcbFko44tfnfCABYRTGhWMxf4rozPh/view?usp=sharing",
        },
      ],
      icon: Icons.globe,
      titles: "Leadership Certificate",
    },
  ],
  Achivements: [
    {
      title: "A2SV Grand AI Hackathon",
      dates: "July 2024 - September 2024",
      location: "Africa",
      description:
        "Reached the top 128 quarterfinalists in Africa's largest hackathon, competing against 1100+ teams from 48 countries and contributing to innovative AI solutions addressing real-world challenges.",
      image: "/a2sv.png",
      win: "Quarterfinalist (Top 128)",
      links: [],
    },
    {
      title: "GDSC AASTU Grand Hackathon",
      dates: "June 2024",
      location: "Addis Ababa, Ethiopia",
      description:
        "Recognized for exceptional leadership, fostering effective team collaboration, and showing unwavering dedication during the 2024 GDSC AASTU Grand Hackathon.",
      image: "",
      win: "Outstanding Team Leadership",
      links: [],
    },
  ],
} as const;
