import React from "react";
// Css
import styles from "../../styles/BlogsGridContainer.module.scss";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

// card
import NewsCard from "../../components/News/news_card";
import { AiOutlineSearch } from "react-icons/ai";
import Pagination from "../Pagination/Pagination";

const BlogsGridContainer = ({
  NewsList,
  CybersecurityArr,
  topSearchedBlogs,
  counter,
  setCounter,
}) => {
  const { locale } = useRouter();
  const t = useTranslations("BlogSection");
  const Arabic = locale?.includes("ar");

  return (
    <div
      className={`${styles.BlogsGridContainer} ${Arabic ? styles.BlogsGridContainer_Arabic : ""
        }`}
    >
      <div className={styles.row}>
        <div className={styles.col1}>
          <div className={styles.input_div}>
            <input className={styles.input} placeholder={t("Search")} />
            <AiOutlineSearch />
          </div>
          <div className={styles.side_panel}>
            <p className={styles.bold}>{t("Cybersecurity")}</p>
            {CybersecurityArr?.map((item, index) => (
              <p className={styles.securityP} key={index}>
                {item}
              </p>
            ))}
          </div>

          <div className={styles.side_panel}>
            <p className={styles.bold}>{t("Top Searched Blogs")}</p>

            {topSearchedBlogs?.map((item, index) => (
              <div
                className={`${styles.row_side_panel} ${styles.mt15}`}
                key={index}
              >
                <div className={styles.col_content_blogs}>
                  <div className={styles.blogs_counts}>{index + 1}</div>
                </div>
                <div className={styles.col_detail_blogs}>
                  <div className={styles.row_side_panel}>
                    <p className={`${styles.bold}`}>{item?.title}</p>
                  </div>
                  <div className={styles.row_side_panel}>
                    <div className={styles.col_detail1}>
                      <p>{item?.type}</p>
                    </div>
                    <div className={styles.col_detail2}>
                      <p>december 20, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.col2}>
          <div className={styles.row}>
            {NewsList?.map((item, index) => (
              <div className={styles.news_blog_col} key={index}>
                <NewsCard data={item} />
              </div>
            ))}
          </div>
          {/* <Pagination counter={counter} setCounter={setCounter} total={5} /> */}
        </div>
      </div>
    </div>
  );
};

export default BlogsGridContainer;
