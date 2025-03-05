import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBsvH0T4gffIHpMZ07IR_4Bm79bPoEtwuM',
  authDomain: 'learnlingo-5b90d.firebaseapp.com',
  projectId: 'learnlingo-5b90d',
  storageBucket: 'learnlingo-5b90d.firebasestorage.app',
  messagingSenderId: '985863146491',
  appId: '1:985863146491:web:220ea450001d83d084995e',
  measurementId: 'G-0GQ1SDXX4P',
  databaseURL: 'https://learnlingo-5b90d-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { database, auth, db };

// async function writeUserData() {
//   set(ref(database, '/'), { teachers });
// }
// const data = await writeUserData();
// console.log(data);

// const dbRef = ref(getDatabase());
// async function getTeachers() {
//   get(child(dbRef, `teachers`))
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log('No data available');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// let cachedTeachers = null;

// async function getTeachers() {
//   if (cachedTeachers) return cachedTeachers;

//   const dbRef = ref(getDatabase());
//   try {
//     const snapshot = await get(child(dbRef, 'teachers'));
//     if (snapshot.exists()) {
//       cachedTeachers = snapshot.val();
//       return cachedTeachers;
//     } else {
//       return [];
//     }
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }
