'use client';
import styles from './styles.module.scss'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Container } from '@/components/Container';
import { useTranslations } from 'next-intl';
import { HtmlIcon } from '@/components/svg/html';
import { GithubIcon } from '@/components/svg/github';
import { LinkedinIcon } from '@/components/svg/linkedin';
import { CssIcon } from '@/components/svg/css';
import { JavascriptIcon } from '@/components/svg/javascript';
import { ReactIcon } from '@/components/svg/react';
import { NextIcon } from '@/components/svg/next';
import LanguageSwitcher from '@/components/switcher';
import { cn } from '@/utils';

export default function Home() {
  const t = useTranslations("profile");
  const translate = useTranslations("nav");
  const [navMobile, setNavMobile] = useState(false);

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h2 className={styles.name}>Ramon Santos</h2>
            <h2 className={styles.jobTittle}>
              {t('position')}
            </h2>
          </div>
          <p>
            {t('introduction')}
          </p>
          <p>
            {t('passion')}
          </p>
          <div className={styles.socials}>
            <Link href="https://www.linkedin.com/in/ramonsantosprofile/">
              <LinkedinIcon />
            </Link>
            <Link href="https://github.com/Ramon-Eduardo">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </Container>
      <div className={styles.footer}>
        <footer className={styles.footerContainer}>
          <div className={styles.footerIcons}>
            <HtmlIcon />
            <CssIcon />
            <JavascriptIcon />
            <ReactIcon />
            <NextIcon />
          </div>
        </footer>
      </div>
    </div>
  )
}
