let values = ["1", "1", "1", "2", "2", "3", "3", "4", "5","5", "6", "7", "7", "7", "8", "8", "9", "9", "9", "9"]
let nummer
let count


function getValue() {

    for (let teller = 0; teller < values.length; teller++) {
        if (nummer == values[teller]) {
            count++;
        }
    }
    document.getElementById("value").innerText = "Value: " + nummer;
    document.getElementById("value").innerText = "Amount of times shown: " + count;
}