Btn = document.querySelector("#Btn-teste");
input = document.querySelector("#input");
resultado = document.querySelector("#result");

function verificaPalavraPalindromo() {
  let palavra = input.value;
  let palavraSeparada = palavra.split("");
  let palavraSeparadaInvertida = palavraSeparada.reverse();
  let palavrainvertida = palavraSeparadaInvertida.join("");

  if (palavra == palavrainvertida) {
    resultado.innerHTML = "É UM PALÍNDROMO";
  } else {
    resultado.innerHTML = "NÃO É UM PALÍNDROMO";
  }
}

Btn.addEventListener("click", verificaPalavraPalindromo);
