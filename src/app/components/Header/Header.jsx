import Image from "next/image"
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image src="/logo.png" alt="logo" width={28} height={28} />
                <p>LearnLingo</p>
            </div>
        </header>
    )
}