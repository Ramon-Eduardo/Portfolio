"use client";

import ArrowRight from "./svg/arrowRight";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();
    
    return (
        <section id="about" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center md:text-left">
                <div className="relative w-fit overflow-hidden">
                    <div className="h-full opacity-1; transform-none; ">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            {t.about.name} <br />
                            <span className="text-primary">{t.about.title}</span>
                        </h1>
                    </div>
                </div>
                <div className="relative w-fit overflow-hidden">
                    <div className="h-full opacity-1; transform-none; ">
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed text-justify">
                            {t.about.description}
                        </p>
                    </div>
                </div>
                <div className="relative w-fit overflow-hidden">
                    <div className="h-full opacity-1; transform-none; ">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium transition-all hover:bg-primary/90 hover:scale-105 active:scale-95">
                                {t.about.viewProjects} <ArrowRight />
                            </a>
                            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-white font-medium transition-all hover:bg-white/10 active:scale-95">
                                {t.about.contactMe}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}