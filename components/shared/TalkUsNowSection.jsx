import React from 'react'
import styles from "../../styles/TalkUsNowSection.module.scss";
import Link from 'next/link';

// Image
import TalkUsNowSectionBg from "../../assets/images/TalkUsNowSectionBg.jpg";

// React Intl
import { useRouter } from "next/router";

const TalkUsNowSection = ({ title, desc, link, linkText, background }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  return (
    <div className={`${styles.TalkUsNowSection} ${Arabic ? styles.TalkUsNowSection_Arabic : ""}`}>
      <div className={styles.TalkUsNowSection_bg} style={{ backgroundImage: `url('${background ? (background) : (TalkUsNowSectionBg.src)}')` }}></div>
      <div className={styles.TalkUsNowSection_wrapper}>
        <div className={styles.TalkUsNowSection_text}>
          {title ? <h2>{title}</h2> : ''}
          {desc ? <p>{desc}</p> : ""}
          {link ? <Link href={link ? link : '/'}>{linkText}</Link> : ''}
        </div>
      </div>
    </div>
  )
}

export default TalkUsNowSection