let contador = 0;
let costoTotal = 0;


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

let total = document.getElementById("precioTotal");
// cuerpoTabla[0].innerHTML = 
// `<tr>
// <th scope="row">1</th>
// <td>Leche descremada</td>
// <td>1</td>
// <td>$ 23.00</td>
// </tr>`;
// // tableListaCompras

//EVENTOS -> Sucesos que ocurren en la página interacture o no con el usuario.

//Validaciones

function validarNombre(){
if (txtNombre.value.length <= 3){
    return false;
}//if
return true;
}//Validad Nombre

function validarCantidad(){
if(txtNumber.value.length==0) {
    return false;
}
if (isNaN(txtNumber.value)){
    return false;
}//if
if (parseFloat(txtNumber.value)<=0){
    return false;
}//if
return true;
} //Validad Cantidad


let agregar = document.getElementById("btnAgregar");

agregar.addEventListener("click",(event)=>{
event.preventDefault(); //Previene lo que hace por default cuando le doy click al botón

if ((! validarNombre()) || (! validarCantidad()) ){
    // document.getElementById("alertValidacionesTexto").innerHTML="Los campos deben de ser llenados correctamente";
    document.getElementById("alertValidaciones").style.display="block";
    let lista = "";
    if (!validarCantidad()){
        txtNumber.style.border = "red thin solid";
        lista+="<li>Se debe de escribir una cantidad válida</li>";
    }
    if (!validarNombre()){
        txtNombre.style.border = "red thin solid";
        lista+="<li>Se debe de escribir un nombre válido</li>";
    }
    document.getElementById("alertValidacionesTexto").innerHTML=`
    Los campos deben de ser llenados correctamente
    <ul>${lista} </ul>

    `;


    setTimeout(function(){document.getElementById("alertValidaciones").style.display="none";
     },5000
     
     );
    return false;
}
document.getElementById("alertValidaciones").style.display = "none";
txtNumber.style.border = "";
txtNombre.style.border = "";
contador++;
document.getElementById("contadorProductos").innerHTML = contador;
let precio = (Math.floor((Math.random()*50)*100))/100;
let cantidad = parseFloat(txtNumber.value);
costoTotal += (precio*cantidad);
total.innerHTML = `$${costoTotal.toFixed(2)}`;

let tmp = `<tr>
<th scope="row">${contador}</th>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>$ ${precio}</td>
</tr> `
console.log(tmp);
cuerpoTabla[0].innerHTML += tmp; //+= concatena inner.html y la info agregada del tmp


//Sirve para limpiar campos y hacer focus en nombre
txtNombre.value="";
txtNumber.value="";
txtNombre.focus();
});


// agregar.addEventListener("click",(event)=>{
//     console.log("Dale click en el botón agregar", event);


// });

txtNombre.addEventListener("blur", (event) => {
    event.target.value = event.target.value.trim();

}
);

txtNumber.addEventListener("blur", (event) => {
    event.target.value = event.target.value.trim();

}

);



// FUNCION DE VALIDAR CANTIDAD
// function validarCantidad(){
//     if(txtNumber.value.length==0) {
//         return false;
//     }// if
//      if (isNaN(txtNumber.value)){
//         return false;
//      }//if

//      if (parseFloat(txtNumber.value)<=0) {
//         return false;
//      }//if
//      return true;
// }// validarCantidad
