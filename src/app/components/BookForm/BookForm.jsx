'use client';

// import { doc, getDoc } from "firebase/firestore";
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { schema } from "./schema";
// import { auth, db } from '../../../../firebase';
import styles from './BookForm.module.css'

export const BookForm = ({avatar, name, surname}) => {

    // async function readDataFromFB(id) {
    //     const docRef = doc(db, "users", id);
    //     const docSnap = await getDoc(docRef);

    //     if (docSnap.exists()) {
    //         return docSnap.data();
    //     } else {
    //         console.log("No such document!");
    //     };
               
    // };

    // async function signIn(auth, email, password) {
    //     try {
    //         const userCredential = await signInWithEmailAndPassword(auth, email, password);
        
    //         const { email: userEmail, uid, accessToken } = userCredential.user;
        
    //         const userInfoFromDB = await readDataFromFB(uid);

    //         addUserInfoToStore({
    //             email: userEmail,
    //             token: accessToken,
    //             id: uid,
    //             favorites: userInfoFromDB.favorites,
    //             orders: userInfoFromDB.orders,
    //             name: userInfoFromDB.name
    //         });
        
    //     } catch (error) {
    //         alert('This user does not exist ' + String.fromCodePoint(0x1F937));
    //     }
    // }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      reason: "Career and business",
    },
  });
    
    const submitForm = (data) => {
          console.log(data);
        // signIn(auth, data.email, data.password);
        reset();
        // router.push('/');
    };
    
    return (
        <div className={styles.container}>

            <h2>Book trial lesson</h2>
            <p className={styles.text}>
                Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.
            </p>

            <form onSubmit={handleSubmit(submitForm)}>

                <div className={styles["avatar-box"]}>
                    <Image className={styles.avatar} src={avatar} alt="avatar" width={44} height={44} />
                    <div className={styles["name-box"]}>
                        <p>Your teacher</p>
                        <h3>{name} {surname}</h3>
                    </div>
                </div>

                <h4>What is your main reason for learning English?</h4>

                <div className={styles.radio}>
                    <label>
                        <input type="radio" value="Career and business" {...register("reason")} defaultChecked />
                        Career and business
                    </label>

                    <label>
                        <input type="radio" value="Lesson for kids" {...register("reason")} />
                        Lesson for kids
                    </label>

                    <label>
                        <input type="radio" value="Living abroad" {...register("reason")} />
                        Living abroad
                    </label>

                    <label>
                        <input type="radio" value="Exams and coursework" {...register("reason")} />
                        Exams and coursework
                    </label>

                    <label>
                        <input type="radio" value="Culture, travel or hobby" {...register("reason")} />
                        Culture, travel or hobby
                    </label>
                </div>
                
                <div className={styles.box}>
                    <input {...register("fullName")} placeholder="Full Name" />
                    <p>{errors.fullName?.message}</p>

                    <input {...register("email")} placeholder="Email" />
                    <p>{errors.email?.message}</p>

                    <input {...register("phone")} placeholder="Phone number" />
                    <p>{errors.phone?.message}</p>
                </div>

                <button className={styles.button} type="submit">Book</button>

            </form>
        </div>
    );
};
