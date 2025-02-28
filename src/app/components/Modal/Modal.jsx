'use client';

import Image from 'next/image';
import styles from './Modal.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Modal = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const onEscape = (e) => {
            if (e.key === 'Escape') router.back();
        };
        document.addEventListener('keydown', onEscape);
        
        return () => document.removeEventListener('keydown', onEscape);
    }, [router]);

    return (
        <div className={styles.overlay} onClick={() => router.back()}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
                <button className={styles.close} onClick={() => router.back()}>
                    <Image src="/x.svg" alt="close-modal" width={32} height={32} />
                </button>
            </div>
        </div>
    );
};

