'use client';

import { shallow } from 'zustand/shallow';
import Image from "next/image";
import styles from './teachers.module.css'
import { useTeachers } from "../store/store";
import { useEffect } from 'react';

export default function Teachers() {
  
   const fetchAllTeachers = useTeachers(state =>state.getAllTeachers, shallow)
   const allTeachers = useTeachers(state =>state.teachers, shallow)

   useEffect(() => {
      fetchAllTeachers();
   }, []);
   
   console.log(allTeachers)

   return (
      <div className={styles.layout}>
         {allTeachers.map((el, index) => {
            return (
               
               <div key={index} className={styles.wrapper}>
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
                        <Image src="/empty-heart.svg" alt="empty-heart" width={26} height={26} className={styles.img} />
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
                     <button className={styles.btn} type="button">Read more</button>

                     <div className={styles['level-box']}>{el.levels.map((level, i) => {
                        return <button key={i}>{level}</button>
                     })}</div>
                  </div>
                
               </div>
               
            )
         })}
         
      </div>
   );
}