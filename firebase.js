import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBsvH0T4gffIHpMZ07IR_4Bm79bPoEtwuM',
  authDomain: 'learnlingo-5b90d.firebaseapp.com',
  projectId: 'learnlingo-5b90d',
  storageBucket: 'learnlingo-5b90d.firebasestorage.app',
  messagingSenderId: '985863146491',
  appId: '1:985863146491:web:220ea450001d83d084995e',
  measurementId: 'G-0GQ1SDXX4P',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
