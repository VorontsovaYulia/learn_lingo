'use client';

import { NavLink } from "./NavLink";
import { useUser } from "@/app/store/store";
import styles from './Header.module.css'

export const LinkList = () => {

 const isloggedIn = useUser(state=>state.name)

    return (
        <nav>
            <ul className={styles['link-box']}>
                <NavLink href="/">Home</NavLink>
                <NavLink href="/teachers">Teachers</NavLink>
                {isloggedIn && <NavLink href="/favorites">Favorites</NavLink>}
            </ul>
        </nav>
    );
};