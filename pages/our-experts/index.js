import Head from "next/head";
import React from "react";

// Images
import InternalBanner from "@/assets/images/InternalBanner.png";
import DeveloperImg1 from "@/assets/images/DeveloperImg1.png";
import DeveloperImg2 from "@/assets/images/DeveloperImg2.png";
import DeveloperImg3 from "@/assets/images/DeveloperImg3.png";
import DeveloperImg4 from "@/assets/images/DeveloperImg4.png";
import DeveloperImg5 from "@/assets/images/DeveloperImg5.png";
import DeveloperImg6 from "@/assets/images/DeveloperImg6.png";
import DeveloperImg7 from "@/assets/images/DeveloperImg7.png";
import DeveloperImg8 from "@/assets/images/DeveloperImg8.png";
import DeveloperImg9 from "@/assets/images/DeveloperImg9.png";
import DeveloperImg10 from "@/assets/images/DeveloperImg10.png";
import DeveloperImg11 from "@/assets/images/DeveloperImg11.png";
import DeveloperImg12 from "@/assets/images/DeveloperImg12.png";
import DeveloperImg13 from "@/assets/images/DeveloperImg13.png";
import DeveloperImg14 from "@/assets/images/DeveloperImg14.png";
import DeveloperImg15 from "@/assets/images/DeveloperImg15.png";
import DeveloperImg16 from "@/assets/images/DeveloperImg16.png";
import Certifications1 from "@/assets/images/Certifications1.png";
import Certifications2 from "@/assets/images/Certifications2.png";
import Certifications3 from "@/assets/images/Certifications3.png";
import Certifications4 from "@/assets/images/Certifications4.png";
import Certifications5 from "@/assets/images/Certifications5.png";
import Certifications6 from "@/assets/images/Certifications6.png";
import Certifications7 from "@/assets/images/Certifications7.png";
import Certifications8 from "@/assets/images/Certifications8.png";
import Certifications9 from "@/assets/images/Certifications9.png";
import Certifications10 from "@/assets/images/Certifications10.png";
import Certifications11 from "@/assets/images/Certifications11.png";
import Certifications12 from "@/assets/images/Certifications12.png";
import Certifications13 from "@/assets/images/Certifications13.png";
import Certifications14 from "@/assets/images/Certifications14.png";
import Certifications15 from "@/assets/images/Certifications15.png";
import Certifications16 from "@/assets/images/Certifications16.png";
import Certifications17 from "@/assets/images/Certifications17.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from "@/components/banner/Banner";
import TextSection from "@/components/TextSection";
import TeamSection from "@/components/TeamSection";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import CertificationsSection from "@/components/CertificationsSection";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("ExpertBanner");
  const t1 = useTranslations("ExpertTextSection");
  const t2 = useTranslations("ExpertTeamSection");
  const t3 = useTranslations("ExpertCertificationsSection");
  const TalkUsNowSection22 = useTranslations("TalkUsNowSection22");

  const TeamSectionData = [
    {
        title: t2("TeamSection1Title"),
        desc: t2("TeamSection1Desc"),
        id: '#cybersecurity-experts',
        cards: [
            {
                img: DeveloperImg1,
                name: t2("TeamSection1Card1Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg2,
                name: t2("TeamSection1Card2Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg3,
                name: t2("TeamSection1Card3Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg4,
                name: t2("TeamSection1Card4Title"),
                desc: t2("TeamSectionCardDesc")
            },
        ]
    },
    {
        title: t2("TeamSection2Title"),
        desc: t2("TeamSection2Desc"),
        id: '#DevOps-engineer',
        cards: [
            {
                img: DeveloperImg5,
                name: t2("TeamSection2Card1Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg6,
                name: t2("TeamSection2Card2Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg7,
                name: t2("TeamSection2Card3Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg8,
                name: t2("TeamSection2Card4Title"),
                desc: t2("TeamSectionCardDesc")
            },
        ]
    },
    {
        title: t2("TeamSection3Title"),
        desc: t2("TeamSection3Desc"),
        id: '#cloud-engineers',
        cards: [
            {
                img: DeveloperImg9,
                name: t2("TeamSection3Card1Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg10,
                name: t2("TeamSection3Card2Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg11,
                name: t2("TeamSection3Card3Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg12,
                name: t2("TeamSection3Card4Title"),
                desc: t2("TeamSectionCardDesc")
            },
        ]
    },
    {
        title: t2("TeamSection4Title"),
        desc: t2("TeamSection4Desc"),
        id: '#ai-experts',
        cards: [
            {
                img: DeveloperImg13,
                name: t2("TeamSection4Card1Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg14,
                name: t2("TeamSection4Card2Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg15,
                name: t2("TeamSection4Card3Title"),
                desc: t2("TeamSectionCardDesc")
            },
            {
                img: DeveloperImg16,
                name: t2("TeamSection4Card4Title"),
                desc: t2("TeamSectionCardDesc")
            },
        ]
    },
  ];
  const CertificationsSectionCards = [
    {
        title: t3("CertificationsCards1Title"),
        desc: "",
        cards: [
            {
                img: Certifications1,
                title: t3("CertificationsCards1Card1Title")
            },
            {
                img: Certifications2,
                title: t3("CertificationsCards1Card2Title")
            },
        ]
    },
    {
        title: t3("CertificationsCards2Title"),
        desc: "",
        cards: [
            {
                img: Certifications3,
                title: t3("CertificationsCards2Card1Title")
            },
            {
                img: Certifications4,
                title: t3("CertificationsCards2Card2Title")
            },
        ]
    },
    {
        title: t3("CertificationsCards3Title"),
        desc: "",
        cards: [
            {
                img: Certifications5,
                title: t3("CertificationsCards3Card1Title")
            },
            {
                img: Certifications6,
                title: t3("CertificationsCards3Card2Title")
            },
            {
                img: Certifications7,
                title: t3("CertificationsCards3Card3Title")
            },
            {
                img: Certifications8,
                title: t3("CertificationsCards3Card4Title")
            },
            {
                img: Certifications9,
                title: t3("CertificationsCards3Card5Title")
            },
        ]
    },
    {
        title: t3("CertificationsCards4Title"),
        desc: "",
        cards: [
            {
                img: Certifications10,
                title: t3("CertificationsCards4Card1Title")
            },
            {
                img: Certifications11,
                title: t3("CertificationsCards4Card2Title")
            },
            {
                img: Certifications12,
                title: t3("CertificationsCards4Card3Title")
            },
            {
                img: Certifications13,
                title: t3("CertificationsCards4Card4Title")
            },
            {
                img: Certifications14,
                title: t3("CertificationsCards4Card5Title")
            },
        ]
    },
    {
        title: t3("CertificationsCards5Title"),
        desc: "",
        cards: [
            {
                img: Certifications15,
                title: t3("CertificationsCards5Card1Title")
            },
            {
                img: Certifications16,
                title: t3("CertificationsCards5Card2Title")
            },
            {
                img: Certifications17,
                title: t3("CertificationsCards5Card3Title")
            },
        ]
    },
    {
        title: t3("CertificationsCards5Title"),
        desc: t3("CertificationsCards6Desc"),
        cards: []
    },
  ]

  return (
    <>
      <Head>
        <title>{Meta("OurExpertsTitle")}</title>
        <meta name="description" content={Meta("OurExpertsDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("OurExpertsTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("OurExpertsDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner
        title={t("title")}
        dec={
          t("desc")
        }
        bannerImage={InternalBanner}
      />
      <TextSection
        title={t1("title")}
        subtitle={t1("subtitle")}
        desc={t1("desc")}
        maxWidth={""}
        textAlign={''}
      />
      {TeamSectionData?.map((item, index)=>(
        <TeamSection
            key={index}
            title={item?.title}
            desc={item?.desc}
            cards={item?.cards}
            id={item?.id}
        />
      ))}
      <CertificationsSection
        title={t3('title')}
        subtitle={t3('subtitle')}
        desc={t3('desc')}
        cards={CertificationsSectionCards}
      />
      <TalkUsNowSection
        title={TalkUsNowSection22("title")}
        desc={TalkUsNowSection22("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection22("linkText")}
        background={""}
      />
    </>
  );
};

export default index;
