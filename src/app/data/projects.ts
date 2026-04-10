export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Tongue-Ai-Agent",
    description:
      "This intelligent tongue diagnosis and analysis system, based on traditional Chinese medicine theory, combines computer vision models with local large language models (LLM) to provide real-time tongue image recognition, constitution analysis, and health advice. It also has long-term memory capabilities to track users' health trends.",
    technologies: [
      "Electron",
      "React",
      "FastAPI",
      "LangGraph agent workflow",
      "PostgreSQL",
    ],
    image: "/images/project-preview/toung-ai-agent.png",
    link: "https://github.com/Peter-To-Better/Tongue-Ai-Agent",
    github: "https://github.com/Peter-To-Better/Tongue-Ai-Agent",
    featured: true,
  },
  {
    title: "Carbon-ESG",
    description:
      "In Taiwan, carbon credit trading is mainly overseen by the Taiwan Carbon Exchange and related government agencies. As the market is still evolving, entry barriers and procedures remain challenging, particularly for small and medium-sized enterprises (SMEs). This limits their ability to efficiently access or trade carbon credits.To address this issue, this project proposes an online carbon credit trading platform integrated with blockchain technology. By leveraging smart contracts, the platform ensures transparent, traceable, and secure transactions, with all issuance, transfer, and retirement records verifiable on-chain. By lowering participation barriers, the platform aims to enhance market accessibility, liquidity, and overall progress toward sustainable development goals.",
    technologies: ["PHP", "MySQL", "Bootstrap", "Web3.js"],
    image: "/images/project-preview/esg-carbon.png",
    link: "https://github.com/hongyui/Carbon-ESG",
    github: "https://github.com/hongyui/Carbon-ESG",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimal performance.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "/images/project-preview/profile.png",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "shou shou ren blog",
    description:
      "A blog built with hexo and deployed on vercel with Google Analytics, Google Search Console and Google Domains you can search the name called '瘦瘦仁' to find the blog",
    technologies: [
      "Hexo",
      "Vercel",
      "Google Analytics",
      "Google Search Console",
      "Google Domains",
    ],
    image: "/images/project-preview/blog.png",
    link: "https://peter-to-better-blog.lanya.dev/",
    github: "https://github.com/Peter-To-Better/blog",
    featured: true,
  },
  {
    title: "A landing page for a coffee shop",
    description:
      "A modern, responsive landing page for a coffee shop showcasing their products and services with a warm and inviting design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/project-preview/coffee-shop.png",
    link: "https://peter-to-better.github.io/coffee/",
    github: "https://github.com/Peter-To-Better/coffee",
  },
  {
    title: "A landing page for a ChatTalker",
    description:
      "A modern, responsive landing page for a ChatTalker showcasing their products and services with a clean and modern design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/images/project-preview/chat-talker.png",
    link: "https://peter-to-better.github.io/boot/",
    github: "https://github.com/Peter-To-Better/boot",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
