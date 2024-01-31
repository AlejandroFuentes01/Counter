document.addEventListener('DOMContentLoaded', () => {
    const valor = document.getElementById('valor');
    let contador = 0;

    document.getElementById('increase').addEventListener('click', () => {
        contador++;
        valor.textContent = contador;
    });

    document.getElementById('decrease').addEventListener('click', () => {
        contador--;
        valor.textContent = contador;
    });

    document.getElementById('reset').addEventListener('click', () => {
        contador = 0;
        valor.textContent = contador;
    });
});
