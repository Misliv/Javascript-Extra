let img = [1, 2, 3];
let teller = 0;
let slideholder = document.getElementById("slideholder")
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