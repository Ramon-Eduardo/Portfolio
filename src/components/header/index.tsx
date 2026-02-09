'use client'
import Link from 'next/link'
import styles from './styles.module.scss'
import { Container } from '../Container'
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../switcher';
import { cn } from '@/utils';
import { useState } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';


export function Header() {
    const translate = useTranslations('nav');
    const [navMobile, setNavMobile] = useState(false);
    const isMobile = useMediaQuery(769);

    return (
        <nav>
            <div className={styles.header}>
                <Container>
                    <div className={styles.content}>
                        {!isMobile && (
                            <div className={styles.logo}>
                                <h1>Ramon Santos</h1>
                            </div>
                        )}
                        {isMobile && (
                            <div className={styles.mobileMenu} onClick={() => setNavMobile(!navMobile)}>
                                <div className={styles.line1}></div>
                                <div className={styles.line2}></div>
                                <div className={styles.line3}></div>
                            </div>
                        )}
                        <div className={cn(styles.navBar, navMobile && styles.active)}>

                            {isMobile && (
                                <div className={styles.headerNavFloat}>
                                    <div className={styles.mobileMenu} onClick={() => setNavMobile(!navMobile)}>
                                        <div className={styles.line1}></div>
                                        <div className={styles.line2}></div>
                                        <div className={styles.line3}></div>
                                    </div>
                                    <LanguageSwitcher />
                                </div>
                            )}

                            <Link onClick={() => setNavMobile(false)} href={"/"}>{translate('home')}</Link>
                            <Link onClick={() => setNavMobile(false)} href="/about">{translate('about')}</Link>
                            <Link onClick={() => setNavMobile(false)} href="/portfolio">{translate('portfolio')}</Link>
                            <Link onClick={() => setNavMobile(false)} className={styles.ctnContact} href="/contact">{translate('contact')}</Link>
                        </div>
                        <div className={styles.selectLanguage}>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </Container >
            </div >
        </nav>
    )
}

export default Header