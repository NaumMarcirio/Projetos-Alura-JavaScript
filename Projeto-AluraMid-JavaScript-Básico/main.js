function tocaSom(elementAudio) {
  const element = document.querySelector(elementAudio);
  if (element && element.localName === "audio") {
    element.play();
  } else {
    console.log("NOT FOUND");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
