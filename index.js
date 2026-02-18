let pELem =document.getElementById("szoveg")
let inputElem = document.getElementById("tevekenyseg")
let gombElem = document.getElementById("gomb")


pELem.innerHTML = "valami";

inputElem.value = "masik valami";

gombElem.innerHTML = "kattints";
gombElem.addEventListener("click", fuggvenyem)


function fuggvenyem(){
    console.log("jo hogy kattintottal")
}