"use client";

import Image from "next/image"
import Github from "./svg/github"
import ExternalLink from "./svg/linkArrow"
import { useLanguage } from "@/context/LanguageContext";

const projects = [
    {
        title: "Portfolio",
        description: "Novo portfólio criado em Next.js e Tailwind CSS, com o objetivo de praticar o uso do Tailwind CSS e criar um portfólio mais moderno e leve. Projeto criado com foco em aprendizagem.",
        tags: ["Next.js", "Tailwind CSS", "JavaScript", "Internacionalização", "Responsive", "Fetch API",],
        github: "https://github.com/Ramon-Eduardo/Portfolio",
        color: "from-violet-500 to-purple-500",
        image: "/portfolio.png"
    },
    {
        title: "Primeiro Portfólio",
        description: "Portfólio criado 100% responsivo criado em Next.js e style modules .scss.",
        tags: ["Next.js", "Style Module .scss", "JavaScript", "Responsive", "Internacionalização",],
        github: "https://github.com/Ramon-Eduardo/First-Portfolio",
        demo: "https://first-portfolio-gamma-nine.vercel.app/",
        color: "from-blue-500 to-cyan-500",
        image: "/oldPortfolio.png"
    },
    {
        title: "Delícias a Mesa",
        description: "Projeto Criado durante o bootcamp de Desenvolvimento Web Frontend pela Campinho Digital. Projeto feito em HTML5, CSS3 sem responsividade.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        github: "https://github.com/Ramon-Eduardo/Receitas",
        demo: "https://receitas-eta-eight.vercel.app/",
        color: "from-pink-500 to-rose-500",
        image: "/receitas.png"
    },
    {
        title: "Reencontrow",
        description: "Projeto feito em React.js, CSS, sem Responsividade. Projeto criado para praticar o uso de React.js.",
        tags: ["React.js", "CSS3", "Vite"],
        github: "https://github.com/Ramon-Eduardo/Reencontrow",
        demo: "https://reencontrow-delta.vercel.app/",
        color: "from-violet-500 to-purple-500",
        image: "/reencontrow.png"
    },
    {
        title: "Ordem de Serviço",
        description: "Projeto freelancer, criado em Next.js e style module .scss, com o uso da lib do react-signature-canvas para assinatura a punho como haviam solicitado. Ordem de serviço criado para a empresa que meu mentor trabalha.",
        tags: ["Next.js", "Style Module .scss", "Signature Canvas", "React-to-Print", "Responsive"],
        github: "#",
        demo: "https://ordem-de-servico-five.vercel.app/",
        color: "from-blue-500 to-cyan-500",
        image: "/voxy.png"
    },
    {
        title: "CodeLeap Test",
        description: "Prova técnica criada para um processo seletivo de Desenvolvedor Web Front-End Junior na empresa Codeleap.uk. Projeto desenvolvido em React.js e estilizado com style module .scss 100% responsivo.",
        tags: ["React.js", "Style Module .scss", "JavaScript", "Fetch API", "Responsive", "Vite"],
        github: "https://github.com/Ramon-Eduardo/codeLeap_test",
        demo: "https://code-leap-test-topaz.vercel.app/",
        color: "from-pink-500 to-rose-500",
        image: "/codeleapTest.png"
    }
]

export default function Projects() {
    const { t } = useLanguage();
    
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <div className="w-full">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
                </div>
                <div className="w-full">
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.projects.description}
                    </p>
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index}  className="w-full h-full">
                        <div
                            className="group relative glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    loading="eager"
                                    sizes="width:382px, height: 192px"
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60`} />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 text-justify">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github />
                                        <span>{t.projects.links.code}</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                                    >
                                        <ExternalLink/>
                                        <span>{t.projects.links.demo}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}