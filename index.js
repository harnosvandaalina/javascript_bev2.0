let pELem = document.getElementById("szoveg");
let inputElem = document.getElementById("tevekenyseg");
let gombElem = document.getElementById("gomb");


let tevlista = [];
pELem.innerHTML = "valami";
inputElem.value = "masik valami";
gombElem.innerHTML = "kattints";
gombElem.addEventListener("click", fuggvenyem);


function fuggvenyem() {
  console.log("jo hogy kattintottal");
  let adat = inputElem.value;
  tevlista.push(adat);
  felsorolas();
  kiir2();
  console.log(tevlista);
  
}


function felsorolas(){
    let tartalom = "<ol>";
    for (let index = 0; index < tevlista.length; index++) {
        tartalom += <li>&{tevlista[index]}</li>;
    }
    tartalom += "</ol>"
    console.log(tartalom);
    pELem.innerHTML=tartalom;

}

/*JS objektum kulcs-par ertekekbol all*/

let tevlista2 = [
    {
    nev: "Hazi feladat elkeszitese",
    allapot: "varat magara",
    fontossag: true
    },
    {
    nev: "vacsora keszitese",
    allapot: "folyamatban",
    fontossag: false
    }]

function kiir2 (){
    let szoveg = "<ol>"
    for (let index = 0; index < tevlista2.length; index++) {
        szoveg += 
            <li>
                <span>${tevlista2[index].nev}</span>
                <span><b>allapot:</b>${tevlista2[index].allapot}</span>
                <span><b>fontossag</b>${tevlista2[index].fontossag}</span>
            </li>
        
    }
}
