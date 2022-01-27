

var tablero = [
    [1, 2, 3, 2, 0, 0, 3, 0, 0],
    [6, 5, 4, 0, 0, 0, 0, 0, 0],
    [7, 8, 5, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 5, 0, 0, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 0, 8, 0, 0, 9, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
//Funcion para llenar arrays con los datos de cada caja 3x3
var caja1 = llenarcaja(0, 0);
var caja2 = llenarcaja(0, 1);
var caja3 = llenarcaja(0, 2);
var caja4 = llenarcaja(1, 0);
var caja5 = llenarcaja(1, 1);
var caja6 = llenarcaja(1, 2);
var caja7 = llenarcaja(2, 0);
var caja8 = llenarcaja(2, 1);
var caja9 = llenarcaja(2, 2);
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
        // alert(element+ " no es valido en la columna");
        console.log(element + " no es valido en la caja")
    } else {
        // alert(element+ " es valido en la columna");
        console.log(element + " es valido en la caja")
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
        // alert(element+ " no es valido en la columna");
        console.log(element + " no es valido en la columna")
    } else {
        // alert(element+ " es valido en la columna");
        console.log(element + " es valido en la columna")
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
        // alert(element+ " no es valido en la fila");
        console.log(element + " no es valido en la fila")
    } else {
        // alert( element+ " es valido en la fila");
        console.log(element + " es valido en la fila")
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
            validarcaja(tablero, caja1);
            break;
        case 1:
            validarcaja(tablero, caja2);
            break;
        case 2:
            validarcaja(tablero, caja3);    
            break;
        case 3:
            validarcaja(tablero, caja4);    
            break;
        case 4:
            validarcaja(tablero, caja5);    
            break;
        case 5:
            validarcaja(tablero, caja6);    
            break;
        case 6:
            validarcaja(tablero, caja7);    
            break;
        case 7:
            validarcaja(tablero, caja8);    
            break;
        case 8:
            validarcaja(tablero, caja9);    
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

validartodo();


