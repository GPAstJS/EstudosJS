const button = document.getElementById('btn')

button.onclick = function() {
    let randCor = 'rgb(' + randomizar(255) + ',' + randomizar(255) + ',' + randomizar(255) + ')';
    button.style.borderColor = randCor
    button.style.backgroundColor = randCor
    button.style.boxShadow = "5px 5px"
}

function rodarBotao(param) {
    let ano = 365
    let total = ano * param / 87.97
    return Math.round(total * 10000)/10000 + 's'
}