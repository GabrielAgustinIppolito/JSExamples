var x = 3;
console.log("type of x = " + typeof x);

x = "ciccio";
console.log("type of x = " + typeof x);

x = true;
console.log("type of x = " + typeof x);

x = {
    name: "Riccardo",
    age: 13,
    teach: function(){
        console.log("Studiate tutta la notte");
    }
};
console.log("type of x = " + typeof x);

x = new Date;
console.log("type of x = " + typeof x);

x = [1, "ciccio", true];
console.log("type of x = " + typeof x);

x = null;
console.log("type of x = " + typeof x);

x = undefined;
console.log("type of x = " + typeof x);

//console.log("vaore di funzione non presente in x = " + typeof x.color)

var y = "pippo"; //stringa primitiva pippo
var z = y.slice(1,3); //stringa contenente sottostringa pip, js trasforma y in un oggetto stringa con wrapp e unwrapp continui

function f() {

}
// Hoisting variable... come se tutti i var come definizione, non assegnazione galleggiassero
// in cima al file
console.log(t);
var t = 3;
if(3 == 1){
    var p = 32;
}

console.log(p);

// console.log(zz); //questo va in bomba
// let zz = 12;     // BLOCK SCOPED

let btn = document.getElementById("occhio-di-coraline");
let btn1 = document.querySelector("#occhio-di-coraline"); //fa la query come in css in base al browser
let elements = document.querySelectorAll(".myclass"); //assume di trovare potenzialmente più elementi, tutti quelli della classe
// i due subito sopra si ereditano in js da JQuery
// btn.addEventListener("click", function(evt){
//   evt.preventDefault();
//   console.log("Bottone cliccato!");  
// });

btn1.addEventListener("click", g);

function g(e) {
    e.preventDefault();
    console.log("bottone cliccato");
}
