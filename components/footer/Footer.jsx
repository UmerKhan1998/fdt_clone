import React, { useState } from "react";
// Css
import styles from "../../styles/footer.module.scss";
// Images
import Image from "next/image";
import footerLogo1 from "../../assets/images/footerLogo1.png";
import footerLogo2 from "../../assets/images/footerLogo2.png";
// React Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";

// APIs
import endpoints from "@/src/api";
import { toast } from "react-toastify";

const Footer = () => {
  const { locale } = useRouter();
  const t = useTranslations("footer");
  const Arabic = locale?.includes("ar");

  const [NewsletterEmail, setNewsletterEmail] = useState('');

  const submitNewsletter = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('source', 8);
    formData.append('status', 3);
    formData.append('email', NewsletterEmail);

    try {
      const response = await endpoints.Subscriber(formData);
      if (response) {
        setNewsletterEmail('');
        toast.success('Thank you for Subscribing the Newsletter.', {
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
    } catch (error) {
      console.log(error);
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

  return (
    <>
      <div className={`${styles.footer} ${Arabic ? styles.footer_Arabic : ""}`}>
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_main}>
            <div className={styles.footer_left}>
              <div className={styles.footer_logo}>
                <Link href={"/"}>
                  <Image src={footerLogo1} alt="Logo" draggable="false" width={70} height={25} />
                </Link>
                <Link href={"/"}>
                  <Image src={footerLogo2} alt="Logo" draggable="false" width={97} height={67} />
                </Link>
              </div>
              <div className={styles.footer_dec}>
                <p>{t("dec")}</p>
              </div>
              <div className={styles.footer_action}>
                <h1>{t("follow Us on:")}</h1>

                <div className={styles.footer_action_main}>
                  <div>
                    <a href="https://www.facebook.com/profile.php?id=100091584151873&mibextid=LQQJ4d" target="_blank"><FaFacebookF /></a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/posts/fastdigitaltechnology_fdt-cybersecurity-informationsecurity-activity-7077601018624000000-YmHq?utm_source=share&utm_medium=member_ios" target="_blank"><FaLinkedinIn /></a>
                  </div>
                  <div>
                    <a href="https://instagram.com/fastdigitaltech?igshid=MjEwN2IyYWYwYw==" target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footer_right}>
              <div className={styles.footer_boxs}>
                <div className={styles.footer_box}>
                  <h1>{t("Services")}</h1>
                  <ul>
                    <li><Link href={'/services/identity-and-access-management'}>{t("IAM")}</Link></li>
                    <li><Link href={'/services/grc-solutions'}>{t("GRC")}</Link></li>
                    <li><Link href={'/services/data-protection/siem-solution'}>{t("SIEM")}</Link></li>
                    <li><Link href={'/services/vapt'}>{t("VAPT")}</Link></li>
                  </ul>
                </div>

                <div className={styles.footer_box}>
                  <h1>{t("Industries")}</h1>
                  <ul>
                    <li><Link href={'/industries/finance-and-banking'}>{t("Finance And Banking")}</Link></li>
                    <li><Link href={'/industries/healthcare'}>{t("Healthcare")}</Link></li>
                    <li><Link href={'/industries/government'}>{t("Government And Public Sector")}</Link></li>
                    <li><Link href={'/industries/energy-and-utilities'}>{t("Energy And Uitilities")}</Link></li>
                    <li><Link href={'/industries/education'}>{t("Education")}</Link></li>
                    <li><Link href={'/industries/technology'}>{t("Technology")}</Link></li>
                    <li><Link href={'/industries/legal'}>{t("Legal")}</Link></li>
                  </ul>
                </div>

                <div className={styles.footer_box}>
                  <h1>{t("Professionals")}</h1>

                  <ul>
                    <li>{t("Cybersecurity Experts")}</li>
                    <li>{t("Devops Engineers")}</li>
                    <li>{t("Cloud Engineers")}</li>
                    <li>{t("AI Experts")}</li>
                    <li>{t("Net Software Developers")}</li>
                  </ul>
                </div>

                <div className={styles.footer_right_right}>
                  <h1>{t("Subscribe for newsletter")}</h1>
                  <form onSubmit={submitNewsletter} method="post">
                    <div className={styles.footer_input}>
                      <input type="email" placeholder={t("Your Email")} value={NewsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} required />
                      <button>{t("Subscribe")}</button>
                    </div>
                  </form>
                  <div className={styles.footer_address}>
                    <h1>UAE {t("Address")}</h1>
                    <p>{t("location1")}</p>
                  </div>
                  <div className={styles.footer_address}>
                    <h1>{t("Address")}</h1>
                    <p>{t("location2")}</p>
                  </div>
                  <div className={styles.footer_address}>
                    <h1>{t("Phone")}</h1>
                    <p>+97143882219</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_copyright}>
          <h1>
            © 2023 <span>Fast Digital Technology</span> , All Rights Reserved Powered By <a href="https://digitalgraphiks.ae/" target="_blank"><span>Digital Graphiks</span></a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
