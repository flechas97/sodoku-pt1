
var puntuaciones = localStorage.getItem("punt");
puntuaciones = puntuaciones.substring(1)
var array = puntuaciones.split(",");
array = array.reverse();
var elem = document.getElementsByClassName("puntuaciones");

try{
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            elem[i].innerHTML = array[i]; 
        }
        
        
    }

}catch(error){
    console.log("El contenedor de puntuaciones esta lleno")
}