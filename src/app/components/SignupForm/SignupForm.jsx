'use client';

import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './SignupForm.module.css'

export const SignupForm = () => {
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

                    <input type="password" {...register('password')} placeholder="Password" />
                    <p>{errors.password?.message}</p>
                </div>

                <button className={styles.button} type="submit">Sign Up</button>
                
            </form>

        </div>
    );

};
