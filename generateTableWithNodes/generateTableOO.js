let courses = [
    {
        id: 1,
        title: "Java for dummies",
        numPages: 400,
        forBeginners: true,
        cost: 40.00
    },
    {
        id: 2,
        title: "Php for dummies",
        numPages: 500,
        forBeginners: true,
        cost: 10.50
    },
    {
        id: 3,
        title: "JavaScript for experts",
        numPages: 300,
        forBeginners: false,
        cost: 30.00
    }
];
/*
rifarlo con oggetto table gerator, avrÃ  come metodi:
1. init che passa id di tabella esistente e array di dati con cui lavorare 
2. generateTable metodo per generare la tabella in maniera dinamica a partire dai dati all'interno
    deve chiamare al suo interno 2 metodi: generateHeader e generateRow
 */
let tableGenerator = {
    noDataElement: null,
    table: null,
    thead:null,
    tbody:null,
    data: null,
    init: function (idTable, idMessage, rowData) {
        this.table = document.querySelector(`#${idTable}`);
        this.thead = document.querySelector(`#${idTable} thead`);
        this.tbody = document.querySelector(`#${idTable} tbody`);
        this.data = rowData;
        this.noDataElement = document.querySelector(`#${idMessage}`)
    },
    generateTable: function () {
        if(!this.data){
            this.table.style.display = "none";
            this.noDataElement.style.display = "block";
            return;
        }
        this.table.style.display = "table";
        this.noDataElement.style.display = "none";
        this.thead.appendChild(this.generateHeader(this.data[0]));
        this.data.forEach((e) =>
            this.tbody.appendChild(this.generateRow(e)));
    },
    generateHeader: (element) => {
        let header = document.createElement("tr");
        for (let property in element) {
            let headerCell = document.createElement("th");
            let headerText = document.createTextNode(property);
            headerCell.appendChild(headerText);
            header.appendChild(headerCell);
        }
        return header;
    },
    generateRow: function (element) {
        let rowTr = document.createElement("tr");
        for (let property in element) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(element[property]);
            cell.appendChild(cellText);
            rowTr.appendChild(cell);
        }
        return rowTr;
    }
};
tableGenerator.init("table1", "noData", null);
tableGenerator.generateTable();
tableGenerator.init("table1", "noData", courses);
tableGenerator.generateTable();

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let comb1 = num1.concat(num2);
// let comb2 = [...num1, ...num2];
