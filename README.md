# Fenata E-commerce

## 🚀 Descripción del Proyecto
Fenata es un e-commerce desarrollado con React y Vite que ofrece una experiencia de compra intuitiva y moderna. El proyecto incluye funcionalidades como catálogo de productos, carrito de compras, formulario de contacto y más.

## ⚙️ Tecnologías Utilizadas

### Core
- **React**: v18.2.0 - Biblioteca principal para construir la interfaz de usuario
- **Vite**: v5.0.8 - Herramienta de construcción que ofrece un entorno de desarrollo más rápido

### Estilado
- **Tailwind CSS**: v3.4.1 - Framework de CSS utilizado para el diseño y estilado
- **PostCSS**: v8.4.32 - Herramienta para transformar CSS con JavaScript
- **Autoprefixer**: v10.4.16 - Plugin de PostCSS para añadir prefijos de navegador automáticamente

### Routing
- **React Router DOM**: v6.21.1 - Manejo de navegación y rutas en la aplicación

### Base de Datos
- **Firebase/Firestore**: v10.7.1 - Base de datos en la nube para almacenar productos y órdenes

### Validación de Tipos
- **PropTypes**: v15.8.1 - Verificación de tipos en tiempo de desarrollo

## 📦 Características Principales

- **Catálogo de Productos**
  - Visualización de productos en grid responsive
  - Filtrado por categorías
  - Detalles de producto individual

- **Carrito de Compras**
  - Agregar/eliminar productos
  - Modificar cantidades
  - Cálculo automático de totales
  - Persistencia de datos

- **Proceso de Compra**
  - Formulario de datos del comprador
  - Validación de campos
  - Generación de orden de compra
  - Confirmación con ID de orden

- **Características Adicionales**
  - Loader animado durante la carga de datos
  - Diseño responsive
  - Navegación intuitiva
  - Sección "Sobre Nosotros"
  - Formulario de contacto

## 🛠️ Instalación

1. Clonar el repositorio
2. Instalar las dependencias
3. Iniciar el servidor
4. Abrir el navegador y acceder a la aplicación

## 📦 Configuración

1. Crear un archivo `.env` en la raíz del proyecto
2. Agregar las variables de entorno
3. Iniciar el servidor
4. Abrir el navegador y acceder a la aplicación


## 📁 Estructura del Proyecto

src/
├── assets/
│ ├── components/
│ │ ├── CartContainer.jsx
│ │ ├── ItemDetail.jsx
│ │ ├── Navbar.jsx
│ │ └── ...
│ ├── context/
│ │ └── cartContext.jsx
│ └── data/
│ └── database.js
├── App.jsx
└── main.jsx


## 🔍 Funcionalidades Principales

### Contexto del Carrito
- Manejo de estado global para el carrito
- Funciones para agregar, eliminar y modificar items
- Cálculo de totales

### Firebase/Firestore
- Almacenamiento de productos
- Gestión de órdenes de compra
- Consultas y filtrados

### Routing
- Navegación entre páginas
- Rutas protegidas
- Parámetros dinámicos

## 👥 Autor
Franco Reynoso