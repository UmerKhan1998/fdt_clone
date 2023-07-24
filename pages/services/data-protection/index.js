import Head from 'next/head';
import React, { useLayoutEffect, useRef } from 'react'

// Images
import InternalBanner from "@/assets/images/DataProtectionBanner.png";
import partners1 from "../../../assets/images/partners1.png";
import partners2 from "../../../assets/images/partners2.png";
import partners3 from "../../../assets/images/partners3.png";
import partners4 from "../../../assets/images/partners4.png";
import partners5 from "../../../assets/images/partners5.png";
import partners6 from "../../../assets/images/partners6.png";
import partners7 from "../../../assets/images/partners7.png";
import DataProtectionBrandsImg1 from "../../../assets/images/DataProtectionBrandsImg1.png";
import DataProtectionBrandsImg2 from "../../../assets/images/DataProtectionBrandsImg2.png";
import DataProtectionBrandsImg3 from "../../../assets/images/DataProtectionBrandsImg3.png";
import DataProtectionBrandsImg4 from "../../../assets/images/DataProtectionBrandsImg4.png";
import DataProtectionServicesImageBanner from "../../../assets/images/DataProtectionServicesImageBanner.png";
import DataProtectionServicesChooseIcon1 from "../../../assets/images/DataProtectionServicesChooseIcon1.svg";
import DataProtectionServicesChooseIcon2 from "../../../assets/images/DataProtectionServicesChooseIcon2.svg";
import DataProtectionServicesChooseIcon3 from "../../../assets/images/DataProtectionServicesChooseIcon3.svg";
import DataProtectionServicesPenetrationTestingImage1 from "../../../assets/images/DataProtectionServicesPenetrationTestingImage1.png";
import DataProtectionServicesPenetrationTestingIcon1 from "../../../assets/images/DataProtectionServicesPenetrationTestingIcon1.svg";
import DataProtectionServicesPenetrationTestingIcon2 from "../../../assets/images/DataProtectionServicesPenetrationTestingIcon2.svg";
import DataProtectionServicesPenetrationTestingIcon3 from "../../../assets/images/DataProtectionServicesPenetrationTestingIcon3.svg";

// React Intl
import { useTranslations } from "next-intl";

// Components
import Banner from '@/components/banner/Banner';
import WhyChooseUs from '@/components/WhyChooseUs';
import BorderedBrands from '@/components/BorderedBrands';
import PenetrationTesting from '@/components/PenetrationTesting';
import ServicesChoose from '@/components/ServicesChoose/ServicesChoose';
import TalkUsNowSection from '@/components/shared/TalkUsNowSection';
import ImageBanner from '@/components/ImageBanner/ImageBanner';
import Partners from '@/components/Partners';
import ContactForm from '@/components/ContactIsForm/ContactForm';

