import { exportProductsToDB } from "../data/database";

exportProductsToDB().then(() => {
    console.log("Productos exportados exitosamente.");
}).catch((error) => {
    console.error("Error al exportar productos:", error);
});
