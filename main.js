const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamnhaSenha = 12;
numeroSenha.textContent = tamnhaSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;

function diminuiTamanho(){
    tamnhaSenha = tamnhaSenha-1;
    numeroSenha.textContent = tamnhaSenha;
}