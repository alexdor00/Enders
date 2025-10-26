// 1. IMPORTAR DATOS Y FUNCIONES de  capa de datos
import { usuarios, agregarUsuario, eliminarUsuario } from './datos.js';

// 2. OBTENER REFERENCIAS a los elementos del HTML
const formulario = document.getElementById('formulario-alta-usuario');
const tablaCuerpo = document.getElementById('tabla-cuerpo-usuarios');

function renderizarTabla() {
    tablaCuerpo.innerHTML = ''; // Limpia el contenido actual de la tabla
    
    usuarios.forEach(usuario => {
        // Crear la estructura HTML para cada fila de usuario
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>${usuario.password}</td>
            <td>
                <button class="btn btn-baja" data-id="${usuario.id}">
                    BORRAR
                </button>
            </td>
        `;
        tablaCuerpo.appendChild(fila);
    });
    
    // 3. ASIGNAR EVENTOS DE BAJA
    // Después de crear todas las filas, asignamos el evento click a todos los botones BORRAR
    document.querySelectorAll('.btn-baja').forEach(button => {
        button.addEventListener('click', (e) => {
            // Obtenemos el ID del usuario del botón que se ha pulsado
            const idUsuario = parseInt(e.target.dataset.id); 
            gestionarBajaUsuario(idUsuario);
        });
    });
}

/**
 * Lógica para manejar el ALTA de un usuario (cuando se pulsa 'DAR DE ALTA')
 */
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Detiene el comportamiento predeterminado del formulario

    // Obtener los valores de los inputs
    const nombre = document.getElementById('nombreUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const password = document.getElementById('passwordUsuario').value;

    // Usar la función de la capa de datos para añadir el usuario al array
    agregarUsuario(nombre, email, password);
    
    // Actualizar la tabla para mostrar el nuevo usuario
    renderizarTabla();
    
    // Limpiar el formulario
    formulario.reset();

    console.log(`Usuario ${nombre} agregado. Total: ${usuarios.length}`);
});


/**
 * Lógica para manejar la BAJA de un usuario (cuando se pulsa 'BORRAR')
 */
function gestionarBajaUsuario(id) {
    if (confirm(`¿Estás seguro de que quieres eliminar al usuario con ID ${id}?`)) {
        // Usar la función de la capa de datos para eliminar el usuario
        const exito = eliminarUsuario(id);

        if (exito) {
            // Si se eliminó correctamente, actualizar la tabla
            renderizarTabla();
            console.log(`Usuario ID ${id} eliminado.`);
        } else {
            console.error(`Error: Usuario ID ${id} no encontrado.`);
        }
    }
}

// 4. INICIALIZACIÓN
// Ejecutar la función de renderizado cuando la página se carga para mostrar los usuarios iniciales
document.addEventListener('DOMContentLoaded', renderizarTabla);
