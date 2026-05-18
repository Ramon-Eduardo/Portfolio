"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    
    return (
        <section id="footer">
            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
                 <p>&copy; {new Date().getFullYear()} Ramon Santos. {t.footer.copyright}</p>
            </footer>
        </section>
    );
}