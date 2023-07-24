import React from "react";
import Image from "next/image";
import styles from "../../styles/news-card.module.scss";
import Link from "next/link";

const newsCard = ({ data }) => {
  return (
    <div className={styles.news_card}>
      <Image src={data?.image} className={styles.news_card_img} alt="" />
      <p className={styles.news_card_tag}>{data?.tag}</p>
      <h2 className={styles.news_card_title}>
        <Link href={data?.link ? data?.link : "/blog/detail"}>{data?.title}</Link>
      </h2>
      <p className={styles.news_card_date}>{data?.date}</p>
    </div>
  );
};

export default newsCard;
