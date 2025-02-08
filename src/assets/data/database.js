import { initializeApp } from 'firebase/app';
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    query, 
    where, 
    addDoc 
} from 'firebase/firestore';
import products from "./data";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
    appId: import.meta.env.VITE_FIRESTORE_APPID,
    authDomain: "fenata-9b1a4.firebaseapp.com",
    projectId: "fenata-9b1a4",
    storageBucket: "fenata-9b1a4.firebasestorage.app",
    messagingSenderId: "513476414756",
    measurementId: "G-FR0PQLM9FC"                                    
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
        const data = docSnapshot.data();
        return {
            ...data,
            id: docSnapshot.id
        };
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