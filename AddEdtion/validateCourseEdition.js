//Creare una form per l'inserimento di un edizione corso
// i campi di questa form saranno: 
//             data inizio edizione                                         +++
//             id corso di che ha questa edizione                           +++
//             numero di moduli che comprenderà quest'edizione              +++
// nome della classe di riferimento dell'deizione           +++
// deve essere disabled il tasto all'inizio,                                +++
//se entri in un campo e esci senza settarlo,                               +++
// js deve dirti per esempio (la data deve essere da oggi in poi)           +++
// l'id del corso deve essere un numero intero positivo                     +++
// il numero di moduli deve essere compreso fra 1 e 10                      +++
// il nome della classe deve contenere la parola "classe" nella sua stringa
// dopo aver rispettato tutte queste regole il bottone sarà abilitato

const btnAddCE = document.querySelector("#addEditionButton");
let actualDate = new Date(Date.now());

let insDate = document.querySelector("#date");
let insIdCourse = document.querySelector("#idCourse");
let insModules = document.querySelector("#modulesNumber");
let insNameClass = document.querySelector("#nameClass");

let validDate = false;
let validID = false;
let validMod = false;
let validName = false;

actualDate.setHours(0, 0, 0, 0);
console.log(actualDate);
btnAddCE.disabled = true;

insDate.addEventListener("focusout", (event) => {
    let spanError = document.querySelector("#date + span");
    if (!insDate.value) { //in js una stringa vuota si converte a false, o undefined o null
        spanError.innerHTML = "La data non può essere vuota";
        validDate = false;
        validateForm();
        return;
    }
    let selectedDateMilis = Date.parse(insDate.value);
    if (selectedDateMilis < actualDate.getTime()) {
        spanError.innerHTML = "La data non può essere nel passato";
        validDate = false;
        validateForm();
        return;
    } 
    validDate = true;
    validateForm();
    spanError.innerHTML = "";
 
});

insIdCourse.addEventListener("focusout", (event) => {
    let spanError = document.querySelector("#idCourse + span");
    if (!insIdCourse.value) {
        spanError.innerHTML = "Il campo dell' id deve essere riempito."
        validID = false;
        validateForm();
        return;
    }
    let idFloat = parseFloat(insIdCourse.value);
    let idInt = parseInt(insIdCourse.value);
    if(idFloat != idInt) {
        spanError.innerHTML = "Il campo dell' id deve essere compilato con un intero."
        validID = false;
        validateForm();
        return;
    }
    if (idInt < 1) {
        spanError.innerHTML = "L'id deve essere un intero maggiore di 0";
        validID = false;
        validateForm();
        return
    }
    validID = true;
    validateForm();
    spanError.innerHTML = "";
});

insModules.addEventListener("focusout", (event) => {
    //nello span affianco appaia l'errore in rosso

    let spanError = document.querySelector("#modulesNumber + span");
    
    if (insModules.value == "") {
        spanError.innerHTML = "Il campo deve essere un numero!";
        validMod = false;
        validateForm();
        return;
    }

    let numModulesFloat = parseFloat(insModules.value);
    let numModules = parseInt(insModules.value);

    if(isNaN(numModules)){                          //not a number
        spanError.innerHTML = "Il campo deve essere un numero!";
        validMod = false;
        validateForm();
        return;
    } 
    if(numModulesFloat != numModules){
        spanError.innerHTML = "Il campo deve essere un numero intero!";
        validMod = false;
        validateForm();
        return;
    }
    if (numModules < 1 || numModules > 10) {
        spanError.innerHTML = "Il numero dei moduli deve essere un intero fra 1 e 10 (inclusi).";
        validMod = false;
        validateForm();
    } else {
        validMod = true;
        validateForm();
        spanError.innerHTML = "";
    }
});

insNameClass.addEventListener("input", (event) => {
    let spanError = document.querySelector("#nameClass + span");
    if (!insNameClass.value) {
        spanError.innerHTML = "Il campo deve essere riempito.";
        validName = false;
        validateForm();
        return;
    }
    if(!insNameClass.value.includes("class")){
        spanError.innerHTML = "Il nome della classe deve contenere la parola class";
        validName = false;
        validateForm();
        return;
    }
    spanError.innerHTML = "";
    validName = true;
    validateForm();
});

insNameClass.addEventListener("blur", (event) => {
    let spanError = document.querySelector("#nameClass + span");
    if (!insNameClass.value) {
        spanError.innerHTML = "Il campo deve essere riempito.";
        validName = false;
        validateForm();
        return;
    }
})

function validateForm(){
    if(!validDate || !validID || !validMod || !validName) {
        btnAddCE.disabled = true;
    } else {
        btnAddCE.disabled = false;
    }
}

