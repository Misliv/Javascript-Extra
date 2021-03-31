var img = [1, 2, 3];
var teller = 0;
var slideholder = document.getElementById("slideholder")
slideholder.style.backgroundImage = "url('../img/rock1.png')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('../img/rock" + getRock() + ".png')";
});

function getRock() {
    if(teller >= img.length) {
        teller = 1
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}