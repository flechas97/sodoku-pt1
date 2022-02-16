var dark = document.querySelector(".darkmode")
var body = document.body;
var td = document.getElementsByTagName("td");
var input  = document.getElementsByTagName("input");

dark.addEventListener("click", () =>{
    body.classList.toggle("dark");
    dark.classList.toggle("dark");
    for (let i = 0; i < td.length; i++) {
        td[i].classList.toggle("dark");
        input[i].classList.toggle("dark");
    }
})