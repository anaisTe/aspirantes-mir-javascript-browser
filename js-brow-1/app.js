const input = document.querySelector('#texto');
const resultado = document.getElementById('resultado');
const boton = document.querySelector('.btn');
const resMayus = document.getElementById('resultadoMayusculas');

input.addEventListener('input', function() {
    const texto = input.value;
    resultado.textContent = texto;
});

boton.addEventListener('click', function() {
    const texto = input.value.toUpperCase();
    resMayus.textContent = texto;
});