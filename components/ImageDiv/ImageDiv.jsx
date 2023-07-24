import Image from 'next/image'
import React from 'react'
import styles from "../../styles/ImageSectionDiv.module.scss";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const ImageDiv = ({ imageSrc, desc }) => {
    const { locale } = useRouter();
    const t = useTranslations("BlogDetail");
    const Arabic = locale?.includes("ar");

    return (
        <div className={styles.image_div_container}>
            <div className={styles.col1}>
                <Image src={imageSrc} alt='' />
            </div>
            <div className={styles.col2}>
                <p>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default ImageDiv
