import React from 'react'
import Image from 'next/image';
import styles from '../../styles/partners-inner.module.scss';

// Image
import partners1 from "../../assets/images/partners1.svg";
import partners2 from "../../assets/images/partners2.svg";
import partners3 from "../../assets/images/partners3.svg";
import partners4 from "../../assets/images/partners4.svg";
import partners5 from "../../assets/images/partners5.svg";
import partners6 from "../../assets/images/partners6.svg";

const PartnersInner = () => {
  return (
    <div className={styles.partners_inner}>
        <div className={styles.partners_inner_wrapper}>
            <div className={styles.partners_inner_images}>
                <Image src={partners1} alt="Patner_image" />
                <Image src={partners2} alt="Patner_image" />
                <Image src={partners3} alt="Patner_image" />
                <Image src={partners4} alt="Patner_image" />
                <Image src={partners5} alt="Patner_image" />
                <Image src={partners6} alt="Patner_image" />
            </div>
        </div>
    </div>
  )
}

export default PartnersInner