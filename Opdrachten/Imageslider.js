var img[1, 2, 3, 4 ,5 ,6 ,7 ,8]
var teller = 0;
var slideholder = document.getElementById("slideholder")
slideholder.style.backgroundImage = "url('imgEeveelutions/eevee1.png')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('imgEeveelutions/eevee" + getEevee() + ".png')";
});

function getEevee() {
    if(teller >= plaatjes.length) {
        teller = 1
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}