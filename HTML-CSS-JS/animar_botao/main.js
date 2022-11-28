const button = document.getElementById('btn')


function random(a) {
    return Math.floor(Math.random() * 255)
}

button.onclick = function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    button.style.borderColor = rndCol
    button.style.background = rndCol
}

