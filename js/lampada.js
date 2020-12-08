const img = new Image();
const div = document.querySelector('div#container-lamp');
const button = document.querySelector('button#turn');
const lampInfo = document.querySelector('h1#lamp-info');
const btnAcoes = {
    acender: 'Acender',
    apagar: 'Apagar',
    reiniciar: 'Reiniciar'
}
const lamp = {
    quebrada: false,
    src: {
        acesa: './img/lampada-acesa.jpg',
        apagada: './img/lampada-apagada.jpg',
        quebrada: './img/lampada-quebrada.jpg'
    },
    acender: function() {
        if(!lamp.quebrada) {
            img.src = lamp.src.acesa;
            alterarNomeBotao(btnAcoes.apagar);
            mudarImagem(img);
            mudarLampInfo('A lâmpada foi acesa');
        }
    },
    apagar: function() {
        if(!lamp.quebrada) {
            img.src = lamp.src.apagada;
            alterarNomeBotao(btnAcoes.acender);
            mudarImagem(img);
            mudarLampInfo('A lâmpada foi apagada');
        }
    },
    quebrar: function() {
        if(!lamp.quebrada) {
            lamp.quebrada = true;
            img.src = lamp.src.quebrada;
            alterarNomeBotao(btnAcoes.reiniciar);
            mudarImagem(img);
            mudarLampInfo('A lâmpada foi quebrada');
        }
    }
}
function mudarLampInfo(newName) {
    lampInfo.innerHTML = newName;
}
function mudarImagem(img) {
    div.appendChild(img);
}
function alterarNomeBotao(newName) {
    button.innerHTML = newName;
}
const inicializar = function() {
    lamp.quebrada = false;
    img.src = './img/lampada-apagada.jpg';
    mudarImagem(img);
    alterarNomeBotao('Acender');
    mudarLampInfo('A lâmpada está apagada');
}
button.addEventListener('click', function(){
    if(button.innerHTML == btnAcoes.acender) {
        lamp.acender();
    } else if(button.innerHTML == btnAcoes.apagar) {
        lamp.apagar();
    } else if(button.innerHTML == btnAcoes.reiniciar) {
        inicializar();
    }
});
div.addEventListener('mouseenter', lamp.acender);
div.addEventListener('mouseleave', lamp.apagar);
div.addEventListener('dblclick', lamp.quebrar);
inicializar();