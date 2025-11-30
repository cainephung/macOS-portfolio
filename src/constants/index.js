const navLinks = [
  // {
  //     id: 1,
  //     name: "Projects",
  //     type: "finder",
  // },
  {
    id: 1,
    name: "Contact",
    type: "contact",
  },
  {
    id: 2,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  // {
  //     id: 1,
  //     img: "/icons/wifi.svg",
  // },
  // {
  //     id: 2,
  //     img: "/icons/search.svg",
  // },
  // {
  //     id: 3,
  //     img: "/icons/user.svg",
  // },
  {
    id: 1,
    img: "/icons/mode.svg",
    action: "toggle-theme",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  // {
  //     id: "safari",
  //     name: "Articles", // was "Safari"
  //     icon: "safari.png",
  //     canOpen: true,
  // },
  // {
  //     id: "photos",
  //     name: "Gallery", // was "Photos"
  //     icon: "photos.png",
  //     canOpen: true,
  // },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  //   {
  //     id: "trash",
  //     name: "Archive", // was "Trash"
  //     icon: "trash.png",
  //     canOpen: false,
  //   },
];

const blogPosts = [
  // {
  //   id: 1,
  //   date: "Sep 2, 2025",
  //   title:
  //     "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
  //   image: "/images/blog1.png",
  //   link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  // },
  // {
  //   id: 2,
  //   date: "Aug 28, 2025",
  //   title: "The Ultimate Guide to Mastering Three.js for 3D Development",
  //   image: "/images/blog2.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  // },
  // {
  //   id: 3,
  //   date: "Aug 15, 2025",
  //   title: "The Ultimate Guide to Mastering GSAP Animations",
  //   image: "/images/blog3.png",
  //   link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  // },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI", "C#"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "OpenCV", "MediaPipe"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "Postgres", "Supabase"],
  },
  {
    category: "Cloud / DevOps",
    items: ["AWS", "Docker", "Azure DevOps"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/cainephung",
  },
  // {
  //     id: 2,
  //     text: "Platform",
  //     icon: "/icons/atom.svg",
  //     bg: "#4bcb63",
  //     link: "https://jsmastery.com/",
  // },
  // {
  //     id: 3,
  //     text: "Twitter/X",
  //     icon: "/icons/twitter.svg",
  //     bg: "#ff866b",
  //     link: "https://x.com/jsmasterypro",
  // },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/caine-phung/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 — E-Commerce
    {
      id: 5,
      name: "E-Commerce",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-7",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "E-Commerce Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A modern e-commerce site built with Next.js, TailwindCSS, and Sanity for product management.",
            "The store includes a working cart, checkout flow, and dynamic pages fully driven by Sanity content.",
            "I focused on making the UI clean and reusable, with smooth loading states and a responsive layout.",
            "This project gave me solid practice building a real end-to-end app with a CMS and custom API routes.",
          ],
        },
        {
          id: 2,
          name: "demo-link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://caineshop.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ecommerce.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2 — RAG Knowledge Base
    {
      id: 6,
      name: "AI RAG",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "RAG Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A document-based assistant that lets you upload your own files and ask natural questions about them.",
            "It uses a simple retrieval pipeline I built with FastAPI, Python, and embeddings to get accurate, grounded answers.",
            "Instead of relying on random AI responses, it pulls real information from your data and formats the final answer cleanly.",
            "This project taught me a lot about chunking, vector search, prompt design, and building a practical API that feels consistent and fast.",
          ],
        },

        {
          id: 2,
          name: "demo.mp4",
          icon: "/images/image.png",
          kind: "file",
          fileType: "video",
          position: "top-52 left-80",
          videoUrl: "/videos/RAG-demo.mp4",
        },
      ],
    },

    // ▶ Project 3 — ASL Sign Language
    {
      id: 7,
      name: "ASL",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "ASL App.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A real-time ASL recognition app made with Python, MediaPipe, and PyTorch.",
            "It captures hand landmarks through the webcam and predicts letters A–Z, including motion gestures like J and Z.",
            "I added preprocessing and a small sequence model to make the predictions more stable and accurate.",
            "This project helped me understand how to combine CV pipelines, model training, and live feedback into one app.",
          ],
        },
        {
          id: 4,
          name: "demo.mp4",
          icon: "/images/image.png",
          kind: "file",
          fileType: "video",
          position: "top-52 right-80",
          // imageUrl: "/images/project-3.png"
          videoUrl: "/videos/ASL-demo.mp4",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 2,
      name: "casual-me.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual-me.jpg",
    },

    {
      id: 3,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "A little bit about me",
      image: "/images/me.jpg",
      description: [
        "Hi, I’m Caine. I’m a developer who likes building things that make sense and are easy to use. I prefer simple layouts, clean code, and features that actually feel useful instead of flashy.",

        "Most of my experience comes from working with JavaScript, React, Node, and a bit of backend and database work. I enjoy understanding how things fit together across the stack, not just how to build the UI part.",

        "Lately I’ve been spending more time learning about cloud, networking, and how applications run behind the scenes. It helps me understand the bigger picture instead of only focusing on the front-facing parts.",

        "A lot of my learning comes from small projects I build for myself. If something seems interesting or I want to understand how it works, I usually try to make a simple version of it. That’s where I learn the most.",

        "Outside of coding, I’m usually adjusting my setup, reading documentation, or testing out tools just to see what they can do. Nothing extreme — just small things that help me get better over time.",

        "Right now, I’m focused on improving my full-stack skills and building a portfolio that shows what I can actually do, not just list out technologies. I like steady progress and learning at my own pace.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  videofile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
