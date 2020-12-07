const img = new Image();
const div = document.querySelector('div#container-lamp');
const button = document.querySelector('button#turn');
const lampInfo = document.querySelector('h1#lamp-info');
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
            mudarImagem(img);
            alterarNomeBotao('Apagar');
        }
    },
    apagar: function() {
        if(!lamp.quebrada) {
            img.src = lamp.src.apagada;
            mudarImagem(img);
            alterarNomeBotao('Acender');
        }
    },
    quebrar: function() {
        if(!lamp.quebrada) {
            lamp.quebrada = true;
            img.src = lamp.src.quebrada;
            mudarImagem(img);
            alterarNomeBotao('Reiniciar');
        }
    }
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
    alterarNomeBotao('Acender');
    mudarImagem(img);
}
div.addEventListener('dblclick', lamp.quebrar);
button.addEventListener('click', function(){
    if(button.innerHTML == 'Acender') {
        lamp.acender();
    } else if(button.innerHTML == 'Apagar') {
        lamp.apagar();
    } else if(button.innerHTML == 'Reiniciar') {
        inicializar();
    }
});
div.addEventListener('mouseenter', lamp.acender);
div.addEventListener('mouseleave', lamp.apagar);
inicializar();