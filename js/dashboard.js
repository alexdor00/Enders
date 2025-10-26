import { voluntariados } from './datos.js';

const grid = document.getElementById('grid'); // contenedor de tarjetas
const btnOfertas = document.getElementById('btn-ofertas');
const btnPeticiones = document.getElementById('btn-peticiones');

let filtroTipo = null;


function render(list) {
  grid.innerHTML = list.map(itemToCard).join('');
}

function itemToCard(it) {
  const bullet = '<span class="dot">•</span>';
  const colorBorde = it.tipo === 'oferta' ? 'border-success' : 'border-danger';

  return `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card card-ghost h-100 ${colorBorde}">
        <div class="card-body">
          <h2 class="h5 card-title mb-3">${it.titulo}</h2>
          <p class="mb-3">${bullet}${it.descripcion}</p>
          <div class="d-flex flex-column gap-1 small text-white-50">
            <div><strong>${it.fecha}</strong></div>
            <div>Publicado: <strong class="text-white">${it.usuario}</strong></div>
          </div>
        </div>
      </div>
    </div>
  `;
}


function aplicarFiltro() {
  const lista = filtroTipo ? voluntariados.filter(i => i.tipo === filtroTipo) : voluntariados;
  render(lista);
}

btnOfertas.addEventListener('click', () => {
  filtroTipo = filtroTipo === 'oferta' ? null : 'oferta';
  aplicarFiltro();
});

btnPeticiones.addEventListener('click', () => {
  filtroTipo = filtroTipo === 'peticion' ? null : 'peticion';
  aplicarFiltro();
});

aplicarFiltro();