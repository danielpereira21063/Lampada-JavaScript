const img = new Image();
const div = document.querySelector('div#container-lamp');
const lampImg = document.querySelector('img#img');
const button = document.querySelector('button#turn');
let broken = false;
const lamp = {
        src: './img/lampada-acesa.jpg',
        src: './img/lampada-apagada.jpg',
        src: './img/lampada-quebrada.jpg',
    addChild: function(src) {
        lampImg.src = src;
        div.appendChild(lampImg);
    },
    turn: function() {
        if(!lampIsBroken()) {
            if(lamp.src !== './img/lampada-apagada.jpg') {
                this.addChild(lamp.src);
            }
        }
    }
};

function lampIsBroken() {
    if(broken) {
        return true;
    } else {
        return false;
    }
}

button.addEventListener('click', function() {
    lamp.turn();
});
const load = function() {
    div.appendChild(lampImg);
    lampImg.src = './img/lampada-apagada.jpg';
}
load();