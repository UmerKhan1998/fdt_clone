import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/PTBanner.png";
import PTServiceExpertStrategiesImg1 from "../../../../assets/images/PTServiceExpertStrategiesImg1.png";
import PTServiceExpertStrategiesImg2 from "../../../../assets/images/PTServiceExpertStrategiesImg2.png";
import PTServiceExpertStrategiesImg3 from "../../../../assets/images/PTServiceExpertStrategiesImg3.png";
import PTServiceExpertStrategiesImg4 from "../../../../assets/images/PTServiceExpertStrategiesImg4.png";
import PTServiceExpertStrategiesImg5 from "../../../../assets/images/PTServiceExpertStrategiesImg5.png";
import PTServiceExpertStrategiesImg6 from "../../../../assets/images/PTServiceExpertStrategiesImg6.png";
import PTServiceExpertStrategiesImg7 from "../../../../assets/images/PTServiceExpertStrategiesImg7.png";
import PTServiceExpertStrategiesImg8 from "../../../../assets/images/PTServiceExpertStrategiesImg8.png";
import PTServiceExpertStrategiesImg9 from "../../../../assets/images/PTServiceExpertStrategiesImg9.png";
import PTServiceExpertStrategiesImg10 from "../../../../assets/images/PTServiceExpertStrategiesImg10.png";
import PTServiceExpertStrategiesImg11 from "../../../../assets/images/PTServiceExpertStrategiesImg11.png";
import PTServiceExpertStrategiesImg12 from "../../../../assets/images/PTServiceExpertStrategiesImg12.png";
import PTServiceExpertStrategiesImg13 from "../../../../assets/images/PTServiceExpertStrategiesImg13.png";
import PTServiceExpertStrategiesImg14 from "../../../../assets/images/PTServiceExpertStrategiesImg14.png";
import PTServiceExpertStrategiesImg15 from "../../../../assets/images/PTServiceExpertStrategiesImg15.png";
import PTServiceExpertStrategiesImg16 from "../../../../assets/images/PTServiceExpertStrategiesImg16.png";
import PTServiceExpertStrategiesImg17 from "../../../../assets/images/PTServiceExpertStrategiesImg17.png";
import PTServiceExpertStrategiesImg18 from "../../../../assets/images/PTServiceExpertStrategiesImg18.png";

import PTServicesSliderChoose1Image1 from "../../../../assets/images/PTServicesSliderChoose1Image1.png";
import PTServicesSliderChoose1Image2 from "../../../../assets/images/PTServicesSliderChoose1Image2.png";
import PTServicesSliderChoose1Image3 from "../../../../assets/images/PTServicesSliderChoose1Image3.png";
import PTServicesSliderChoose1Image4 from "../../../../assets/images/PTServicesSliderChoose1Image4.png";
import PTServicesSliderChoose1Image5 from "../../../../assets/images/PTServicesSliderChoose1Image5.png";
import PTServicesSliderChoose1Image6 from "../../../../assets/images/PTServicesSliderChoose1Image6.png";
import PTServicesSliderChoose1Image7 from "../../../../assets/images/PTServicesSliderChoose1Image7.png";
import PTServicesSliderChoose1Image8 from "../../../../assets/images/PTServicesSliderChoose1Image8.png";
import PTServicesSliderChoose1Image9 from "../../../../assets/images/PTServicesSliderChoose1Image9.png";

// Components
import Banner from '@/components/banner/Banner';
import ExpertStrategies from '@/components/ExpertStrategies';

// React Intl
import { useTranslations } from "next-intl";
import ServicesChoose from '@/components/ServicesChoose/ServicesChoose';
import ServicesSlider from '@/components/shared/ServicesSlider';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import PartnersInner from '@/components/PartnersInner';
import ContactForm from '@/components/ContactIsForm/ContactForm';
import GeoLocationComp from '@/components/GeoLocationComp';

