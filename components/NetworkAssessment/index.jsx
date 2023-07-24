import React from 'react'
import Image from 'next/image';
import styles from '../../styles/network_assessment.module.scss';

// Image
import NetworkAssessment1 from '../../assets/images/networkAssessment1.png';
import NetworkAssessment2 from '../../assets/images/networkAssessment2.png';
import quot1 from '../../assets/images/quot1.svg';
import quot2 from '../../assets/images/quot2.svg';

// React Intl
import { useRouter } from "next/router";
import BorderedCard from '../BorderedCard';

const NetworkAssessment = ({ title, desc, img1, img2, quot, data, mode }) => {

  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");

  return (
    <div className={`${styles.network_assessment} ${Arabic ? styles.network_assessment_Arabic : ""}`}>
      <div className={styles.network_assessment_wrapper}>
        {(title !== '' && desc !== '') ? (
          <div className={styles.network_assessment_title}>
            {title ? <h2>{title}</h2> : ""}
            {desc ? <p>{desc}</p> : ""}
          </div>
        ) : ''}
        <div className={styles.network_assessment_cols}>
          <div className={styles.network_assessment_left}>
            <div className={styles.network_assessment_left_border}>
              <div>
                <Image src={img1 ? img1 : NetworkAssessment1} alt="" />
              </div>
              <div>
                <div className={styles.network_assessment_left_quot}>
                  <p>
                    <Image className={styles.quatImg1} src={quot1} alt='' />
                    <asd>{quot}</asd>
                    <Image className={styles.quatImg2} src={quot2} alt='' />
                  </p>
                </div>
              </div>
              <div>
                <Image src={img2 ? img2 : NetworkAssessment2} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.network_assessment_rigth}>
            <div className={styles.network_assessment_rigth_cards}>
              {data?.map((item, index) => (
                <div className={styles.network_assessment_rigth_card} key={index}>
                  <BorderedCard data={{
                    index: index,
                    icon: item?.icon,
                    link: item?.link,
                    title: item?.title,
                    subtitle: item?.subtitle,
                    desc: item?.desc,
                    mode: mode,
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NetworkAssessment