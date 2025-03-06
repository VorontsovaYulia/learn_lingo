"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./Modal.module.css";

export const Modal = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        document.body.classList.add("modal-open");

        const onEscape = (e) => {
            if (e.key === "Escape") router.back();
        };
        document.addEventListener("keydown", onEscape);

        return () => {
            document.body.classList.remove("modal-open");
            document.removeEventListener("keydown", onEscape);
        };
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