"use client";
import { useState } from "react";
import Selector from "./svg/downSelector";
import Github from "./svg/github";
import Globe from "./svg/globeIcon";
import LinkedIn from "./svg/linkedIn";
import Code from "./svg/logoIcon";
import Mail from "./svg/mail";
import Link from "next/dist/client/link";
import CloseMenu from "./svg/closeMenu";
import Menu from "./svg/menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();
    
    const navItems = [
        { name: t.nav.about, href: "#about" },
        { name: t.nav.skills, href: "#skills" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.contact, href: "#contact" },
    ];
    
    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Code />
                        <span className="font-bold text-xl tracking-tight">Ramon.dev</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <LanguageSwitcher />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-4 pl-4 border-l border-white/10">
                        <a className="text-gray-400 hover:text-white transition-colors" href="https://github.com/Ramon-Eduardo"><Github /></a>
                        <a className="text-gray-400 hover:text-white transition-colors" href="https://www.linkedin.com/in/ramonsantosprofile/"><LinkedIn /></a>
                        <a className="text-gray-400 hover:text-white transition-colors" href="mailto:ramoneduardo.contato@gmail.com"><Mail /></a>
                    </div>
                    <div className="-mr-2 flex md:hidden gap-2 items-center">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <CloseMenu/> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden glass border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-white hover:bg-white/5 block px-3 py-2 rounded-md text-base font-medium border-b border-white/5 last:border-b-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}