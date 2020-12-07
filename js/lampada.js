const img = new Image();
const div = document.querySelector('div#container-lamp');
const button = document.querySelector('button#turn');
const lampInfo = document.querySelector('h1#lamp-info');
const btn = {
    acender: 'Acender',
    apagar: 'Apagar',
    reiniciar: 'Reiniciar'
}
const lamp = {
    altura: 220,
    largura: 170,
    quebrada: false,
    src: {
        acesa: './img/lampada-acesa.jpg',
        apagada: './img/lampada-apagada.jpg',
        quebrada: './img/lampada-quebrada.jpg'
    },
    acender: function() {
        if(!lamp.quebrada) {
            img.src = lamp.src.acesa;
            mudarImagem(img);
            mudarLampInfo('A lâmpada foi acesa');
            alterarNomeBotao(btn.apagar);
        }
    },
    apagar: function() {
        if(!lamp.quebrada) {
            img.src = lamp.src.apagada;
            mudarImagem(img);
            alterarNomeBotao(btn.acender);
            mudarLampInfo('A lâmpada foi apagada');
        }
    },
    quebrar: function() {
        if(!lamp.quebrada) {
            lamp.quebrada = true;
            img.src = lamp.src.quebrada;
            alterarNomeBotao(btn.reiniciar);
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
    img.height = lamp.altura;
    img.width - lamp.largura;
    lamp.quebrada = false;
    img.src = './img/lampada-apagada.jpg';
    mudarImagem(img);
    alterarNomeBotao('Acender');
    mudarLampInfo('A lâmpada está apagada');
}
button.addEventListener('click', function(){
    if(button.innerHTML == btn.acender) {
        lamp.acender();
    } else if(button.innerHTML == btn.apagar) {
        lamp.apagar();
    } else if(button.innerHTML == btn.reiniciar) {
        inicializar();
    }
});
div.addEventListener('mouseenter', lamp.acender);
div.addEventListener('mouseleave', lamp.apagar);
div.addEventListener('dblclick', lamp.quebrar);
inicializar();