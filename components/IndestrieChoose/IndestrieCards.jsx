// Css
import styles from "../../styles/industriesCard.module.scss";
// Images
import Icon from "../../assets/images/servicesIcon1.svg";
import Image from "next/image";
// Icons
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Link from "next/link";

// React Intl
import { useRouter } from "next/router";

const IndestrieCards = ({ title, dec, icon, link }) => {

  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

  return (
    <div className={`${styles.ServicesCard} ${Arabic ? styles.ServicesCard_Arabic : ""}`}>
      <div className={styles.ServicesCard_icon}>
        <Image src={icon ? icon : Icon} alt="" />
        {link && (
          <Link href={link}>
            {Arabic ? "اقرأ أكثر" : "Read More"} <HiOutlineArrowUpRight />
          </Link>
        )}
      </div>
      <h3>{title}</h3>
      <p>{dec}</p>
    </div>
  );
};

export default IndestrieCards;
