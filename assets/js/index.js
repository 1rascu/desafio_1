const precio = 400000;
let cant =1;
let tot = precio * cant;

const precioUnidad = document.querySelector("#precioUnidad");
const cantidad = document.querySelector("#cantidad");
const btnSumar = document.querySelector("#sumar");
const btnRestar = document.querySelector("#restar");
const total = document.querySelector("#total");

cantidad.innerHTML = cant;
precioUnidad.innerHTML = precio;
total.innerHTML = tot;

btnSumar.addEventListener("click", () => {
     cant = cant + 1;
     tot = precio * cant;
     cantidad.innerHTML = cant;
     total.innerHTML = tot; 
});

btnRestar.addEventListener("click", () => {
    if (cant > 1){
    cant = cant - 1;
    tot = precio * cant;
    cantidad.innerHTML = cant;
    total.innerHTML = tot;}
    else{alert("No puedes seleccionar menos de 1 producto")} 
});




 
