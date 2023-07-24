import React, { useState } from "react";
// Css
import styles from "../../styles/navbar.module.scss";
import Link from "next/link";

import arrow from "../../assets/images/arrow.svg";
import Image from "next/image";

const SimpleDropDown = ({ data }) => {
  return (
    <>
      <div className={`${styles.SimpleDropDown} SimpleDropDown`}>
        {data?.map((item, index) => (
          <Link href={item?.menuLink} key={index}>
            <span>{item?.menuName}</span>
            <span>
              <Image src={arrow} width={10} height={10} alt="" />
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SimpleDropDown;