const index = () => {
    const Meta = useTranslations("Meta");
    const t = useTranslations("DataProtectionBanner");
    const t1 = useTranslations("DataProtectionWhyChooseUs1");
    const t2 = useTranslations("DataProtectionServicesPenetrationTesting1");
    const t3 = useTranslations("DataProtectionServicesChoose1");
    const t4 = useTranslations("DataProtectionServicesPenetrationTesting2");
    const t5 = useTranslations("DataProtectionServicesImageBanner");
    const t6 = useTranslations("DataProtectionWhyChooseUs2");
    const t7 = useTranslations("DataProtectionServicePartners");
    const TalkUsNowSection5 = useTranslations("TalkUsNowSection5");

    const DataProtectionWhyChooseUsData1 = [
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
    ];
    const DataProtectionWhyChooseUsData2 = [
        {
          icon: "",
          link: "",
          title: t6("card1Title"),
          dec: t6("card1Desc"),
        },
        {
          icon: "",
          link: "",
          title: t6("card2Title"),
          dec: t6("card2Desc"),
        },
        {
          icon: "",
          link: "",
          title: t6("card3Title"),
          dec: t6("card3Desc"),
        },
        {
          icon: "",
          link: "",
          title: t6("card4Title"),
          dec: t6("card4Desc"),
        },
    ];
    const DataProtectionBorderedBrands = [
        {
            image: DataProtectionBrandsImg1,
            link: '/services/data-protection/edr-solution'
        },
        {
            image: DataProtectionBrandsImg2,
            link: '/services/data-protection/dlp'
        },
        {
            image: DataProtectionBrandsImg3,
            link: '/services/data-protection/siem-solution'
        },
        {
            image: DataProtectionBrandsImg4,
            link: '/services/data-protection/epp'
        },
    ];
    const DataProtectionServicesPenetrationTesting1Cards1 = [
        {
          icon: DataProtectionServicesPenetrationTestingIcon1,
          link: "",
          title: t2("card1Title"),
          desc: t2("card1Desc"),
        },
        {
          icon: DataProtectionServicesPenetrationTestingIcon2,
          link: "",
          title: t2("card2Title"),
          desc: t2("card2Desc"),
        },
        {
          icon: DataProtectionServicesPenetrationTestingIcon3,
          link: "",
          title: t2("card3Title"),
          desc: t2("card3Desc"),
        },
    ];
    const DataProtectionServicesPenetrationTesting1Cards2 = [
        {
          icon: '',
          link: "",
          title: t4("card1Title"),
          desc: t4("card1Desc"),
        },
        {
          icon: '',
          link: "",
          title: t4("card2Title"),
          desc: t4("card2Desc"),
        },
        {
          icon: '',
          link: "",
          title: t4("card3Title"),
          desc: t4("card3Desc"),
        },
    ];
    const DataProtectionServicesChoose1Data = [
        {
          icon: DataProtectionServicesChooseIcon1,
          link: "",
          title: t3("card1Title"),
          dec: t3("card1Desc"),
        },
        {
          icon: DataProtectionServicesChooseIcon2,
          link: "",
          title: t3("card2Title"),
          dec: t3("card2Desc"),
        },
        {
          icon: DataProtectionServicesChooseIcon3,
          link: "",
          title: t3("card3Title"),
          dec: t3("card3Desc"),
        },
        // {
        //   icon: DataProtectionServicesChooseIcon4,
        //   link: "",
        //   title: t3("card4Title"),
        //   dec: t3("card4Desc"),
        // },
    ];
    const PartnersList = [
      {
        image: partners1
      },
      {
        image: partners2
      },
      {
        image: partners3
      },
      {
        image: partners4
      },
      {
        image: partners5
      },
      {
        image: partners6
      },
      {
        image: partners7
      },
      {
        image: partners1
      },
      {
        image: partners2
      },
      {
        image: partners3
      },
      {
        image: partners4
      },
      {
        image: partners5
      },
      {
        image: partners6
      },
      {
        image: partners7
      },
      {
        image: partners1
      },
      {
        image: partners2
      },
      {
        image: partners3
      },
      {
        image: partners4
      },
      {
        image: partners5
      },
      {
        image: partners6
      },
      {
        image: partners7
      },
      {
        image: partners1
      },
      {
        image: partners2
      },
      {
        image: partners3
      },
      {
        image: partners4
      },
      {
        image: partners5
      },
      {
        image: partners6
      },
      {
        image: partners7
      },
    ];
    
    const refSection = useRef();
    useLayoutEffect(()=>{
      if(window.location.hash === "#dp-services") {
        refSection.current.scrollIntoView({behavior: 'smooth'});
      }
    }, [])

    return (
        <>
            <Head>
              <title>{Meta("DPTitle")}</title>
              <meta name="description" content={Meta("DPDesc")} />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.png" />

              <meta property="og:title" content={Meta("DPTitle")} />
              <meta property="og:site_name" content="Fast Digital Technology" />
              <meta property="og:url" content="https://fastdigitaltechnology.com" />
              <meta property="og:description" content={Meta("DPDesc")} />
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
              data={DataProtectionWhyChooseUsData1}
              mode=""
              brandLogo={""}
            />
            <BorderedBrands data={DataProtectionBorderedBrands} />
            <PenetrationTesting
              title={t2('title')}
              subtitle={""}
              image={DataProtectionServicesPenetrationTestingImage1}
              desc1={t2('desc')}
              desc2={""}
              data={DataProtectionServicesPenetrationTesting1Cards1}
              mode="dark"
              refSection={refSection}
            />
            <ServicesChoose
              title={t3("title")}
              subtitle={t3("subtitle")}
              data={DataProtectionServicesChoose1Data}
              mode={""}
              brandLogo={""}
            />
            <TalkUsNowSection
              title={TalkUsNowSection5("title")}
              desc={TalkUsNowSection5("desc")}
              link={"/contact-us"}
              linkText={TalkUsNowSection5("linkText")}
              background={""}
            />
            <PenetrationTesting
              title={t4('title')}
              subtitle={""}
              image={''}
              desc1={t4('desc')}
              desc2={""}
              data={DataProtectionServicesPenetrationTesting1Cards2}
              mode=""
            />
            <ImageBanner
              picture={DataProtectionServicesImageBanner}
              title={t5("title")}
              subtitle={t5("subtitle")}
              dec={t5("dec")}
              brandLogo={""}
              align={'right'}
              mode={"dark"}
            />
            <WhyChooseUs
              title={t6("title")}
              subtitle={t6("subtitle")}
              data={DataProtectionWhyChooseUsData2}
              mode=""
              brandLogo={""}
            />
            {/* <Partners
              title={t7('title')}
              desc={t7('desc')}
              data={PartnersList}
              fullWidth={false}
            /> */}
            <ContactForm Image2 />
        </>
    )
}

export default index