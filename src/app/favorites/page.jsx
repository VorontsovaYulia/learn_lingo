import Image from "next/image";
import styles from './favorites.module.css'

export default function Favorites() {
   return (
      <div className={styles.wrapper}>
         <Image src='/favorites-icon.svg' alt="empty" width={500} height={500} />
      </div>
   );
}