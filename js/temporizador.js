var tiempo = 899;
var time = document.getElementById("time")
setInterval(function () {
var minutos = tiempo /60;
var segundos = tiempo % 60;
    time.innerHTML = "Tiempo: "+parseInt(minutos)+" : "+segundos;
    if (tiempo >=1) {tiempo -= 1; }
}, 1000);
var minutos = 900 /60;
var segundos = 900 % 60;
    time.innerHTML = "Tiempo: "+parseInt(minutos)+" : "+segundos;
setInterval(function () {
        Swal.fire({
            title: 'Se ha acabado el tiempo',
            text: 'Has perdido, Demasiado lento',
            icon: 'error',
            confirmButtonText: 'Okay :(',
            timer: 8000,
            timerProgressBar: true
          })
          for (let k = 0; k < 9; k++) {
             fila0[k].setAttribute("disabled", ""); 
             fila1[k].setAttribute("disabled", ""); 
             fila2[k].setAttribute("disabled", ""); 
             fila3[k].setAttribute("disabled", ""); 
             fila4[k].setAttribute("disabled", ""); 
             fila5[k].setAttribute("disabled", ""); 
             fila6[k].setAttribute("disabled", ""); 
             fila7[k].setAttribute("disabled", ""); 
             fila8[k].setAttribute("disabled", ""); 
        }
}, 901000);