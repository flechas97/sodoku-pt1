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
            getcol(tablero,i,x);
            getrow(tablero,i,x);
        }
    }
}