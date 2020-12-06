const img = new Image();
const div = document.querySelector('div#container-lamp');
const button = document.querySelector('button#turn');
const buttons = {
    txt: {
        on: 'Ligar',
        off: 'Desligar',
        restart: 'Reiniciar'
    }
}
const lamps = {
    acesa: false,
    intacta: true, // INFORMACAO SE A LAMPADA ESTÁ QUEBRADA OU NAO
    off: './img/lampada-apagada.jpg',
    on: './img/lampada-acesa.jpg',
    broken: './img/lampada-quebrada.jpg',
    add: function(src) {
        img.src = src;
        div.appendChild(img);
    },
    turn: function() {
        if(lamps.intacta) {
            if(!lamps.acesa) {
                button.innerHTML = buttons.txt.on;
                lamps.add(lamps.off);
                lamps.acesa = true;
            } else if(lamps.acesa) {
                button.innerHTML = buttons.txt.off;
                lamps.add(lamps.on);
                lamps.acesa = false;
            }
        }
    },
    lampIsBroken: function() {
        if(lamps.broken) {
            return true;
        } else {
            return false;
        }
    }
};

button.addEventListener('click', lamps.turn);
function load() {
    img.src = lamps.off;
    div.appendChild(img);
    lamps.turn();
}
load();