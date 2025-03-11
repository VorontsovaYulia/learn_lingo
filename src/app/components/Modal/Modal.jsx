"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./Modal.module.css";

export const Modal = ({ children, isOpen = true, toggleBookModal, stayOnPage = false }) => {
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        const onEscape = (e) => {
            if (e.key === "Escape") toggleBookModal ? toggleBookModal() : router.back();
        };

        document.addEventListener("keydown", onEscape);

        return () => {
            document.removeEventListener("keydown", onEscape);
        };
    }, [isOpen]);

    const handleClose = () => {
        document.body.classList.remove("modal-open");

        if (stayOnPage && toggleBookModal) {
            toggleBookModal();
        } else {
            router.back();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
                <button className={styles.close} onClick={handleClose}>
                    <Image src="/x.svg" alt="close-modal" width={32} height={32} />
                </button>
            </div>
        </div>
    );
};
