import React from "react";
// Css
import styles from "../../styles/servicesExtanded.module.scss";

// Images
import Icon1 from "../../assets/images/servicesExtanded1.svg";
import Icon2 from "../../assets/images/servicesExtanded2.svg";
import Icon3 from "../../assets/images/servicesExtanded3.svg";
import ServicesCard from "../ServicesChoose/ServicesCard";

const ServicesExtanded = () => {
  const Data = [
    {
      icon: Icon1,
      title: "GRC Deployment Services",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
      icon: Icon2,
      title: "SIEM Deployment Services",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
      icon: Icon3,
      title: "IAM Deployment Services.",
      dec: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
  ];
  return (
    <>
      <div className={styles.ServicesExtanded}>
        <div className={styles.ServicesExtanded_wrapper}>
          <div className={styles.ServicesExtanded_title}>
            <h5>Extended offerings</h5>
            <h2>
              Discover the Diverse Selection of Our Multifaceted and
              Comprehensive Service Portfolio at Your Disposal
            </h2>
          </div>
          <div className={styles.ServicesExtanded_boxs}>
            {Data.map((item, i) => {
              return (
                <div key={i}>
                  <ServicesCard
                    icon={item.icon}
                    title={item.title}
                    dec={item.dec}
                    link="/"
                    mode={''}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesExtanded;
