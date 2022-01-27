

var tablero =  [
                [1,0,0,2,0,0,3,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [4,0,0,5,0,0,6,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [7,0,0,8,0,0,9,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
];
var fila1 = document.getElementsByClassName("r0");
for (let i = 0; i < fila1.length; i++) {
    fila1[i].value = tablero[0][i];
}
// document.write("<table border='1'");
// for (let i = 0; i < 3; i++) {
//     document.write("<tr>");
//     for (let k = 0; k < 3; k++) {
//         document.write("<td>");
//         document.write("<input value='"+tablero[i][k]+"'></input>")
//         document.write();
//         document.write("</td>");
//     }
//     document.write("</tr>");
// }

// document.write("</table");


function getcol(array,col) {
    validarr = [];
    for (let i = 0; i < array.length; i++) {
        document.write(array[i][col]);
        validarr.push(array[i][col]);
    }
    console.log(validarr);

    var indices = [];
    var element = 1;
    var idx = validarr.indexOf(element);
    while (idx != -1) {
    indices.push(idx);
    idx = validarr.indexOf(element, idx + 1);
    }
    console.log(indices);
    if(indices.length>1){
        // alert(element+ " no es valido en la columna");
        console.log(element+ " no es valido en la columna")
    }else{
        // alert(element+ " es valido en la columna");
        console.log(element+ " es valido en la columna")
    }
}
function getrow(array,row) {
    var validarr = [];
    for (let i = 0; i < array.length; i++) {
        document.write(array[row][i]);
        validarr.push(array[row][i]);
    } 
    console.log(validarr);

    var indices = [];
    var element = 1;
    var idx = validarr.indexOf(element);
    while (idx != -1) {
    indices.push(idx);
    idx = validarr.indexOf(element, idx + 1);
    }
    console.log(indices);
    if(indices.length>1){
        // alert(element+ " no es valido en la fila");
        console.log(element+ " no es valido en la fila")
    }else{
        // alert( element+ " es valido en la fila");
        console.log(element+ " es valido en la fila")
    }
}
getcol(tablero,0);
getrow(tablero,0);
//getrow(tablero,0);



// for (let x = 0; x < array.length; x++) {
    
    
// }
