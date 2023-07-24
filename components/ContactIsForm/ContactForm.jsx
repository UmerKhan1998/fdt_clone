import React from "react";
// Css
import styles from "../../styles/contactForm.module.scss";
// Images
import Banner from "../../assets/images/aboutUsLeft1.svg";
import contactUsLeft2 from "../../assets/images/contactUsLeft2.png";
import Image from "next/image";
// Arabic
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
// Components
import Input from "../shared/input";
// React Form Hook
import { Controller, useForm } from "react-hook-form";
// React Select
import Select from "react-select";
import Textarea from "../shared/textarea";
import { toast } from 'react-toastify';

// APIs
import endpoints from "@/src/api";

const ContactForm = ({ Image2 }) => {
  const { locale } = useRouter();
  const Arabic = locale?.includes("ar");
  const t = useTranslations("ContactForm");
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiRkRUIiwibmFtZSI6IkZEVCIsInBhc3N3b3JkIjpudWxsLCJBUElfVElNRSI6MTY4Nzg3NjQxOX0.ZylGYGx4IAj-DkKep7lCG43VktRpXnBs8ijS8w89NAQ";

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const IntersetedOption = [
    {
      label: t("IAM Deployment Services"),
      value: "IAM Deployment Services",
    },
    {
      label: t("Beyond Trust"),
      value: "Beyond Trust",
    },
    {
      label: t("CyberArk"),
      value: "CyberArk",
    },
    {
      label: t("Sailpoint"),
      value: "Sailpoint",
    },
    {
      label: t("Netscout"),
      value: "Netscout",
    },
    {
      label: t("VAPT Deployment Services"),
      value: "VAPT Deployment Services",
    },
    {
      label: t("Vulnerability Assessment"),
      value: "Vulnerability Assessment",
    },
    {
      label: t("Penetration Testing"),
      value: "Penetration Testing",
    },
    {
      label: t("GRC Deployment Services"),
      value: "GRC Deployment Services",
    },
    {
      label: t("ECC"),
      value: "ECC",
    },
    {
      label: t("Data Protection Services"),
      value: "Data Protection Services",
    },
    {
      label: t("SIEM"),
      value: "SIEM",
    },
    {
      label: t("DLP"),
      value: "DLP",
    },
    {
      label: t("EPP"),
      value: "EPP",
    },
    {
      label: t("EDR"),
      value: "EDR",
    },
  ];

  const onSubmit = async (data) => {
    try {
      var formData = new FormData();
      formData.append('name', data['name']);
      formData.append('company', data['company']);
      formData.append('email', data['email']);
      formData.append('phonenumber', data['phonenumber']);
      formData.append('form-cf-1', data['form-cf-1'].value);
      formData.append('description', data['description']);
      formData.append('source', '8');
      formData.append('status', '2');
      formData.append('assigned', '2');
      const response = await endpoints.Leads(token, formData);
      if (response?.data?.status === true) {
        reset();
        toast.success('Successfully Submitted!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        console.log(response?.data);
        toast.error('Something Went Wrong!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (err) {
      if (err?.response?.status !== 200) {
        console.log("err", err?.response);
        toast.error('Something Went Wrong!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <>
      <div
        className={`${styles.Conatct} ${Image2 ? styles.Conatct_Image2 : ""} ${Arabic ? styles.Conatct_Arabic : ""
          }`}
      >
        <div className={styles.Conatct_title}>
          <div className={styles.Conatct_title_wrapper}>
            <h2>{t("heading")}</h2>
          </div>
        </div>
        <div className={styles.Conatct_main}>
          <div className={styles.Conatct_main_wrapper}>
            {Image2 ? (
              <div className={styles.Conatct_main_left_image}>
                <div className={styles.Conatct_main_image}>
                  <Image src={contactUsLeft2} alt="Contact_image" fill />
                </div>
              </div>
            ) : (
              <div className={styles.Conatct_main_left_images}>
                <div className={styles.Conatct_main_image}>
                  <Image src={Banner} alt="Contact_image" fill />
                </div>
                <div className={styles.Conatct_main_image}>
                  <Image src={Banner} alt="Contact_image" fill />
                </div>
                <div className={styles.Conatct_main_image}>
                  <Image src={Banner} alt="Contact_image" fill />
                </div>
                <div className={styles.Conatct_main_image}>
                  <Image src={Banner} alt="Contact_image" fill />
                </div>
                <div className={styles.Conatct_main_image}>
                  <Image src={Banner} alt="Contact_image" fill />
                </div>
              </div>
            )}

            <div className={styles.Conatct_main_right}>
              <form
                action=""
                className={styles.Conatct_form}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={styles.Conatct_form_boxs}>
                  <div className={styles.Conatct_form_box}>
                    <label>{t("Your name")}</label>
                    <Input
                      type="text"
                      placeholder={`${t("name")}`}
                      label="name"
                      name="name"
                      register={register}
                      Arabic={Arabic}
                      errors={errors}
                      check={{
                        required: `Name is Required`,
                        pattern: '',
                        minLength: 3,
                      }}
                    />
                  </div>
                  <div className={styles.Conatct_form_box}>
                    <label>{t("Company name")}</label>
                    <Input
                      type="text"
                      placeholder={`${t("Company name")}`}
                      label="company"
                      name="company"
                      register={register}
                      Arabic={Arabic}
                      errors={errors}
                    />
                  </div>
                  <div className={styles.Conatct_form_box}>
                    <label>{t("Number")}</label>
                    <Input
                      type="number"
                      placeholder={`${t("Number")}`}
                      label="phonenumber"
                      name="phonenumber"
                      register={register}
                      Arabic={Arabic}
                      errors={errors}
                    />
                  </div>
                  <div className={styles.Conatct_form_box}>
                    <label>{t("Your email")}</label>
                    <Input
                      label="email"
                      register={register}
                      name="email"
                      Arabic={Arabic}
                      check={{
                        required: `Email is Required`,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      }}
                      type="text"
                      placeholder={`${t("email")}`}
                      errors={errors}
                    />
                  </div>
                  <div className={styles.Conatct_form_box}>
                    <label>{t("What you are interested")}</label>
                    <Controller
                      control={control}
                      name="form-cf-1"
                      rules={{ required: "Interested is required" }}
                      render={({ field }) => (
                        <Select
                          placeholder={t("Select")}
                          label="form-cf-1"
                          name="form-cf-1"
                          className={`contact_select  ${errors &&
                            errors.interstedSelect &&
                            (Arabic
                              ? "contact_select_Arabic"
                              : "contact_select_Active")
                            }`}
                          onChange={(e) => field.onChange(e)}
                          selected={field.value}
                          value={field.value || ''}
                          options={IntersetedOption}
                          isSearchable={false}
                          register={register}
                          onBlur={() => field.onBlur()}
                          instanceId="select-box"
                        />
                      )}
                    />
                    {errors.interstedSelect && (
                      <div className="error">
                        {t(`${errors.interstedSelect?.message}`)}
                      </div>
                    )}
                  </div>

                  <div className={styles.Conatct_form_box}>
                    <label>{t("Message")}</label>
                    <Textarea
                      cols="30"
                      rows="10"
                      placeholder={t("Let tell us know about your project")}
                      register={register}
                      Arabic={Arabic}
                      name="description"
                      label="description"
                      check={{
                        required: `Message is Required`,
                      }}
                      errors={errors}
                    />
                  </div>
                </div>
                <div className={styles.Conatct_form_action}>
                  <button>{t("Send Now")}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
