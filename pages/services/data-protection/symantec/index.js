import Head from 'next/head';
import React from 'react'

// Images
import InternalBanner from "@/assets/images/SYMBanner.png";
import IBMPenetrationTestingImage1 from "../../../../assets/images/IBMPenetrationTestingImage1.png";
import SYMPenetrationTesting1Icon1 from "../../../../assets/images/SYMPenetrationTesting1Icon1.svg";
import SYMPenetrationTesting1Icon2 from "../../../../assets/images/SYMPenetrationTesting1Icon2.svg";
import SYMPenetrationTesting1Icon3 from "../../../../assets/images/SYMPenetrationTesting1Icon3.svg";
import SYMPenetrationTesting1Icon4 from "../../../../assets/images/SYMPenetrationTesting1Icon4.svg";
import SYMWhyChooseUs2Icon1 from "../../../../assets/images/SYMWhyChooseUs2Icon1.svg";
import SYMWhyChooseUs2Icon2 from "../../../../assets/images/SYMWhyChooseUs2Icon2.svg";
import SYMWhyChooseUs2Icon3 from "../../../../assets/images/SYMWhyChooseUs2Icon3.svg";
import SymantecLogo from "../../../../assets/images/SymantecLogo.png";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import WhyChooseUs from '@/components/WhyChooseUs';
import PenetrationTesting from '@/components/PenetrationTesting';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import ContactForm from '@/components/ContactIsForm/ContactForm';

const index = () => {
    const Meta = useTranslations("Meta");
    const t = useTranslations("SYMBanner");
    const t1 = useTranslations("SYMWhyChooseUs1");
    const t2 = useTranslations("SYMPenetrationTesting1");
    const t3 = useTranslations("SYMWhyChooseUs2");
    const t4 = useTranslations("SYMWhyChooseUs3");
    const TalkUsNowSection20 = useTranslations("TalkUsNowSection20");

    const IBMServiceWhyChooseUs1 = [
        {
          icon: '',
          link: '',
          title: t1("card1Title"),
          dec: t1("card1Desc"),
        },
        {
          icon: '',
          link: '',
          title: t1("card2Title"),
          dec: t1("card2Desc"),
        },
        {
          icon: '',
          link: '',
          title: t1("card3Title"),
          dec: t1("card3Desc"),
        },
        {
          icon: '',
          link: '',
          title: t1("card4Title"),
          dec: t1("card4Desc"),
        },
    ];
    const IBMServiceWhyChooseUs2 = [
        {
          icon: SYMWhyChooseUs2Icon1,
          link: '',
          title: t3("card1Title"),
          dec: t3("card1Desc"),
        },
        {
          icon: SYMWhyChooseUs2Icon2,
          link: '',
          title: t3("card2Title"),
          dec: t3("card2Desc"),
        },
        {
          icon: SYMWhyChooseUs2Icon3,
          link: '',
          title: t3("card3Title"),
          dec: t3("card3Desc"),
        },
    ];
    const IBMServiceWhyChooseUs3 = [
        {
          icon: "",
          link: '',
          title: t4("card1Title"),
          dec: t4("card1Desc"),
        },
        {
          icon: "",
          link: '',
          title: t4("card2Title"),
          dec: t4("card2Desc"),
        },
        {
          icon: "",
          link: '',
          title: t4("card3Title"),
          dec: t4("card3Desc"),
        },
        {
          icon: "",
          link: '',
          title: t4("card4Title"),
          dec: t4("card4Desc"),
        },
    ];
    const SIEMPenetrationTesting1 = [
        {
          icon: SYMPenetrationTesting1Icon1,
          link: "",
          title: t2("card1Title"),
          desc: t2("card1Desc"),
        },
        {
          icon: SYMPenetrationTesting1Icon2,
          link: "",
          title: t2("card2Title"),
          desc: t2("card2Desc"),
        },
        {
          icon: SYMPenetrationTesting1Icon3,
          link: "",
          title: t2("card3Title"),
          desc: t2("card3Desc"),
        },
        {
          icon: SYMPenetrationTesting1Icon4,
          link: "",
          title: t2("card4Title"),
          desc: t2("card4Desc"),
        },
    ];

    return (
        <>
            <Head>
              <title>{Meta("SYMTitle")}</title>
              <meta name="description" content={Meta("SYMDesc")} />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.png" />

              <meta property="og:title" content={Meta("SYMTitle")} />
              <meta property="og:site_name" content="Fast Digital Technology" />
              <meta property="og:url" content="https://fastdigitaltechnology.com" />
              <meta property="og:description" content={Meta("SYMDesc")} />
              <meta property="og:type" content="website"></meta>
            </Head>
            <Banner
                title={t("title")}
                subdetail={""}
                dec={t("desc")}
                titleWidth={"100%"}
                bannerImage={InternalBanner}
            />
            <WhyChooseUs
                title={t1("title")}
                subtitle={t1("subtitle")}
                dec={t1("dec")}
                data={IBMServiceWhyChooseUs1}
                mode=""
                brandLogo={SymantecLogo}
            />
            <PenetrationTesting
              title={t2('title')}
              subtitle={t2("subtitle")}
              image={IBMPenetrationTestingImage1}
              desc1={t2('desc')}
              desc2={""}
              data={SIEMPenetrationTesting1}
              mode="dark"
            />
            <TalkUsNowSection
                title={TalkUsNowSection20("title")}
                desc={TalkUsNowSection20("desc")}
                link={"/contact-us"}
                linkText={TalkUsNowSection20("linkText")}
                background={""}
            />
            <WhyChooseUs
                title={t3("title")}
                subtitle={t3("subtitle")}
                dec={""}
                data={IBMServiceWhyChooseUs2}
                mode=""
                brandLogo={""}
            />
            <WhyChooseUs
                title={t4("title")}
                subtitle={t4("subtitle")}
                dec={""}
                data={IBMServiceWhyChooseUs3}
                mode=""
                brandLogo={""}
            />
            <ContactForm Image2 />
        </>
    )
}

export default index