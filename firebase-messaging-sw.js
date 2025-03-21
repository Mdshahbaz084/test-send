// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBfqQkLMdirE1s3QDAU-k8kZJDSJ-AHfxI",
    authDomain: "madrsa-sikariya.firebaseapp.com",
    projectId: "madrsa-sikariya",
    storageBucket: "madrsa-sikariya.firebasestorage.app",
    messagingSenderId: "1066102927865",
    appId: "1:1066102927865:web:d5e649be4178d363408d28"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/favicon.ico'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});