let contador = 0;
let costoTotal = 0;
let totalEnProductos = 0;
//Arreglo global para almacenar la lista de compras.
let datos = [];

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
// window.sessionStorage
// window.localStorage
// Almacenamiento local (localStorage no ocupa window)
localStorage.setItem("contadorProductos", contador);                 //Da llave y valor
let precio = (Math.floor((Math.random()*50)*100))/100;
let cantidad = parseFloat(txtNumber.value);
totalEnProductos+=(cantidad <1)? Math.ceil(cantidad):parseInt(cantidad);
document.getElementById("productosTotal").innerHTML = totalEnProductos;
localStorage.setItem("productosTotal", totalEnProductos);
costoTotal += (precio*cantidad);
total.innerHTML = `$${costoTotal.toFixed(2)}`;
localStorage.setItem("precioTotal", costoTotal.toFixed(2));
//id:contador quiere decir que tengo un dato llamado "id" y le asigno el valor de contador
//Necesito poner el nombre entre comillas porque es un STRING

//JSON

let elemento =`{
"id": ${contador}, 
"nombre": "${txtNombre.value}",  
"cantidad": ${txtNumber.value}, 
"precio":${precio} 
}`; //Definición de un objeto

datos.push(JSON.parse(elemento));
console.log(datos);


localStorage.setItem("elementosTabla", JSON.stringify(datos));


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

//Evento load para tomar los datos guardados en localStorage y volverlos a colocar en la página
//usamos localStorage.getItem
window.addEventListener("load", function(){

    if (localStorage.getItem("contadorProductos") != null) {
        contador = parseInt(localStorage.getItem("contadorProductos"));
        document.getElementById("contadorProductos").innerHTML = contador;

    }//if contadorProductos
    if (localStorage.getItem("productosTotal")) {
        totalEnProductos = parseInt(localStorage.getItem("productosTotal"));
        document.getElementById("productosTotal").innerHTML = totalEnProductos;

    }//if productosTotal
    if (localStorage.getItem("precioTotal")){
        costoTotal = parseFloat(localStorage.getItem("precioTotal"));
        total.innerHTML = costoTotal;

    }//if precioTotal
    

    if (localStorage.getItem("elementosTabla")!=null){
        datos = JSON.parse(localStorage.getItem("elementosTabla"));
        datos.forEach(element => {
            cuerpoTabla[0].innerHTML += `<tr>
            <th scope="row">${element.id}</th>
            <td>${element.nombre}</td>
            <td>${element.cantidad}</td>
            <td>$ ${element.precio}</td>
            </tr> `;
            
        });

    }




// console.log(localStorage.getItem("productosTotal"));
// console.log(localStorage.getItem("precioTotal"));
// console.log(localStorage.getItem("contadorProductos"));
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
