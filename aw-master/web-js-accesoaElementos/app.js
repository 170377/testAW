let color = prompt("¿Qué color quieres para el parráfo?");
color = color.toLowerCase();

let elementoParrafo = document.getElementById("parrafo");
console.log(elementoParrafo);
elementoParrafo.innerHTML = "No lorem Ipsum";

if (color == "rojo" || color == "verde") {
    elementoParrafo.className = color;
} else {
    alert("Solo puede ser color verde o rojo");
}