import Head from "next/head";
import DigitalAssets from "../components/DigitalAssets";
import WhyChooseUs from "../components/WhyChooseUs";
import OurExperts from "../components/OurExperts";
import Industry from "../components/Industry";
import ExpertsCertified from "../components/ExpertsCertified";
import AboutUsSection from "../components/AboutUsSection";
import News from "../components/News/news";
import Dashboard from "@/components/dashboard/Dashboard";
import { useTranslations } from "next-intl";

// Images
import vapt from "../assets/images/vapt.svg";
import grc from "../assets/images/grc.svg";
import iam from "../assets/images/iam.svg";
import siem from "../assets/images/siem.svg";
import partners1 from "@/assets/images/partners/partner1.png";
import partners2 from "@/assets/images/partners/partner2.png";
import partners3 from "@/assets/images/partners/partner3.png";
import partners4 from "@/assets/images/partners/partner4.png";
import partners5 from "@/assets/images/partners/partner5.png";
import partners6 from "@/assets/images/partners/partner6.png";
import partners7 from "@/assets/images/partners/partner7.png";
import partners8 from "@/assets/images/partners/partner8.png";
import partners9 from "@/assets/images/partners/partner9.png";
import partners10 from "@/assets/images/partners/partner10.png";
import partners11 from "@/assets/images/partners/partner11.png";
import partners12 from "@/assets/images/partners/partner12.png";
import partners13 from "@/assets/images/partners/partner13.png";
import partners14 from "@/assets/images/partners/partner14.png";
import partners15 from "@/assets/images/partners/partner15.png";
import partners16 from "@/assets/images/partners/partner16.png";
import partners17 from "@/assets/images/partners/partner17.png";
import partners19 from "@/assets/images/partners/partner19.png";
import partners20 from "@/assets/images/partners/partner20.png";
import partners21 from "@/assets/images/partners/partner21.png";
import partners22 from "@/assets/images/partners/partner22.png";
import partners23 from "@/assets/images/partners/partner23.png";
import partners25 from "@/assets/images/partners/partner25.png";
import partners27 from "@/assets/images/partners/partner27.png";
import partners28 from "@/assets/images/partners/partner28.png";
import partners29 from "@/assets/images/partners/partner29.png";
import partners30 from "@/assets/images/partners/partner30.png";
import HomeServicesSlider1Image1 from "../assets/images/HomeServicesSlider1Image1.png";
import HomeServicesSlider1Image2 from "../assets/images/HomeServicesSlider1Image2.png";
import HomeServicesSlider1Image3 from "../assets/images/HomeServicesSlider1Image3.png";
import HomeServicesSlider1Image4 from "../assets/images/HomeServicesSlider1Image4.png";
import HomeServicesSlider1Image5 from "../assets/images/HomeServicesSlider1Image5.png";
import HomeWhyChooseUsCard1 from "../assets/images/HomeWhyChooseUsCard1.png";
import HomeWhyChooseUsCard2 from "../assets/images/HomeWhyChooseUsCard2.png";
import HomeWhyChooseUsCard3 from "../assets/images/HomeWhyChooseUsCard3.png";
import HomeWhyChooseUsCard4 from "../assets/images/HomeWhyChooseUsCard4.png";
import TalkUsNowSection from "@/components/shared/TalkUsNowSection";
import ContactForm from "@/components/ContactIsForm/ContactForm";
import ServicesSlider from "@/components/shared/ServicesSlider";
import Faqs from "@/components/Faqs/Faqs";
import PartnersFull from "@/components/PartnersFull";
import GeoLocationComp from "@/components/GeoLocationComp";

