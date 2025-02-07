import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore";
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

export default async function getAsyncData() {
    //leer todos los documentos de la colección.
    const collectionRef = collection(db, "products");
    const productsSnapshot = await getDocs(collectionRef);
    const documentsData =  productsSnapshot.docs.map( doc => {
    return { ...doc.data(), id: doc.id}
    } 
    );
    
    return documentsData;
}

export async function GetAsyncDataById(id) { 
    const docRef = doc(db, "products", id);
    const docSnapShot = await getDoc(docRef);
    const docData = docSnapShot.data();
    return docData;
}


export async function GetAsyncDataByCategory(catid) { 

    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", catid));
    const productsSnapshot = await getDocs(q);
    const documentsData =  productsSnapshot.docs.map( doc => {
    return { ...doc.data(), id: doc.id}
    } 
    );
        
    return documentsData;
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

export async function createBuyOrder(orderData){
    const newOrderDoc = await addDoc(collection(db, "orders"), orderData);
    return newOrderDoc.id;
}