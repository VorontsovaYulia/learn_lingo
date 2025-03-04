'use client'

import Image from "next/image";
import { useState } from "react";
import styles from './FavoritesButton.module.css'

export const FavoritesButton = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div onClick={toggleFavorite}>

            {isFavorite ?
                <Image src="/filled-heart.svg" alt="filled-heart" width={26} height={26} className={styles.img} />
                :
                <Image src="/empty-heart.svg" alt="empty-heart" width={26} height={26} className={styles.img} />
            }

        </div>
    );
 }