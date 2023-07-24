import React from "react";
import styles from "../../styles/Pagination.module.scss";
import { BsChevronDoubleRight } from "react-icons/bs";

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const Pagination = ({ counter, setCounter, total }) => {
  const { locale } = useRouter();
  const t = useTranslations("BlogSection");
  const Arabic = locale?.includes("ar");

  let pagArr = [];

  for (let i = 1; i <= total; i++) {
    pagArr.push(i);
  }

  return (
    <div className={styles.pagination_row}>
      {pagArr?.map((item, index) =>
        item === counter ? (
          <div
            className={`${styles.pagination_box} ${styles.active}`}
            key={index}
          >
            <p>{item}</p>
          </div>
        ) : (
          <div
            className={`${styles.pagination_box}`}
            onClick={() => setCounter(item)}
            key={index}
          >
            <p>{item}</p>
          </div>
        )
      )}
      <div
        className={styles.next_pagination_box}
        onClick={() => {
          if (counter < pagArr?.length) setCounter(counter + 1);
        }}
      >
        <BsChevronDoubleRight
          className={Arabic ? styles.next_pagination_box_Arabic : ""}
        />
      </div>
    </div>
  );
};

export default Pagination;
