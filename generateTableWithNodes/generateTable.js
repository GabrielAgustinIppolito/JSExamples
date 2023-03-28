//un array di oggetti
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
// far popolare tramite js la tabella con i dati sopra
//possiamo farlo con l'innerHtml
//un altro metodo usando le api del DOM
//come creare dei nodi,inserirli nella pagina ecc...

// let variabile = document.querySelector("#table1");
// variabile.innerHTML += "<thead><tr><th>ID</th> <th>Title</th> <th>Numero Pages</th> <th>For Beginners?</th><th>Cost</th></tr></thead>";
// for (let i = 0; i < courses.length; i++) {
//     variabile.innerHTML +="<tbody><tr><td>" + courses[i].id +"</td>" +
//      "<td>" + courses[i].title +"</td>" +
//      "<td>" + courses[i].numPages +"</td>" +
//      "<td>" + courses[i].forBeginners +"</td>" +
//      "<td>" + courses[i].cost +"</td></tr></tbody>";
// }

// let table = document.querySelector("#table1");
// let tHead = document.querySelector("#headTable1");
// let tbody = document.querySelector('#bodyTable1');
// const trHead = document.createElement("tr");
// const thID = document.createElement("th");
// const thTitle = document.createElement("th");
// const thNumPages = document.createElement("th");
// const thBegg = document.createElement("th");
// const thCost = document.createElement("th");

// thID.innerText="ID";
// thTitle.innerText="Title";
// thNumPages.innerText="Numero di Pagine";
// thBegg.innerText="For Beginners?";
// thCost.innerText="Cost";
// trHead.append(thID, thTitle, thNumPages, thBegg, thCost);
// tHead.append(trHead);
// for (let i = 0; i < courses.length; i++) {
//     const tableRow = document.createElement("tr");
//     const tdID = document.createElement("td");
//     const tdTitle = document.createElement("td");
//     const tdNumPages = document.createElement("td");
//     const tdBegg = document.createElement("td");
//     const tdCost = document.createElement("td");
//     tdID.innerText=courses[i].id;
//     tdTitle.innerText=courses[i].title;
//     tdNumPages.innerText=courses[i].numPages;
//     tdBegg.innerText=courses[i].forBeginners;
//     tdCost.innerText=courses[i].cost;
//     tableRow.append(tdID, tdTitle, tdNumPages, tdBegg, tdCost);
// tbody.append(tableRow);
// }

let tHead = document.querySelector("#headTable1");
let tbody = document.querySelector('#bodyTable1');

let headerRow = document.createElement("tr");
for (let property in courses[0]) {
    let headerCell = document.createElement("th");
    let headerText = document.createTextNode(property);
    headerCell.appendChild(headerText);
    headerRow.appendChild(headerCell);
}
tHead.appendChild(headerRow);

// Aggiunge le righe della tabella
courses.forEach((course) => {
    let row = document.createElement("tr");
    for (let property in course) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(course[property]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tbody.appendChild(row);
});