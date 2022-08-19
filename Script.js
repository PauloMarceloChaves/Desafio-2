// Declaração das lets:
let inputNome = document.querySelector('.inputNome');
let inputSelect = document.querySelector('.inputSelect');
let inputDigite = document.querySelector('.inputDigite');
let botao = document.querySelector('.botao');
let fulano = document.querySelector('.fulano');
let jogar = document.querySelector('.jogar');
let reset = document.querySelector('.reset');
let info = document.querySelector('.info');
let quanTentativas = document.querySelector('.quanTentativas');
let numSorteado;
let contador = 3;

// Alterando a cor e habilitando o botão (começar) ao adicionar um nick:
inputNome.addEventListener('input', function(){
    if (inputNome.value == "") {
        botao.disabled = true;
        botao.style.backgroundColor = '#B0A3A3';
    }
    else {
        botao.disabled = false;
        botao.style.backgroundColor = '#1180E6';
    }
});

// Habilitando os textos da tela e sorteando o numero a ser descoberto:
botao.addEventListener('click', function(){
    quanTentativas.innerHTML = "Você tem 3 tentativas!"
    fulano.innerHTML = inputNome.value;
    jogar.disabled = false;
    jogar.style.backgroundColor = '#F2890D';
    botao.disabled = true;
    botao.style.backgroundColor = '#B0A3A3';
    
    let valor = inputSelect.options[inputSelect.selectedIndex].value;
    let min, max;

    // Console com o valor:
    // console.log(valor);
    
    switch (valor) {
        case 'opcao1':
            min = 1;
            max = 10;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(numSorteado);
            return numSorteado
        case 'opcao2':
            min = 1;
            max = 100;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(numSorteado);
            return numSorteado
        case 'opcao3':
            min = 1;
            max = 200;
            numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(numSorteado);
            return numSorteado          
        default:
            break;
    }
});

// Função sorteio do jogo ao selecionar o intervalo:
function sortear(){
    let inputSelect = document.querySelector('.inputSelect');       
};

// Função para comparar o valor digitado ao sorteado e os resultados:
function conteudoSecundario(){
    let info = document.querySelector ('.info');

    if (inputDigite.value == numSorteado){
        info.innerHTML = "Parabéns, você conseguiu adivinhar!";
        jogar.disabled = true; 
        jogar.style.backgroundColor = '#B0A3A3';
        quanTentativas.innerHTML = "";
        reset.style.display = "block";
        jogar.style.display = "none";
    }   
    else if (inputDigite.value > numSorteado){
        info.innerHTML = "O número digitado é maior";
        contador = contador - 1;
        quanTentativas.innerHTML = `Você tem ${contador} tentativa(s)`;
    }
    else {
        info.innerHTML = "O número digitado é menor";
        contador = contador - 1;
        quanTentativas.innerHTML = `Você tem ${contador} tentativa(s)`;
    }
    if (contador == 0) {
        info.innerHTML = `Você perdeu! O número era ${numSorteado}.`;
        quanTentativas.innerHTML = "";
        jogar.disabled = true;
        jogar.style.backgroundColor = '#B0A3A3';
        reset.style.display = "block";
        jogar.style.display = "none";   
    }
};

// Criando um botão "Recomeçar":
reset.addEventListener('click', function(){
    inputDigite.value = "";
    quanTentativas.value = "";
    jogar.style.display = "block";
    reset.style.display = "none";
    info.innerHTML = ""; 
    contador = 3;    
    botao.disabled = false;
    botao.style.backgroundColor = '#1180E6';
});

// Jogar:
jogar.addEventListener('click', conteudoSecundario); 