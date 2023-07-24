import React from 'react'
import Image from "next/image";
import styles from "../../styles/JoinFtd.module.scss";

// Image
import joinFtg1 from "../../assets/images/joinFtg1.png";
import joinFtg2 from "../../assets/images/joinFtg2.png";
import joinFtg3 from "../../assets/images/joinFtg3.png";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const JoinFtd = () => {
    const { locale } = useRouter();
    const t = useTranslations("JoinFtd");
    const Arabic = locale?.includes("ar");

    return (
        <div className={`${styles.JoinFtd} ${Arabic ? styles.JoinFtd_Arabic : ""}`}>
            <div className={styles.JoinFtd_wrapper}>
                <div className={styles.JoinFtd_title}>
                    <h2>{t("Why Join FDT")}</h2>
                </div>
                <div className={styles.JoinFtd_content}>
                    <h3>{t("Explore Exciting Opportunities in the World of Technology")}</h3>
                    <p>{t("desc")}</p>
                    <ul>
                        <li><span>{t("Innovative culture:")}</span> {t("listItem1")}</li>
                        <li><span>{t("Career growth opportunities:")}</span> {t("listItem2")}</li>
                        <li><span>{t("Impactful work:")}</span> {t("listItem3")}</li>
                        <li><span>{t("Collaborative environment:")}</span> {t("listItem4")}</li>
                    </ul>
                </div>
                <div className={styles.JoinFtd_images}>
                    <div>
                        <Image src={joinFtg1} alt='' />
                    </div>
                    <div>
                        <Image src={joinFtg2} alt='' />
                    </div>
                    <div>
                        <Image src={joinFtg3} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinFtd