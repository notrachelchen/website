import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rachel Chen",
  initials: "RC",
  url: "https://dillion.io",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/New+York,+NY/@40.6970193,-74.3093263,10z/data=!3m1!4b1!4m6!3m5!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728!16zL20vMDJfMjg2?entry=ttu",
  description:
    "aspiring software engineer passionate about developing technology that enhances accessibility and drives social change.",
  summary:
    "I am a dedicated student at the University of Rochester, pursuing a degree in Computer Science. My academic journey has fueled my enthusiasm for software development and problem-solving. Currently, I am working on an exciting project that enables users to collaborate and complete tasks together, aiming to foster teamwork and streamline productivity.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Django",
    "FireBase",
    "Postgres",
    "Docker",
    "FastAPI",
    "Java",
    "C",
    "OpenAI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chenrachel22@gmail.com",
    tel: "+9296882010",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/notrachelchen",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rachel-chen-429263219/",
        icon: Icons.linkedin,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Headstarter",
      href: "https://headstarter.co/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Fellow",
      logoUrl: "/headstarter.jpg",
      start: "July 2024",
      end: "Sept 2024",
      description:
        "Built 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI with 98% accuracy as seen by 1000 users",
    },
    {
      company: "Codepath",
      href: "https://www.codepath.org/tech-fellow-program",
      badges: [],
      location: "Remote",
      title: "Tech Fellow",
      logoUrl: "/codepath.png",
      start: "June 2024",
      end: "Current",
      description:
        "Mentored and guided 17 students with solving technical interview questions ranging by focusing on data structures and algorithms concepts as well. Facilitated open collaboration in breakout rooms and maintained a accountable learning environment in the span of 8+ Zoom sessions",
    },
    {
      company: "DandyHacks",
      badges: [],
      href: "https://dandyhacks.net/",
      location: "Rochester, NY",
      title: " Frontend Developer",
      logoUrl: "/dandyhacks.jfif",
      start: "April 2024",
      end: "Current",
      description:
        "Engineered a user friendly school website using HTML, TailWindCSS and VanillaJS for a hackathon to engage 90+ prospective hackathon participants and attract company sponsorships with a team of 4",
    },
    {
      company: "Skylyfe",
      href: "https://www.placeyourprintontheworld.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/skylyfe.jfif",
      start: "Feb 2024",
      end: "April 2024",
      description:
        "Leveraged ReactJS and ThreeJS to create an AI hoodie customization feature, allowing users to generate random images on apparel through OpenAI algorithms. Prototyped a child-friendly user interface with Figma to enable kids to easily create 3D designs of their clothes",
    },
    {
      company: "UR CSUG",
      href: "https://ur-csug.org/#/about",
      badges: [],
      location: "Rochester, NY",
      title: "Computer Science Tutor",
      logoUrl: "/csug.png",
      start: " Sept 2023",
      end: "Dec 2023",
      description:
        " Assisted over 20 students in understanding computer science concepts in their projects and exam preparation by cultivating a team-oriented environment",
    },
  ],
  education: [
    {
      school: "University of Rochester",
      href: "https://www.rochester.edu/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/rochester.jfif",
      start: "2022",
      end: "2026",
    },
    {
      school: "Codepath",
      href: "https://www.codepath.org/",
      degree: "TIP 102(Intermediate Technical Interview Prep)",
      logoUrl: "/codepath.png",
      start: "June 2023",
      end: "August 2023",
    }, 
    {
      school: "The Brooklyn Latin School",
      href: "https://www.brooklynlatin.org/",
      degree: "",
      logoUrl: "/tbls.png",
      start: "2018",
      end: "2022",
    },
    
  ],
  projects: [
    /*{
      title: "Pantry App",
      href: "https://headstarter.co/info",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },*/
    /*{
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },*/
  ],
  hackathons: [
    {
      title: "DandyHacks",
      dates: "November 9th - 10th, 2024",
      location: "Rochester, New York",
      description:
        "I will be participating in the University of Rochester Hackathon: DandyHacks!",
      image:
        "dandyhacks.jfif",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
    {
      title: "DeveloperWeek Hackathon",
      dates: "November 8th - 10th, 2024",
      location: "San Francisco, California",
      description:
        "I will be participating in the Hack This Fall 2024 virtual hackathon!",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    
    
    
  
  ],
} as const;
