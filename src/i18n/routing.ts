import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'pt'],

    pathnames: {
        "/about": {
            en: "/about",
            pt: "/sobre"
        },

        "/portfolio": {
            en: "/portfolio",
            pt: "/potfolio"
        },

        "/contact": {
            en: "/contact",
            pt: "/contato"
        }

    },
    // Used when no locale matches
    defaultLocale: 'pt'
});