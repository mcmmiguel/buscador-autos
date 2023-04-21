// Variables
const resultado = document.querySelector('#resultado');


// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
});



// Funciones
function mostrarAutos() {
    autos.forEach( auto => {
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${auto.marca}

            
        `;

        // Insertar en el HTML 
        resultado.appendChild(autoHTML);
    });
}


