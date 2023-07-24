import React from 'react'
import styles from "../../styles/securing_privileged_slider.module.scss"

const SecuringPrivilegedSlider = () => {
  return (
    <div className={styles.securing_privileged_slider}>
        <div className={styles.securing_privileged_slider_wrapper}>
            <div className={styles.securing_privileged_slider_title}>
                <span>Securing</span>
                <h2>Securing Privileged Accounts</h2>
            </div>  
        </div>
    </div>
  )
}

export default SecuringPrivilegedSlider