import { Container } from '@/components/Container'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

export default function PortfolioPage() {
    const t = useTranslations("portfolio");
    return (
        <div className={styles.portfolio}>
            <div className={styles.portfolioContainer}>
                <Container>
                    <div className={styles.title}>
                        <h1>{t("title")}</h1>
                    </div>
                </Container>
                <div className={styles.portfolioRow}>
                    <div className={styles.portfolioProjects}>
                        <Container>
                            <div className={styles.recipes}>
                                <Image src="/project1.png" alt="Recipes" width={500} height={600} />
                                <div className={styles.recipesText}>
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
                                    <div className={styles.projectLinks}>
                                        <Link className={styles.viewButton} href="https://receitas-eta-eight.vercel.app/">{t("projects.recipes.projectActions.view")}</Link>
                                        <Link href="https://github.com/Ramon-Eduardo/Receitas">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                fill="none"
                                                viewBox="0 0 50 50"
                                            >
                                                <path
                                                    fill="#fff"
                                                    fillRule="evenodd"
                                                    d="M24.991 1.25A24.93 24.93 0 0 0 8.898 7.143 24.67 24.67 0 0 0 .477 22 24.6 24.6 0 0 0 3.74 38.74a24.82 24.82 0 0 0 13.394 10.652c1.234.229 1.699-.536 1.699-1.186s-.025-2.537-.033-4.598c-6.912 1.493-8.372-2.917-8.372-2.917C9.3 37.828 7.67 37.075 7.67 37.075c-2.254-1.53.17-1.501.17-1.501 2.496.176 3.809 2.548 3.809 2.548 2.213 3.776 5.813 2.684 7.228 2.046.222-1.6.868-2.688 1.58-3.306-5.521-.621-11.322-2.74-11.322-12.206a9.54 9.54 0 0 1 2.559-6.63c-.255-.622-1.107-3.134.243-6.546 0 0 2.085-.662 6.833 2.533a23.7 23.7 0 0 1 12.44 0c4.744-3.195 6.826-2.533 6.826-2.533 1.353 3.404.502 5.915.246 6.545a9.52 9.52 0 0 1 2.563 6.64c0 9.485-5.813 11.576-11.342 12.185.889.77 1.683 2.27 1.683 4.578 0 3.305-.029 5.964-.029 6.778 0 .658.448 1.427 1.707 1.186A24.82 24.82 0 0 0 46.26 38.739a24.6 24.6 0 0 0 3.262-16.744 24.67 24.67 0 0 0-8.425-14.856A24.93 24.93 0 0 0 24.999 1.25z"
                                                    clipRule="evenodd"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M9.555 36.72c-.053.122-.25.159-.411.073s-.28-.245-.222-.372c.057-.127.25-.16.41-.074.161.086.285.25.223.372M10.563 37.836a.41.41 0 0 1-.51-.114c-.16-.172-.193-.41-.07-.516s.346-.057.506.115c.16.171.197.409.074.515M11.542 39.255c-.152.107-.411 0-.555-.212a.41.41 0 0 1 0-.59c.152-.102.411 0 .555.21.144.208.148.486 0 .592M12.871 40.63c-.136.151-.411.11-.638-.094-.226-.205-.28-.483-.144-.63s.412-.107.646.094c.235.2.28.483.136.63M14.735 41.432c-.062.192-.342.278-.622.196s-.465-.311-.411-.507c.053-.197.337-.287.621-.197s.465.307.412.508M16.767 41.57c0 .201-.23.373-.527.377-.296.004-.538-.16-.538-.36s.23-.372.526-.376.539.155.539.36M18.66 41.256c.036.2-.17.409-.466.458s-.555-.07-.592-.266.177-.41.465-.462.555.07.592.27"
                                                ></path>
                                            </svg>

                                            <p>Git Code</p>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </Container>
                        <Container>
                            <div className={styles.reencontrow}>
                                <div className={styles.reencontrowText}>
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
                                    <div className={styles.projectLinks}>
                                        <Link className={styles.viewButton} href="https://reencontrow-delta.vercel.app/">{t("projects.recipes.projectActions.view")}</Link>
                                        <Link href="https://github.com/Ramon-Eduardo/Reencontrow">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                fill="none"
                                                viewBox="0 0 50 50"
                                            >
                                                <path
                                                    fill="#fff"
                                                    fillRule="evenodd"
                                                    d="M24.991 1.25A24.93 24.93 0 0 0 8.898 7.143 24.67 24.67 0 0 0 .477 22 24.6 24.6 0 0 0 3.74 38.74a24.82 24.82 0 0 0 13.394 10.652c1.234.229 1.699-.536 1.699-1.186s-.025-2.537-.033-4.598c-6.912 1.493-8.372-2.917-8.372-2.917C9.3 37.828 7.67 37.075 7.67 37.075c-2.254-1.53.17-1.501.17-1.501 2.496.176 3.809 2.548 3.809 2.548 2.213 3.776 5.813 2.684 7.228 2.046.222-1.6.868-2.688 1.58-3.306-5.521-.621-11.322-2.74-11.322-12.206a9.54 9.54 0 0 1 2.559-6.63c-.255-.622-1.107-3.134.243-6.546 0 0 2.085-.662 6.833 2.533a23.7 23.7 0 0 1 12.44 0c4.744-3.195 6.826-2.533 6.826-2.533 1.353 3.404.502 5.915.246 6.545a9.52 9.52 0 0 1 2.563 6.64c0 9.485-5.813 11.576-11.342 12.185.889.77 1.683 2.27 1.683 4.578 0 3.305-.029 5.964-.029 6.778 0 .658.448 1.427 1.707 1.186A24.82 24.82 0 0 0 46.26 38.739a24.6 24.6 0 0 0 3.262-16.744 24.67 24.67 0 0 0-8.425-14.856A24.93 24.93 0 0 0 24.999 1.25z"
                                                    clipRule="evenodd"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M9.555 36.72c-.053.122-.25.159-.411.073s-.28-.245-.222-.372c.057-.127.25-.16.41-.074.161.086.285.25.223.372M10.563 37.836a.41.41 0 0 1-.51-.114c-.16-.172-.193-.41-.07-.516s.346-.057.506.115c.16.171.197.409.074.515M11.542 39.255c-.152.107-.411 0-.555-.212a.41.41 0 0 1 0-.59c.152-.102.411 0 .555.21.144.208.148.486 0 .592M12.871 40.63c-.136.151-.411.11-.638-.094-.226-.205-.28-.483-.144-.63s.412-.107.646.094c.235.2.28.483.136.63M14.735 41.432c-.062.192-.342.278-.622.196s-.465-.311-.411-.507c.053-.197.337-.287.621-.197s.465.307.412.508M16.767 41.57c0 .201-.23.373-.527.377-.296.004-.538-.16-.538-.36s.23-.372.526-.376.539.155.539.36M18.66 41.256c.036.2-.17.409-.466.458s-.555-.07-.592-.266.177-.41.465-.462.555.07.592.27"
                                                ></path>
                                            </svg>

                                            <p>Git Code</p>
                                        </Link>
                                    </div>
                                </div>
                                <Image src="/project2.png" alt="Reencontrow" width={500} height={600} />
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}