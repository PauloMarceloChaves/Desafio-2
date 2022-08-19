let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let botao1 = document.querySelector('.botao1');
let fulano = document.querySelector('.fulano');
let quanTentativas = document.querySelector('.quanTentativas');
let botao2 = document.querySelector('.botao2');
let numSorteado;

input1.addEventListener('input', function(){
    if (input1.value === "") {
        botao1.disabled = true;
        botao1.style.backgroundColor = '#B0A3A3';
    }
    else {
        botao1.disabled = false;
        botao1.style.backgroundColor = '#1180E6';
    }
});

botao1.addEventListener('click', function(){
    quanTentativas.innerHTML = "Você tem 3 tentativas!"
    fulano.innerHTML = input1.value;
    
    let valor = input2.options[input2.selectedIndex].value;
    let min, max;
    console.log(valor);
})
   /* switch (valor) {
        case 'opcao1':
            min = 1;
            max = 10;
            numSorteado = Math.floor(Math.random() * (max=min+1))+min;
            console.log(numSorteado);
           // return numSorteado
        case 'opcao2':
            min = 1;
            max = 100;
            numSorteado = Math.floor(Math.random() * (max=min+1))+min;
            console.log(numSorteado);
           // return numSorteado
        case 'opcao3':
            min = 1;
            max = 200;
            numSorteado = Math.floor(Math.random() * (max=min+1))+min;
            console.log(numSorteado);
          //  return numSorteado          
        default:
            break;
    }
});

function sortear(){
    let input2 = document.querySelector('.input2');
    let valor = input2.options[input2.selectedIndex].value;
    let min, max;
    console.log(valor);

    switch (valor) {
        case 'opcao1':
            min = 1;
            max = 10;
            numSorteado = Math.floor(Math.random() * (max=min+1))+min;
            console.log(numSorteado);
            return numSorteado
        case 'opcao2':
            min = 1;
            max = 100;
            numSorteado = Math.floor(Math.random() * (max=min+1))+min;
            console.log(numSorteado);
            return numSorteado
        case 'opcao3':
            min = 1;
            max = 200;
            numSorteado = Math.floor(Math.random() * (max=min+1))+min;
            console.log(numSorteado);
            return numSorteado          
        default:
            break;
    }
    
    const resetar = () => {
        botao1.addEventListener('click', function () {
            botao1.innerHTML = "RECOMEÇAR";
            tentativas = 3;
            text3.innerHTML = "";
            quanTentativas.innerHTML = `Você ainda tem ${tentativas} tentativas`;
            botao1.style.display = "initial";
        })
    }
}

function conteudoSecundario(){
    let input3 = parseInt (document.querySelector('.input3').value);
    let info = document.querySelector ('.info');

    if (numero == numSorteado){
        info.innerHTML = "Parabéns, você conseguiu adivinhar!";
        botao2.disabled = true; 
        const resetar = () => {
            botao1.addEventListener('click', function () {
                botao1.innerHTML = "RECOMEÇAR";
                tentativas = 3;
                text3.innerHTML = "";
                quanTentativas.innerHTML = `Você ainda tem ${tentativas} tentativas`;
                botao1.style.display = "initial";
            })
        }   
    }
    else if (numero > numSorteado){
        info.innerHTML = "O número digitado é maior";
    }
    else {
        info.innerHTML = "O número digitado é menor";
        const resetar = () => {
            botao1.addEventListener('click', function () {
                botao1.innerHTML = "RECOMEÇAR";
                tentativas = 3;
                text3.innerHTML = "";
                quanTentativas.innerHTML = `Você ainda tem ${tentativas} tentativas`;
                botao1.style.display = "initial";
            })
        }
    }

botao2.addEventListener('click', conteudoSecundario) 
}

const resetar = () => {
    comecar.addEventListener('click', function () {
        comecar.innerHTML = "COMEÇAR";
        qntTentativas = 3;
        saida.innerHTML = "";
        tentativa.innerHTML = `Você ainda tem ${qntTentativas} tentativas`;
        jogar.style.display = "initial";
    })
}*/