import Image from 'next/image';
import Link from "next/link";
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles['left-box']}>
          <div className={styles['text-box']}>
            <h1>
              Unlock your potential with the best <span>language</span> tutors
            </h1>
            <p>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <Link className={styles.button} href="/teachers">Get started</Link>
          </div>
        </div>
        <div className={styles['right-box']}>
          <Image
            className={styles.girl}
            src="/girl.png"
            alt="girl"
            width={339}
            height={304}
            priority
          />
          <Image
            className={styles.mac}
            src="/Mac.png"
            alt="mac"
            width={360}
            height={170}
            priority
          />
        </div>
      </div>
      <div className={styles['bottom-box']}>
        <div>
          <p className={styles.number}>32,000 +</p>
          <p className={styles.text}>
            Experienced <br />
            tutors
          </p>
        </div>
        <div>
          <p className={styles.number}>300,000 +</p>
          <p className={styles.text}>
            5-star tutor <br />
            reviews
          </p>
        </div>
        <div>
          <p className={styles.number}>120 +</p>
          <p className={styles.text}>
            Subjects
            <br /> taught
          </p>
        </div>
        <div>
          <p className={styles.number}>200 +</p>
          <p className={styles.text}>
            Tutor
            <br />
            nationalities
          </p>
        </div>
      </div>
    </div>
  );
}

