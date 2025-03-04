'use client'

import Avatar from '@mui/material/Avatar';
import Image from "next/image";
import { useState } from "react";
import { teal } from '@mui/material/colors';
import styles from './ReadMoreButton.module.css'

export const ReadMoreButton = ({ text, reviews }) => {
    const [show, setShow] = useState(false);

    const onShow = () => {
        setShow(true);
    }

    return (
        <div className={styles.container}>
     {show ? (<div>
                <p className={styles.text}>{text}</p>

                <div className={styles.box}>
                    {reviews.map((el, i) => {
                        return (
                            <div key={i}>
                                <div className={styles.reviews}>
                                    <Avatar
                                        sx={{ bgcolor: teal[700], width: 44, height: 44 }}
                                        alt={el.reviewer_name}
                                        src={el.reviewer_name}
                                    />
                                    <div>
                                        <p className={styles.name}>{el.reviewer_name}</p>
                                        <div className={styles.star}>
                                            <Image src="/star.svg" alt="star" width={16} height={16} />
                                            <p>{el.reviewer_rating}.0</p>
                                        </div>
                                    </div>
                                </div>
                                <div><p>{el.comment}</p></div>
                            </div>)
                    })}
                </div>
            </div>) : <button onClick={onShow} className={styles.btn} type="button">Read more</button>}
            

            
            
        </div>
    );
 }