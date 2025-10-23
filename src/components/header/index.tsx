import Link from 'next/link'
import styles from './styles.module.scss'
import { Container } from '../Container'
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../switcher';


export function Header() {
    const t = useTranslations('nav');
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <h1>Ramon Santos</h1>
                    </div>
                    <div className={styles.navBar}>
                        <Link href={"/"}>{t('home')}</Link>
                        <Link href="/about">{t('about')}</Link>
                        <Link href="/portfolio">{t('portfolio')}</Link>
                    </div>
                    <div className={styles.contactButton}>
                        <Link href="/contact">{t('contact')}</Link>
                    </div>
                    <LanguageSwitcher />
                </div>
            </Container >
        </div >
    )
}

export default Header