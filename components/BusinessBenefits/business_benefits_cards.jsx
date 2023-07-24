import React from 'react'
import styles from '../../styles/business_benefits_card.module.scss';

const BusinessBenefitsCards = ({data}) => {
  return (
    <div className={styles.business_benefits_card}>
        <h5>{data?.count}</h5>
        <p>{data?.desc}</p>
    </div>
  )
}

export default BusinessBenefitsCards