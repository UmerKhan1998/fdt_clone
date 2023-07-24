import React, { useState } from 'react'
import styles from '../../styles/business_benefits.module.scss';

// Components
import BusinessBenefitsCards from './business_benefits_cards';

// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

const BusinessBenefits = () => {

  const { locale } = useRouter();
  const t = useTranslations("BusinessBenefits");
  const Arabic = locale?.includes("ar");

  const [BusinessBenefitsList, setBusinessBenefitsList] = useState([
    {
      desc: "Identify potential security risks and vulnerabilities within an organization's network infrastructure"
    },
    {
      desc: "Help prevent data breaches, minimize downtime, and maintain the confidentiality, integrity, and availability of sensitive data and systems"
    },
    {
      desc: "We provide customized services, ensuring that vulnerabilities are identified and addressed in a way that is relevant and actionable"
    },
    {
      desc: "Organizations can avoid costly security incidents that can result in financial losses, legal penalties, and damage to their reputation"
    },
    {
      desc: "Through regular Network Vulnerability Assessments, organizations can increase the trust of their customers, partners, and stakeholders"
    },
  ])

  return (
    <div className={styles.business_benefits}>
      <div className={styles.business_benefits_wrapper}>
        <div className={styles.business_benefits_title}>
          <h2>{t("Business Benefits of Network Vulnerability Assessment as a Service")}</h2>
        </div>
        <div className={styles.business_benefits_cols}>
          {BusinessBenefitsList?.map((item, index) => (
            <div className={styles.business_benefits_col} key={index}>
              <BusinessBenefitsCards data={{ count: String(index + 1).padStart(2, '0'), desc: item?.desc }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BusinessBenefits