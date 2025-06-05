function mostrarConsecuencias() {
    const seccion = document.getElementById("consecuencias");
    seccion.classList.remove("oculto");
}

function cambiarTema() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    document.querySelector("header").style.backgroundColor = "#66ccff";
    const botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.style.backgroundColor = "#66ccff";
        boton.style.color = "#000";
    });
}

function reiniciar() {
    location.reload();
}
