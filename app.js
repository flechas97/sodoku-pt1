if (!localStorage.getItem("tablero")||localStorage.getItem("tablero") == 0) {
    var tablero = [
        ["", 6, "", 1, "", 4, "", 5, ""],
        ["", "", 8, 3, "", 5, 6, "", ""],
        [2, "", "", "", "", "", "", "", 1],
        [8, "", "", 4, "", 7, "", "", 6],
        ["", "", 6, "", "", "", 3, "", ""],
        [7, "", "", 9, "", 1, "", "", 4],
        [5, "", "", "", "", "", "", "", 2],
        ["", "", 7, 2, "", 6, 9, "", ""],
        ["", 4, "", 5, "", 8, "", 7, ""],
    ];
    Swal.fire({
        title: 'Bienvenido al tutorial de Sodoku',
        text: '',
        icon: 'info',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    })
    setTimeout(function () {
        Swal.fire({
            title: 'Las reglas son las siguientes',
            text: '',
            icon: 'info',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
    }, 3000);
    setTimeout(function () {
        Swal.fire({
            title: '1º Regla',
            text: 'Los numeros no pueden repetirse dentro de la misma fila 1x9',
            icon: 'info',
            showConfirmButton: true,
            confirmButtonText: 'Siguiente',
            // timer: 2000,
            // timerProgressBar: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '2º Regla',
                    text: 'Los numeros no pueden repetirse dentro de la misma Columna 9x1',
                    icon: 'info',
                    showConfirmButton: true,
                    confirmButtonText: 'Siguiente',
                    // timer: 2000,
                    // timerProgressBar: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: '3º Regla',
                            text: 'Los numeros no pueden repetirse dentro de la misma Caja 3x3',
                            icon: 'info',
                            showConfirmButton: true,
                            confirmButtonText: 'Chao Chao',
                            // timer: 2000,
                            // timerProgressBar: true
                        })
                    }
                })
            }
        })
    }, 6000);


}
if (localStorage.getItem("tablero") == 1) {
    var tablero = [
        ["", 6, "", 1, "", 4, "", 5, ""],
        ["", "", 8, 3, "", 5, 6, "", ""],
        [2, "", "", "", "", "", "", "", 1],
        [8, "", "", 4, "", 7, "", "", 6],
        ["", "", 6, "", "", "", 3, "", ""],
        [7, "", "", 9, "", 1, "", "", 4],
        [5, "", "", "", "", "", "", "", 2],
        ["", "", 7, 2, "", 6, 9, "", ""],
        ["", 4, "", 5, "", 8, "", 7, ""],
    ];
} else if (localStorage.getItem("tablero") == 2) {
    var tablero = [
        ["", 1, "", 1, "", 4, "", 5, ""],
        ["", "", 8, 3, "", 5, 6, "", ""],
        [2, "", "", "", "", "", "", "", 1],
        [8, "", "", 4, "", 7, "", "", 6],
        ["", "", 6, "", "", "", 3, "", ""],
        [7, "", "", 9, "", 1, "", "", 4],
        [5, "", "", "", "", "", "", "", 2],
        ["", "", 7, 2, "", 6, 9, "", ""],
        ["", 4, "", 5, "", 8, "", 7, ""],
    ];
} else if (localStorage.getItem("tablero") == 3) {
    var tablero = [
        ["", 2, "", 1, "", 4, "", 5, ""],
        ["", "", 8, 3, "", 5, 6, "", ""],
        [2, "", "", "", "", "", "", "", 1],
        [8, "", "", 4, "", 7, "", "", 6],
        ["", "", 6, "", "", "", 3, "", ""],
        [7, "", "", 9, "", 1, "", "", 4],
        [5, "", "", "", "", "", "", "", 2],
        ["", "", 7, 2, "", 6, 9, "", ""],
        ["", 4, "", 5, "", 8, "", 7, ""],
    ];
}
document.querySelector("#sodo0").addEventListener("click", () => {
    Swal.fire({
        title: 'Cambiando a Tutorial',
        text: '',
        icon: 'info',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    })
    localStorage.setItem("tablero", 0);
    setInterval(function () { location.reload() }, 3000);
})
document.querySelector("#sodo1").addEventListener("click", () => {
    Swal.fire({
        title: 'Cambiando a sodoku 1',
        text: '',
        icon: 'info',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    })
    localStorage.setItem("tablero", 1);
    setInterval(function () { location.reload() }, 3000);
})
document.querySelector("#sodo2").addEventListener("click", () => {
    Swal.fire({
        title: 'Cambiando a sodoku 2',
        text: '',
        icon: 'info',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    })
    localStorage.setItem("tablero", 2);
    setInterval(function () { location.reload() }, 3000);

})
document.querySelector("#sodo3").addEventListener("click", () => {
    Swal.fire({
        title: 'Cambiando a sodoku 3',
        text: '',
        icon: 'info',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    })
    localStorage.setItem("tablero", 3);
    setInterval(function () { location.reload() }, 3000);
})
// console.log(tablero)
//Funcion para llenar arrays con los datos de cada caja 3x3
var caja0 = llenarcaja(0, 0);
var caja1 = llenarcaja(0, 1);
var caja2 = llenarcaja(0, 2);
var caja3 = llenarcaja(1, 0);
var caja4 = llenarcaja(1, 1);
var caja5 = llenarcaja(1, 2);
var caja6 = llenarcaja(2, 0);
var caja7 = llenarcaja(2, 1);
var caja8 = llenarcaja(2, 2);
// console.log(caja2);
var fila0 = document.getElementsByClassName("r0");
var fila1 = document.getElementsByClassName("r1");
var fila2 = document.getElementsByClassName("r2");
var fila3 = document.getElementsByClassName("r3");
var fila4 = document.getElementsByClassName("r4");
var fila5 = document.getElementsByClassName("r5");
var fila6 = document.getElementsByClassName("r6");
var fila7 = document.getElementsByClassName("r7");
var fila8 = document.getElementsByClassName("r8");
//Funcion para cargar las filas segun el array
cargarfilas(fila0, 0);
cargarfilas(fila1, 1);
cargarfilas(fila2, 2);
cargarfilas(fila3, 3);
cargarfilas(fila4, 4);
cargarfilas(fila5, 5);
cargarfilas(fila6, 6);
cargarfilas(fila7, 7);
cargarfilas(fila8, 8);
//bucle para desactivar las posiciones que ya tienen numeros preterminados
for (let k = 0; k < 9; k++) {
    if (fila0[k].value != "") { fila0[k].setAttribute("disabled", ""); }
    if (fila1[k].value != "") { fila1[k].setAttribute("disabled", ""); }
    if (fila2[k].value != "") { fila2[k].setAttribute("disabled", ""); }
    if (fila3[k].value != "") { fila3[k].setAttribute("disabled", ""); }
    if (fila4[k].value != "") { fila4[k].setAttribute("disabled", ""); }
    if (fila5[k].value != "") { fila5[k].setAttribute("disabled", ""); }
    if (fila6[k].value != "") { fila6[k].setAttribute("disabled", ""); }
    if (fila7[k].value != "") { fila7[k].setAttribute("disabled", ""); }
    if (fila8[k].value != "") { fila8[k].setAttribute("disabled", ""); }
}
carga();

