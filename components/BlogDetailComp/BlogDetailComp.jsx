import React from 'react'
import styles from '../../styles/BlogDetailComp.module.scss';
import DetailPageImg from '../../assets/images/detail_page_img.png';
import Image from 'next/image';
import { AiFillHeart, AiOutlineTwitter } from 'react-icons/ai';
import { TbMessages } from 'react-icons/tb';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import blog_page_img from "../../assets/images/blog_page_img.png";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import ImageDiv from '../ImageDiv/ImageDiv';

const BlogDetailComp = () => {
    const { locale } = useRouter();
    const t = useTranslations("BlogDetail");
    const t1 = useTranslations("ImageSection");
    const Arabic = locale?.includes("ar");

    return (
        <div className={`${styles.BlogsGridContainer} ${Arabic ? styles.BlogsGridContainer_Arabic : ""}`}>
            <div className={styles.row}>
                <div className={styles.col_full}>
                    <Image src={DetailPageImg.src} height={500} width={500} alt='' />
                    <div className={styles.row_img}>
                        <div className={styles.type}>
                            <p className={`${styles.typeP} ${styles.borderTypeP}`}>{t("Techology")}</p>
                            <p className={styles.typeP}>August 20, 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.SharedPostRow}>
                <div>
                    {/* <div className={styles.col_half}>
                        <div className={styles.likes_btn}>
                            <AiFillHeart />
                            <p>76</p>
                        </div>
                        <div className={styles.likes_btn}>
                            <TbMessages />
                            <p>12</p>
                        </div>
                    </div> */}
                </div>
                <div className={styles.SharedPostRow1}>
                    <div className={styles.col_half}>
                        <p>{t("Share this post in")}</p>
                        <div className={styles.social_btn}>
                            <FaFacebookF />
                        </div>
                        <div className={styles.social_btn}>
                            <AiOutlineTwitter />
                        </div>
                        <div className={styles.social_btn}>
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
            </div>
            <p className={styles.desc}>
                {t("desc")}
            </p>

            <ImageDiv imageSrc={blog_page_img} desc={t1("description")} />
        </div>
    )
}

export default BlogDetailComp
