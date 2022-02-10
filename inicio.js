var aceptar = document.getElementById("aceptar");
var tamaño = document.getElementById("tam");
var dif = document.getElementById("dif");

aceptar.addEventListener("click",()=>{
    if(dif.value == 1){
        localStorage.setItem("tablero",1);
    }else if(dif.value == 2){
        localStorage.setItem("tablero",2);
    }else{
        localStorage.setItem("tablero",3);
    }
    
    location.href = "sudoku.html";
})