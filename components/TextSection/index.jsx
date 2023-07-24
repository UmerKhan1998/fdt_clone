import React from 'react'
import styles from "../../styles/TextSection.module.scss";

const TextSection = ({title, subtitle, desc, maxWidth, textAlign, mode}) => {
  return (
    <>
        <div className={`${styles.TextSection} ${mode === "dark" ? styles.TextSection_dark : ""}`}>
            <div className={styles.TextSection_wrapper} style={{textAlign: textAlign, maxWidth: maxWidth}}>
                {subtitle?<h5>{subtitle}</h5>:""}
                {title?<h2>{title}</h2>:""}
                {desc?<p>{desc}</p>:""}
            </div>
        </div>
    </>
  )
}

export default TextSection