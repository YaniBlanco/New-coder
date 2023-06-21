var numero = parseInt(prompt("ingrese su DNI"))
if (numero > 30000000) {
  alert("Usted tiene descuentos hasta el 30%")
} else {
  alert("Usted tiene un descuento adicional del 10%")

} 

do{
var texto = prompt("seleccione una categoria de medicamentos: \n1. Analgésicos y antiinflamatorios\n2. Antiinfecciosos\n3. Mucolíticos y antitusivos\n4. Antialérgicos\n5. Antipiréticos");



var descuento = 0;
var categoriaSeleccionada = parseInt(texto);

switch (categoriaSeleccionada) {
  case 1:
    descuento = 10; // Descuento del 10% para la primera categoría
    break;
  case 2:
    descuento = 50; // Descuento del 50% para la segunda categoría
    break;
  case 3:
    descuento = 30; // Descuento del 30% para la tercera categoría
    break;
  case 4:
    descuento = 30; // Descuento del 30% para la cuarta categoría
    break;
  case 5:
    descuento = 40; // Descuento del 40% para la quinta categoría
    break;
  default:
    alert("Categoría no válida");
    break;
}

if (descuento > 0) {
  alert("Seleccionaste la categoría " + categoriaSeleccionada + ". Tienes un descuento del " + descuento + "%.");
}
var respuesta = prompt("¿Desea realizar otra consulta? (S/N)");
if (respuesta.toLowerCase() === "s") {
  alert("Selecciona otra categoria...");
}
} while (respuesta.toLowerCase() === "s");