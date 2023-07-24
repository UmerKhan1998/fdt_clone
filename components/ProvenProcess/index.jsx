import React from 'react'
import Image from 'next/image';
import styles from '../../styles/proven_process.module.scss';

// Image
import PenetrationTesting1 from '../../assets/images/PenetrationTesting1.svg';

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const ProvenProcess = ({ title, subtitle, data }) => {

  const { locale } = useRouter();
  const t = useTranslations("ProvenProcess");
  const Arabic = locale?.includes("ar");

  return (
    <div className={`${styles.proven_process} ${Arabic ? styles.proven_process_Arabic : ""}`}>
      <div className={styles.proven_process_wrapper}>
        <div className={styles.proven_process_title}>
          <h5>{subtitle}</h5>
          <h2>{title}</h2>
        </div>
        <div className={styles.proven_process_cols}>

          {data?.map((item, index) => (
            (index % 2 == 0) ? (
              <div className={styles.proven_process_col} key={index}>
                <div className={styles.proven_process_card}>
                  <div className={styles.proven_process_cardbox}>
                    <h3>{item?.title}</h3>
                    <p>{item?.desc}</p>
                  </div>
                </div>
                <div className={styles.proven_process_arrowbox}>
                  {!(index == data.length - 1) && <div className={styles.proven_process_arrows}></div>}
                </div>
              </div>
            ) : (
              <div className={styles.proven_process_col} key={index}>
                <div className={styles.proven_process_arrowbox}>
                  {!(index == data.length - 1) && <div className={styles.proven_process_arrows}></div>}
                </div>
                <div className={styles.proven_process_card}>
                  <div className={styles.proven_process_cardbox}>
                    <h3>{item?.title}</h3>
                    <p>{item?.desc}</p>
                  </div>
                </div>
              </div>
            )
          ))}

        </div>
      </div>
    </div>
  )
}

export default ProvenProcess