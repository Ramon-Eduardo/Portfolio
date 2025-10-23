import Link from 'next/link'
import styles from './styles.module.scss'
import { Container } from '@/components/Container'
import { useTranslations } from 'next-intl';

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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                    >
                                        <rect
                                            width="30"
                                            height="24"
                                            x="1"
                                            y="4"
                                            fill="#459a45"
                                            rx="4"
                                            ry="4"
                                        ></rect>
                                        <path
                                            d="M27 4H5a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4m3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3z"
                                            opacity="0.15"
                                        ></path>
                                        <path fill="#fedf00" d="M3.472 16 16 24l12.528-8L16 8z"></path>
                                        <circle cx="16" cy="16" r="5" fill="#0a2172"></circle>
                                        <path
                                            fill="#fff"
                                            d="M14 14.5c-.997 0-1.958.149-2.873.409-.078.35-.126.71-.127 1.083a9.5 9.5 0 0 1 2.999-.493c2.524 0 4.816.996 6.519 2.608a5 5 0 0 0 .356-1.026 10.44 10.44 0 0 0-6.875-2.583Z"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M27 5H5a3 3 0 0 0-3 3v1a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3V8a3 3 0 0 0-3-3"
                                            opacity="0.2"
                                        ></path>
                                    </svg>
                                </Link>
                                <Link href="/curriculo/curriculoEN.pdf">
                                    Download CV
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}