"use client";
import React, { useState } from "react";
// Css
import styles from "../../styles/faqs.module.scss";
import { useTranslations } from "next-intl";

const Faqs = () => {
  const t = useTranslations("Faqs");

  const faqData = [
    {
      question: `${t("question1")}`,
      answer: `${t("answer1")}`,
    },
    {
      question: `${t("question2")}`,
      answer: `${t("answer2")}`,
    },
    {
      question: `${t("question3")}`,
      answer: `${t("answer3")}`,
    },
    {
      question: `${t("question4")}`,
      answer: `${t("answer4")}`,
    },
    {
      question: `${t("question5")}`,
      answer: `${t("answer5")}`,
    },
  ];

  return (
    <>
      <div className={styles.faq}>
        <div className={styles.faq_wrapper}>
          <div className={styles.faq_heading}>
            <h6>{t("FAQ’s")}</h6>
            <h1>{t("Frequently Asked Questions")}</h1>
            <div className={styles.faq_heading_description}>{t("dec")}</div>
          </div>
          <div className={styles.faq_main}>
            {faqData.map((item, i) => {
              return (
                <According key={i} question={item.question}>
                  {item.answer}
                </According>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;

export const According = ({ question, children }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <div className={styles.according}>
        <div className={styles.question} onClick={() => setIsToggle(!isToggle)}>
          <div className={styles.question_text}>
            <h1>{question}</h1>
          </div>
          <div
            className={`${styles.Icon} ${isToggle ? styles.IconActive : ""}`}
          ></div>
        </div>
        <div
          className={`${styles.answer} ${isToggle ? styles.answerActive : ""}`}
        >
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};
