import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/EDRBanner.png";
import EDRImageBanner from "../../../../assets/images/EDRImageBanner.png";
import SIEMBrandsImg1 from "../../../../assets/images/SIEMBrandsImg1.png";
import SIEMBrandsImg2 from "../../../../assets/images/SIEMBrandsImg2.png";
import SIEMBrandsImg3 from "../../../../assets/images/SIEMBrandsImg3.png";
import SIEMBrandsImg4 from "../../../../assets/images/SIEMBrandsImg4.png";
import SIEMBrandsImg5 from "../../../../assets/images/SIEMBrandsImg5.png";
import SIEMBrandsImg6 from "../../../../assets/images/SIEMBrandsImg6.png";
import EDRWhyChooseUsData1Icon1 from "../../../../assets/images/EDRWhyChooseUsData1Icon1.svg";
import EDRWhyChooseUsData1Icon2 from "../../../../assets/images/EDRWhyChooseUsData1Icon2.svg";
import EDRWhyChooseUsData1Icon3 from "../../../../assets/images/EDRWhyChooseUsData1Icon3.svg";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import ImageBanner from '@/components/ImageBanner/ImageBanner';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesChoose from '@/components/ServicesChoose/ServicesChoose';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import BorderedBrands from '@/components/BorderedBrands';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
    const Meta = useTranslations("Meta");
    const t = useTranslations("EDRBanner");
    const t1 = useTranslations("EDRImageBanner");
    const t2 = useTranslations("EDRWhyChooseUs1");
    const t3 = useTranslations("EDRServicesChoose1");
    const t4 = useTranslations("EDRWhyChooseUs2");
    const TalkUsNowSection14 = useTranslations("TalkUsNowSection14");

    const EDRWhyChooseUsData1 = [
        {
          icon: EDRWhyChooseUsData1Icon1,
          link: "",
          title: "",
          dec: t2("card1Desc"),
        },
        {
          icon: EDRWhyChooseUsData1Icon2,
          link: "",
          title: "",
          dec: t2("card2Desc"),
        },
        {
          icon: EDRWhyChooseUsData1Icon3,
          link: "",
          title: "",
          dec: t2("card3Desc"),
        },
    ];
    const EDRServicesChoose1Data = [
        {
          icon: "",
          link: "",
          title: t3("card1Title"),
          dec: t3("card1Desc"),
        },
        {
          icon: "",
          link: "",
          title: t3("card2Title"),
          dec: t3("card2Desc"),
        },
        {
          icon: "",
          link: "",
          title: t3("card3Title"),
          dec: t3("card3Desc"),
        },
    ];
    const EDRBorderedBrands = [
      {
          image: SIEMBrandsImg1,
          link: '/services/data-protection/ibm-security'
      },
      {
          image: SIEMBrandsImg2,
          link: '/services/data-protection/symantec'
      },
      {
          image: SIEMBrandsImg3,
          link: '/services/data-protection/trendmicro'
      },
      {
          image: SIEMBrandsImg4,
          link: '/services/data-protection/infoblox'
      },
      {
          image: SIEMBrandsImg5,
          link: '/services/data-protection/sophos'
      },
      {
          image: SIEMBrandsImg6,
          link: '/services/data-protection/forcepoint'
      },
  ];
    const EDRWhyChooseUsData2 = [
        {
          icon: "",
          link: "",
          title: t4("card1Title"),
          dec: t4("card1Desc"),
        },
        {
          icon: "",
          link: "",
          title: t4("card2Title"),
          dec: t4("card2Desc"),
        },
        {
          icon: "",
          link: "",
          title: t4("card3Title"),
          dec: t4("card3Desc"),
        },
        {
          icon: "",
          link: "",
          title: t4("card4Title"),
          dec: t4("card4Desc"),
        },
    ];

    return (
        <>
            <Head>
              <title>{Meta("EDRTitle")}</title>
              <meta name="description" content={Meta("EDRDesc")} />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.png" />

              <meta property="og:title" content={Meta("EDRTitle")} />
              <meta property="og:site_name" content="Fast Digital Technology" />
              <meta property="og:url" content="https://fastdigitaltechnology.com" />
              <meta property="og:description" content={Meta("EDRDesc")} />
              <meta property="og:type" content="website"></meta>
            </Head>

      <GeoLocationComp />

            <Banner
                title={t("title")}
                subdetail={t("subdetail")}
                dec={t("desc")}
                titleWidth={"100%"}
                bannerImage={InternalBanner}
            />
            <ImageBanner
                picture={EDRImageBanner}
                title={t1("title")}
                subtitle={""}
                dec={t1("dec")}
                brandLogo={""}
                align={''}
                mode={""}
            />
            <WhyChooseUs
                title={t2("title")}
                subtitle={t2("subtitle")}
                dec={""}
                data={EDRWhyChooseUsData1}
                mode=""
                brandLogo={""}
            />
            <ServicesChoose
              title={t3("title")}
              subtitle={t3("subtitle")}
              data={EDRServicesChoose1Data}
              mode={"dark"}
              brandLogo={""}
            />
            <TalkUsNowSection
                title={TalkUsNowSection14("title")}
                desc={TalkUsNowSection14("desc")}
                link={"/contact-us"}
                linkText={TalkUsNowSection14("linkText")}
                background={""}
            />
            <BorderedBrands data={EDRBorderedBrands} />
            <WhyChooseUs
                title={t4("title")}
                subtitle={t4("subtitle")}
                dec={t4("dec")}
                data={EDRWhyChooseUsData2}
                mode=""
                brandLogo={""}
            />
            <ContactForm Image2 />
        </>
    )
}

export default index