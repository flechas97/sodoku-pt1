
if (localStorage.getItem("tablero") == 1) {
  var solucion1 = [
    ["9", 6,"3", 1,"7", 4,"2", 5,"8"],
    ["1","7", 8, 3,"2", 5, 6,"4","9"],
    [2,"5","4","6","8","9","7","3", 1],
    [8,"2","1", 4,"3", 7,"5","9", 6],
    ["4","9", 6,"8","5","2", 3,"1","7"],
    [7,"3","5", 9,"6", 1,"8","2", 4],
    [5,"8","9","7","1","3","4","6", 2],
    ["3","1", 7, 2,"4", 6, 9,"8","5"],
    ["6", 4,"2", 5,"9", 8,"1", 7,"3"],
  ];
} else if (localStorage.getItem("tablero") == 2) {
  var solucion1 = [
    [1, 7, 5, 8, 4, 9, 3, 6, 2],
    [4, 9, 6, 7, 2, 3, 1, 8, 5],
    [3, 2, 8, 1, 6, 5, 4, 9, 7],
    [5, 6, 4, 3, 1, 2, 9, 7, 8],
    [8, 3, 7, 4, 9, 6, 5, 2, 1],
    [9, 1, 2, 5, 8, 7, 6, 3, 4],
    [7, 4, 1, 9, 3, 8, 2, 5, 6],
    [6, 5, 3, 2, 7, 1, 8, 4, 9],
    [2, 8, 9, 6, 5, 4, 7, 1, 3],
];
} else if (localStorage.getItem("tablero") == 3) {
  var solucion1 = [
    [9, 8, 6, 5, 7, 4, 3, 1, 2],
    [3, 5, 4, 1, 2, 6, 9, 7, 8],
    [1, 2, 7, 9, 3, 8, 6, 4, 5],
    [4, 1, 2, 6, 8, 9, 5, 3, 7],
    [6, 3, 9, 7, 5, 1, 2, 8, 4],
    [5, 7, 8, 3, 4, 2, 1, 6, 9],
    [2, 6, 1, 8, 9, 7, 4, 5, 3],
    [7, 4, 3, 2, 6, 5, 8, 9, 1],
    [8, 9, 5, 4, 1, 3, 7, 2, 6],
];


}
function solucion(fila, row, solucion) {
  try {
  for (let i = 0; i < fila.length; i++) {
      fila[i].value = solucion[row][i];
  }
} catch (error) {}
}

var reiniciar = document.getElementById("rei");
var valid = document.getElementById("validar");
var solucionar = document.getElementById("sol")
var validtext = document.getElementById("validtext");
  valid.addEventListener("click", () =>{
    //  validartodo();
    
      if(correcto()){
        Swal.fire({
            title: 'Has ganado',
            text: 'Eres el puto amo',
            icon: 'success',
            confirmButtonText: 'Enhorabuena'
          })
          var pfinal = 10 * tiempo;
          var puntuacion = localStorage.getItem("punt");
          var array = puntuacion.split(",");
          array.push(localStorage.getItem("user")+" "+pfinal);
          localStorage.setItem("punt",array);
      }else{
        Swal.fire({
            title: 'Faltan numeros loco',
            text: 'Sigue Escribiendo',
            icon: 'error',
            confirmButtonText: 'Okay :(',
            timer: 3000,
            timerProgressBar: true
          })
      }
  })

  reiniciar.addEventListener("click", ()=>{
    location.reload();
  })

  solucionar.addEventListener("click", ()=>{
    valid.setAttribute("disabled","");
    solucion(fila0, 0, solucion1);
    solucion(fila1, 1, solucion1);
    solucion(fila2, 2, solucion1);
    solucion(fila3, 3, solucion1);
    solucion(fila4, 4, solucion1);
    solucion(fila5, 5, solucion1);
    solucion(fila6, 6, solucion1);
    solucion(fila7, 7, solucion1);
    solucion(fila8, 8, solucion1);
    tablero = solucion1;
  })


