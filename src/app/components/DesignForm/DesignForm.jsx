'use client'

import styles from './DesignForm.module.css'

export const DesignForm = ({type}) => {

    return (
        <div className={styles.wrapper}>
            <h3>
                {type === 'sign-up' ? 'WELCOME' : 'WELCOME BACK!'}
            </h3>
            <p>
                {type === 'sign-up' ? 'Fill out all the information please' : 'To stay connected with us please login with your personal info'}
            </p>
        </div>
    );
 }
