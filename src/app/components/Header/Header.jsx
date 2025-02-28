import Image from "next/image"
import styles from './Header.module.css'
import { NavLink } from "./NavLink";
import { LoginBox } from "./LoginBox";

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

            <LoginBox />

        </header>
    );
}