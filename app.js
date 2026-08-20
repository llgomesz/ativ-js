const calcy = () => {

  let portugues = parseFloat(document.getElementById('wd').value);
  let matematica = parseFloat(document.getElementById('maths').value);
  let tecnologia = parseFloat(document.getElementById('comp').value);
  let fisica = parseFloat(document.getElementById('phy').value);

  if (
    isNaN(portugues) ||
    isNaN(matematica) ||
    isNaN(tecnologia) ||
    isNaN(fisica)
  ) {
    document.getElementById('showData').innerHTML =
      'Preencha todas as notas antes de calcular.';

    document.getElementById('result').innerHTML = '';

    return;
  }

  if (
    portugues < 0 || portugues > 10 ||
    matematica < 0 || matematica > 10 ||
    tecnologia < 0 || tecnologia > 10 ||
    fisica < 0 || fisica > 10
  ) {
    document.getElementById('showData').innerHTML =
      'As notas devem estar entre 0 e 10.';

    document.getElementById('result').innerHTML = '';

    return;
  }

  let soma =
    portugues +
    matematica +
    tecnologia +
    fisica;

  let media = soma / 4;

  media = media.toFixed(2);

  document.getElementById('showData').innerHTML =
    `Sua média final é ${media}.`;

  if (media >= 6) {

    document.getElementById('result').innerHTML =
      'APROVADO';

  } else {

    document.getElementById('result').innerHTML =
      'REPROVADO';

  }
};

// CÓDIGO DA AULA

// let nota1 = 8;
// let nota2 = 7;
// const quantidadeDeNotas = 2;

// let nomeAluno = "Ana";
// let nota1 = 8.5;
// let nota2 = 7;
// const escola = "E.E Alberto Santos Dumont"

// console.log(nomeAluno)
// console.log(nota1);
// console.log(nota2);
// console.log(escola);

// String: nomes, mensagens e textos 
// Number: quantidadeDeNotas, idades e cálculos
// Boolean: true/false - consições lógicas
// Array: listas
// Object: informações interligadas. Miguel tirou 8 de matemática

// Operadores matemáticos
// soma: "+"
// subtração: "-"
// multiplicação: "*"
// divisão: "/"