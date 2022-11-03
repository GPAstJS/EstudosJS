

circle.addEventListener("click", (event) => {
    let circle = document.getElementById('circle')

    circle.style.top = 0
    circle.style.left = 0

    const {clientX, clientY} = event;

    console.log("Isso é o que vem desse random: ", Math.random(0) * window.innerHeight + 'px');

    circle.style.top = Math.random(0) * window.innerHeight - '75' + 'px'
    circle.style.left = Math.random(0) * window.innerWidth - '75' + 'px'
    distanciaEntre()
});


function distanciaEntre() {
    console.log(Math.sqrt((circle.style.left - event.clientX) ** 2 + (circle.style.top - event.clientY) **   2))
}
