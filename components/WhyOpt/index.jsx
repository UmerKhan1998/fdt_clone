import React, { useState } from 'react'
import styles from '../../styles/why_opt.module.scss';

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const WhyOpt = () => {

    const { locale } = useRouter();
    const t = useTranslations("WhyOpt");
    const Arabic = locale?.includes("ar");

    const [WhyPptList, setWhyPptList] = useState([
        {
            desc: "Experienced security professionals having up-to-date and extensive knowledge "
        },
        {
            desc: "Detailed report providing organizations with actionable recommendations for remediation"
        },
        {
            desc: "Comprehensive analysis of an organization's network infrastructure"
        },
        {
            desc: "Help organizations maintain compliance with relevant regulations and best practices"
        },
    ])

    return (
        <div className={`${styles.why_opt} ${Arabic ? styles.why_opt_Arabic : ""}`}>
            <div className={styles.why_opt_wrapper}>
                <div className={styles.why_opt_left}>
                    <h2>{t("Why Opt for our Services")}</h2>
                    <p>{t("desc")}</p>
                </div>
                <div className={styles.why_opt_right}>
                    <div className={styles.why_opt_right_cols}>
                        {WhyPptList?.map((item, index) => (
                            <div className={styles.why_opt_right_col} key={index}>
                                <div className={styles.business_benefits_card}>
                                    <h5>{String(index + 1).padStart(2, '0')}</h5>
                                    <p>{item?.desc}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyOpt