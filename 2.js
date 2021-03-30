let teller = 0;
document.getElementById("HuidigNummer").innerText = teller;
function Plus() {
    teller++;
    document.getElementById("HuidigNummer").innerText = teller;
}

function Min() {
    teller--;
    document.getElementById("HuidigNummer").innerText = teller;
}