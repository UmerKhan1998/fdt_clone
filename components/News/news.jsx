import React, { useState } from "react";
import styles from "../../styles/news.module.scss";

// Image
import news1 from "../../assets/images/news1.svg";
import news2 from "../../assets/images/news2.svg";
import news3 from "../../assets/images/news3.svg";

// Components
import NewsCard from "./news_card";

// React Intl
import { useTranslations } from "next-intl";
import Link from "next/link";

const News = () => {
  const t = useTranslations("News");

  const NewsList = [
    {
      image: news1,
      title: t("News1Title"),
      tag: t("Technology"),
      date: "january 20, 2023",
    },
    {
      image: news2,
      title: t("News2Title"),
      tag: t("Technology"),
      date: "March 14, 2023",
    },
    {
      image: news3,
      title: t("News3Title"),
      tag: t("Technology"),
      date: "May 03, 2023",
    },
  ];

  return (
    <>
      <div className={styles.news}>
        <div className={styles.news_wrapper}>
          <div className={styles.news_title}>
            <p>{t("News")}</p>
            <h2>
              <span>{t("Explore FDT latest news and insights")}</span>
              <Link href={"/blog"}>{t("View All")}</Link>
            </h2>
          </div>
          <div className={styles.news_cols}>
            {NewsList?.map((item, index) => (
              <div className={styles.news_col} key={index}>
                <NewsCard
                  data={{
                    image: item.image,
                    title: item.title,
                    tag: item.tag,
                    date: item.date,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
