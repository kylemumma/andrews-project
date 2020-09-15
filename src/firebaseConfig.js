import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAOG6yEGL59Hueyewb5m_GWDXY4KsbwvhI",
    authDomain: "andrews-project-6bba6.firebaseapp.com",
    databaseURL: "https://andrews-project-6bba6.firebaseio.com",
    projectId: "andrews-project-6bba6",
    storageBucket: "andrews-project-6bba6.appspot.com",
    messagingSenderId: "356433488094",
    appId: "1:356433488094:web:29a1b4856ff8d5734c3a4f",
    measurementId: "G-STFL3YYYFD"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(); // no use rn, for later if u need it

export default fire;