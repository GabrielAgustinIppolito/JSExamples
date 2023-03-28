console.log("Goodbye JavaScript");
var btn = document.getElementById("b1");
// btn.onclick = handleclick;
// btn.onclick = anotherFunction; lo sovrascrive
btn.addEventListener("click", handleclick);
btn.addEventListener("click", anotherFunction);
function handleclick(){
    console.log("Bottone schiacciato!");
}
function anotherFunction(){
    console.log("Chiamata anotherFunction");
}
