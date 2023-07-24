import Head from "next/head";
import React from "react";

import styles from "@/styles/carees_detail.module.scss";

// Images
import icon1 from "@/assets/images/Vector1.svg";
import icon2 from "@/assets/images/Vector2.svg";
import icon3 from "@/assets/images/Vector3.svg";
import icon4 from "@/assets/images/Vector4.svg";
import icon5 from "@/assets/images/Vector5.svg";
import icon6 from "@/assets/images/Vector6.svg";
import InternalBanner from "@/assets/images/InternalBanner.png";

// Arabic
import { useTranslations } from "next-intl";
import Banner from "@/components/banner/Banner";
import CareesDetail from "@/components/CareerDetail/CareesDetail";
import ContactForm from "@/components/ContactIsForm/ContactForm";

import { useForm } from "react-hook-form";
import Input from "@/components/shared/input";
import Textarea from "@/components/shared/textarea";
import { useRouter } from "next/router";
import Image from "next/image";
import JobOpeningCard from "@/components/JobOpenings/JobOpeningCard";

const index = () => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  const t = useTranslations("Career_detail");
  const t1 = useTranslations("JobOpenings");
  const t2 = useTranslations("Job_description3");

  const Data = [
    {
      icon: icon1,
      subheading: `${t2("Department")}`,
      heading: `${t2("DepartmentName")}`,
    },
    {
      icon: icon2,
      subheading: `${t2("Locations")}`,
      heading: `${t2("location")}`,
    },
    {
      icon: icon3,
      subheading: `${t2("Employment Type")}`,
      heading: `${t2("Full time")}`,
    },
    {
      icon: icon4,
      subheading: `${t2("Date Posted")}`,
      heading: "17 July 2023",
    },
    {
      icon: icon6,
      subheading: `${t2("Week Days")}`,
      heading: t2("WeekDays"),
    },
    {
      icon: icon5,
      subheading: `${t2("Contact Email")}`,
      heading: "talent@fastdigitaltechnology.com",
    },
  ];

  const JobOpenings = [
    {
      title: t1("JobOpening1Title"),
      address: t1("JobOpening1Address"),
      date: "17 July 2023",
      desc: t1("JobOpening1Desc"),
      link: "/careers/vapt-manager",
    },
    {
      title: t1("JobOpening2Title"),
      address: t1("JobOpening2Address"),
      date: "17 July 2023",
      desc: t1("JobOpening2Desc"),
      link: "/careers/iam-manager",
    },
    {
      title: t1("JobOpening3Title"),
      address: t1("JobOpening3Address"),
      date: "17 July 2023",
      desc: t1("JobOpening3Desc"),
      link: "/careers/international-sales-executive",
    },
    {
      title: t1("JobOpening4Title"),
      address: t1("JobOpening4Address"),
      date: "17 July 2023",
      desc: t1("JobOpening4Desc"),
      link: "/careers/data-protection-manager",
    },
  ];

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // var formData = new FormData();
      // formData.append('name', data['name']);
      // const response = await endpoints.Leads(token, formData);
      // if(response) {
      // reset();
      // } else {
      // }
    } catch (err) {}
  };

  return (
    <>
      <Head>
        <title>{t("Software/Engineer developer")}</title>
        <meta name="description" content={t("Software/Engineer developer")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={t("Software/Engineer developer")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta
          property="og:description"
          content={t("Software/Engineer developer")}
        />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner
        title={t2("JobTitle")}
        titleWidth={"100%"}
        dec={""}
        bannerImage={InternalBanner}
      />
      <div
        className={`${styles.CareesDetail} ${
          Arabic ? styles.CareesDetail_Arabic : ""
        }`}
      >
        <div className={styles.CareesDetail_wrapper}>
          <div className={styles.CareesDetail_top}>
            <div className={styles.CareesDetail_left}>
              <h4>{t2("tagLine")}</h4>
              <h1>{t2("Job description")}</h1>
              <p>{t2("dec")}</p>
              <h3>{t2("Responsibilities")}:</h3>
              <ul>
                <li>{t2("ResponsibilitiesItem1")}</li>
                <li>{t2("ResponsibilitiesItem2")}</li>
                <li>{t2("ResponsibilitiesItem3")}</li>
                <li>{t2("ResponsibilitiesItem4")}</li>
                <li>{t2("ResponsibilitiesItem5")}</li>
                <li>{t2("ResponsibilitiesItem6")}</li>
                <li>{t2("ResponsibilitiesItem7")}</li>
                <li>{t2("ResponsibilitiesItem8")}</li>
                <li>{t2("ResponsibilitiesItem9")}</li>
                <li>{t2("ResponsibilitiesItem10")}</li>
              </ul>

              <h3>{t2("Requirements")}:</h3>
              <ul>
                <li>{t2("RequirementsItem1")}</li>
                <li>{t2("RequirementsItem2")}</li>
                <li>{t2("RequirementsItem3")}</li>
                <li>{t2("RequirementsItem4")}</li>
                <li>{t2("RequirementsItem5")}</li>
                <li>{t2("RequirementsItem6")}</li>
                <li>{t2("RequirementsItem7")}</li>
              </ul>

              {t2("isRequirements") == "true" && (
                <>
                  <h3>{t2("Benefits")}:</h3>
                  <ul>
                    <li>{t2("BenefitsItem1")}</li>
                    <li>{t2("BenefitsItem2")}</li>
                    <li>{t2("BenefitsItem3")}</li>
                    <li>{t2("BenefitsItem4")}</li>
                    <li>{t2("BenefitsItem5")}</li>
                  </ul>
                </>
              )}
            </div>
            <div className={styles.CareesDetail_right}>
              <div className={styles.CareesDetail_Box}>
                {Data.map((item, i) => {
                  return (
                    <div className={styles.CareesDetail_item} key={i}>
                      <div className={styles.CareesDetail_icon}>
                        <Image
                          src={item.icon}
                          alt="Job_detail_Icon"
                          width={20}
                          height={15}
                        />
                      </div>
                      <div className={styles.CareesDetail_content}>
                        <h6>{item.subheading}</h6>
                        <h3>{item.heading}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.CareesDetail_Box}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.form_box}>
                    <label>Your Name</label>
                    <Input
                      type="text"
                      placeholder={"Name"}
                      label="name"
                      name="name"
                      register={register}
                      Arabic={Arabic}
                      errors={errors}
                      check={{
                        required: `Name is Required`,
                        pattern:
                          "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$",
                      }}
                    />
                  </div>
                  <div className={styles.form_box}>
                    <label>Your Email</label>
                    <Input
                      type="email"
                      placeholder={"Email"}
                      label="email"
                      name="email"
                      register={register}
                      Arabic={Arabic}
                      errors={errors}
                      check={{
                        required: `Email is Required`,
                        pattern:
                          "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$",
                      }}
                    />
                  </div>
                  <div className={styles.form_box}>
                    <label>Number</label>
                    <Input
                      type="number"
                      placeholder={"Number"}
                      label="phonenumber"
                      name="phonenumber"
                      register={register}
                      Arabic={Arabic}
                      errors={errors}
                      check={{
                        required: `Number is Required`,
                      }}
                    />
                  </div>
                  <div className={styles.form_box}>
                    <label>Cover Letter</label>
                    <Textarea
                      cols="30"
                      rows="4"
                      placeholder={"Cover Letter"}
                      register={register}
                      Arabic={Arabic}
                      name="description"
                      label="description"
                      errors={errors}
                    />
                  </div>
                  <div className={""}>
                    <label>Attach CV</label>
                    <input type="file" required />
                  </div>
                  <div className={styles.CareesDetail_Box_action}>
                    <button>{t2("Apply Now")}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.CareesDetail_down}>
            <h1>{t2("Recent Jobs")}</h1>
            <div className={styles.CareesDetail_down_Cards}>
              {JobOpenings?.map((item, index) => (
                <JobOpeningCard data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <CareesDetail Data={Data} JobOpenings={JobOpenings} /> */}
      <ContactForm />
    </>
  );
};

export default index;
