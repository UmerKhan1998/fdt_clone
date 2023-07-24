import React from "react";
import Image from "next/image";
import styles from "../../styles/process.module.scss";

// Image
import ProcessImg from "../../assets/images/ProcessImg.png";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const Process = () => {
    const { locale } = useRouter();
    const t = useTranslations("Process");
    const Arabic = locale?.includes("ar");

    return (
        <div className={`${styles.process} ${Arabic ? styles.process_Arabic : ""}`}>
            <div className={styles.process_wrapper}>
                <div className={styles.process_left}>
                    <h2>{t("what are the process")}</h2>
                    <ul>
                        <li>
                            <h5>1</h5>
                            <h3>{t("Apply")}</h3>
                            <p>{t("listDesc")}</p>
                        </li>
                        <li>
                            <h5>2</h5>
                            <h3>{t("Review")}</h3>
                            <p>{t("listDesc")}</p>
                        </li>
                        <li>
                            <h5>3</h5>
                            <h3>{t("Interviews")}</h3>
                            <p>{t("listDesc")}</p>
                        </li>
                        <li>
                            <h5>4</h5>
                            <h3>{t("Onboarding")}</h3>
                            <p>{t("listDesc")}</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.process_right}>
                    <div>
                        <Image src={ProcessImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
