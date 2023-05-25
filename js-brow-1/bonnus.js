const input = document.getElementById('texto');
const boton = document.querySelector('.btn');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', function () {
    const valueTexto = input.value;

    i = 0
    j = valueTexto.length - 1;

    while(i < j) {
        if (valueTexto[i] != valueTexto[j]) {
            return resultado.textContent = 'No es Palindromo';
        }
        i++
        j--
    }
    return resultado.textContent = 'Es Palindromo';
})
