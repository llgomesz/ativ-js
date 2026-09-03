"use strict"; // Ativa o modo estrito do JavaScript

const changeBtn = document.querySelector(".generate"); // Seleciona o botão com a classe "generate"
const colorTitle = document.querySelector("#color-tag"); // Seleciona o elemento com id "color-tag"

const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]; // Caracteres usados em cores hexadecimais

let hexCode = ""; // Guarda a nova cor gerada
let lastCode = ""; // Guarda a última cor gerada

const generateColor = function () { // Cria a função que gera uma nova cor

  do { // Repete até gerar uma cor diferente da anterior

    hexCode = ""; // Limpa a cor anterior

    for (let i = 0; i < 6; i++) { // Repete 6 vezes para formar uma cor hexadecimal
      hexCode += hexArr[Math.floor(Math.random() * hexArr.length)]; // Sorteia um caractere e adiciona à cor
    }

  } while (hexCode === "" || hexCode === lastCode); // Repete se estiver vazio ou igual à última cor

  lastCode = hexCode; // Guarda a cor atual como última cor

  updateTxt(hexCode); // Atualiza o código da cor mostrado na tela
  changeBg(hexCode); // Altera a cor de fundo da página

  const red = parseInt(hexCode.substring(0, 2), 16); // Converte a parte vermelha do hexadecimal para número
  const green = parseInt(hexCode.substring(2, 4), 16); // Converte a parte verde para número
  const blue = parseInt(hexCode.substring(4), 16); // Converte a parte azul para número

  const avg = (red + green + blue) / 3; // Calcula a média das três cores

  if (avg > 128) { // Verifica se a cor de fundo é clara
    document.body.style.color = "#000000"; // Usa texto preto em fundo claro
  } else { // Caso a cor de fundo seja escura
    document.body.style.color = "#ffffff"; // Usa texto branco em fundo escuro
  }
};

const updateTxt = function (code) { // Função que atualiza o texto da cor
  colorTitle.innerHTML = `#${code}`; // Mostra o código hexadecimal na tela
};

const changeBg = function (code) { // Função que muda o fundo da página
  document.body.style.backgroundColor = `#${code}`; // Aplica a nova cor ao fundo
};

changeBtn.addEventListener("click", generateColor); // Executa generateColor quando o botão for clicado