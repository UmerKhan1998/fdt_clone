import React from 'react'
import Image from "next/image";
import styles from "../../styles/quot_section.module.scss";

// Image
import quot1 from "../../assets/images/quot1.svg";
import quot2 from "../../assets/images/quot2.svg";

// React Intl
import { useRouter } from "next/router";

const QuotSection = ({ title, desc, img1, img2, quot, mode }) => {
    const { locale } = useRouter();
    const Arabic = locale?.includes("ar");
    return (
        <>
            <div className={`${styles.quot_section} ${Arabic ? styles.quot_section_Arabic : ""} ${mode === "dark" ? styles.quot_section_dark : ""}`}>
                <div className={styles.quot_section_wrapper}>
                    <div className={styles.quot_section_col1}>
                        <div className={styles.quot_section_col1_img1}>
                            <Image src={img1} width={500} height={160} />
                        </div>
                        <div className={styles.quot_section_col1_quot_row}>
                            <div className={styles.quot_section_col1_quot}>
                                <Image className={styles.quot1} src={quot1} width={25} height={20} alt="" />
                                {quot}
                                <Image className={styles.quot2} src={quot2} width={25} height={20} alt="" />
                            </div>
                        </div>
                        <div className={styles.quot_section_col1_img2}>
                            <Image src={img2} width={500} height={160} />
                        </div>
                    </div>
                    <div className={styles.quot_section_col2}>
                        <div className={styles.quot_section_col2_text}>
                            {title ? <h2>{title}</h2> : ""}
                            {desc ? <p>{desc}</p> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuotSection