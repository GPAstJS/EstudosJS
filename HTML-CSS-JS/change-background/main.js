const btn = document.getElementById('btn');
const texto = document.getElementById('paragrafo');
const cor = document.getElementById('cor')

function random(a) {
    return Math.floor(Math.random() * 255)
}

btn.addEventListener('click', (e) => {

    let rndCol = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    document.body.style.background = rndCol.toString()
    cor.innerHTML = '' + '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    cor.style.color = document.body.style.background
})