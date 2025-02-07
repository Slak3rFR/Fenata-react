import { initializeApp } from '@firebase/app';
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    query, 
    where, 
    addDoc 
} from '@firebase/firestore';
import products from "./data";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData() {
    const productsRef = collection(db, "products");
    const querySnapshot = await getDocs(productsRef);
    
    const documents = querySnapshot.docs;
    const docsData = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return docsData;
}

export async function getItemData(id) {
    const docRef = doc(db, "products", id);
    const docSnapshot = await getDoc(docRef);
    
    if (docSnapshot.exists()) {
        return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
        throw new Error("Item not found");
    }
}

export async function getCategoryData(categoryId) {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("category", "==", categoryId));
    const querySnapshot = await getDocs(q);
    
    const documents = querySnapshot.docs;
    const docsData = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
    return docsData;
}

export async function exportProductsToDB() {
    try {
        const productsCollection = collection(db, "products");
        for (let product of products) {
        // Elimina el campo id para que Firestore genere un ID automáticamente
        const docRef = await addDoc(productsCollection, product);
        console.log(`✅ Producto "${product.title}" subido correctamente con ID: ${docRef.id}`);
        }
        console.log("🎉 Todos los productos se han subido a Firebase");
        } catch (error) {
    console.error("❌ Error al exportar productos:", error);
    }
}

export async function createBuyOrder(orderData) {
    const collectionRef = collection(db, "orders");
    const docRef = await addDoc(collectionRef, orderData);
    return docRef.id;
}

export { db };