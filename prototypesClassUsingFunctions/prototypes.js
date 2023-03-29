function Course(id, title, duration, isForBeginners, cost){
    this.id = id;
    this.title = title;
    this.duration = duration;
    this.isForBeginners = isForBeginners;
    this.cost = cost;
    // this.showTitle = function(){
    //     console.log(`Il titolo di questo corso é: ${this.title}`);
    // }
}

Course.prototype.showTitle = function(){        //lo passo al prototipo del costruttore così da avere una sola
        console.log(`Il titolo di questo corso é: ${this.title}`);  //funzione che sarà chiamata da tutti gli oggetti ereditati
    }                                                           //mettendolo all'interno della funzioneClasse ne avrei una per ogni oggetto

let c1 = new Course(1, "Java For Dummies", 300.75, true, 899.99);
let c2 = new Course(2, "Java NOt For Dummies", 310.75, false, 999.99);

c1.showTitle();
let p1 = c1.__proto__; //dunder proto
console.log(p1);
let pp1 = c1.constructor.prototype;
console.log(p1 == pp1);
// let o1 = {
//     name: "Ciccio"
// };

// o1.name = "Pippo";
// o1.job = "Developer"; //lo aggiunge dinamicamente
// let o2 = {...o1, age: 27};


function AccademicCourse(id, title, duration, isForBeginners, cost, points){
    // this.id = id;
    // this.title = title;
    // this.duration = duration;
    // this.isForBeginners = isForBeginners;
    // this.cost = cost;
    Course.call(this, id, title, duration, isForBeginners, cost);
    this.points = points;
}
//PROTYPAL INHERITANCE
let accademicCoursePrototype = new Course();//anche se non l'ho fatto io, esiste un costrutore con valori undefined
//settiamo il nuovo Prototype e il nuovo Constructor
AccademicCourse.prototype = accademicCoursePrototype;
AccademicCourse.prototype.constructor = AccademicCourse;
AccademicCourse.prototype.addPoints = function(points){
    this.points += points;
    console.log(`Mi sono quasi laureato ${this.points}`);
};

let ac1 = new AccademicCourse(3, "titolo 1", 300, false, 3000, 15);
console.log(ac1.constructor);
ac1.addPoints(20.5);
ac1.showTitle();