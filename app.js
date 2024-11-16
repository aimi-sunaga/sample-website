import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Firebaseの設定
const firebaseConfig = {
    apiKey: "AIzaSyCfZkY0FjxDRfyJf9zI6xRTzAbSq36YOm0",
    authDomain: "my-company-website-ecb89.firebaseapp.com",
    projectId: "my-company-website-ecb89",
    storageBucket: "my-company-website-ecb89.firebasestorage.app",
    messagingSenderId: "460179440",
    appId: "1:460179440:web:6b2bcfc227d2fdb8e4ff35",
    measurementId: "G-4431BRFXVF"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// データをFirestoreに送信する関数
export async function submitContactForm(name, email, message) {
    try {
        const docRef = await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            message: message,
            createdAt: new Date() // 作成日時を追加
        });
        console.log("Document written with ID: ", docRef.id);
        return true; // 成功した場合はtrueを返す
    } catch (e) {
        console.error("Error adding document: ", e);
        return false; // エラーが発生した場合はfalseを返す
    }
}