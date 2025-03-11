'use client';

import Link from "next/link";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { cyan } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
import { useUser } from "@/app/store/store";
import styles from './LoginBox.module.css';

export const LoginBox = () => {

    const isloggedIn = useUser(state => state.name);
    const removeUserInfo = useUser(state => state.removeUser);
    
    
    return (
        <div className={styles['login-box']}>

            {isloggedIn ?
                
                (<>
                    <Link onClick={() => { removeUserInfo() }} href="/" className={styles['login-button']}>
                        <LogoutIcon sx={{ fontSize: 20, color: cyan[900] }} />
                        <span>Log out</span>
                    </Link>
                    <div className={styles.avatar}>
                        <Avatar
                            sx={{ bgcolor: teal[700], width: 28, height: 28 }}
                            alt={isloggedIn}
                        />
                        <p>{isloggedIn}</p>
                    </div>
                </>)
                
                :

                (<><Link href="/sign-in" className={styles['login-button']}>
                    <LoginIcon sx={{ fontSize: 20, color: cyan[900] }} />
                    <span>Log in</span>
                </Link>
                    <Link href="/sign-up" className={styles['registr-button']}>
                        Registration
                    </Link></>)}

        </div>
    );
};
