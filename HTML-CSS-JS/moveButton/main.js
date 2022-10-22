let elemento = document.getElementById('btn')


let movimentar = 1;

window.addEventListener("load", (e) => {
    elemento.style.top = 0;
    elemento.style.left = 0;
    elemento.style.position = "absolute";
})


window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "ArrowUp":
            elemento.style.top = parseInt(elemento.style.top) - movimentar + 'px';
            break;
        case "ArrowDown":
            elemento.style.top = parseInt(elemento.style.top) + movimentar + 'px';
            break;
        case "ArrowLeft":
            elemento.style.left = parseInt(elemento.style.left) - movimentar + 'px'
            break;
        case "ArrowRight":
            elemento.style.left = parseInt(elemento.style.left) + movimentar + 'px';
            break;
        default: alert('Botao direito fdp')
    }
})

