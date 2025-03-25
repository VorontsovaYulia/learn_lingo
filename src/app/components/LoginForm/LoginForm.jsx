'use client';

import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Image from 'next/image';
import { schema } from "../../components/LoginForm/schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { auth, db } from '../../../../firebase';
import { useUser } from '@/app/store/store';
import styles from './LoginForm.module.css'
import { useRouter } from "next/navigation";

export const LoginForm = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const addUserInfoToStore = useUser(state => state.setUser);

    async function readDataFromFB(id) {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log("No such document!");
        };
               
    };

    async function signIn(auth, email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
            const { email: userEmail, uid, accessToken } = userCredential.user;
        
            const userInfoFromDB = await readDataFromFB(uid);

            addUserInfoToStore({
                email: userEmail,
                token: accessToken,
                id: uid,
                favorites: userInfoFromDB.favorites,
                orders: userInfoFromDB.orders,
                name: userInfoFromDB.name
            });
        
        } catch (error) {
            alert('Email or password entered incorrectly ' + String.fromCodePoint(0x1F937));
        }
    }

    const onShow = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    });
    
    const submitForm = (data) => {
        signIn(auth, data.email, data.password);
        reset();
        router.push('/');
        document.body.classList.remove("modal-open"); 
    };
    
    return (
        <div className={styles.container}>
            <h2>Log In</h2>
            <p className={styles.text}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>

            <form onSubmit={handleSubmit(submitForm)}>

                <div className={styles.box}>

                    <input {...register('email')} placeholder="Email" />
                    <p>{errors.email?.message}</p>
                    
                    <div className={styles.password}>
                        <input className={styles.password} type={showPassword ? 'text' : 'password'} {...register('password')} placeholder="Password" />
                        <Image
                            className={styles.img}
                            src={showPassword ? '/eye-off.svg' : '/eye.svg'}
                            alt={showPassword ? 'Open-eye' : 'Close-eye'}
                            width={18}
                            height={18}
                            onClick={onShow}
                        />
                        <p>{errors.password?.message}</p>
                    </div>
                </div>

                <button className={styles.button} type="submit">Log In</button>
                
            </form>

        </div>
    );
};
