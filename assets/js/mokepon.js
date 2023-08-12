let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let seleccionarAtaque = document.getElementById("seleccionar-ataque");
  seleccionarAtaque.style.display = "none";

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById("reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
  botonReiniciar.style.display = "none";
}

function seleccionarMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById(
    "seleccionar-mascota"
  );
  sectionSeleccionarMascota.style.display = "none";

  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "flex";

  let hipodoge = document.getElementById("hipodoge");
  let capipepo = document.getElementById("capipepo");
  let ratigueya = document.getElementById("ratigueya");
  let langostelvis = document.getElementById("langostelvis");
  let tucapalma = document.getElementById("tucapalma");
  let pydos = document.getElementById("pydos");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (hipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (capipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (ratigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else if (langostelvis.checked) {
    spanMascotaJugador.innerHTML = "Langostelvis";
  } else if (tucapalma.checked) {
    spanMascotaJugador.innerHTML = "Tucapalma";
  } else if (pydos.checked) {
    spanMascotaJugador.innerHTML = "Pydos";
  } else {
    alert("No seleccionaste tu mascota!");
  }
  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 6);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else if (mascotaAleatoria == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  } else if (mascotaAleatoria == 4) {
    spanMascotaEnemigo.innerHTML = "Langostelvis";
  } else if (mascotaAleatoria == 5) {
    spanMascotaEnemigo.innerHTML = "Tucapalma";
  } else {
    spanMascotaEnemigo.innerHTML = "Pydos";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje(" EMPATE 😑");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje(" GANASTE!🎉🎊");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje(" GANASTE!🎉🎊");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje(" GANASTE!🎉🎊");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje(" PERDISTE 😭");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES!! GANASTE!🎉🎊");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("LO SIENTO...PERDISTE 😭");
  }
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("resultado");

  sectionMensajes.innerHTML = resultadoFinal;

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let botonReiniciar = document.getElementById("reiniciar");
  botonReiniciar.style.display = "flex";
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("resultado");
  let ataqueDelJugador = document.getElementById("ataque-del-Jugador");
  let ataqueDelEnemigo = document.getElementById("ataque-del-Enemigo");

  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
