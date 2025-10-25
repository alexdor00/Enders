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
// - En productos futuros añadiremos base de datos real a
