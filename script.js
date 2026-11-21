const btnModoOscuro = document.getElementById("btn-modo-oscuro");
const btnLeerMas = document.getElementById("btn-leer-mas");
const textoExtra = document.getElementById("texto-extra");

btnModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");

  if (document.body.classList.contains("modo-oscuro")) {
    btnModoOscuro.textContent = "Modo normal";
  } else {
    btnModoOscuro.textContent = "Modo oscuro";
  }
});

btnLeerMas.addEventListener("click", () => {
  textoExtra.classList.toggle("visible");

  if (textoExtra.classList.contains("visible")) {
    btnLeerMas.textContent = "Leer menos";
  } else {
    btnLeerMas.textContent = "Leer más";
  }
});