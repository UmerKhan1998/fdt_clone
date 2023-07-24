import React from "react";
// Css
import styles from "../../styles/servicesChoose.module.scss";
// Images
import ServicesCard from "./ServicesCard";

// React Intl
import { useRouter } from "next/router";
import Image from "next/image";

const ServicesChoose = ({ title, subtitle, data, dec, mode, brandLogo }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

  return (
    <>
      <div
        className={`${styles.ServicesChoose} ${Arabic ? styles.ServicesChoose_Arabic : ""} ${mode === "dark" ? styles.ServicesChoose_dark : ""}`}
      >
        <div className={styles.ServicesChoose_wrapper}>
          <div className={styles.ServicesChoose_title}>
            {brandLogo ? <Image src={brandLogo} width={150} /> : ""}
            <h5>{subtitle}</h5>
            <h2>{title}</h2>
            {dec && <p>{dec}</p>}
          </div>
          <div className={styles.ServicesChoose_boxs}>
            {data.map((item, i) => {
              return (
                <div key={i}>
                  <ServicesCard
                    index={i}
                    icon={item.icon}
                    title={item.title}
                    dec={item.dec}
                    mode={mode}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesChoose;
