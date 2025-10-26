// ============================================
// 📊 datos.js - FUENTE ÚNICA DE DATOS
// ============================================
// 
// 🎯 PROPÓSITO:
// Este archivo contiene TODOS los datos de la aplicación en arrays.
// Es la "base de datos" en memoria del proyecto.
// 
// 📦 CONTENIDO:
// 1. usuarios → Array con los usuarios que pueden hacer login
// 2. voluntariados → Array con todas las ofertas y peticiones
// 3. obtenerNuevoId() → Función para calcular el siguiente ID
// 
// 🔗 CÓMO SE USA EN OTROS ARCHIVOS:
// 
//   En dashboard.js:
//   import { voluntariados } from './datos.js';
//   → Para mostrar todas las tarjetas en el dashboard
// 
//   En login.js:
//   import { usuarios } from './datos.js';
//   → Para verificar si el usuario existe
// 
//   En voluntariados.js:
//   import { voluntariados, obtenerNuevoId } from './datos.js';
//   → Para añadir/borrar voluntariados
// 
//   En usuarios.js:
//   import { usuarios, obtenerNuevoId } from './datos.js';
//   → Para añadir/borrar usuarios
// 
// ⚠️ IMPORTANTE - NO HAY PERSISTENCIA:
// - Los datos están en memoria (RAM)
// - Si añades/borras algo, solo existe mientras estés en esa página
// - Si refrescas (F5) o cambias de página, vuelven los datos originales
// - En productos futuros añadiremos base de datos real
// 
// ============================================
// ⭐ PROMPTS DE IA GENERATIVA UTILIZADOS:
// ============================================
// 1. IA: Claude - Prompt: "Crea estructura de datos en JavaScript con arrays de objetos para usuarios con propiedades id, nombre, email y password, usando export para módulos ES6"
// 
// 2. IA: Claude - Prompt: "Necesito un array de voluntariados con objetos que tengan id, titulo, tipo (oferta o peticion), descripcion, fecha y usuario, exportado como módulo"
// 
// 3. IA: Claude - Prompt: "Función JavaScript que calcule automáticamente el siguiente ID disponible en un array de objetos, manejando arrays vacíos"
// 
// 4. IA: Claude - Prompt: "Sintaxis correcta de export const en JavaScript ES6 para exportar múltiples variables y funciones desde un módulo"
// ============================================

// ==========================================
// 👥 USUARIOS DE LA APLICACIÓN
// ==========================================
// Usuarios que pueden hacer login en la app
// Datos basados en el mockup AnimalCare.pdf (página 4)
export const usuarios = [
    {
        id: 1,
        nombre: "LAURA",
        email: "L@A.U",
        password: "123"
    },
    {
        id: 2,
        nombre: "MARCOS",
        email: "M@R.C",
        password: "123"
    },
    {
        id: 3,
        nombre: "SONIA",
        email: "S@O.N",
        password: "123"
    }
];

// ==========================================
// 🐾 VOLUNTARIADOS (Ofertas y Peticiones)
// ==========================================
// Todas las ofertas y peticiones de voluntariado
// Datos extraídos del mockup AnimalCare.pdf (página 1 y 3)
export const voluntariados = [
    {
        id: 1,
        titulo: "OFREZCO MEDICINA",
        tipo: "oferta",
        descripcion: "SUPLEMENTOS VITAMÍNICOS PARA ANIMALES ENFERMOS",
        fecha: "24/10/2025",
        usuario: "LAURA"
    },
    {
        id: 2,
        titulo: "NECESITO REFUGIO",
        tipo: "peticion",
        descripcion: "SE DAN EN ADOPCIÓN 4 GATITOS",
        fecha: "27/10/2025",
        usuario: "MARCOS"
    },
    {
        id: 3,
        titulo: "NECESITO VEHÍCULO",
        tipo: "peticion",
        descripcion: "NECESITO UN VEHÍCULO PARA TRASLADAR UN CABALLO",
        fecha: "28/10/2025",
        usuario: "SONIA"
    }
];

// ==========================================
// 🔧 FUNCIÓN AUXILIAR: Obtener nuevo ID
// ==========================================
// Calcula automáticamente el siguiente ID disponible para un array
// Evita IDs duplicados y gestiona arrays vacíos
// 
// Parámetros:
//   array - Array de objetos que contienen propiedad 'id'
// 
// Retorna:
//   Número - El siguiente ID disponible (máximo actual + 1)
// 
// Ejemplo de uso:
//   const nuevoUsuario = {
//       id: obtenerNuevoId(usuarios),
//       nombre: "PEDRO",
//       email: "pedro@email.com",
//       password: "456"
//   };
//   usuarios.push(nuevoUsuario);
//
export function obtenerNuevoId(array) {
    // Si el array está vacío, comenzar desde 1
    if (array.length === 0) return 1;
    
    // Obtener todos los IDs del array
    const ids = array.map(item => item.id);
    
    // Encontrar el ID máximo y sumarle 1
    const maxId = Math.max(...ids);
    
    return maxId + 1;
}
/ Función para añadir un nuevo usuario
// Utiliza obtenerNuevoId para asignar un ID único
export function agregarUsuario(nombre, email, password) {
    const nuevoUsuario = {
        id: obtenerNuevoId(usuarios), // <-- Usa la función existente
        nombre: nombre.toUpperCase(),
        email: email,
        password: password 
    };
    usuarios.push(nuevoUsuario);
}

// Función para eliminar un usuario por su ID
export function eliminarUsuario(id) {
    // Buscar la posición (índice) del usuario con ese ID
    const index = usuarios.findIndex(u => u.id === id);
    
    if (index !== -1) {
        usuarios.splice(index, 1); // Elimina 1 elemento en esa posición
        return true;
    }
    return false;
}
