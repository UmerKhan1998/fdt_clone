import React from 'react'
import styles from "../../styles/expert-strategies.module.scss"

// Images
import strategies1 from "../../assets/images/strategies1.png";
import strategies2 from "../../assets/images/strategies2.png";

// React Intl
import { useRouter } from "next/router";
import Link from 'next/link';

const ExpertStrategies = ({ title, desc, link, img1, img2, mode }) => {
    const { locale } = useRouter();
    const Arabic = locale?.includes("ar");
    return (
        <div className={`${styles.expert_strategies} ${mode == "dark" ? styles.expert_strategies_Dark : ""} ${Arabic ? styles.expert_strategies_Arabic : ""}`}>
            <div className={styles.expert_strategies_cols}>
                <div>
                    <div className={styles.expert_strategies_col_border}>
                        <div className={styles.image_col}>
                            <div style={{ backgroundImage: `url('${img1 ? img1 : strategies1.src}')` }} className={styles.image_col_img1}></div>
                            <div style={{ backgroundImage: `url('${img2 ? img2 : strategies2.src}')` }} className={styles.image_col_img2}></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.txt_col}>
                        {title ? <h3>{title}</h3> : ''}
                        {desc ? <p>{desc}</p> : ''}
                        {link ? <Link href={link}>{Arabic ? 'البدء' : 'Get Started'}</Link> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpertStrategies