import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/analytics';
import 'firebase/compat/performance';

const config = {
  apiKey: "AIzaSyAWw_in9JRmkqYfIbyfuGoRZT6eAMx0r4k",
  authDomain: "st-gregs-rewards-production.firebaseapp.com",
  databaseURL: "https://st-gregs-rewards-production.firebaseio.com",
  projectId: "st-gregs-rewards-production",
  storageBucket: "st-gregs-rewards-production.appspot.com",
  messagingSenderId: "444363101866",
  appId: "1:444363101866:web:5b26cb8a371e2b4398e2d3",
  measurementId: "G-000E8GS66L"
}

firebase.initializeApp(config);

// firebase.analytics();
// firebase.performance();

export default firebase;