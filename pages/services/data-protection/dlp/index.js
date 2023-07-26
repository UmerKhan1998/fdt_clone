import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/DLPBanner.png";
import DLPImageBanner from "../../../../assets/images/DLPImageBanner.png";
import SIEMBrandsImg1 from "../../../../assets/images/SIEMBrandsImg1.png";
import SIEMBrandsImg2 from "../../../../assets/images/SIEMBrandsImg2.png";
import SIEMBrandsImg3 from "../../../../assets/images/SIEMBrandsImg3.png";
import SIEMBrandsImg4 from "../../../../assets/images/SIEMBrandsImg4.png";
import SIEMBrandsImg5 from "../../../../assets/images/SIEMBrandsImg5.png";
import SIEMBrandsImg6 from "../../../../assets/images/SIEMBrandsImg6.png";
import DLPServicesSlider1Image1 from "../../../../assets/images/DLPServicesSlider1Image1.png";
import DLPWhyChooseUsData1Icon1 from "../../../../assets/images/DLPWhyChooseUsData1Icon1.svg";
import DLPWhyChooseUsData1Icon2 from "../../../../assets/images/DLPWhyChooseUsData1Icon2.svg";
import DLPWhyChooseUsData1Icon3 from "../../../../assets/images/DLPWhyChooseUsData1Icon3.svg";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import ImageBanner from '@/components/ImageBanner/ImageBanner';
import ServicesSlider from '@/components/shared/ServicesSlider';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import BorderedBrands from '@/components/BorderedBrands';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
    const Meta = useTranslations("Meta");
    const t = useTranslations("DLPBanner");
    const t1 = useTranslations("DLPImageBanner");
    const t2 = useTranslations("DLPServicesSlider1");
    const t3 = useTranslations("DLPWhyChooseUs1");
    const t4 = useTranslations("DLPWhyChooseUs2");
    const TalkUsNowSection13 = useTranslations("TalkUsNowSection13");

    const DLPServicesSliderData6 = [
        {
            image: DLPServicesSlider1Image1,
            heading: t2("card1Title"),
            dec: t2("card1Desc")
        },
        {
            image: DLPServicesSlider1Image1,
            heading: t2("card2Title"),
            dec: t2("card2Desc")
        },
        {
            image: DLPServicesSlider1Image1,
            heading: t2("card3Title"),
            dec: t2("card3Desc")
        },
    ];
    const DLPWhyChooseUsData1 = [
        {
          icon: DLPWhyChooseUsData1Icon1,
          link: "",
          title: t3("card1Title"),
          dec: t3("card1Desc"),
        },
        {
          icon: DLPWhyChooseUsData1Icon2,
          link: "",
          title: t3("card2Title"),
          dec: t3("card2Desc"),
        },
        {
          icon: DLPWhyChooseUsData1Icon3,
          link: "",
          title: t3("card3Title"),
          dec: t3("card3Desc"),
        },
    ];
    const DLPWhyChooseUsData2 = [
        {
          icon: "",
          link: "",
          title: "",
          dec: t4("card1Desc"),
        },
        {
          icon: "",
          link: "",
          title: "",
          dec: t4("card2Desc"),
        },
        {
          icon: "",
          link: "",
          title: "",
          dec: t4("card3Desc"),
        },
        {
          icon: "",
          link: "",
          title: "",
          dec: t4("card4Desc"),
        },
    ];
    const SIEMBorderedBrands = [
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

    return (
        <>
            <Head>
                <title>{Meta("DLPTitle")}</title>
                <meta name="description" content={Meta("DLPDesc")} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

                <meta property="og:title" content={Meta("DLPTitle")} />
                <meta property="og:site_name" content="Fast Digital Technology" />
                <meta property="og:url" content="https://fastdigitaltechnology.com" />
                <meta property="og:description" content={Meta("DLPDesc")} />
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
                picture={DLPImageBanner}
                title={t1("title")}
                subtitle={""}
                dec={t1("dec")}
                brandLogo={""}
                align={''}
                mode={""}
            />
            <ServicesSlider
                data={DLPServicesSliderData6}
                title={t2("title")}
                subtitle={t2("subtitle")}
                mode={'dark'}
                textAlign={"center"}
            />
            <TalkUsNowSection
                title={TalkUsNowSection13("title")}
                desc={TalkUsNowSection13("desc")}
                link={"/contact-us"}
                linkText={TalkUsNowSection13("linkText")}
                background={""}
            />
            <WhyChooseUs
                title={t3("title")}
                subtitle={t3("subtitle")}
                dec={t3("dec")}
                data={DLPWhyChooseUsData1}
                mode=""
                brandLogo={""}
            />
            <BorderedBrands data={SIEMBorderedBrands} />
            <WhyChooseUs
                title={t4("title")}
                subtitle={t4("subtitle")}
                dec={""}
                data={DLPWhyChooseUsData2}
                mode="dark"
                brandLogo={""}
            />
            <ContactForm Image2 />
        </>
    )
}

export default index