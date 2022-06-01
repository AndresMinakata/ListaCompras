// document.getElementById modifica etiqueta ID dentro del <body>

let element = document.getElementById("totalPrecio");
element.innerHTML = "Total en precio";

let txtNombre = document.getElementById("Name");
// txtNombre.value = "Leche Semidescremada";
// console.log(txtNombre.value);

let txtNumber = document.getElementById("Number");


// let campos = document.getElementsByClassName("campo");
// campos[0].value = "Leche descremada deslactosada light = Agua";
// console.log(campos[0].value);
// console.log(campos);
// //Crea un borde rojo para cada clase campo
// for (let i=0; i <campos.length; i++){
//     campos[i].style.border="red thin solid";
// } //for
// // getElementsByTagName -> Por el nombre de la etiqueta
// let spans = document.getElementsByTagName("span");

// for (let i =0; i<spans.length; i++){
//     console.log(spans[i].textContent);
// }

let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");
// cuerpoTabla[0].innerHTML = 
// `<tr>
// <th scope="row">1</th>
// <td>Leche descremada</td>
// <td>1</td>
// <td>$ 23.00</td>
// </tr>`;
// // tableListaCompras

//EVENTOS -> Sucesos que ocurren en la página interacture o no con el usuario.

let agregar = document.getElementById("btnAgregar");

agregar.addEventListener("click",(event)=>{
let precio = Math.random()*50;
let tmp = `<tr>
<th scope="row">1</th>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>$ ${precio}</td>
</tr> `
console.log(tmp);
cuerpoTabla[0].innerHTML += tmp;
//Sirve para limpiar campos y hacer focus en nombre
txtNombre.value="";
txtNumber.value="";
txtNombre.focus();
});



// agregar.addEventListener("click",(event)=>{
//     console.log("Dale click en el botón agregar", event);


// });

