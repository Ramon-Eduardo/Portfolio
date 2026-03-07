import { Container } from '@/components/Container'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { GithubIcon } from '@/components/svg/github';
import Globe from '@/components/svg/globe';

export default function PortfolioPage() {
    const t = useTranslations("projects");
    return (
        <div className={styles.projects}>
            <Container>
                <div className={styles.portfolioContainer}>
                    <div className={styles.projectCard}>
                        <img src="/portfolio.png" alt="imagem portfolio" />
                        <div className={styles.projectDescription}>
                            <div className={styles.projectHeader}>
                                <h3>{t("portfolio.title")}</h3>
                                <div className={styles.projectLinks}>
                                    <Link href="https://github.com/Ramon-Eduardo/Portfolio"><GithubIcon /><span>View Code</span></Link>
                                </div>
                            </div>
                            <p>{t("portfolio.description")}</p>
                        </div>
                    </div>
                    <div className={styles.projectCard}>
                        <img src="/receitas.png" alt="imagem receitas" />
                        <div className={styles.projectDescription}>
                            <div className={styles.projectHeader}>
                                <h3>{t("recipes.title")}</h3>
                                <div className={styles.projectLinks}>
                                    <Link href="https://receitas-eta-eight.vercel.app/"><Globe /><span>View Project</span></Link>
                                    <Link href="https://github.com/Ramon-Eduardo/Receitas"><GithubIcon /><span>View Project</span></Link>
                                </div>
                            </div>
                            <p>{t("recipes.description")}</p>
                        </div>
                    </div>
                    <div className={styles.projectCard}>
                        <img src="/reencontrow.png" alt="imagem reencontrow" />
                        <div className={styles.projectDescription}>
                            <div className={styles.projectHeader}>
                                <h3>{t("reencontrow.title")}</h3>
                                <div className={styles.projectLinks}>
                                    <Link href="https://reencontrow-delta.vercel.app/"><Globe /><span>View Project</span></Link>
                                    <Link href="https://github.com/Ramon-Eduardo/Reencontrow"><GithubIcon /><span>View Project</span></Link>
                                </div>
                            </div>
                            <p>{t("reencontrow.description")}</p>
                        </div>
                    </div>
                    <div className={styles.projectCard}>
                        <img src="/ordem.png" alt="imagem ordem de serviço" />
                        <div className={styles.projectDescription}>
                            <div className={styles.projectHeader}>
                                <h3>{t("ordemDeServico.title")}</h3>
                                <div className={styles.projectLinks}>
                                    <Link href="https://ordem-de-servico-five.vercel.app/"><Globe /><span>View Project</span></Link>
                                </div>
                            </div>
                            <p>{t("ordemDeServico.description")}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}