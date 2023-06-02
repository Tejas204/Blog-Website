import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.BLOG_WEBSITE_FIREBASE_API_KEY,
    authDomain: process.env.BLOG_WEBSITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.BLOG_WEBSITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.BLOG_WEBSITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.BLOG_WEBSITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.BLOG_WEBSITE_FIREBASE_MESSAGING_APP_ID
})

export const auth = app.auth()
export default app