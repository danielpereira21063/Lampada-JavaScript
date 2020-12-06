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
            addChild(img);
        }
    },
    apagar: function() {

    },
    quebrar: function() {

    }
}
function addChild(img) {
    div.appendChild(img);
}
function alterarNomeBtn() {
    
}
const inicializar = function() {
    img.src = './img/lampada-apagada.jpg';
    div.appendChild(img);
    button.innerHTML = 'Acender';
    lamp.quebrada = false;
}
inicializar();
button.addEventListener('click', function(){
    if(button.innerHTML == 'Acender') {
        lamp.acender();
    } else if(button.innerHTML == 'Apagar') {
        lamp.apagar();
    }
});