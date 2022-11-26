let circle = document.getElementById("circle");

circle.style.left = "100px";
circle.style.top = "100px";
circle.style.height = "74px"
circle.style.width = "74px"
circle.style.position = 'absolute'
circle.style.border = '1px solid black'
circle.style.backgroundColor = "gold"


function distanciaEntre(xB, xA, yB, yA) {
    const diferenca = Math.sqrt((xB - xA) ** 2 + (yB - yA) ** 2);

    return diferenca;
}

window.addEventListener("click", (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;

        const resultadoDaDiferenca = distanciaEntre(
        clientX,
        Number(circle.style.left.split("px")[0]),
        clientY,
        Number(circle.style.top.split("px")[0])
    );

    const raio = (Number(circle.style.height.split("px")[0] / 2))

    if (raio < resultadoDaDiferenca     ) {
        console.log("Errou!")
    } else {
        console.log("DIFF", resultadoDaDiferenca, " RAIO: ", raio);
        circle.style.top = Math.random(0) * window.innerHeight
        circle.style.left = Math.random(0) * window.innerWidth
        circle.style.right = Math.random(0) * window.innerHeight
        circle.style.bottom = Math.random(0) * window.innerHeight
    }
}); 

