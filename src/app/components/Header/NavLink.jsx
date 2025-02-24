import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

export const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <li className={styles.li}>
            <Link href={href} className={isActive ? styles.active : styles.link}>
                {children}
            </Link>
        </li>
    );
}

