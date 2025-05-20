import { Pickaxe } from "lucide-react";
export const projects = [
  {
    title: "Takusi Ice Cream",
    description: "A static website showcasing a local ice cream brand.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Slick",
      "EmailJS",
      "React Scroll",
    ],
    githubUrl: "https://github.com/Phpar-Ph/takusi-ice-cream",
    liveUrl: "https://takusi-icecream.netlify.app/",
  },
  {
    title: "Dev Tools",
    description:
      "A curated set of tools and resources I've used throughout my web dev journey.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "JavaScript", "Tailwind CSS", "React Router"],
    githubUrl: "https://github.com/Phpar-Ph/Dev-Tools",
    liveUrl: "https://dev-toolshub.netlify.app/",
  },
  {
    title: "E-commerce Local",
    description:
      "An e-commerce website for local products, featuring backend development and database for image storage.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    technologies: [
      "React",
      "Express",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "UploadThing",
    ],
    githubUrl: "https://github.com/Phpar-Ph/bohol-local-shop",
    liveUrl: "https://bohol-local-shop-frontend.onrender.com/",
    progress: {
      text: "Under Development",
      icon: <Pickaxe className="w-5 h-5" />,
      className:
        "absolute top-22 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center gap-2 bg-black/50 px-4 py-2 rounded-full text-amber-500",
    },
  },
  {
    title: "User Authentication",
    description:
      "A user authentication and authorization website with backend development and database for image storage.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    technologies: [
      "React",
      "Express",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "UploadThing",
      "JWT",
      "Bcrypt",
      "nodemailer",
    ],
    githubUrl: "https://github.com/Phpar-Ph/User_Authentication",
    liveUrl: "https://user-authentication-frontend-6460.onrender.com/",
  },
  {
    title: "EternaLink",
    description:
      "EternaLink is a heartfelt project that allows families and friends to create digital memorials in honor of their loved ones.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    technologies: [
      "React",
      "Express",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "UploadThing",
      "JWT",
      "Bcrypt",
      "nodemailer",
    ],
    githubUrl: "https://github.com/Phpar-Ph/EternaLink",
    liveUrl: "https://eternalink-fronend.onrender.com",
    progress: {
      text: "Under Development",
      icon: <Pickaxe className="w-5 h-5" />,
      className:
        "absolute top-22 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center gap-2 bg-black/50 px-4 py-2 rounded-full text-amber-500",
    },
  },
];
