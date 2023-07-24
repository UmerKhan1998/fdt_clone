import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../../styles/partners.module.scss";

// React Intl
import { useRouter } from "next/router";

const Partners = ({ title, desc, data, fullWidth }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  const [divWidth1State, setdivWidth1State] = useState("");
  const [divWidth2State, setdivWidth2State] = useState("");
  const divWidth1 = useRef(null);
  const divWidth2 = useRef(null);

  useLayoutEffect(() => {
    setdivWidth1State(divWidth1.current.offsetWidth);
    setdivWidth2State(divWidth2.current.offsetWidth);
  }, [divWidth1, divWidth2]);

  return (
    <>
      <div
        className={`${styles.partners} ${
          Arabic ? styles.partners_Arabic : ""
        } ${fullWidth ? styles.partners_fullWidth : ""}`}
      >
        <div className={styles.partners_wrapper}>
          <div className={styles.partners_cols}>
            <div>
              {title ? <h2>{title}</h2> : ""}
              {desc ? <p>{desc}</p> : ""}
            </div>
            <div>
              <div className={styles.partners_images}>
                <div
                  className={styles.partners_images_inner}
                  ref={divWidth1}
                  style={{ "--width": `${divWidth1State}px` }}
                >
                  {fullWidth ? (
                    <>
                      {data?.map(
                        (item, index) =>
                          index + 1 <= Math.floor(data.length / 2) && (
                            <div className={styles.partners_image} key={index}>
                              <Image src={item?.image} alt="Patner_image" />
                            </div>
                          )
                      )}
                    </>
                  ) : (
                    data?.map(
                      (item, index) =>
                        index + 1 <= 7 && (
                          <div className={styles.partners_image} key={index}>
                            <Image src={item?.image} alt="Patner_image" />
                          </div>
                        )
                    )
                  )}
                </div>
              </div>
              <div className={styles.partners_images}>
                <div
                  className={styles.partners_images_inner}
                  ref={divWidth2}
                  style={{ "--width": `${divWidth2State}px` }}
                >
                  {fullWidth && (
                    <>
                      {data?.map(
                        (item, index) =>
                          index + 1 > Math.floor(data.length / 2) &&
                          index + 1 <= data.length && (
                            <div className={styles.partners_image} key={index}>
                              <Image src={item?.image} alt="Patner_image" />
                            </div>
                          )
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
