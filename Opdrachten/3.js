let getalEen = "";
let getalTwee = "";
let berekeningswaarde = "";
let resultaat = 0;

function Tel1 () {
    if (berekeningswaarde == "") {
    getalEen += "1";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "1"
        document.getElementById("huidiggetal").innerText = getalTwee;
    }
}

function Tel2 () {
    if (berekeningswaarde == "") {
    getalEen += "2";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "2";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }

}
function Tel3 () {
    if (berekeningswaarde == "") {
    getalEen += "3";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "3";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }

}
function Tel4 () {
    if (berekeningswaarde == "") {
    getalEen += "4";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "4";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }

}
function Tel5 () {
    if (berekeningswaarde == "") {
    getalEen += "5";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "5";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }

}
function Tel6 () {
    if (berekeningswaarde == "") {
    getalEen += "6";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "6";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }

}
function Tel7 () {
    if (berekeningswaarde == "") {
    getalEen += "7";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "7";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }

}
function Tel8 () {
    if (berekeningswaarde == "") {
    getalEen += "8";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "8";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }

}
function Tel9 () {
    if (berekeningswaarde == "") {
    getalEen += "9";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "9";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }

}
function Tel10 () {
    if (berekeningswaarde == "") {
    getalEen += "0";
    document.getElementById("huidiggetal").innerText = getalEen;
    }
    else {
        getalTwee += "0";
        document.getElementById("huidiggetal").innerText = getalTwee;
    }

}

function TelPlus (){
    berekeningswaarde = "+";
}

function TelMin (){
    berekeningswaarde = "-";
}
function TelKeer (){
    berekeningswaarde = "*";
}
function TelDeel (){
    berekeningswaarde = "/";
}

function TelIs(){
    if(berekeningswaarde == "+") {
        resultaat = parseInt(getalEen) + parseInt(getalTwee);
        document.getElementById("huidiggetal").innerText = resultaat;

    }
    else if (berekeningswaarde == "-") {
        resultaat = parseInt(getalEen) - parseInt(getalTwee);
        document.getElementById("huidiggetal").innerText = resultaat;
    }
    else if (berekeningswaarde == "*") {
        resultaat = parseInt(getalEen) * parseInt(getalTwee);
        document.getElementById("huidiggetal").innerText = resultaat;
    }
    else if (berekeningswaarde =="/") {
        resultaat = parseInt(getalEen) / parseInt(getalTwee);
        document.getElementById("huidiggetal").innerText = resultaat;
    }
}