
// Importamos los datos desde datos.js
import { voluntariados, obtenerNuevoId } from './datos.js';

function cargarTablaVoluntariados() {
    const tbody = document.getElementById('tablaVoluntariados');
    tbody.innerHTML = ''; // Limpiar tabla antes de cargar
    
    // Recorrer array y crear una fila por cada voluntariado
    voluntariados.forEach((vol, index) => {
        const fila = document.createElement('tr');
        fila.className = 'text-center';
        
        fila.innerHTML = `
            <td class="fw-bold">${vol.titulo}</td>
            <td>${vol.usuario}</td>
            <td>${vol.fecha}</td>
            <td class="text-start">${vol.descripcion}</td>
            <td>
                <span class="badge ${vol.tipo === 'oferta' ? 'bg-success' : 'bg-warning text-dark'}">
                    ${vol.tipo.toUpperCase()}
                </span>
            </td>
            <td>
                <button class="btn btn-danger btn-sm">
                    BORRAR
                </button>
            </td>
        `;
        
        tbody.appendChild(fila);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    // Cargar tabla inicial con los datos de datos.js
    cargarTablaVoluntariados();
    
    console.log('✅ Página cargada - Tabla mostrada con', voluntariados.length, 'voluntariados');
});



// 1. IA: Claude - Prompt: "cómo importo variables de otro archivo javascript usando import y export?"
// 2. IA: Claude - Prompt: "cómo recorrer un array de objetos en javascript y crear filas de tabla html dinámicamente?"
