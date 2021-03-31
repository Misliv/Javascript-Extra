let Hexdecimaal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B" ,"C" ,"D", "E", "F"];

button.addEventListener("click", Kleur)

function Kleur () {
    let hex = "#"
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random()*Hexdecimaal.length)
        hex += Hexdecimaal;

    }
    body.style.backgroundColor = hex
}
