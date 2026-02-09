import Link from 'next/link'
import styles from './styles.module.scss'
import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl';
import { PtbrIcon } from '@/components/svg/ptbr';
import { EnIcon } from '@/components/svg/en';

export default function AboutPage() {
    const t = useTranslations("about");
    return (
        <div className={styles.about}>
            <div className={styles.aboutContainer}>
                <div className={styles.row}>
                    <Container>
                        <div className={styles.aboutSection}>
                            <h2>{t("title")}</h2>
                            <div className={styles.aboutText}>
                                <p className={styles.textIntroduction}>
                                    {t("introduction")}
                                </p>
                                <p className={styles.text}>
                                    {t("description")}
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            {t("projects.portfolio")}
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            {t("projects.bootcamp")}
                                        </p>
                                    </li>
                                </ul>
                                <p>
                                    {t("closing")}
                                </p>
                            </div>
                            <div className={styles.cv}>
                                <Link href="/curriculo/curriculo.pdf">
                                    Download CV
                                    <PtbrIcon />
                                </Link>
                                <Link href="/curriculo/resume.pdf">
                                    Download CV
                                    <EnIcon />
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}
