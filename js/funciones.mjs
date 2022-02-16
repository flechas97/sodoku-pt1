function llenarcaja(row, col, caja = []) {
    try{
    col *= 3;
    row *= 3;
    for (let i = row; i < row + 3; i++) {
        for (let x = col; x < col + 3; x++) {caja.push(tablero[i][x]);}
    }
    return caja;
    }catch(exception){}
}
function cargarfilas(fila, row) {
    try {
    for (let i = 0; i < fila.length; i++) {
        fila[i].value = tablero[row][i];
    }
} catch (error) {}
}
function getcaja(array, caja, numero) {
    validarr = [];
    for (let i = 0; i < array.length; i++) {
        // document.write(array[i][col]);
        validarr.push(caja[i]);
    }
    // console.log(validarr);

    var indices = [];
    var element = numero;
    var idx = validarr.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = validarr.indexOf(element, idx + 1);
    }
    //console.log(indices);
    if (indices.length > 1) {
         //alert(element+ " no es valido en la caja");
         Swal.fire({
            title: 'No es valido en la caja',
            text: 'Debes cumplir las reglas del Sodoku',
            icon: 'warning',
            confirmButtonText: 'Okay :(',
            timer: 3000,
            timerProgressBar: true
          })
        // console.log(element + " no es valido en la caja")
        return false;
    } else {
        // alert(element+ " es valido en la columna");
        //console.log(element + " es valido en la caja")
        return true;
    }
}
function getcol(array, col,numero) {
    validarr = [];
    for (let i = 0; i < array.length; i++) {
        validarr.push(array[i][col]);
    }
     console.log(validarr);

    var indices = [];
    var element = numero;
    var idx = validarr.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = validarr.indexOf(element, idx + 1);
    }
    // console.log(indices);
    if (indices.length > 1) {
        //  alert(element+ " no es valido en la columna");
        // console.log(element + " no es valido en la columna")
        Swal.fire({
            title: 'No es valido en la Columna',
            text: 'Debes cumplir las reglas del Sodoku',
            icon: 'warning',
            confirmButtonText: 'Okay :(',
            timer: 3000,
            timerProgressBar: true
          })
        return false;
    } else {
        // alert(element+ " es valido en la columna");
        console.log(element + " es valido en la columna")
        return true;
    }
}
function getrow(array,row,numero) {
    var validarr = [];
    for (let i = 0; i < array.length; i++) {
        validarr.push(array[row][i]);
    }
     console.log(validarr);

    var indices = [];
    var element = numero;
    var idx = validarr.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = validarr.indexOf(element, idx + 1);
    }
    // console.log(indices);
    if (indices.length > 1) {
        //  alert(element+ " no es valido en la fila");
        // console.log(element + " no es valido en la fila")
        Swal.fire({
            title: 'No es valido en la Fila',
            text: 'Debes cumplir las reglas del Sodoku',
            icon: 'warning',
            confirmButtonText: 'Okay :(',
            timer: 3000,
            timerProgressBar: true
          })
        return false;
    } else {
        // alert( element+ " es valido en la fila");
        console.log(element + " es valido en la fila")
        return true;
    }
}
// getcol(tablero,0); //Funcion para validar una columna
// getrow(tablero,0);//Funcion para validar una fila

//funcion para validar una caja parametros tablero y array de caja
function validarcaja(tablero, caja) {
    for (let i = 0; i < 10; i++) {
        getcaja(tablero, caja, i);
    }
}
//funcion para validar cada caja recibe como parametro el numero de caja del 0-8
function validcaja(numerocaja) {
    console.log("caja numero= "+numerocaja)
    switch (numerocaja) {
        case 0:
            validarcaja(tablero, caja0);
            break;
        case 1:
            validarcaja(tablero, caja1);
            break;
        case 2:
            validarcaja(tablero, caja2);    
            break;
        case 3:
            validarcaja(tablero, caja3);    
            break;
        case 4:
            validarcaja(tablero, caja4);    
            break;
        case 5:
            validarcaja(tablero, caja5);    
            break;
        case 6:
            validarcaja(tablero, caja6);    
            break;
        case 7:
            validarcaja(tablero, caja7);    
            break;
        case 8:
            validarcaja(tablero, caja8);    
            break;
        default:
            break;
    }
}
// validcaja(numerocaja)
//Funcion para validar que todo el sodoku sea correcto
function validartodo() {
    for (let i = 0; i < 9; i++) {
        validcaja(i);
        for (let x = 1; x < 10; x++) {
            if (getcol(tablero,i,x)==false) {
                break;
            }
            //getcol(tablero,i,x);
            if (getrow(tablero,i,x)==false) {
                break;
            }
            //getrow(tablero,i,x);
        }
    }
}
function correcto(){
    for (let i = 0; i < tablero.length; i++) {
       for (let k = 0; k < tablero.length; k++) {
           if (tablero[i][k] == "") {
               return false;
           }else{
               return true;
           }
       }
    }
}
function carga() {
    for (let i = 0; i < fila0.length; i++) {
        fila0[i].addEventListener("focusout", () => {
            if(fila0[i].value == ""){
                fila0[i].value = "";
                tablero[0][i] = "";
            }
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
            if(fila1[i].value == ""){
                fila1[i].value = "";
                tablero[1][i] = "";
            }
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
            if(fila2[i].value == ""){
                fila2[i].value = "";
                tablero[2][i] = "";
            }
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
            if(fila3[i].value == ""){
                fila3[i].value = "";
                tablero[3][i] = "";
            }
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
            if(fila4[i].value == ""){
                fila4[i].value = "";
                tablero[4][i] = "";
            }
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
            if(fila5[i].value == ""){
                fila5[i].value = "";
                tablero[5][i] = "";
            }
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
            if(fila6[i].value == ""){
                fila6[i].value = "";
                tablero[6][i] = "";
            }
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
            if(fila7[i].value == ""){
                fila7[i].value = "";
                tablero[7][i] = "";
            }
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
            if(fila8[i].value == ""){
                fila8[i].value = "";
                tablero[8][i] = "";
            }
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