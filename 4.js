let Bedrag;
let Percentage;
let Maanden;
let Totaal;
let Maandbedrag;

function Bereken() {
    Bedrag = document.getElementById("Bedrag").value;
    Percentage = document.getElementById("Percentage").value;
    Maanden = document.getElementById("Maand").value;
    Totaal = (parseInt(Bedrag) + parseInt(Percentage) / 100) + parseInt(Bedrag);
    Maandbedrag = Totaal / parseInt(Maanden);
    document.getElementById("Maandbedrag").innerText = Maandbedrag;
}

