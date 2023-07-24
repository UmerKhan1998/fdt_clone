import React from 'react'
import Image from 'next/image';

import styles from "../../styles/logo-section.module.scss";

const LogoSection = ({logo}) => {
  return (
    <div className={styles.LogoSection}>
        <div className={styles.LogoSection_wrapper}>
            <div className={styles.img}>
                <Image src={logo} fill alt="" />
            </div>
        </div>
    </div>
  )
}

export default LogoSection