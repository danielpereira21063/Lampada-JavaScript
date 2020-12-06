const img = new Image();
const div = document.querySelector('div#container-lamp');
const lampImg = document.querySelector('img#img');
const button = document.querySelector('button#turn');
let broken = false;
const lamps = {
    state: {
        src: './img/lampada-acesa.jpg',
        src: './img/lampada-apagada.jpg',
        src: './img/lampada-quebrada.jpg'
    },
    addChild: function(src) {
        lampImg.src = src;
        div.appendChild(lampImg);
    },
    turn: function() {
        if(!lampIsBroken()) {
            
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

button.addEventListener('click', lamps.turn);
function load() {
    lamps.state.src = './img/lampada-apagada.jpg';
    img.src = lamps.state.src;
    div.appendChild(img);
}
load();