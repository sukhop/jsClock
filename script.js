setInterval(setClock, 1000);

let hourHand = document.querySelector('[data-hour-hand]');
let minHand = document.querySelector('[data-min-hand]');
let secHand = document.querySelector('[data-sec-hand]');

function setClock() {
    let currentDate = new Date();

    let sec = currentDate.getSeconds()/60;
    let min = (sec + currentDate.getMinutes())/60;
    let hour = (min + currentDate.getHours())/12;

    setRotation(hourHand, hour);
    setRotation(minHand, min);
    setRotation(secHand, sec);
}

function setRotation(element, rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}

setClock();