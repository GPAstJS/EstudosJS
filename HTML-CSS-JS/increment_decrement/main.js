const label = document.getElementById('myLabel');
const incrementBtn = document.getElementById('btn-incrementar');
const decrementBtn = document.getElementById('btn-decrementar')

function incrementar() {
    label.innerHTML = parseInt(label.innerHTML)
    label.innerHTML++
}

function decrementar() {
    label.innerHTML = parseInt(label.innerHTML);
    label.innerHTML--
}