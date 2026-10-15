const campoNota1 = document.getElementById("nota1");
const campoNota2 = document.getElementById("nota2");
const campoNota3 = document.getElementById("nota3");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpar = document.getElementById("btnLimpar");
const divResultado = document.getElementById("resultado");

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function descobrirSituacao(media) {
  if (media >= 6) {
    return "APROVADO";
  } else if (media < 4) {
    return "REPROVADO";
  } else {
    return "RECUPERAÇÃO";
  }
}

function mostrarResultado(mensagem, classe) {
  divResultado.innerHTML = mensagem;
  divResultado.className = "resultado " + classe;
}

btnCalcular.addEventListener("click", function () {
  if (campoNota1.value === "" || campoNota2.value === "" || campoNota3.value === "") {
    mostrarResultado("Preencha as três notas!", "erro");
    return;
  }

  const nota1 = Number(campoNota1.value);
  const nota2 = Number(campoNota2.value);
  const nota3 = Number(campoNota3.value);

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    mostrarResultado("As notas precisam estar entre 0 e 10.", "erro");
    return;
  }

  const media = calcularMedia(nota1, nota2, nota3);
  const situacao = descobrirSituacao(media);

  const texto = "Média: <strong>" + media.toFixed(2) + "</strong><br>Situação: <strong>" + situacao + "</strong>";

  if (situacao === "APROVADO") {
    mostrarResultado(texto, "aprovado");
  } else if (situacao === "REPROVADO") {
    mostrarResultado(texto, "reprovado");
  } else {
    mostrarResultado(texto, "recuperacao");
  }
});

btnLimpar.addEventListener("click", function () {
  campoNota1.value = "";
  campoNota2.value = "";
  campoNota3.value = "";
  divResultado.innerHTML = "";
  divResultado.className = "resultado";
  campoNota1.focus();
});