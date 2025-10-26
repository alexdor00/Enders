// dashboard.js - LÓGICA DEL DASHBOARD

// Importamos los datos desde datos.js
import { voluntariados } from './datos.js';


// 🎯REFERENCIAS A ELEMENTOS DEL DOM

const gridVoluntariados = document.getElementById('gridVoluntariados');
const btnOferta = document.getElementById('btnOferta');
const btnPeticion = document.getElementById('btnPeticion');


// VARIABLE DE ESTADO DEL FILTRO

let filtroActivo = null;


// FUNCIÓN: Renderizar tarjetas
// 

function renderizarTarjetas(listaVoluntariados) {
    // Limpiar el contenedor antes de renderizar
    gridVoluntariados.innerHTML = '';
    
    // Si no hay voluntariados, mostrar mensaje
    if (listaVoluntariados.length === 0) {
        gridVoluntariados.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-white fs-4">No hay voluntariados que coincidan con el filtro seleccionado</p>
            </div>
        `;
        return;
    }
    
    // Crear una tarjeta por cada voluntariado
    listaVoluntariados.forEach(vol => {
        const tarjeta = crearTarjetaHTML(vol);
        gridVoluntariados.innerHTML += tarjeta;
    });
}


//  FUNCIÓN: Crear HTML de una tarjeta


function crearTarjetaHTML(voluntariado) {
    // Determinar la clase de borde según el tipo
    const claseTipo = voluntariado.tipo === 'oferta' ? 'oferta' : 'peticion';
    
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card card-voluntariado ${claseTipo}">
                <div class="card-body">
                    <h2 class="card-title">${voluntariado.titulo}</h2>
                    
                    <p class="descripcion">${voluntariado.descripcion}</p>
                    
                    <div class="info-footer">
                        <div class="fecha">${voluntariado.fecha}</div>
                        <div class="usuario">PUBLICADO: <strong>${voluntariado.usuario}</strong></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


//FUNCIÓN: Aplicar filtro

// Filtra los voluntariados según el tipo seleccionado
// y actualiza la visualización de las tarjetas
function aplicarFiltro() {
    let voluntariosFiltrados;
    
    // Si no hay filtro activo, mostrar todos
    if (filtroActivo === null) {
        voluntariosFiltrados = voluntariados;
    } else {
        // Filtrar por tipo (oferta o peticion)
        voluntariosFiltrados = voluntariados.filter(vol => vol.tipo === filtroActivo);
    }
    
    // Renderizar las tarjetas filtradas
    renderizarTarjetas(voluntariosFiltrados);
    
    // Actualizar estado visual de los botones
    actualizarBotonesFiltro();
}


//  FUNCIÓN: Actualizar estilos de botones

// Añade/quita la clase 'active' según el filtro activo
function actualizarBotonesFiltro() {
    // Botón OFERTA
    if (filtroActivo === 'oferta') {
        btnOferta.classList.add('active');
    } else {
        btnOferta.classList.remove('active');
    }
    
    // Botón PETICIÓN
    if (filtroActivo === 'peticion') {
        btnPeticion.classList.add('active');
    } else {
        btnPeticion.classList.remove('active');
    }
}


// EVENTOS DE LOS BOTONES DE FILTRO


// Botón OFERTA - Al hacer click filtra solo ofertas
btnOferta.addEventListener('click', function() {
    // Si ya está activo, desactivar (mostrar todos)
    if (filtroActivo === 'oferta') {
        filtroActivo = null;
    } else {
        // Activar filtro de ofertas
        filtroActivo = 'oferta';
    }
    
    aplicarFiltro();
});

// Botón PETICIÓN - Al hacer click filtra solo peticiones
btnPeticion.addEventListener('click', function() {
    // Si ya está activo, desactivar (mostrar todos)
    if (filtroActivo === 'peticion') {
        filtroActivo = null;
    } else {
        // Activar filtro de peticiones
        filtroActivo = 'peticion';
    }
    
    aplicarFiltro();
});


// INICIALIZACIÓN AL CARGAR LA PÁGINA

document.addEventListener('DOMContentLoaded', function() {
    // Cargar todas las tarjetas al inicio (sin filtro)
    aplicarFiltro();
    
    console.log('Dashboard cargado - Mostrando', voluntariados.length, 'voluntariados');
    console.log('Datos cargados desde datos.js:', voluntariados);
});


// 1. IA: Claude - Prompt: "Cómo filtrar un array de objetos en JavaScript por propiedad específica usando el método filter y renderizar el resultado"
// 2. IA: Claude - Prompt: "Cómo implementar un sistema de filtrado con botones que se activen/desactiven al hacer click, usando una variable de estado"
// 3. IA: Claude - Prompt: "Cómo crear tarjetas HTML dinámicamente desde un array de objetos usando template strings en JavaScript"
// 4. IA: Claude - Prompt: "Cómo añadir y quitar clases CSS con classList.add y classList.remove para cambiar estilos de botones activos"
// 5. IA: Claude - Prompt: "Cómo usar el operador ternario en JavaScript para asignar clases CSS condicionales según una propiedad del objeto"
// 6. IA: Claude - Prompt: "Cómo inicializar una aplicación JavaScript al cargar la página usando el evento DOMContentLoaded y log de datos importados"
