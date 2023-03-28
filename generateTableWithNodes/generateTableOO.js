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
    id: null,
    rows: null,
    init: function (idTable, [...rowData]) {
        id = idTable;
        rows = rowData;
        console.log("#" + id);
        console.log(...rows);
    },
    generateTable: function () {
        let table = document.querySelector("#" + id);
        let headTable = document.querySelector("#" + id + " thead");
        headTable.appendChild(tableGenerator.generateHeader(rows[0]));
        
        rows.forEach((row) =>
            table.appendChild(tableGenerator.generateRow(row), console.log(row)));
    },
    generateHeader: (row) => {
        let header = document.createElement("tr");
        for (let property in row) {
            let headerCell = document.createElement("th");
            let headerText = document.createTextNode(property);
            headerCell.appendChild(headerText);
            header.appendChild(headerCell);
        }
        return header;
    },
    generateRow: function (r) {
        let rowTr = document.createElement("tr");
        for (let property in r) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(r[property]);
            cell.appendChild(cellText);
            rowTr.appendChild(cell);
        }
        return rowTr;
    }
};
tableGenerator.init("table1", [...courses]);
tableGenerator.generateTable();
