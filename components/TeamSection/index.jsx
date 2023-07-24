import React, { useLayoutEffect, useRef } from 'react'
import styles from "../../styles/TeamSection.module.scss";
import Image from 'next/image';
import { useRouter } from 'next/router';

const TeamSection = ({title, desc, cards, id}) => {
    const router = useRouter()
    const refSection = useRef();

    useLayoutEffect(()=>{
        if(refSection.current.id === window.location.hash) {
            refSection.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])

  return (
    <>
        <div className={styles.TeamSection} id={id} ref={refSection}>
            <div className={styles.TeamSection_wrapper}>
                <div className={styles.TeamSection_text}>
                    {title?<h2>{title}</h2>:""}
                    {desc?<p>{desc}</p>:""}
                </div>
                <div className={styles.TeamSection_cards}>
                    {cards?.map((item, index)=>(
                        <div className={styles.TeamSection_card} key={index}>
                            {item?.img?<Image src={item?.img} alt="" />:""}
                            <div className={styles.TeamSection_card_info}>
                                <div>
                                    <h2>{item?.name}</h2>
                                    <h5>{item?.desc}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default TeamSection