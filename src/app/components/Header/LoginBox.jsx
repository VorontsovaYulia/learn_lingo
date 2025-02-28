'use client';

import Link from "next/link";
import Image from "next/image"
import styles from './LoginBox.module.css';

export const LoginBox = () => {
    return (
        <div className={styles['login-box']}>
            <Link href="/sign-in" className={styles['login-button']}>
                <Image src="/log-in.svg"
                    alt="logIn"
                    width={20}
                    height={20}
                    priority />
                <span>Log in</span>
            </Link>
            <Link href="/sign-up" className={styles['registr-button']}>
                Registration
            </Link>
        </div>
    );
};
