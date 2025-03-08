'use client'

import Image from "next/image";
import styles from './FavoritesButton.module.css'
import { useUser } from "@/app/store/store";

export const FavoritesButton = ({ teacherId }) => {
    
    const { favorites, setFavorites } = useUser();
    const isFavorite = favorites.some((fav) => fav.id === teacherId);


    return (
        <div onClick={() => setFavorites(teacherId)}>

            {isFavorite ?
                <Image src="/filled-heart.svg" alt="filled-heart" width={26} height={26} className={styles.filled} />
                :
                <Image src="/empty-heart.svg" alt="empty-heart" width={26} height={26} className={styles.empty} />
            }

        </div>
    )
 }