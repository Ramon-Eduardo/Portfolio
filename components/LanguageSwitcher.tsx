"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { USFlag, BRFlag } from "@/components/icons/Flags";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
    { code: "en", name: "English", flag: USFlag },
    { code: "pt", name: "Português", flag: BRFlag },
] as const;

export default function LanguageSwitcher() {
    const { locale, setLocale, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const currentLanguage = languages.find((l) => l.code === locale) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-gray-300 hover:text-white"
                aria-label="Select Language"
            >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{t.nav.language}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 py-1 rounded-xl glass border border-white/10 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100 origin-top-right">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {t.nav.language}
                    </div>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLocale(lang.code);
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 flex items-center gap-3 text-sm transition-colors ${locale === lang.code
                                ? "bg-primary/20 text-primary"
                                : "text-gray-300 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <lang.flag className="w-5 h-4 rounded-sm object-cover" />
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
