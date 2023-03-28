let validator = {
    btnAddCE: document.querySelector("#addEditionButton"),
    actualDate: new Date(Date.now()),
    insDate: document.querySelector("#date"),
    insIdCourse: document.querySelector("#idCourse"),
    insModules: document.querySelector("#modulesNumber"),
    insNameClass: document.querySelector("#nameClass"),
    validDate: false,
    validID: false,
    validMod: false,
    validName: false,

    
    validDateFunction: function (event) {
        let spanError = document.querySelector("#date + span");
        if (!this.insDate.value) { //in js una stringa vuota si converte a false, o undefined o null
            spanError.innerHTML = "La data non può essere vuota";
            this.validDate = false;
            this.validateForm();
            return;
        }
        let selectedDateMilis = Date.parse(this.insDate.value);
        if (selectedDateMilis < this.actualDate.getTime()) {
            spanError.innerHTML = "La data non può essere nel passato";
            this.validDate = false;
            this.validateForm();
            return;
        }
        this.validDate = true;
        this.validateForm();
        spanError.innerHTML = "";
    },
    validateForm: function () {
        if (!this.validDate || !this.validID || !this.validMod || !this.validName) {
            this.btnAddCE.disabled = true;
        } else {
            this.btnAddCE.disabled = false;
        }
    },

    validateIdFunction: function(event)  {
        let spanError = document.querySelector("#idCourse + span");
        if (!this.insIdCourse.value) {
            spanError.innerHTML = "Il campo dell' id deve essere riempito."
            this.validID = false;
            this.validateForm();
            return;
        }
        let idFloat = parseFloat(this.insIdCourse.value);
        let idInt = parseInt(this.insIdCourse.value);
        if(idFloat != idInt) {
            spanError.innerHTML = "Il campo dell' id deve essere compilato con un intero."
            this.validID = false;
            this.validateForm();
            return;
        }
        if (idInt < 1) {
            spanError.innerHTML = "L'id deve essere un intero maggiore di 0";
            this.validID = false;
            this.validateForm();
            return
        }
        this.validID = true;
        this.validateForm();
        spanError.innerHTML = "";
    },

    validateNumModules: function (event) {
        let spanError = document.querySelector("#modulesNumber + span");
        if (this.insModules.value == "") {
            spanError.innerHTML = "Il campo non può rimanere vuoto";
            this.validMod = false;
            this.validateForm();
            return;
        }
        let numModulesFloat = parseFloat(this.insModules.value);
        let numModules = parseInt(this.insModules.value);
        if(isNaN(this.numModules)){                          //not a number
            spanError.innerHTML = "Il campo deve essere un numero!";
            this.validMod = false;
            this.validateForm();
            return;
        } 
        if(numModulesFloat != numModules){
            spanError.innerHTML = "Il campo deve essere un numero intero!";
            this.validMod = false;
            this.validateForm();
            return;
        }
        if (numModules < 1 || numModules > 10) {
            spanError.innerHTML = "Il numero dei moduli deve essere un intero fra 1 e 10 (inclusi).";
            this.validMod = false;
            this.validateForm();
        } else {
            this.validMod = true;
            this.validateForm();
            spanError.innerHTML = "";
        }
    },
    validateNameClass: function (event){
        let spanError = document.querySelector("#nameClass + span");
        if (!this.insNameClass.value) {
            spanError.innerHTML = "Il campo deve essere riempito.";
            this.validName = false;
            this.validateForm();
            return;
        }
        if(!this.insNameClass.value.includes("class")){
            spanError.innerHTML = "Il nome della classe deve contenere la parola class";
            this.validName = false;
            this.validateForm();
            return;
        }
        spanError.innerHTML = "";
        this.validName = true;
        this.validateForm();
    },

    init: function(){
        this.insDate.addEventListener('focusout', this.validDateFunction.bind(this));
        this.insIdCourse.addEventListener('focusout', this.validateIdFunction.bind(this));
        this.insModules.addEventListener('focusout', this.validateNumModules.bind(this));
        this.insNameClass.addEventListener('focusout', this.validateNameClass.bind(this));
        this.insNameClass.addEventListener('input', this.validateNameClass.bind(this));
    }
};

validator.init();
validator.btnAddCE.disabled = true;
validator.validateNumModules();
validator.validDateFunction();
validator.validateNameClass();
validator.validateIdFunction();