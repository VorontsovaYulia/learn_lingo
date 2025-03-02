import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getDatabase, get, ref, child } from 'firebase/database';

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
// const analytics = getAnalytics(app);
const database = getDatabase();

// async function writeUserData() {
//   set(ref(database, '/'), { teachers });
// }
// const data = await writeUserData();
// console.log(data);

const dbRef = ref(getDatabase());
async function getTeachers() {
  get(child(dbRef, `teachers`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export { database, getTeachers };
