import Image from "next/image"
import styles from './Header.module.css'
import { LoginBox } from "./LoginBox";
import { LinkList } from "./LinkList";

export const Header = () => {

    return (
        <header className={styles.header}>

            <div className={styles['logo-box']}>
                <Image src="/logo.png" alt="logo" width={28} height={28} />
                <p>LearnLingo</p>
            </div>

            <LinkList />
            <LoginBox />

        </header>
    );
}