function anyadirTarea() {
    //tomo el valor del input
    let eTarea = document.getElementById("idTarea");
    // compruebo si tiene algo de texto
    if (eTarea.value != "") {
        //si tiene texto, añado la tarea en la lista
        anyadirElemento(eTarea.value);
        //despues de añadir borro el elento input
        eTarea.value = "";
    }
    //si no tiene texto, no hago nada
}
//funcion añadir elemento a la lista. 
//cogera un parámetro y lo añadirá a la lista listaTareas
function anyadirElemento(textoTarea) {
    //cojo el elemento de la lista
    let listaTareas = document.getElementById("listaTareas");
    //le añado un elemento de lista con el texto
    // del parámetro textoTarea
    listaTareas.innerHTML += "<li>" + textoTarea + "</li>";
}

// Esto es equivalente

function BorrarTarea() {
    //Usar prompt para pedir al usuario un número de tarea.
    let numTarea = prompt("Selecciona el número de tarea que deseas eliminar tarea");
    //Comprobar que el número de tarea es válido
    //capturo la lista de tareas.
    let lTareas = document.getElementById("listaTareas")
    if (numTarea >= 1 0 && numTarea <= lTareas.children - length) {
        //Borrar de la lista de tareas el elemento número
        //n-1, donde n es el valor que me ha pasado el usuario
        numTarea = numTarea - 1; //numTarea--; numTarea-=1;


        //capturo el elemento que quiero borrar
        let eTareaBorrar = lTareas.children[numTarea];
        //borro ese elemento de la lista
        lTareas.removeChild(lTareas);

    } else() {
        alert("Ese número no existe");
    }
}