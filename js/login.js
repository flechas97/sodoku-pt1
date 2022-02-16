async function validar (user,pass){
    let response = await fetch (`usuarios.json`);
    let pais = await response.json();
    // console.log(pais[0].name);
    return pais;
}

// (async function (){
//     let pais = await validar(user,pass);
//     for (const key of pais) {
//         if(key.user == user && key.pass == pass){
//             console.log("es valido");
//         }
//         console.log(key.user);
//         // console.log(key);
//     }
    
// })()

var user = "";
var pass= "";
var iniciar = document.getElementById("aceptar");
var usuario = document.getElementById("user");
var contraseña = document.getElementById("pass");
var val = document.getElementById("valida");

iniciar.addEventListener("click", () =>{
     user = usuario.value;
     pass = contraseña.value;
     (async function (){
        let pais = await validar(user,pass);
        for (const key of pais) {
            if(key.user == user && key.pass == pass){
                // console.log("es valido");
                if (!localStorage.getItem("user")) {
                    localStorage.setItem("punt","");
                }
                
                localStorage.setItem("user",user);
                location.href = "opciones.html";

            }else{
                val.innerHTML = "Usuario o Contraseña incorrecta";
            }
            
            // console.log(key);
        }
    })()
    //  console.log(user);
    //  console.log(pass);
})
   