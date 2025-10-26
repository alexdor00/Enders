// ============================================
// 👥 usuarios.js - LÓGICA DE GESTIÓN DE USUARIOS
// ============================================
// Lee y modifica datos de datos.js
// Gestiona altas y bajas de usuarios

// Importamos datos y funciones desde datos.js
import { usuarios, agregarUsuario, eliminarUsuario } from './datos.js';

// ==========================================
// 🎯 REFERENCIAS A ELEMENTOS DEL DOM
// ==========================================
const formulario = document.getElementById('formUsuario');
const tablaUsuarios = document.getElementById('tablaUsuarios');

// ==========================================
// 🎨 FUNCIÓN: Renderizar tabla de usuarios
// ==========================================
// Muestra todos los usuarios en la tabla HTML
function cargarTablaUsuarios() {
    // Limpiar tabla antes de cargar
    tablaUsuarios.innerHTML = '';
    
    // Recorrer array y crear una fila por cada usuario
    usuarios.forEach((usuario, index) => {
        const fila = document.createElement('tr');
        fila.className = 'text-center';
        
        fila.innerHTML = `
            <td class="fw-bold">${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>${usuario.password}</td>
            <td>
                <button class="btn btn-danger btn-sm" data-id="${usuario.id}">
                    BORRAR
                </button>
            </td>
        `;
        
        tablaUsuarios.appendChild(fila);
    });
    
    // Añadir eventos a los botones de borrar
    const botonesBorrar = tablaUsuarios.querySelectorAll('.btn-danger');
    botonesBorrar.forEach(boton => {
        boton.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            borrarUsuario(id);
        });
    });
}

// ==========================================
// 🗑️ FUNCIÓN: Borrar usuario
// ==========================================
// Elimina un usuario del array por su ID directamente
function borrarUsuario(id) {
    // Usar función de datos.js para eliminar (SIN CONFIRMACIÓN)
    const exito = eliminarUsuario(id);
    
    if (exito) {
        // Recargar tabla
        cargarTablaUsuarios();
        console.log(`Usuario ID ${id} eliminado correctamente`);
    } else {
        console.error(`Error: No se encontró el usuario con ID ${id}`);
    }
}

// ==========================================
// ➕ FUNCIÓN: Alta de usuario
// ==========================================
// Captura el submit del formulario y añade un nuevo usuario
function altaUsuario(event) {
    event.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Usar función de datos.js para agregar usuario
    agregarUsuario(nombre, email, password);
    
    // Recargar tabla
    cargarTablaUsuarios();
    
    // Limpiar formulario
    formulario.reset();
    
    console.log(`Usuario ${nombre} agregado. Total de usuarios: ${usuarios.length}`);
}

// ==========================================
// 🚀 INICIALIZACIÓN AL CARGAR LA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Cargar tabla inicial con los datos de datos.js
    cargarTablaUsuarios();
    
    // Registrar evento del formulario
    formulario.addEventListener('submit', altaUsuario);
    
    console.log('Página de usuarios cargada - Mostrando', usuarios.length, 'usuarios');
});

// ============================================
// ⭐ PROMPTS DE IA GENERATIVA UTILIZADOS:
// ============================================
// 1. IA: Claude - Prompt: "Cómo importar variables y funciones de otro archivo JavaScript usando import y export en módulos ES6"
// 
// 2. IA: Claude - Prompt: "Cómo recorrer un array de objetos con forEach y crear filas de tabla HTML dinámicamente con createElement"
// 
// 3. IA: Claude - Prompt: "Cómo añadir eventos click a múltiples botones generados dinámicamente usando querySelectorAll y addEventListener"
// 
// 4. IA: Claude - Prompt: "Cómo capturar el evento submit de un formulario con preventDefault y obtener valores de inputs por id"
// 
// 5. IA: Claude - Prompt: "Cómo usar data attributes en HTML y leerlos desde JavaScript con getAttribute o dataset"
// 
// 6. IA: Claude - Prompt: "Cómo eliminar elementos de un array en JavaScript y actualizar dinámicamente la interfaz sin necesidad de confirmación del usuario"
// ============================================