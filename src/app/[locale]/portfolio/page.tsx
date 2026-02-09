import { Container } from '@/components/Container'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { GithubIcon } from '@/components/svg/github';

export default function PortfolioPage() {
    const t = useTranslations("portfolio");
    return (
        <div className={styles.portfolio}>
            <div className={styles.portfolioContainer}>
                <div className={styles.portfolioRow}>
                    <div className={styles.portfolioProjects}>
                        <Container>
                            <div className={styles.recipes}>
                                <div className={styles.textContent}>
                                    <div className={styles.recipesText}>
                                        <div className={styles.text}>

                                            <h3>{t("projects.recipes.title")}</h3>
                                            <p>
                                                {t("projects.recipes.description")}
                                            </p>
                                            <p>
                                                {t("projects.recipes.features")}
                                            </p>
                                            <p>
                                                {t("projects.recipes.structure")}
                                            </p>
                                        </div>
                                        <div className={styles.project}>
                                            <div className={styles.logo}>
                                                <img src="/project1.png" alt="Recipes" />
                                            </div>
                                        </div>
                                        <div className={styles.links}>
                                            <Link className={styles.viewButton} href="https://receitas-eta-eight.vercel.app/">{t("projects.recipes.projectActions.view")}</Link>
                                            <Link href="https://github.com/Ramon-Eduardo/Receitas">
                                                <GithubIcon />
                                                <p>Git Code</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <div className={styles.reencontrow}>
                                <div className={styles.textContent}>
                                    <div className={styles.reencontrowText}>
                                        <div className={styles.text}>
                                            <h3>{t("projects.reencontrow.title")}</h3>
                                            <p>
                                                {t("projects.reencontrow.description")}
                                            </p>
                                            <p>
                                                {t("projects.reencontrow.features")}
                                            </p>
                                            <p>
                                                {t("projects.reencontrow.structure")}
                                            </p>
                                        </div>
                                        <div className={styles.project}>
                                            <div className={styles.logo}>
                                                <img src="/project2.png" alt="Reencontrow" />
                                            </div>
                                        </div>
                                        <div className={styles.links}>
                                            <Link className={styles.viewButton} href="https://reencontrow-delta.vercel.app/">{t("projects.recipes.projectActions.view")}</Link>
                                            <Link href="https://github.com/Ramon-Eduardo/Reencontrow">
                                                <GithubIcon />
                                                <p>Git Code</p>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}