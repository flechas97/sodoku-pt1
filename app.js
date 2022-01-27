

var tablero = [
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],
    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],
    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9],
];
console.log(tablero)
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

for (let i = 0; i < fila0.length; i++) {
    fila0[i].addEventListener("focusout", () =>{
        if(fila0[i].value != 0){
            tablero[0][i] = parseInt(fila0[i].value);
            if(getrow(tablero,0,parseInt(fila0[i].value)) == false){
                fila0[i].value = 0;
                tablero[0][i] = 0;
            }else if(getcol(tablero,0,parseInt(fila0[i].value))==false){
                fila0[i].value = 0;
                tablero[0][i] = 0;
            }
            
            validartodo();
            
            // if(getcol(tablero,0,parseInt(fila0[i].value))==false){
            //     fila0[i].value = 0;
            //     tablero[0][i] = 0;
            // }
            //getrow(tablero,0,parseInt(fila0[i].value));
            // console.log("zona 0-"+ i);
            // console.log(tablero);
        }
    });
    fila1[i].addEventListener("focusout", () =>{
        if(fila1[i].value != 0){
            tablero[1][i] = parseInt(fila1[i].value);
            if(getrow(tablero,1,parseInt(fila1[i].value)) == false){
                fila1[i].value = 0;
                tablero[1][i] = 0;
            }else if(getcol(tablero,1,parseInt(fila1[i].value))==false){
                fila1[i].value = 0;
                tablero[1][i] = 0;
            }
            // console.log("zona 1-"+ i);
        }
    });
    fila2[i].addEventListener("focusout", () =>{
           if(fila2[i].value != 0){
            tablero[2][i] = parseInt(fila2[i].value);
            if(getrow(tablero,2,parseInt(fila2[i].value)) == false){
                fila2[i].value = 0;
                tablero[2][i] = 0;
            }else if(getcol(tablero,2,parseInt(fila2[i].value))==false){
                fila2[i].value = 0;
                tablero[2][i] = 0;
            }
            // console.log("zona 1-"+ i);
        }
        // console.log("zona 2-"+ i);
    });
    fila3[i].addEventListener("focusout", () =>{
           if(fila3[i].value != 0){
            tablero[3][i] = parseInt(fila3[i].value);
            if(getrow(tablero,3,parseInt(fila3[i].value)) == false){
                fila3[i].value = 0;
                tablero[3][i] = 0;
            }else if(getcol(tablero,3,parseInt(fila3[i].value))==false){
                fila3[i].value = 0;
                tablero[3][i] = 0;
            }
            // console.log("zona 1-"+ i);
        }
        // console.log("zona 3-"+ i);
    });
    fila4[i].addEventListener("focusout", () =>{
           if(fila4[i].value != 0){
            tablero[4][i] = parseInt(fila4[i].value);
            if(getrow(tablero,4,parseInt(fila4[i].value)) == false){
                fila4[i].value = 0;
                tablero[4][i] = 0;
            }else if(getcol(tablero,4,parseInt(fila4[i].value))==false){
                fila4[i].value = 0;
                tablero[4][i] = 0;
            }
            // console.log("zona 1-"+ i);
        }
        // console.log("zona 4-"+ i);
    });
    fila5[i].addEventListener("focusout", () =>{
           if(fila5[i].value != 0){
            tablero[5][i] = parseInt(fila5[i].value);
            if(getrow(tablero,5,parseInt(fila5[i].value)) == false){
                fila5[i].value = 0;
                tablero[5][i] = 0;
            }else if(getcol(tablero,5,parseInt(fila5[i].value))==false){
                fila5[i].value = 0;
                tablero[5][i] = 0;
            }
            // console.log("zona 1-"+ i);
            
        }
        // console.log("zona 5-"+ i);
    });
    fila6[i].addEventListener("focusout", () =>{
           if(fila6[i].value != 0){
            tablero[6][i] = parseInt(fila6[i].value);
            if(getrow(tablero,6,parseInt(fila6[i].value)) == false){
                fila6[i].value = 0;
                tablero[6][i] = 0;
            }else if(getcol(tablero,6,parseInt(fila6[i].value))==false){
                fila6[i].value = 0;
                tablero[6][i] = 0;
            }
            // console.log("zona 1-"+ i);
        }
        // console.log("zona 6-"+ i);
    });
    fila7[i].addEventListener("focusout", () =>{
           if(fila7[i].value != 0){
            tablero[7][i] = parseInt(fila7[i].value);
            if(getrow(tablero,7,parseInt(fila7[i].value)) == false){
                fila7[i].value = 0;
                tablero[7][i] = 0;
            }else if(getcol(tablero,7,parseInt(fila7[i].value))==false){
                fila7[i].value = 0;
                tablero[7][i] = 0;
            }
            // console.log("zona 1-"+ i);
        }
        // console.log("zona 7-"+ i);
    });
    fila8[i].addEventListener("focusout", () =>{
           if(fila8[i].value != 0){
            tablero[8][i] = parseInt(fila8[i].value);
            if(getrow(tablero,8,parseInt(fila8[i].value)) == false){
                fila8[i].value = 0;
                tablero[8][i] = 0;
            }else if(getcol(tablero,8,parseInt(fila8[i].value))==false){
                fila8[i].value = 0;
                tablero[8][i] = 0;
            }
            // console.log("zona 1-"+ i);
        }
        // console.log("zona 8-"+ i);
    });
}
function llenarcaja(row, col, caja = []) {
    col *= 3;
    row *= 3;
    for (let i = row; i < row + 3; i++) {
        for (let x = col; x < col + 3; x++) {
            caja.push(tablero[i][x]);
        }
    }
    // console.log(caja);
    return caja;
}
function cargarfilas(fila, row) {
    for (let i = 0; i < fila.length; i++) {
        fila[i].value = tablero[row][i];
    }
}
function getcaja(array, caja, numero) {
    validarr = [];
    for (let i = 0; i < array.length; i++) {
        // document.write(array[i][col]);
        validarr.push(caja[i]);
    }
    //console.log(validarr);

    var indices = [];
    var element = numero;
    var idx = validarr.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = validarr.indexOf(element, idx + 1);
    }
    //console.log(indices);
    if (indices.length > 1) {
         alert(element+ " no es valido en la caja");
        // console.log(element + " no es valido en la caja")
        return false;
    } else {
        // alert(element+ " es valido en la columna");
        console.log(element + " es valido en la caja")
        return true;
    }
}


function getcol(array, col,numero) {
    validarr = [];
    for (let i = 0; i < array.length; i++) {
        validarr.push(array[i][col]);
    }
    // console.log(validarr);

    var indices = [];
    var element = numero;
    var idx = validarr.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = validarr.indexOf(element, idx + 1);
    }
    // console.log(indices);
    if (indices.length > 1) {
         alert(element+ " no es valido en la columna");
        console.log(element + " no es valido en la columna")
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
    // console.log(validarr);

    var indices = [];
    var element = numero;
    var idx = validarr.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = validarr.indexOf(element, idx + 1);
    }
    // console.log(indices);
    if (indices.length > 1) {
         alert(element+ " no es valido en la fila");
        console.log(element + " no es valido en la fila")
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
            getcol(tablero,i,x);
            getrow(tablero,i,x);
        }
    }
}

//validartodo();


