import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/InfobloxBanner.png";
import InfobloxLogo from "../../../../assets/images/InfobloxLogo.png";
import INFServicesSlider1Image1 from "../../../../assets/images/INFServicesSlider1Image1.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSlider from '@/components/shared/ServicesSlider';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
    const Meta = useTranslations("Meta");
    const t = useTranslations("INFBanner");
    const t1 = useTranslations("INFWhyChooseUs1");
    const t2 = useTranslations("INFServicesSlider1");
    const TalkUsNowSection17 = useTranslations("TalkUsNowSection17");

    const IMFWhyChooseUs1Data = [
        {
          icon: "",
          link: "",
          title: t1("card1Title"),
          dec: t1("card1Desc"),
        },
        {
          icon: "",
          link: "",
          title: t1("card2Title"),
          dec: t1("card2Desc"),
        },
        {
          icon: "",
          link: "",
          title: t1("card3Title"),
          dec: t1("card3Desc"),
        },
        {
          icon: "",
          link: "",
          title: t1("card4Title"),
          dec: t1("card4Desc"),
        },
    ];
    const DLPServicesSliderData6 = [
        {
            image: INFServicesSlider1Image1,
            heading: t2("card1Title"),
            dec: t2("card1Desc")
        },
        {
            image: INFServicesSlider1Image1,
            heading: t2("card2Title"),
            dec: t2("card2Desc")
        },
        {
            image: INFServicesSlider1Image1,
            heading: t2("card3Title"),
            dec: t2("card3Desc")
        },
    ];

    return (
        <>
            <Head>
                <title>{Meta("INFTitle")}</title>
                <meta name="description" content={Meta("INFDesc")} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

                <meta property="og:title" content={Meta("INFTitle")} />
                <meta property="og:site_name" content="Fast Digital Technology" />
                <meta property="og:url" content="https://fastdigitaltechnology.com" />
                <meta property="og:description" content={Meta("INFDesc")} />
                <meta property="og:type" content="website"></meta>
            </Head>

      <GeoLocationComp />
            
            <Banner
                title={t("title")}
                subdetail={""}
                dec={t("desc")}
                titleWidth={"100%"}
                bannerImage={InternalBanner}
            />
            <WhyChooseUs
                title={t1("title")}
                subtitle={""}
                data={IMFWhyChooseUs1Data}
                mode=""
                brandLogo={InfobloxLogo}
            />
            <ServicesSlider
                data={DLPServicesSliderData6}
                title={t2("title")}
                subtitle={t2("subtitle")}
                mode={'dark'}
                textAlign={"center"}
            />
            <TalkUsNowSection
                title={TalkUsNowSection17("title")}
                desc={TalkUsNowSection17("desc")}
                link={"/contact-us"}
                linkText={TalkUsNowSection17("linkText")}
                background={""}
            />
            <ContactForm Image2 />
        </>
    )
}

export default index