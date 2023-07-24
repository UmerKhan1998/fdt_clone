import React from 'react'
import Image from 'next/image';
import styles from '../../styles/bordered-brands.module.scss';
import Link from 'next/link';

const BorderedBrands = ({data}) => {
  return (
    <div className={styles.bordered_brands}>
        <div className={styles.bordered_brands_wrapper}>
            <div className={styles.bordered_brands_cols}>
                {data?.map((item, index)=>(
                    <div className={styles.bordered_brands_col} key={index}>
                        <Link href={item?.link}>
                            <Image src={item?.image} width={185} height={40} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BorderedBrands