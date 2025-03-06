'use client'

import Avatar from '@mui/material/Avatar';
import Image from "next/image";
import { useState } from "react";
import { teal } from '@mui/material/colors';
import styles from './ReadMoreButton.module.css'
import { LevelButton } from '../LevelButton/LevelButton';
import { Modal } from '../Modal/Modal';
import { BookForm } from '../BookForm/BookForm';

export const ReadMoreBox = ({ text, reviews, levels, avatar, name, surname }) => {
    const [show, setShow] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const onShow = () => {
        setShow(true);
    };

    const toggleBookModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className={styles.container}>

            {show ? (<div>
                <p className={styles.text}>{text}</p>

                <div className={styles.box}>
                    {reviews.map(({ reviewer_name, reviewer_rating, comment }, i) => {
                        return (
                            <div key={i}>
                                <div className={styles.reviews}>
                                    <Avatar
                                        sx={{ bgcolor: teal[700], width: 44, height: 44 }}
                                        alt={reviewer_name}
                                        src={reviewer_name}
                                    />
                                    <div>
                                        <p className={styles.name}>{reviewer_name}</p>
                                        <div className={styles.star}>
                                            <Image src="/star.svg" alt="star" width={16} height={16} />
                                            <p>{reviewer_rating}.0</p>
                                        </div>
                                    </div>
                                </div>
                                <div><p>{comment}</p></div>
                                
                            </div>
                        )
                    })}

                    <LevelButton levels={levels} />

                    <button onClick={toggleBookModal} className={styles['btn-book']} type='button'>Book trial lesson</button>
                </div>
            </div>)
                
                :

                <>
                    <button onClick={onShow} className={styles.btn} type="button">Read more</button>
                    <LevelButton levels={levels} />
                </>}
            
            {isModalOpen &&
                <Modal>
                    <BookForm
                        avatar={avatar}
                        name={name}
                        surname={surname} />
                </Modal>}
              
        </div>
    );
 }