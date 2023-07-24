import React from "react";
// Css
import styles from "../../styles/servicesCard.module.scss";
// Images
import Icon from "../../assets/images/servicesIcon1.svg";
import Image from "next/image";
// Icons
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

// React Intl
import { useRouter } from "next/router";

const ServicesCard = ({ index, title, dec, icon, link, mode }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

  return (
    <>
      <div
        className={`${styles.ServicesCard} ${mode == "dark" && styles.ServicesCard_Black}
        ${Arabic ? styles.ServicesCard_Arabic : ""}`}
      >
        <div className={styles.ServicesCard_icon}>
          {icon ? (
            <Image src={icon ? icon : Icon} alt="" fill />
          ) : (
            `0${index + 1}`
          )}
        </div>
        <h3>{title}</h3>
        <p>{dec}</p>
        {link && (
          <Link href={link}>
            Explore More <HiOutlineArrowUpRight />
          </Link>
        )}
      </div>
    </>
  );
};

export default ServicesCard;