const index = () => {
    const Meta = useTranslations("Meta");
    const t1 = useTranslations("PTServiceBanner");
    const t2 = useTranslations("PTExpertStrategies");
    const t3 = useTranslations("PTServiceServicesChoose1");
    const t4 = useTranslations("PTServicesSliderChoose1");
    const t5 = useTranslations("PTServiceServicesChoose2");
    const t6 = useTranslations("PTServicesSliderChoose2");
    const t7 = useTranslations("PTServiceServicesChoose3");
    const t8 = useTranslations("PTServicesSliderChoose3");
    const t9 = useTranslations("PTServiceServicesChoose4");
    const t10 = useTranslations("PTServicesSliderChoose4");
    const t11 = useTranslations("PTServiceServicesChoose5");
    const t12 = useTranslations("PTServicesSliderChoose5");
    const t13 = useTranslations("PTServiceServicesChoose6");
    const t14 = useTranslations("PTServicesSliderChoose6");
    const t15 = useTranslations("PTServiceServicesChoose7");
    const t16 = useTranslations("PTServicesSliderChoose7");
    const t17 = useTranslations("PTServiceServicesChoose8");
    const t18 = useTranslations("PTServicesSliderChoose8");
    const t19 = useTranslations("PTServiceServicesChoose9");
    const t20 = useTranslations("PTServicesSliderChoose9");
    const TalkUsNowSection10 = useTranslations("TalkUsNowSection10");

    const PTServiceServicesChooseData1 = [
        {
            icon: "",
            title: t3("card1Title"),
            dec: t3("card1Desc")
        },
        {
            icon: "",
            title: t3("card2Title"),
            dec: t3("card2Desc")
        },
        {
            icon: "",
            title: t3("card3Title"),
            dec: t3("card3Desc")
        },
    ];
    const PTServiceServicesChooseData2 = [
        {
            icon: "",
            title: t5("card1Title"),
            dec: t5("card1Desc")
        },
        {
            icon: "",
            title: t5("card2Title"),
            dec: t5("card2Desc")
        },
        {
            icon: "",
            title: t5("card3Title"),
            dec: t5("card3Desc")
        },
    ];
    const PTServiceServicesChooseData3 = [
        {
            icon: "",
            title: t7("card1Title"),
            dec: t7("card1Desc")
        },
        {
            icon: "",
            title: t7("card2Title"),
            dec: t7("card2Desc")
        },
        {
            icon: "",
            title: t7("card3Title"),
            dec: t7("card3Desc")
        },
    ];
    const PTServiceServicesChooseData4 = [
        {
            icon: "",
            title: t9("card1Title"),
            dec: t9("card1Desc")
        },
        {
            icon: "",
            title: t9("card2Title"),
            dec: t9("card2Desc")
        },
        {
            icon: "",
            title: t9("card3Title"),
            dec: t9("card3Desc")
        },
    ];
    const PTServiceServicesChooseData5 = [
        {
            icon: "",
            title: t11("card1Title"),
            dec: t11("card1Desc")
        },
        {
            icon: "",
            title: t11("card2Title"),
            dec: t11("card2Desc")
        },
        {
            icon: "",
            title: t11("card3Title"),
            dec: t11("card3Desc")
        },
    ];
    const PTServiceServicesChooseData6 = [
        {
            icon: "",
            title: t13("card1Title"),
            dec: t13("card1Desc")
        },
        {
            icon: "",
            title: t13("card2Title"),
            dec: t13("card2Desc")
        },
        {
            icon: "",
            title: t13("card3Title"),
            dec: t13("card3Desc")
        },
    ];
    const PTServiceServicesChooseData7 = [
        {
            icon: "",
            title: t15("card1Title"),
            dec: t15("card1Desc")
        },
        {
            icon: "",
            title: t15("card2Title"),
            dec: t15("card2Desc")
        },
        {
            icon: "",
            title: t15("card3Title"),
            dec: t15("card3Desc")
        },
    ];
    const PTServiceServicesChooseData8 = [
        {
            icon: "",
            title: t17("card1Title"),
            dec: t17("card1Desc")
        },
        {
            icon: "",
            title: t17("card2Title"),
            dec: t17("card2Desc")
        },
        {
            icon: "",
            title: t17("card3Title"),
            dec: t17("card3Desc")
        },
    ];
    const PTServiceServicesChooseData9 = [
        {
            icon: "",
            title: t19("card1Title"),
            dec: t19("card1Desc")
        },
        {
            icon: "",
            title: t19("card2Title"),
            dec: t19("card2Desc")
        },
        {
            icon: "",
            title: t19("card3Title"),
            dec: t19("card3Desc")
        },
    ];

    const PTServicesSliderData1 = [
        {
            image: PTServicesSliderChoose1Image1,
            heading: t4("card1Title"),
            dec: t4("card1Desc")
        },
        {
            image: PTServicesSliderChoose1Image1,
            heading: t4("card2Title"),
            dec: t4("card2Desc")
        },
        {
            image: PTServicesSliderChoose1Image1,
            heading: t4("card3Title"),
            dec: t4("card3Desc")
        },
    ];
    const PTServicesSliderData2 = [
        {
            image: PTServicesSliderChoose1Image2,
            heading: t6("card1Title"),
            dec: t6("card1Desc")
        },
        {
            image: PTServicesSliderChoose1Image2,
            heading: t6("card2Title"),
            dec: t6("card2Desc")
        },
        {
            image: PTServicesSliderChoose1Image2,
            heading: t6("card3Title"),
            dec: t6("card3Desc")
        },
    ];
    const PTServicesSliderData3 = [
        {
            image: PTServicesSliderChoose1Image3,
            heading: t8("card1Title"),
            dec: t8("card1Desc")
        },
        {
            image: PTServicesSliderChoose1Image3,
            heading: t8("card2Title"),
            dec: t8("card2Desc")
        },
        {
            image: PTServicesSliderChoose1Image3,
            heading: t8("card3Title"),
            dec: t8("card3Desc")
        },
    ];
    const PTServicesSliderData4 = [
        {
            image: PTServicesSliderChoose1Image4,
            heading: t10("card1Title"),
            dec: t10("card1Desc")
        },
        {
            image: PTServicesSliderChoose1Image4,
            heading: t10("card2Title"),
            dec: t10("card2Desc")
        },
        {
            image: PTServicesSliderChoose1Image4,
            heading: t10("card3Title"),
            dec: t10("card3Desc")
        },
    ];
    const PTServicesSliderData5 = [
        {
            image: PTServicesSliderChoose1Image5,
            heading: t12("card1Title"),
            dec: t12("card1Desc")
        },
        {
            image: PTServicesSliderChoose1Image5,
            heading: t12("card2Title"),
            dec: t12("card2Desc")
        },
        {
            image: PTServicesSliderChoose1Image5,
            heading: t12("card3Title"),
            dec: t12("card3Desc")
        },
    ];
    const PTServicesSliderData6 = [
        {
            image: PTServicesSliderChoose1Image6,
            heading: t14("card1Title"),
            dec: t14("card1Desc")
        },
        {
            image: PTServicesSliderChoose1Image6,
            heading: t14("card2Title"),
            dec: t14("card2Desc")
        },
        {
            image: PTServicesSliderChoose1Image6,
            heading: t14("card3Title"),
            dec: t14("card3Desc")
        },
    ];
    const PTServicesSliderData7 = [
        {
            image: PTServicesSliderChoose1Image7,
            heading: t16("card1Title"),
            dec: t16("card1Desc")
        },
        {
            image: PTServicesSliderChoose1Image7,
            heading: t16("card2Title"),
            dec: t16("card2Desc")
        },
        {
            image: PTServicesSliderChoose1Image7,
            heading: t16("card3Title"),
            dec: t16("card3Desc")
        },
    ];
    const PTServicesSliderData8 = [
        {
            image: PTServicesSliderChoose1Image8,
            heading: t18("card1Title"),
            dec: t18("card1Desc")
        },
        {
            image: PTServicesSliderChoose1Image8,
            heading: t18("card2Title"),
            dec: t18("card2Desc")
        },
        {
            image: PTServicesSliderChoose1Image8,
            heading: t18("card3Title"),
            dec: t18("card3Desc")
        },
    ];
    const PTServicesSliderData9 = [
        {
            image: PTServicesSliderChoose1Image9,
            heading: t20("card1Title"),
            dec: t20("card1Desc")
        },
        {
            image: PTServicesSliderChoose1Image9,
            heading: t20("card2Title"),
            dec: t20("card2Desc")
        },
        {
            image: PTServicesSliderChoose1Image9,
            heading: t20("card3Title"),
            dec: t20("card3Desc")
        },
    ];

    return (
        <>
            <Head>
                <title>{Meta("PTTitle")}</title>
                <meta name="description" content={Meta("PTDesc")} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />

                <meta property="og:title" content={Meta("PTTitle")} />
                <meta property="og:site_name" content="Fast Digital Technology" />
                <meta property="og:url" content="https://fastdigitaltechnology.com" />
                <meta property="og:description" content={Meta("PTDesc")} />
                <meta property="og:type" content="website"></meta>
            </Head>

      <GeoLocationComp />

            <Banner
                title={t1("title")} 
                dec={t1("dec")}
                titleWidth={"100%"}
                bannerImage={InternalBanner}
            />
            <ExpertStrategies
                title={t2('title1')}
                desc={t2('desc1')}
                img1={PTServiceExpertStrategiesImg1.src}
                img2={PTServiceExpertStrategiesImg2.src}
                link={"/"}
                mode={""}
            />
            <ServicesChoose
                title={t3('title')}
                subtitle={''}
                dec={''}
                data={PTServiceServicesChooseData1}
                mode={''}
                brandLogo={""}
            />
            <ServicesSlider
                data={PTServicesSliderData1}
                title={t4("title")}
                subtitle={t4("subtitle")}
                mode={''}
                textAlign={"center"}
            />
            <ExpertStrategies
                title={t2('title2')}
                desc={t2('desc2')}
                img1={PTServiceExpertStrategiesImg3.src}
                img2={PTServiceExpertStrategiesImg4.src}
                link={"/"}
                mode={"dark"}
            />
            <ServicesChoose
                title={t5('title')}
                subtitle={''}
                dec={''}
                data={PTServiceServicesChooseData2}
                mode={'dark'}
                brandLogo={""}
            />
            <ServicesSlider
                data={PTServicesSliderData2}
                title={t6("title")}
                subtitle={t6("subtitle")}
                mode={'dark'}
                textAlign={"center"}
            />
            <TalkUsNowSection
                title={TalkUsNowSection10("title")}
                desc={TalkUsNowSection10("desc")}
                link={"/contact-us"}
                linkText={TalkUsNowSection10("linkText")}
                background={""}
            />
            <ExpertStrategies
                title={t2('title3')}
                desc={t2('desc3')}
                img1={PTServiceExpertStrategiesImg5.src}
                img2={PTServiceExpertStrategiesImg6.src}
                link={"/"}
                mode={""}
            />
            <ServicesChoose
                title={t7('title')}
                subtitle={''}
                dec={''}
                data={PTServiceServicesChooseData3}
                mode={''}
                brandLogo={""}
            />
            <ServicesSlider
                data={PTServicesSliderData3}
                title={t8("title")}
                subtitle={t8("subtitle")}
                mode={''}
                textAlign={"center"}
            />
            <ExpertStrategies
                title={t2('title4')}
                desc={t2('desc4')}
                img1={PTServiceExpertStrategiesImg7.src}
                img2={PTServiceExpertStrategiesImg8.src}
                link={"/"}
                mode={"dark"}
            />
            <ServicesChoose
                title={t9('title')}
                subtitle={''}
                dec={''}
                data={PTServiceServicesChooseData4}
                mode={'dark'}
                brandLogo={""}
            />
            <ServicesSlider
                data={PTServicesSliderData4}
                title={t10("title")}
                subtitle={t10("subtitle")}
                mode={'dark'}
                textAlign={"center"}
            />
            <ExpertStrategies
                title={t2('title5')}
                desc={t2('desc5')}
                img1={PTServiceExpertStrategiesImg9.src}
                img2={PTServiceExpertStrategiesImg10.src}
                link={"/"}
                mode={""}
            />
            <ServicesChoose
                title={t11('title')}
                subtitle={''}
                dec={''}
                data={PTServiceServicesChooseData5}
                mode={''}
                brandLogo={""}
            />
            <ServicesSlider
                data={PTServicesSliderData5}
                title={t12("title")}
                subtitle={t12("subtitle")}
                mode={''}
                textAlign={"center"}
            />
            <ExpertStrategies
                title={t2('title6')}
                desc={t2('desc6')}
                img1={PTServiceExpertStrategiesImg11.src}
                img2={PTServiceExpertStrategiesImg12.src}
                link={"/"}
                mode={"dark"}
            />
            <ServicesChoose
                title={t13('title')}
                subtitle={''}
                dec={''}
                data={PTServiceServicesChooseData6}
                mode={'dark'}
                brandLogo={""}
            />
            <ServicesSlider
                data={PTServicesSliderData6}
                title={t14("title")}
                subtitle={t14("subtitle")}
                mode={'dark'}
                textAlign={"center"}
            />
            <ExpertStrategies
                title={t2('title7')}
                desc={t2('desc7')}
                img1={PTServiceExpertStrategiesImg13.src}
                img2={PTServiceExpertStrategiesImg14.src}
                link={"/"}
                mode={""}
            />
            <ServicesChoose
                title={t15('title')}
                subtitle={''}
                dec={''}
                data={PTServiceServicesChooseData7}
                mode={''}
                brandLogo={""}
            />
            <ServicesSlider
                data={PTServicesSliderData7}
                title={t16("title")}
                subtitle={t16("subtitle")}
                mode={''}
                textAlign={"center"}
            />
            <ExpertStrategies
                title={t2('title8')}
                desc={t2('desc8')}
                img1={PTServiceExpertStrategiesImg15.src}
                img2={PTServiceExpertStrategiesImg16.src}
                link={"/"}
                mode={"dark"}
            />
            <ServicesChoose
                title={t17('title')}
                subtitle={''}
                dec={''}
                data={PTServiceServicesChooseData8}
                mode={'dark'}
                brandLogo={""}
            />
            <ServicesSlider
                data={PTServicesSliderData8}
                title={t18("title")}
                subtitle={t18("subtitle")}
                mode={'dark'}
                textAlign={"center"}
            />
            <ExpertStrategies
                title={t2('title9')}
                desc={t2('desc9')}
                img1={PTServiceExpertStrategiesImg17.src}
                img2={PTServiceExpertStrategiesImg18.src}
                link={"/"}
                mode={""}
            />
            <ServicesChoose
                title={t19('title')}
                subtitle={''}
                dec={''}
                data={PTServiceServicesChooseData9}
                mode={''}
                brandLogo={""}
            />
            <ServicesSlider
                data={PTServicesSliderData9}
                title={t20("title")}
                subtitle={t20("subtitle")}
                mode={''}
                textAlign={"center"}
            />
            <PartnersInner />
            <ContactForm />
        </>
    )
}

export default index