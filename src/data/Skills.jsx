import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Code2,
  Database,
  Globe2,
  Palette,
  Server,
  Cpu,
} from "lucide-react";

export const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="text-blue-400" size={24} />,
    items: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Server className="text-green-400" size={24} />,
    items: ["Node.js", "Express", "Javascript"],
  },
  {
    category: "Database",
    icon: <Database className="text-yellow-400" size={24} />,
    items: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  //   {
  //     category: "DevOps",
  //     icon: <Cpu className="text-purple-400" size={24} />,
  //     items: ["Docker", "AWS", "CI/CD", "Git"],
  //   },
  {
    category: "Design",
    icon: <Palette className="text-pink-400" size={24} />,
    items: ["Figma", "Adobe Suite", "UI/UX"],
  },
  //   {
  //     category: "Other",
  //     icon: <Globe2 className="text-indigo-400" size={24} />,
  //     items: ["SEO", "Agile", "Testing", "Performance Optimization"],
  //   },
];
