'use client';

import { doc, updateDoc, getDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useStore, useUser } from "@/app/store/store";
import styles from './FavoritesButton.module.css';

export const FavoritesButton = ({ teacherId }) => {
    const teachers = useStore((state) => state.teachers);
    const id = useUser((state) => state.id);
    const favorites = useUser((state) => state.favorites);
    const setFavorites = useUser((state) => state.setFavorites);
    const router = useRouter();
    
    const isFavorite = favorites.some((fav) => fav.id === teacherId);

    const toggleFavorite = async () => {

        if (!id) return router.push("/sign-in");
   
        const userRef = doc(db, "users", id);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) return; // Якщо документа немає в БД (в моєму випадку це і сам юзер, id дока === id юзера)

        const favTeacher = teachers.find(el => el.id === teacherId);
        if (!favTeacher) return; // Якщо вчителя немає в масиві в БД

        try {
            const updateData = isFavorite
                ? { favorites: arrayRemove(favTeacher) }
                : { favorites: arrayUnion(favTeacher) };

            await updateDoc(userRef, updateData); // Оновлюємо Firebase
            setFavorites(teacherId); // Оновлюємо Zustand тільки після успішного оновлення в БД
        } catch (error) {
            alert("Error updating favorites:", error.message);
        }
    };

    return (
        <div onClick={toggleFavorite}>
            <Image 
                src={isFavorite ? "/filled-heart.svg" : "/empty-heart.svg"}
                alt="heart"
                width={26}
                height={26}
                className={isFavorite ? styles.filled : styles.empty}
            />
        </div>
    );
};
