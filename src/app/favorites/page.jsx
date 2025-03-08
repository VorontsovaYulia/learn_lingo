'use client';

import Image from "next/image";
import { PrivateRoute } from "@/PrivateRoute";
import { useUser } from "../store/store";
import { TeacherCard } from "../components/TeacherCard/TeacherCard";
import styles from './favorites.module.css'

export default function Favorites() {
   
   const userFavorites = useUser(state => state.favorites)

   return (
      <PrivateRoute>
         {userFavorites.length > 0 ? (
            <ul className={styles.layout}>
               {userFavorites.map(el => (
                  <li key={el.id} className={styles.wrapper}>
                     <TeacherCard teacher={el} />
                  </li>
               ))}
            </ul>
         ) : (
            <div className={styles.box}>
               <Image className={styles.img} src='/favorites-icon.svg' alt="empty" width={500} height={500} priority />
            </div>
         )}
      </PrivateRoute>
   );
}