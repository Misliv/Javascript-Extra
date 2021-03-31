let elementen = [];

for (let i = 0; i < 10; i++) {
elementen.push(document.createElement("div"));
}

for (let i = 0; i < elementen.length; i++){
   document.getElementById("Baas").appendChild(elementen[i]);
   elementen[i].id = i + 1;
   elementen[i].className = "a";
   elementen[i].innerText = "b" + i;
}