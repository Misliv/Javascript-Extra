let body = document.getElementById("body");
let Hexdecimaal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B' , 'C' ,'D', 'E', 'F'];


function Kleur () {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random()*Hexdecimaal.length);
        hex += Hexdecimaal[index];
    }
    let square = document.getElementById('square');
    square.style.backgroundColor = hex
}
