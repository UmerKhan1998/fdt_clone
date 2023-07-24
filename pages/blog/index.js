import Head from "next/head";
import React, { useState } from "react";
import Banner from "@/components/banner/Banner";

// React Intl
import { useTranslations } from "next-intl";

// Image
import InternalBanner from "@/assets/images/InternalBanner.png";
import news1 from "../../assets/images/news1.svg";

import BlogsGridContainer from "@/components/BlogsGridContainer/BlogsGridContainer";

const index = () => {
  const Meta = useTranslations("Meta");
  const t = useTranslations("BlogSection");

  const NewsList = [
    {
      image: news1,
      title: t("card1Title"),
      tag: t("Technology"),
      date: "August 20, 2022",
      link: "blog/detail",
    },
    {
      image: news1,
      title: t("card2Title"),
      tag: t("Technology"),
      date: "August 20, 2022",
      link: "blog/detail",
    },
    {
      image: news1,
      title: t("card3Title"),
      tag: t("Technology"),
      date: "August 20, 2022",
      link: "blog/detail",
    },
    {
      image: news1,
      title: t("card4Title"),
      tag: t("Technology"),
      date: "August 20, 2022",
      link: "blog/detail",
    },
  ];

  const [pagination, setPagination] = useState(1);

  const CybersecurityArr = [
    t("Network Security"),
    t("Application Security"),
    t("Cloud Security"),
    t("Identity and Access Management"),
    t("Data Security"),
  ];

  const topSearchedBlogs = [
    {
      title: t("10 Essential Cybersecurity Measures Every Business Needs"),
      type: t("Cybersecurity"),
      date: new Date(),
    },
    {
      title: t("The Future of Cybersecurity: Trends to Watch in 2023"),
      type: t("Cybersecurity"),
      date: new Date(),
    },
    {
      title: t("What is a Cyber Attack and How to Prevent it?"),
      type: t("Cybersecurity"),
      date: new Date(),
    },
    {
      title: t("The Impact of the Pandemic on Cybersecurity"),
      type: t("Cybersecurity"),
      date: new Date(),
    },
    {
      title: t("Understanding the Dark Web: Risks and Dangers"),
      type: t("Cybersecurity"),
      date: new Date(),
    },
    {
      title: t("How to Protect Your Personal Information from Cybercriminal?"),
      type: t("Cybersecurity"),
      date: new Date(),
    },
  ];

  return (
    <>
      <Head>
        <title>{Meta("BlogTitle")}</title>
        <meta name="description" content={Meta("BlogDesc")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:title" content={Meta("BlogTitle")} />
        <meta property="og:site_name" content="Fast Digital Technology" />
        <meta property="og:url" content="https://fastdigitaltechnology.com" />
        <meta property="og:description" content={Meta("BlogDesc")} />
        <meta property="og:type" content="website"></meta>
      </Head>
      <Banner title={t("Blogs")} dec={t("description")} bannerImage={InternalBanner} />

      <BlogsGridContainer
        NewsList={NewsList}
        CybersecurityArr={CybersecurityArr}
        topSearchedBlogs={topSearchedBlogs}
        counter={pagination}
        setCounter={setPagination}
      />
    </>
  );
};

export default index;
