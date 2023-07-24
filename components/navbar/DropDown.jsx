import React, { useState } from "react";
// Css
import styles from "../../styles/navbar.module.scss";
import Link from "next/link";

import arrow from "../../assets/images/arrow.svg";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropDown = ({ data, DropDownIndex, setDropDownIndex }) => {
  
  return (
    <>
      <div className={`${styles.DropDown} DropDown`}>
        <div className={`${styles.DropDown_wrapper}`}>
          <div className={styles.DropDown_menu}>
            <ul>
              {data?.map((item, index) => (
                <li key={index} className={index === DropDownIndex ? styles.active : ""} onMouseEnter={()=>{setDropDownIndex(index)}}>
                  <Link href={item?.menuLink}>
                    <span>{item?.menuName}</span>
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        if(DropDownIndex !== '' && DropDownIndex == index){
                          setDropDownIndex('');
                        }else{
                          setDropDownIndex(index);
                        }
                      }}
                    >
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </Link>
                  {item?.subMenu && (
                    <div
                      className={`${styles.DropDown_sub_menu} `}
                    >
                      {item?.subMenu?.map((item, index) => (
                        <Link href={item?.SubMenuLink} key={index}>
                          <span>{item?.SubMenuName}</span>
                          <span>
                            <Image src={arrow} width={10} height={10} alt="" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
