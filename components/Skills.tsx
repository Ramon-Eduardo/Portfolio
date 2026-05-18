"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
    const { t } = useLanguage();
    
    const skills = [
        { name: "HTML5", level: "intermediate" },
        { name: "CSS3", level: "intermediate" },
        { name: "Style Module .scss", level: "beginner" },
        { name: "JavaScript", level: "beginner" },
        { name: "React.js", level: "beginner" },
        { name: "Next.js", level: "beginner" },
        { name: "Tailwind CSS", level: "beginner" }
    ]
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="w-full">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t.skills.title}
                        </h2>
                    </div>
                    <div className="w-full">
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {t.skills.description}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div className="w-full h-full" key={skill.name}>
                            <div className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-colors group cursor-default h-full w-full flex flex-col justify-center items-center"
                            >
                                <h3 className="font-semibold text-lg text-white group-hover:text-primary transition-colors" >
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-gray-500 mt-2">
                                    {skill.level === "intermediate" ? t.skills.levels.intermediate : skill.level === "beginner" ? t.skills.levels.beginner : t.skills.levels.advanced}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}