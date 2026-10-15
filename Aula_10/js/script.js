
const btn_l = document.getElementById('btn-lg');
const btn_d = document.getElementById('btn-dl');
const btn_ld = document.getElementById('btn-lg-dl');

const btn_v = document.querySelector('#btnVisivel');
const btn_v6 = document.querySelector('#alterna');

const lampada = document.getElementById('lamp');

// Ligar a lâmpada
function ligar() {
    lampada.src = './assets/images/images.png';
}

// Desligar a lâmpada
function desligar() {
    lampada.src = './assets/images/lamp.png';
}

// Alternar a lâmpada
function alternar() {
    if (lampada.getAttribute('src') === './assets/images/lamp.png') {
        ligar();
    } else {
        desligar();
    }
}

// ATIVIDADE 5: usando style.display
function alternaExibirFigura() {
    if (lampada.style.display === 'none') {
        lampada.style.display = 'block';
    } else {
        lampada.style.display = 'none';
    }
}

// ATIVIDADE 6: usando classList
function alternaClasse() {
    lampada.style.display = '';
    lampada.classList.toggle('oculta');
}

// Eventos dos botões
btn_l.addEventListener('click', ligar);
btn_d.addEventListener('click', desligar);
btn_ld.addEventListener('click', alternar);

btn_v.addEventListener('click', alternaExibirFigura);
btn_v6.addEventListener('click', alternaClasse);
