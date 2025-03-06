"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {useStore} from "../../store/store";
import { FavoritesButton } from "../FavoritesButton/FavoritesButton";
import { ReadMoreBox } from "../ReadMoreButton/ReadMoreButton";
import styles from './TeachersList.module.css';

export const TeachersList = ({teachers}) => {

    const setTeachers = useStore((state) => state.setTeachers);
    const [showTeachers, setShowTeachers] = useState(3)

    const loadMore = () => {
        setShowTeachers(showTeachers + 3);
    }

  useEffect(() => {
    setTeachers(teachers);
  }, [teachers, setTeachers]);

    return (
        <div className={styles.layout}>
            {teachers.slice(0, showTeachers).map((el, i) => {
                return (
               
                    <div key={i} className={styles.wrapper}>
                        <div className={styles['avatar-box']}>
                            <Image className={styles.avatar} src={el.avatar_url} alt="avatar" width={96} height={96} />
                            <Image className={styles.online} src='/online.svg' alt="online" width={12} height={12} />
                        </div>

                        <div className={styles.container}>

                            <div className={styles.topbox}>
                                <p className={styles.text}>Languages</p>
                                <div className={styles.box}>
                                    <Image src="/book-open.svg" alt="book-open" width={16} height={16} />
                                    <p className={styles.line}>Lessons online</p>
                                </div>
            
                                <p className={styles.line}>Lessons done: {el.lessons_done}</p>
               
                                <div className={styles.box}>
                                    <Image src="/star.svg" alt="star" width={16} height={16} />
                                    <p className={styles.line}>Rating: {el.rating}</p>
                                </div>
                                <p>Price / 1 hour: <span>{el.price_per_hour}$</span></p>

                                <FavoritesButton />

                            </div>
                            <div className={styles.bottombox}>
                                <h3>{`${el.name} ${el.surname}`}</h3>
                            </div>

                            <div className={styles.info}>
                        
                                <p>
                                    <span className={styles.span}>Speaks: </span>
                                    <span className={styles.lang}>
                                        {el.languages.slice(0, -1).join(', ')}
                                        {el.languages.length > 1 ? ', ' : ''}
                                        {el.languages[el.languages.length - 1]}
                                    </span>
                                </p>

                                <p><span className={styles.span}>Lesson Info: </span>{el.lesson_info}</p>
                                <p> <span className={styles.span}>Conditions: </span>{el.conditions.join(' ')}
                                </p>

                            </div>
              
                            <ReadMoreBox
                                text={el.experience}
                                reviews={el.reviews}
                                levels={el.levels}
                                avatar={el.avatar_url}
                                name={el.name}
                                surname={el.surname}
                            />

                        </div>
                
                    </div>
               
                )
            })}
            {showTeachers < teachers.length &&
                <button className={styles.btn} onClick={loadMore} type="button">Load more</button>}
         
        </div>
    );
}