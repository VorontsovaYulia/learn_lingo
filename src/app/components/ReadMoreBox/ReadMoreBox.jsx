'use client'

import Avatar from '@mui/material/Avatar';
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { teal } from '@mui/material/colors';
import { LevelButton } from '../LevelButton/LevelButton';
import { Modal } from '../Modal/Modal';
import { BookForm } from '../BookForm/BookForm';
import styles from './ReadMoreBox.module.css';


export const ReadMoreBox = ({ text, reviews, levels, avatar, name, surname }) => {
    const [show, setShow] = useState(false);
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [shouldShowNotify, setShouldShowNotify] = useState(false);

    const toggleBookModal = () => {
        setIsBookModalOpen(!isBookModalOpen)
    };

    const onShow = () => {
        setShow(true);
    };

    const handleBookingSuccess = () => {
        setIsBookModalOpen(false);
        document.body.classList.remove("modal-open");

        setTimeout(() => {
            setShouldShowNotify(true);
        }, 500);
    };
    
    useEffect(() => {
        if (shouldShowNotify) {
            toast.success("Your booking has been successfully made!");
            setShouldShowNotify(false);
        }
    }, [shouldShowNotify]);

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

                    <button className={styles['btn-book']} onClick={toggleBookModal}>Book trial lesson</button>
                </div>
            </div>)
                
                :

                <>
                    <button onClick={onShow} className={styles.btn} type="button">Read more</button>
                    <LevelButton levels={levels} />
                </>}
            
            {isBookModalOpen &&
                <Modal isOpen={isBookModalOpen} toggleBookModal={toggleBookModal} stayOnPage={true}>
                    <BookForm
                        avatar={avatar}
                        name={name}
                        surname={surname}
                        onSuccess={handleBookingSuccess}
                    />
                </Modal>}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};