import Image from "next/image";
import styles from './teachers.module.css'
import useStore from "../../app/store/store";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

async function getData() {

  const res = await fetch(`${API_URL}/api`);
    
   if (!res.ok) {
      throw new Error(res.status);
   };

  return res.json();
};

export default async function Teachers() {
   
   const allteachers = await getData();
   const setTeachers = useStore.getState().setTeachers;


   setTeachers(allteachers);

   return (
      <div className={styles.layout}>
         {allteachers.map((el, i) => {
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