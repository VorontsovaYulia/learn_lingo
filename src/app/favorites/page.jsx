import Image from "next/image";

export default function Favorites() {
   return (
      <div
style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            width: "100vw",
        }}>
         <Image src='/favorites-icon.svg' alt="empty" width={500} height={500} style={{filter: 'opacity(0.2)'}}/>

      </div>
   );
}