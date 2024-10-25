import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "FakeStore",
    href: "/projects",
    tags: ["ReactJS", "Nextjs", "Styled Components", "Context API"],
    image: {
      LIGHT: "/images/projects/fake-store.png",
      DARK: "/images/projects/fake-store.png",
    },
  },
  {
    index: 1,
    title: "The vechile vin",
    href: "/projects",
    tags: ["NextJS", "Metrail UI", "Tailwind"],
    image: {
      LIGHT: "/images/projects/vin.png",
      DARK: "/images/projects/vin.png",
    },
  },
  {
    index: 2,
    title: "E-commerce",
    href: "/projects",
    tags: [
      "ReactJS",
      "Context API",
      "tailwind",
      "ExpressJS",
      "NodeJs",
      "Socket io",
    ],
    image: {
      LIGHT: "/images/projects/e-commerce.png",
      DARK: "/images/projects/e-commerce.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "FakeStore",
    favicon: "🏪",
    imageUrl: [
      "/images/projects/fake-store.png",
      "/images/projects/fake-store.png",
      "/images/projects/fake-store.png",
    ],
    description:
      "This is an eCommerce web app built with Next.js and TypeScript, featuring shadcn/ui for a modern UI and Context API for global state management. The app provides product listings, a cart system, and checkout functionality. It leverages TypeScript for type safety and Next.js for optimized rendering, ensuring high performance and scalability.'",
    sourceCodeHref: "https://github.com/adilmalik01/fake-store-dynamicRouting",
    liveWebsiteHref:
      "https://fake-store-dynamic-routing-pmm1usc36-malik4.vercel.app/",
  },
  {
    name: "the vehicle vin",
    favicon: "🚗",
    imageUrl: ["/images/projects/vin.png", "/images/projects/vin.png"],
    description:
      "This project is a vehicle VIN lookup website built with Next.js and TypeScript, featuring a responsive design using shadcn/ui. It allows users to search and verify car details by entering the VIN (Vehicle Identification Number). The app focuses on performance and accessibility, ensuring seamless user experience across all devices through optimized rendering and modern UI components.",
    sourceCodeHref: "https://github.com/adilmalik01/the-vehicle-vin",
    liveWebsiteHref: "https://the-vehicle-vin.vercel.app/",
  },
  {
    name: "E-commerce",
    favicon: "🛒",
    imageUrl: ["/images/projects/e-commerce.png"],
    description:
      "I built a full-stack eCommerce application using MongoDB, Express.js, and Next.js, with a responsive frontend styled through shadcn/ui. It provides core features like product listings, cart functionality, and order management. For the admin dashboard, I integrated Socket.IO to enable real-time notifications, ensuring instant updates for new orders and user activities. This project emphasizes scalability, performance, and smooth user experience across all devices.",
    sourceCodeHref: "https://github.com/adilmalik01/E-commerce-Frontend",
    liveWebsiteHref: "https://e-commerce-web-app-delta.vercel.app/",
  },

  {
    name: "Adii Notes",
    favicon: "📝",
    imageUrl: ["/images/projects/adii-notes.png"],
    description:
      "Adii Notes is a note-taking web app built with HTML, CSS, and JavaScript, inspired by a to-do list system. It allows users to create, update, delete, and search their notes efficiently. The app includes toast notifications for user feedback and utilizes Bootstrap modals to manage note actions in a sleek, user-friendly way. Additional features like search filtering enhance usability, making it easy to find specific notes quickly. This project emphasizes simplicity and smooth interaction with responsive design elements.",
    sourceCodeHref: "https://github.com/adilmalik01/Adii-Notes",
    liveWebsiteHref: "https://adilmalik01.github.io/Adii-Notes/",
  },
  {
    name: "Django Blogging Website",
    favicon: "📖",
    imageUrl: ["/images/projects/django.png"],
    description:
      "This is a blogging platform built with Django and SQLite as the database. It enables users to create, read, update, and delete blog posts, with functionality for image uploads to enhance posts. The project focuses on simplicity and ease of use, with a clean interface for managing content. It leverages Django's built-in capabilities for rapid development and ensures a smooth user experience through efficient CRUD operations.",
    sourceCodeHref: "https://github.com/adilmalik01/django-firstApp",
    liveWebsiteHref: "https://github.com/adilmalik01/django-firstApp",
  },
  {
    name: "Resume Builder",
    favicon: "📑",
    imageUrl: ["/images/projects/resume.png"],
    description:
      "This is a resume builder web application developed using HTML, CSS, and TypeScript, offering users an intuitive interface to create professional resumes with ease. The project focuses on delivering a user-friendly experience, allowing users to input and customize their information efficiently. The design ensures responsiveness and smooth interaction, making it simple to generate polished resumes that stand out.",
    sourceCodeHref: "https://github.com/adilmalik01/Resume-Builder",
    liveWebsiteHref: "https://resume-builder-malik4.vercel.app/",
  },

  {
    name: "REJOUICE",
    favicon: "💫",
    imageUrl: ["/images/projects/rejouice.png"],
    description:
      "This is a responsive website built with HTML, CSS, and JavaScript, featuring smooth and engaging animations powered by GSAP (GreenSock Animation Platform). The site offers a dynamic user experience with creative transitions and interactive elements that enhance usability. Designed to be fully responsive, it ensures seamless performance across different devices, maintaining both aesthetics and functionality.",
    sourceCodeHref: "https://github.com/adilmalik01/REJOICE-WEBSITE",
    liveWebsiteHref: "https://adilmalik01.github.io/REJOICE-WEBSITE//",
  },
  {
    name: "Food Hub",
    favicon: "😋",
    imageUrl: ["/images/projects/food-hub.png"],
    description:
      "This is a responsive Food Hub website developed with HTML, CSS, and JavaScript, utilizing API fetching to dynamically display various dishes. The application features a search filter functionality, allowing users to easily find their desired meals. With a focus on usability and design, the website provides an engaging user experience and ensures compatibility across different devices, making it easy to explore and discover a variety of culinary options.",
    sourceCodeHref: "https://github.com/adilmalik01/Recipe-Finder-app",
    liveWebsiteHref: "https://adilmalik01.github.io/Recipe-Finder-app/",
  },
];
