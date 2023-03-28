var btn = document.getElementById("operation");

function executeOperation(evt){
    console.log(evt);
    evt.preventDefault();
    console.log("Hello");
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    // var i1 = n1.value;
    // var i2 = n2.value;
    var i1 = parseInt(n1.value);
    var i2 = parseInt(n2.value);
    console.log(i1," ", i2);
    console.log(i1 + i2);
    // console.log(parseInt(i1) + parseInt(i2));
    document.getElementById("result").textContent= i1+i2;
}
btn.addEventListener("click", executeOperation);
