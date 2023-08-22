// Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
// edad se debe mostrar un mensaje indicándolo


let entrada=document.getElementById("edad")

entrada.addEventListener('change',(e)=>{
let edad=e.target.value;
document.getElementById("resultado").textContent= (edad > 17 ) ?  "Sos mayor de edad" : "Sos menor de edad"
})
