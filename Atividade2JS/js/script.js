const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6 },
  { nome: "Carla", nota: 9.5 },
  { nome: "Diego", nota: 4.5 },
  { nome: "Eduarda", nota: 7 }
];

const divResultado = document.getElementById("resultado");

function listaAlunos() {
  let texto = "";

  alunos.forEach(function (item, indice, array) {
    console.log("O aluno " + item.nome + ` teve nota ${item.nota}`);
    texto += "<p>O aluno <strong>" + item.nome + "</strong> teve nota <strong>" + item.nota + "</strong></p>";
  });

  divResultado.innerHTML = "<h2>Todos os alunos</h2>" + texto;
}

function maiorNota() {
  let maior = alunos[0].nota;

  alunos.forEach(function (item) {
    if (item.nota > maior) {
      maior = item.nota;
    }
  });

  
  let texto = "";
  alunos.forEach(function (item) {
    if (item.nota === maior) {
      texto += "<p>O aluno <strong>" + item.nome + "</strong> teve nota <strong>" + item.nota + "</strong></p>";
    }
  });

  divResultado.innerHTML = "<h2>Maior nota</h2>" + texto;
}


function menorNota() {
  let menor = alunos[0].nota;

  alunos.forEach(function (item) {
    if (item.nota < menor) {
      menor = item.nota;
    }
  });

  let texto = "";
  alunos.forEach(function (item) {
    if (item.nota === menor) {
      texto += "<p>O aluno <strong>" + item.nome + "</strong> teve nota <strong>" + item.nota + "</strong></p>";
    }
  });

  divResultado.innerHTML = "<h2>Menor nota</h2>" + texto;
}