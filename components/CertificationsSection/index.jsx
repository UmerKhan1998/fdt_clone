import React from 'react'
import styles from "../../styles/CertificationsSection.module.scss";
import Image from 'next/image';

const CertificationsSection = ({title, subtitle, desc, cards}) => {
  return (
    <>
        <div className={styles.CertificationsSection}>
            <div className={styles.CertificationsSection_wrapper}>
                <div className={styles.CertificationsSection_text}>
                    {subtitle?<h5>{subtitle}</h5>:""}
                    {title?<h2>{title}</h2>:""}
                    {desc?<p>{desc}</p>:""}
                </div>
                {cards?.map((item, index)=> (
                    <div className={styles.CertificationsSectionCardsContainer} key={index}>
                        {item?.title?<h2>{item?.title}</h2>:""}
                        {item?.desc?<p>{item?.desc}</p>:""}
                        <div className={styles.CertificationsSectionCards}>
                            {item?.cards?.map((item, index)=>(
                                <div className={styles.CertificationsSectionCard} key={index}>
                                    <Image src={item?.img} width={85} height={85} />
                                    <h4>{item?.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default CertificationsSection