import Image from "next/image";
import styles from './teachers.module.css'

export default function Teachers() {
   return (
      <div className={styles.layout}>
         <div className={styles.wrapper}>
            <div>
               <Image src="/avatar.png" alt="avatar" width={120} height={120} />
            </div>

            <div className={styles.container}>

               <div className={styles.topbox}>
                  <p className={styles.text}>Languages</p>
                  <div className={styles.box}>
                     <Image src="/book-open.svg" alt="book-open" width={16} height={16} />
                     <p className={styles.line}>Lessons online</p>
                  </div>
            
                  <p className={styles.line}>Lessons done: 1098</p>
               
                  <div className={styles.box}>
                     <Image src="/star.svg" alt="star" width={16} height={16} />
                     <p className={styles.line}>Rating: 4.8</p>
                  </div>
                  <p>Price / 1 hour: <span>30$</span></p>
                  <Image src="/empty-heart.svg" alt="empty-heart" width={26} height={26} className={styles.img} />
               </div>
               <div className={styles.bottombox}>
                  <h3>Jane Smith</h3>
               </div>

               <div className={styles.info}>
                  <p><span>Speaks: </span>German, French</p>
                  <p><span>Lesson Info: </span>Lessons are structured to cover grammar, vocabulary, and practical usage of the language.</p>
                  <p><span>Conditions: </span>Welcomes both adult learners and teenagers (13 years and above).Provides personalized study plans</p>
               </div>
               <button className={styles.btn} type="button">Read more</button>
            </div>
         </div>
      </div>
   );
}