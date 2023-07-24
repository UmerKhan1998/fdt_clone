"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
// Css
import styles from "../../styles/navbar.module.scss";
// Icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
// Images
import logo from "../../assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
// React Intl
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import DropDown from "./DropDown";
import SimpleDropDown from "./SimpleDropDown";

const Navbar = () => {
  const [isToogle, setIsToggle] = useState(false);
  const { locale } = useRouter();
  const router = useRouter();

  const { pathname, asPath, query } = router

  const t = useTranslations("Navbar");

  console.log("locale", locale?.includes("en"))

  const Arabic = locale?.includes("ar");
  const English = locale?.includes("en");

  // Sticky Navbar Start
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const ChangeNav = () => {
    if (window.scrollY >= 60) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);

    return () => {
      window.removeEventListener("scroll", ChangeNav);
    };
  }, [stickyNavbar]);
  // Sticky Navbar End

  const handleClick = () => {
    setIsToggle(!isToogle);
  };

  const localeLang = locale?.split("-")[0]
  const localeCountry = locale?.split("-")[1]

  const handleClickLanguage = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    const localeLang = locale?.split("-")[0]
    const localeCountry = locale?.split("-")[1]
    console.log('locale', localeLang, localeCountry)
    if (localeLang === "en") {
      router.push(`/ar-${localeCountry}`);
    } else {
      router.push(`/en-${localeCountry}`);
    }
    // router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const menu = [
    {
      name: `${t("Services")}`,
      link: "/services",
      magaMenu: true,
      dropDown: [
        {
          menuName: t("IAM Deployment Services"),
          menuLink: "/services/identity-and-access-management",
          subMenu: [
            {
              SubMenuName: t("Beyond Trust"),
              SubMenuLink: "/services/identity-and-access-management/beyondtrust",
            },
            {
              SubMenuName: t("CyberArk"),
              SubMenuLink: "/services/identity-and-access-management/cyberark",
            },
            {
              SubMenuName: t("Sailpoint"),
              SubMenuLink: "/services/identity-and-access-management/sailpoint",
            },
            {
              SubMenuName: t("Netscout"),
              SubMenuLink: "/services/identity-and-access-management/netscout",
            },
          ],
        },
        {
          menuName: t("VAPT Deployment Services"),
          menuLink: "/services/vapt",
          subMenu: [
            {
              SubMenuName: t("Vulnerability Assessment"),
              SubMenuLink: "/services/vapt/vulnerability-assessment",
            },
            {
              SubMenuName: t("Penetration Testing"),
              SubMenuLink: "/services/vapt/penetrating-testing",
            },
          ],
        },
        {
          menuName: t("GRC Deployment Services"),
          menuLink: "/services/grc-solutions",
          subMenu: [
            {
              SubMenuName: t("ECC"),
              SubMenuLink: "/services/grc-solutions/essential-cybersecurity-controls",
            },
            {
              SubMenuName: t("Groub IB"),
              SubMenuLink: "/",
            },
            {
              SubMenuName: t("IBM Safer Payments"),
              SubMenuLink: "/",
            },
          ],
        },
        {
          menuName: t("Data Protection Services"),
          menuLink: "/services/data-protection",
          subMenu: [
            {
              SubMenuName: t("SIEM"),
              SubMenuLink: "/services/data-protection/siem-solution",
            },
            {
              SubMenuName: t("DLP"),
              SubMenuLink: "/services/data-protection/dlp",
            },
            {
              SubMenuName: t("EPP"),
              SubMenuLink: "/services/data-protection/epp",
            },
            {
              SubMenuName: t("EDR"),
              SubMenuLink: "/services/data-protection/edr-solution",
            },
          ],
        },
      ],
    },
    {
      name: `${t("Industries")}`,
      link: "/industries",
      magaMenu: false,
      dropDown: [
        {
          menuName: t("Finance and Banking"),
          menuLink: "/industries/finance-and-banking"
        },
        {
          menuName: t("Healthcare"),
          menuLink: "/industries/healthcare"
        },
        {
          menuName: t("Government"),
          menuLink: "/industries/government"
        },
        {
          menuName: t("Education"),
          menuLink: "/industries/education"
        },
        {
          menuName: t("Technology"),
          menuLink: "/industries/technology"
        },
        {
          menuName: t("More"),
          menuLink: "/industries"
        }
      ],
    },
    {
      name: `${t("About")}`,
      link: "/about-us",
      magaMenu: false,
    },
    {
      name: `${t("Devops")}`,
      link: "/",
      magaMenu: false,
    },
    {
      name: `${t("More")}`,
      link: "/",
      magaMenu: false,
      dropDown: [
        {
          menuName: t("Our Experts"),
          menuLink: "/our-experts",
        },
        {
          menuName: t("Careers"),
          menuLink: "/careers",
        },
        {
          menuName: t("Blogs"),
          menuLink: "/blog",
        },
        {
          menuName: t("Insight"),
          menuLink: "/",
        },
      ],
    },
  ];
  const [DropDownIndex, setDropDownIndex] = useState("");
  const [DropDownParentIndex, setDropDownParentIndex] = useState("");

  useLayoutEffect(() => {
    if (window.innerWidth > 995) {
      setDropDownIndex(0);
    }
  }, []);

  return (
    <div
      className={`${styles.navbar} ${stickyNavbar ? styles.navbarSticky : ""} 
      ${Arabic ? styles.navbar_Arabic : " "}
    `}
    >
      <div className={styles.navbar_wrapper}>
        {/* HanburgerMenu */}
        <div className={styles.navbar_hanburgerMenu} onClick={handleClick}>
          <div className={`handburgerMenu ${isToogle && "handburgerActive"}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        {/* Logo */}
        <div className={styles.navbar_left}>
          <div className={styles.navbar_logo}>
            <Link href={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div
          className={`${styles.navbar_center}  ${isToogle && styles.navbar_menuActive
            }`}
        >
          <div className={styles.navbar_menu}>
            <div className={styles.navbar_submenu}>
              <Link href={'/contact-us'}>{t("Get in Touch")}</Link>
            </div>
            <ul>
              {menu.map((item, i) => {
                return (
                  <div key={i}>
                    <li
                      className={`${styles.dropDown_show} dropDown_show ${DropDownParentIndex === i ? "active" : ""
                        }`}
                      onMouseEnter={() => {
                        if (window.innerWidth > 995) {
                          setDropDownIndex(0);
                        }
                      }}
                    >
                      <Link href={item.link}>
                        {item.name}
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            if (
                              DropDownParentIndex !== "" &&
                              DropDownParentIndex == i
                            ) {
                              setDropDownParentIndex("");
                            } else {
                              setDropDownParentIndex(i);
                            }
                          }}
                        >
                          {item.dropDown ? <MdOutlineKeyboardArrowDown /> : ""}
                        </span>
                      </Link>
                    </li>
                    {item?.magaMenu
                      ? item.dropDown && (
                        <DropDown
                          data={item.dropDown}
                          DropDownIndex={DropDownIndex}
                          setDropDownIndex={setDropDownIndex}
                        />
                      )
                      : item.dropDown && (
                        <SimpleDropDown data={item.dropDown} />
                      )}
                  </div>
                );
              })}
            </ul>
            <div className={styles.navbar_subLogo}>
              <Image src={logo} alt="SubLogo" />
            </div>
            <div className={styles.navbar_closeBtn} onClick={handleClick}>
              <AiOutlineClose />
            </div>
          </div>
          <div className={styles.navbar_menu_right} onClick={handleClick}></div>
        </div>

        <div className={styles.navbar_right}>
          <div className={styles.navbar_language}
            onClick={
              () => {
                if (English) {
                  router.push({ pathname, query }, asPath, {
                    locale: `ar-${localeCountry}`
                  })
                } else if (Arabic) {
                  router.push({ pathname, query }, asPath, {
                    locale: `en-${localeCountry}`
                  })
                }
              }
            }
          >
            {console.log("kgfkufafd8asudywadoas", English, Arabic)}
            <TbWorld />
            {English &&
              <h6>{"AR"}</h6>
            }
            {Arabic &&
              <h6>{"EN"}</h6>
            }
          </div>


          <div className={styles.navbar_action}>
            <Link href={'/contact-us'}>{t("Get in Touch")}</Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
