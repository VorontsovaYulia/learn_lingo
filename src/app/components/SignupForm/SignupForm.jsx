'use client';

import { useForm } from "react-hook-form";
import { useState } from 'react';
import Image from 'next/image';
import { schema } from "./schema";
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './SignupForm.module.css'

export const SignupForm = () => {

    const [showPassword, setShowPassword] = useState(false);

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
        alert(JSON.stringify(data));
        reset();
    };
    
    return (
        <div className={styles.container}>
            <h2>Registration</h2>
            <p className={styles.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>

            <form onSubmit={handleSubmit(submitForm)}>

                <div className={styles.box}>
                    <input {...register('name')} placeholder="Name" />
                    <p>{errors.name?.message}</p>

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

                <button className={styles.button} type="submit">Sign Up</button>
                
            </form>

        </div>
    );

};
