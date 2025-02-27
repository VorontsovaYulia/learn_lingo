import Image from "next/image"
import styles from './Header.module.css'
import { NavLink } from "./NavLink";

export const Header = () => {
    return (
        <header className={styles.header}>

            <div className={styles['logo-box']}>
                <Image src="/logo.png" alt="logo" width={28} height={28} />
                <p>LearnLingo</p>
            </div>

            <nav>
                <ul className={styles['link-box']}>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/teachers">Teachers</NavLink>
                    <NavLink href="/favorites">Favorites</NavLink>
                </ul>
            </nav>

            <div className={styles['login-box']}>
                <button className={styles['login-button']}>
                    <Image src="/log-in.svg"
                        alt="logIn"
                        width={20}
                        height={20}
                        priority />
                    <span>Log in</span>
                </button>
                <button className={styles['registr-button']}>Registration</button>
            </div>

        </header>
    );
}