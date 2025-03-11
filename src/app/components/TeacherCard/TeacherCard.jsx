import Image from "next/image";
import { FavoritesButton } from '../FavoritesButton/FavoritesButton'
import { ReadMoreBox } from "../ReadMoreBox/ReadMoreBox";
import styles from './TeacherCard.module.css'

export const TeacherCard = ({ teacher }) => {

    return (
        <>
            <div className={styles['avatar-box']}>
                <Image className={styles.avatar} src={teacher.avatar_url} alt="avatar" width={96} height={96} />
                <Image className={styles.online} src='/online.svg' alt="online" width={12} height={12} />
            </div>

            <div className={styles.container}>

                <div className={styles.topbox}>
                    <p className={styles.text}>Languages</p>
                    <div className={styles.box}>
                        <Image src="/book-open.svg" alt="book-open" width={16} height={16} />
                        <p className={styles.line}>Lessons online</p>
                    </div>
            
                    <p className={styles.line}>Lessons done: {teacher.lessons_done}</p>
               
                    <div className={styles.box}>
                        <Image src="/star.svg" alt="star" width={16} height={16} />
                        <p className={styles.line}>Rating: {teacher.rating}</p>
                    </div>
                    <p>Price / 1 hour: <span>{teacher.price_per_hour}$</span></p>

                    <FavoritesButton teacherId={teacher.id} />

                </div>
                <div className={styles.bottombox}>
                    <h3>{`${teacher.name} ${teacher.surname}`}</h3>
                </div>

                <div className={styles.info}>
                        
                    <p>
                        <span className={styles.span}>Speaks: </span>
                        <span className={styles.lang}>
                            {teacher.languages.slice(0, -1).join(', ')}
                            {teacher.languages.length > 1 ? ', ' : ''}
                            {teacher.languages[teacher.languages.length - 1]}
                        </span>
                    </p>

                    <p><span className={styles.span}>Lesson Info: </span>{teacher.lesson_info}</p>
                    <p> <span className={styles.span}>Conditions: </span>{teacher.conditions.join(' ')}
                    </p>

                </div>
              
                <ReadMoreBox
                    text={teacher.experience}
                    reviews={teacher.reviews}
                    levels={teacher.levels}
                    avatar={teacher.avatar_url}
                    name={teacher.name}
                    surname={teacher.surname}
                />

            </div>
        </>
    );
};