let circle = document.getElementById("circle");

circle.style.left = "300px";
circle.style.top = "300px";

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

    const raio = circle.style.height / 2;

    if (resultadoDaDiferenca < raio) {
        console.log("DIFF", resultadoDaDiferenca, " RAIO: ", raio);
        circle.style.top = Math.random(0) * window.innerHeight - "75" + "px";
        circle.style.left = Math.random(0) * window.innerWidth - "75" + "px";
    }
});