function carga() {
    for (let i = 0; i < fila0.length; i++) {
        fila0[i].addEventListener("focusout", () => {
            if (fila0[i].value != 0) {
                tablero[0][i] = parseInt(fila0[i].value);
                var caja0 = llenarcaja(0, 0);
                var caja1 = llenarcaja(0, 1);
                var caja2 = llenarcaja(0, 2);
                console.log(caja2)
                if (i < 3) {
                    if (getcaja(tablero, caja0, parseInt(fila0[i].value)) == false) {
                        fila0[i].value = "";
                        tablero[0][i] = "";
                    }
                } else if (i < 6) {
                    if (getcaja(tablero, caja1, parseInt(fila0[i].value)) == false) {
                        fila0[i].value = "";
                        tablero[0][i] = "";
                    }
                } else if (i < 9) {
                    if (getcaja(tablero, caja2, parseInt(fila0[i].value)) == false) {
                        fila0[i].value = "";
                        tablero[0][i] = "";
                    }
                }
                if (getrow(tablero, 0, parseInt(fila0[i].value)) == false) {
                    fila0[i].value = "";
                    tablero[0][i] = "";
                }
                if (getcol(tablero, i, parseInt(fila0[i].value)) == false) {
                    fila0[i].value = "";
                    tablero[0][i] = "";
                }
            }
        });
        fila1[i].addEventListener("focusout", () => {
            if (fila1[i].value != 0) {
                tablero[1][i] = parseInt(fila1[i].value);
                if (getrow(tablero, 1, parseInt(fila1[i].value)) == false) {
                    fila1[i].value = "";
                    tablero[1][i] = "";
                }
                if (getcol(tablero, i, parseInt(fila1[i].value)) == false) {
                    fila1[i].value = "";
                    tablero[1][i] = "";
                }
                var caja0 = llenarcaja(0, 0);
                var caja1 = llenarcaja(0, 1);
                var caja2 = llenarcaja(0, 2);
                if (i < 3) {
                    if (getcaja(tablero, caja0, parseInt(fila1[i].value)) == false) {
                        fila1[i].value = "";
                        tablero[1][i] = "";
                    }
                } else if (i < 6) {
                    if (getcaja(tablero, caja1, parseInt(fila1[i].value)) == false) {
                        fila1[i].value = "";
                        tablero[1][i] = "";
                    }
                } else if (i < 9) {
                    if (getcaja(tablero, caja2, parseInt(fila1[i].value)) == false) {
                        fila1[i].value = "";
                        tablero[1][i] = "";
                    }
                }
            }
        });
        fila2[i].addEventListener("focusout", () => {
            if (fila2[i].value != 0) {
                tablero[2][i] = parseInt(fila2[i].value);
                if (getrow(tablero, 2, parseInt(fila2[i].value)) == false) {
                    fila2[i].value = "";
                    tablero[2][i] = "";
                }
                if (getcol(tablero, i, parseInt(fila2[i].value)) == false) {
                    fila2[i].value = "";
                    tablero[2][i] = "";
                }
                var caja0 = llenarcaja(0, 0);
                var caja1 = llenarcaja(0, 1);
                var caja2 = llenarcaja(0, 2);
                if (i < 3) {
                    if (getcaja(tablero, caja0, parseInt(fila2[i].value)) == false) {
                        fila2[i].value = "";
                        tablero[2][i] = "";
                    }
                } else if (i < 6) {
                    if (getcaja(tablero, caja1, parseInt(fila2[i].value)) == false) {
                        fila2[i].value = "";
                        tablero[2][i] = "";
                    }
                } else if (i < 9) {
                    if (getcaja(tablero, caja2, parseInt(fila2[i].value)) == false) {
                        fila2[i].value = "";
                        tablero[2][i] = "";
                    }
                }
            }
        });
        fila3[i].addEventListener("focusout", () => {
            if (fila3[i].value != 0) {
                tablero[3][i] = parseInt(fila3[i].value);
                if (getrow(tablero, 3, parseInt(fila3[i].value)) == false) {
                    fila3[i].value = "";
                    tablero[3][i] = "";
                } else if (getcol(tablero, i, parseInt(fila3[i].value)) == false) {
                    fila3[i].value = "";
                    tablero[3][i] = "";
                }
                var caja3 = llenarcaja(1, 0);
                var caja4 = llenarcaja(1, 1);
                var caja5 = llenarcaja(1, 2);
                console.log(caja5);
                if (i < 3) {
                    if (getcaja(tablero, caja3, parseInt(fila3[i].value)) == false) {
                        fila3[i].value = "";
                        tablero[3][i] = "";
                    }
                } else if (i < 6) {
                    if (getcaja(tablero, caja4, parseInt(fila3[i].value)) == false) {
                        fila3[i].value = "";
                        tablero[3][i] = "";
                    }
                } else if (i < 9) {
                    if (getcaja(tablero, caja5, parseInt(fila3[i].value)) == false) {
                        fila3[i].value = "";
                        tablero[3][i] = "";
                    }
                }
            }
        });
        fila4[i].addEventListener("focusout", () => {
            if (fila4[i].value != 0) {
                tablero[4][i] = parseInt(fila4[i].value);
                if (getrow(tablero, 4, parseInt(fila4[i].value)) == false) {
                    fila4[i].value = "";
                    tablero[4][i] = "";
                } else if (getcol(tablero, i, parseInt(fila4[i].value)) == false) {
                    fila4[i].value = "";
                    tablero[4][i] = "";
                }
                var caja3 = llenarcaja(1, 0);
                var caja4 = llenarcaja(1, 1);
                var caja5 = llenarcaja(1, 2);
                console.log(caja5);
                if (i < 3) {
                    if (getcaja(tablero, caja3, parseInt(fila4[i].value)) == false) {
                        fila4[i].value = "";
                        tablero[4][i] = "";
                    }
                } else if (i < 6) {
                    if (getcaja(tablero, caja4, parseInt(fila4[i].value)) == false) {
                        fila4[i].value = "";
                        tablero[4][i] = "";
                    }
                } else if (i < 9) {
                    if (getcaja(tablero, caja5, parseInt(fila4[i].value)) == false) {
                        fila4[i].value = "";
                        tablero[4][i] = "";
                    }
                }

            }
        });
        fila5[i].addEventListener("focusout", () => {
            if (fila5[i].value != 0) {
                tablero[5][i] = parseInt(fila5[i].value);
                if (getrow(tablero, 5, parseInt(fila5[i].value)) == false) {
                    fila5[i].value = "";
                    tablero[5][i] = "";
                }
                if (getcol(tablero, i, parseInt(fila5[i].value)) == false) {
                    fila5[i].value = "";
                    tablero[5][i] = "";
                }
                var caja3 = llenarcaja(1, 0);
                var caja4 = llenarcaja(1, 1);
                var caja5 = llenarcaja(1, 2);
                console.log(caja5);
                if (i < 3) {
                    if (getcaja(tablero, caja3, parseInt(fila5[i].value)) == false) {
                        fila5[i].value = "";
                        tablero[5][i] = "";
                    }
                } else if (i < 6) {
                    if (getcaja(tablero, caja4, parseInt(fila5[i].value)) == false) {
                        fila5[i].value = "";
                        tablero[5][i] = "";
                    }
                } else if (i < 9) {
                    if (getcaja(tablero, caja5, parseInt(fila5[i].value)) == false) {
                        fila5[i].value = "";
                        tablero[5][i] = "";
                    }
                }


            }
        });
        fila6[i].addEventListener("focusout", () => {
            if (fila6[i].value != 0) {
                tablero[6][i] = parseInt(fila6[i].value);
                if (getrow(tablero, 6, parseInt(fila6[i].value)) == false) {
                    fila6[i].value = "";
                    tablero[6][i] = "";
                } else if (getcol(tablero, i, parseInt(fila6[i].value)) == false) {
                    fila6[i].value = "";
                    tablero[6][i] = "";
                }
                var caja6 = llenarcaja(2, 0);
                var caja7 = llenarcaja(2, 1);
                var caja8 = llenarcaja(2, 2);
                if (i < 3) {
                    if (getcaja(tablero, caja6, parseInt(fila6[i].value)) == false) {
                        fila6[i].value = "";
                        tablero[6][i] = "";
                    }
                } else if (i < 6) {
                    if (getcaja(tablero, caja7, parseInt(fila6[i].value)) == false) {
                        fila6[i].value = "";
                        tablero[6][i] = "";
                    }
                } else if (i < 9) {
                    if (getcaja(tablero, caja8, parseInt(fila6[i].value)) == false) {
                        fila6[i].value = "";
                        tablero[6][i] = "";
                    }
                }

            }
        });
        fila7[i].addEventListener("focusout", () => {
            if (fila7[i].value != 0) {
                tablero[7][i] = parseInt(fila7[i].value);
                if (getrow(tablero, 7, parseInt(fila7[i].value)) == false) {
                    fila7[i].value = "";
                    tablero[7][i] = "";
                } else if (getcol(tablero, i, parseInt(fila7[i].value)) == false) {
                    fila7[i].value = "";
                    tablero[7][i] = "";
                }
                var caja6 = llenarcaja(2, 0);
                var caja7 = llenarcaja(2, 1);
                var caja8 = llenarcaja(2, 2);
                if (i < 3) {
                    if (getcaja(tablero, caja6, parseInt(fila7[i].value)) == false) {
                        fila7[i].value = "";
                        tablero[7][i] = "";
                    }
                } else if (i < 6) {
                    if (getcaja(tablero, caja7, parseInt(fila7[i].value)) == false) {
                        fila7[i].value = "";
                        tablero[7][i] = "";
                    }
                } else if (i < 9) {
                    if (getcaja(tablero, caja8, parseInt(fila7[i].value)) == false) {
                        fila7[i].value = "";
                        tablero[7][i] = "";
                    }
                }

            }
        });
        fila8[i].addEventListener("focusout", () => {
            if (fila8[i].value != 0) {
                tablero[8][i] = parseInt(fila8[i].value);
                if (getrow(tablero, 8, parseInt(fila8[i].value)) == false) {
                    fila8[i].value = "";
                    tablero[8][i] = "";
                } else if (getcol(tablero, i, parseInt(fila8[i].value)) == false) {
                    fila8[i].value = "";
                    tablero[8][i] = "";
                }
                var caja6 = llenarcaja(2, 0);
                var caja7 = llenarcaja(2, 1);
                var caja8 = llenarcaja(2, 2);
                if (i < 3) {
                    if (getcaja(tablero, caja6, parseInt(fila8[i].value)) == false) {
                        fila8[i].value = "";
                        tablero[8][i] = "";
                    }
                } else if (i < 6) {
                    if (getcaja(tablero, caja7, parseInt(fila8[i].value)) == false) {
                        fila8[i].value = "";
                        tablero[8][i] = "";
                    }
                } else if (i < 9) {
                    if (getcaja(tablero, caja8, parseInt(fila8[i].value)) == false) {
                        fila8[i].value = "";
                        tablero[8][i] = "";
                    }
                }

            }
        });
    }
}

