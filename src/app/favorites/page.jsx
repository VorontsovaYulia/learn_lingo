import Image from "next/image";
import styles from './favorites.module.css'
import { PrivateRoute } from "@/PrivateRoute";

export default function Favorites() {


   return (
      <PrivateRoute>
         <div className={styles.wrapper}>
            <Image src='/favorites-icon.svg' alt="empty" width={500} height={500} priority />
         </div>
      </PrivateRoute>
   );
}