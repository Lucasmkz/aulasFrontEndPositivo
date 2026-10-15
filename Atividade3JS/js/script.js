const atletas = [
  { nome: "Lucas", idade: 24, altura: 1.92, esporte: "Basquete" },
  { nome: "Mariana", idade: 21, altura: 1.78, esporte: "Vôlei" },
  { nome: "Rafael", idade: 29, altura: 1.75, esporte: "Futebol" },
  { nome: "Camila", idade: 26, altura: 1.68, esporte: "Natação" },
  { nome: "Thiago", idade: 33, altura: 1.83, esporte: "Handebol" },
  { nome: "Juliana", idade: 19, altura: 1.65, esporte: "Ginástica" },
  { nome: "Pedro", idade: 31, altura: 1.88, esporte: "Vôlei" }
];

const divResultado = document.getElementById("resultado");

function montarCartao(atleta) {
  return "<p><strong>" + atleta.nome + "</strong><br>" +
    "Idade: " + atleta.idade + " anos<br>" +
    "Altura: " + atleta.altura.toFixed(2) + " m<br>" +
    "Esporte: " + atleta.esporte + "</p>";
}

function listaAtletas() {
  let texto = "";

  atletas.forEach(function (item) {
    texto += montarCartao(item);
  });

  divResultado.innerHTML = "<h2>Todos os atletas</h2>" + texto;
}

function atletaMaisAlto() {
  let maiorAltura = atletas[0].altura;

  atletas.forEach(function (item) {
    if (item.altura > maiorAltura) {
      maiorAltura = item.altura;
    }
  });

  let texto = "";

  atletas.forEach(function (item) {
    if (item.altura === maiorAltura) {
      texto += montarCartao(item);
    }
  });

  divResultado.innerHTML = "<h2>Atleta mais alto</h2>" + texto;
}

function atletaMaisVelho() {
  let maiorIdade = atletas[0].idade;

  atletas.forEach(function (item) {
    if (item.idade > maiorIdade) {
      maiorIdade = item.idade;
    }
  });

  let texto = "";

  atletas.forEach(function (item) {
    if (item.idade === maiorIdade) {
      texto += montarCartao(item);
    }
  });

  divResultado.innerHTML = "<h2>Atleta mais velho</h2>" + texto;
}