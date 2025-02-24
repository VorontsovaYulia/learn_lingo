import Image from 'next/image';
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
            <button type='button'>Get started</button>
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

{
  /* <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */
}