export default function Home() {
  const Meta = useTranslations("Meta");
  const t1 = useTranslations("HomeDigitalAssets");
  const t2 = useTranslations("HomeServicesSlider");
  const t4 = useTranslations("IAMServicePartners");
  const HomeWhyChooseUs = useTranslations("HomeWhyChooseUs");
  const TalkUsNowSection1 = useTranslations("TalkUsNowSection1");

  const HomeWhyChooseUsData = [
    {
      icon: "",
      cardImg: HomeWhyChooseUsCard1,
      link: "",
      title: HomeWhyChooseUs("card1Title"),
      dec: HomeWhyChooseUs("card1Desc"),
    },
    {
      icon: "",
      cardImg: HomeWhyChooseUsCard2,
      link: "",
      title: HomeWhyChooseUs("card2Title"),
      dec: HomeWhyChooseUs("card2Desc"),
    },
    {
      icon: "",
      cardImg: HomeWhyChooseUsCard3,
      link: "",
      title: HomeWhyChooseUs("card3Title"),
      dec: HomeWhyChooseUs("card3Desc"),
    },
    {
      icon: "",
      cardImg: HomeWhyChooseUsCard4,
      link: "",
      title: HomeWhyChooseUs("card4Title"),
      dec: HomeWhyChooseUs("card4Desc"),
    },
  ];
  const DigitalAssetsServices = [
    {
      icon: iam,
      name: `IAM ${t1("Deployment_Services")}`,
      link: "/services/identity-and-access-management",
      title: t1("title1"),
      desc: t1("desc1"),
      tags: [
        {
          title: t1("IAM Architecture and Design"),
          link: "/services/identity-and-access-management#iam-services",
        },
        {
          title: t1("IAM Implementation"),
          link: "/services/identity-and-access-management#iam-services",
        },
        {
          title: t1("IAM Training and Support"),
          link: "/services/identity-and-access-management#iam-services",
        },
        {
          title: t1("IAM Auditing and Compliance"),
          link: "/services/identity-and-access-management#iam-services",
        },
        {
          title: t1("IAM Risk Assessment"),
          link: "/services/identity-and-access-management#iam-services",
        },
        {
          title: t1("IAM Policy and Procedure Development"),
          link: "/services/identity-and-access-management#iam-services",
        },
      ],
    },
    {
      icon: grc,
      name: `GRC ${t1("Deployment_Services")}`,
      link: "/services/grc-solutions",
      title: t1("title2"),
      desc: t1("desc2"),
      tags: [
        {
          title: t1("Enhancing Board Governance and Oversight"),
          link: "/services/grc-solutions#grc-services",
        },
        {
          title: t1("Revamping Enterprise Risk Management"),
          link: "/services/grc-solutions#grc-services",
        },
        {
          title: t1("Ensuring Corporate Compliance & Regulatory Adherence"),
          link: "/services/grc-solutions#grc-services",
        },
      ],
    },
    {
      icon: siem,
      name: `VAPT ${t1("Deployment_Services")}`,
      link: "/services/data-protection/siem-solution",
      title: t1("title3"),
      desc: t1("desc3"),
      tags: [
        {
          title: t1("Real-Time Monitoring"),
          link: "/services/data-protection/siem-solution#siem-services",
        },
        {
          title: t1("Log Management"),
          link: "/services/data-protection/siem-solution#siem-services",
        },
        {
          title: t1("Event Correlation"),
          link: "/services/data-protection/siem-solution#siem-services",
        },
        {
          title: t1("Reporting and Analytics"),
          link: "/services/data-protection/siem-solution#siem-services",
        },
      ],
    },
    {
      icon: vapt,
      name: `DP ${t1("Deployment_Services")}`,
      link: "/services/data-protection",
      title: t1("title4"),
      desc: t1("desc4"),
      tags: [
        {
          title: t1("Ensure Cyber Resilience"),
          link: "/services/data-protection#dp-services",
        },
        {
          title: t1("Optimize Cloud-Native Operations"),
          link: "/services/data-protection#dp-services",
        },
        {
          title: t1("Experience Streamlined Efficiency"),
          link: "/services/data-protection#dp-services",
        },
      ],
    },
  ];
  const HomeServicesSliderData = [
    {
      image: HomeServicesSlider1Image1,
      heading: t2("slide1Title"),
      dec: t2("slide1Desc"),
    },
    {
      image: HomeServicesSlider1Image2,
      heading: t2("slide2Title"),
      dec: t2("slide2Desc"),
    },
    {
      image: HomeServicesSlider1Image3,
      heading: t2("slide3Title"),
      dec: t2("slide3Desc"),
    },
    {
      image: HomeServicesSlider1Image4,
      heading: t2("slide4Title"),
      dec: t2("slide4Desc"),
    },
    {
      image: HomeServicesSlider1Image5,
      heading: t2("slide5Title"),
      dec: t2("slide5Desc"),
    },
  ];
  const PartnersList = [
    { image: partners1 },
    { image: partners2 },
    { image: partners3 },
    { image: partners4 },
    { image: partners5 },
    { image: partners6 },
    { image: partners7 },
    { image: partners8 },
    { image: partners9 },
    { image: partners10 },
    { image: partners11 },
    { image: partners12 },
    { image: partners13 },
    { image: partners14 },
    { image: partners15 },
    { image: partners16 },
    { image: partners17 },
    { image: partners19 },
    { image: partners20 },
    { image: partners21 },
    { image: partners22 },
    { image: partners23 },
    { image: partners25 },
    { image: partners27 },
    { image: partners28 },
    { image: partners29 },
    { image: partners30 },
  ];

  return (
    <>
      {/* <GeoLocationComp /> */}
      <Head>
        <title>{Meta("HomeTitle")}</title>
        <meta name="description" content={Meta("HomeDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("HomeTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("HomeDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Dashboard />
      <WhyChooseUs
        title={HomeWhyChooseUs("title")}
        subtitle={HomeWhyChooseUs("subtitle")}
        data={HomeWhyChooseUsData}
        variant="1"
        mode=""
        brandLogo={""}
      />
      <DigitalAssets
        title={t1("heading")}
        data={DigitalAssetsServices}
        Read_More={t1("Read More")}
        center_text={t1("Our Services")}
      />
      <TalkUsNowSection
        title={TalkUsNowSection1("title")}
        desc={TalkUsNowSection1("desc")}
        link={"/contact-us"}
        linkText={TalkUsNowSection1("linkText")}
        background={""}
      />
      <PartnersFull title={t4("title")} desc={""} data={PartnersList} />
      <Industry mode="dark" />
      <ExpertsCertified />
      <ServicesSlider
        data={HomeServicesSliderData}
        title={t2("title")}
        subtitle={""}
        dec={t2("desc")}
        mode={"dark"}
        textAlign={""}
      />
      <OurExperts />
      <Faqs />
      <AboutUsSection />
      <News />
      <ContactForm Image2 />
    </>
  );
}
