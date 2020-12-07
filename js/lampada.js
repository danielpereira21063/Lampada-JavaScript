const img = new Image();
const div = document.querySelector('div#container-lamp');
const button = document.querySelector('button#turn');

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
    button.innerHTML = 'Acender';
    mudarImagem(img);
}
button.addEventListener('click', function(){
    if(button.innerHTML == 'Acender') {
        lamp.acender();
    } else if(button.innerHTML == 'Apagar') {
        lamp.apagar();
    } else if(button.innerHTML == 'Reiniciar') {
        inicializar();
    }
});
inicializar();
div.addEventListener('dblclick', lamp.quebrar);