// Datos del empleado
var nombre = prompt("ingrese su nombre: ");
var apellido = prompt("ingrese su apellido: ");
var cedula = prompt("ingrese su cedula: ");

// Horas trabajadas por turno
var horasDiurnas = prompt("ingrese la cantidad de horas diurnas trabajadas: ");
var horasVespertinas = prompt("ingrese la cantidad de horas vespertinas trabajadas: ");
var horasNocturnas = prompt("ingrese la cantidad de horas nocturnas trabajadas: ");

// Costo por hora
let costoDiurno = 675;
let costoVespertino = 700;
let costoNocturno = 956.23;

// Cálculo del salario quincenal sin deducciones
let salarioSinDeducciones = (horasDiurnas * costoDiurno + horasVespertinas * costoVespertino + horasNocturnas * costoNocturno) * 15;

// Cálculo de los descuentos de ahorro habitacional y seguro social
let salarioMensual = salarioSinDeducciones * 2; // El salario mensual es igual al salario quincenal multiplicado por dos
let ahorroHabitacional = 0;
let seguroSocial = 0;

if (salarioMensual < 85.000) {
  ahorroHabitacional = salarioMensual * 0.01;
  seguroSocial = salarioMensual * 0.015;
} else if (salarioMensual >= 85.000 && salarioMensual <= 150.000) {
  ahorroHabitacional = salarioMensual * 0.015;
  seguroSocial = salarioMensual * 0.02;
} else if (salarioMensual > 150.000) {
  ahorroHabitacional = salarioMensual * 0.03;
  seguroSocial = salarioMensual * 0.025;
}

// Cálculo del salario quincenal con deducciones
let salarioConDeducciones = salarioSinDeducciones - (ahorroHabitacional + seguroSocial) / 2;

// Visualización de resultados
document.write("Datos personales:");
document.write("<br>");
document.write("Nombre: " + nombre);
document.write("<br>");
document.write("Apellido: " + apellido);
document.write("<br>");
document.write("Cédula: " + cedula);
document.write("<br>");
document.write("<br>");
document.write("Salario quincenal sin deducciones: " + salarioSinDeducciones.toFixed(2) + " BsF");
document.write("<br>");
document.write("Descuento de ahorro habitacional: " + ahorroHabitacional.toFixed(2) + " BsF");
document.write("<br>");
document.write("Descuento de seguro social: " + seguroSocial.toFixed(2) + " BsF");
document.write("<br>");
document.write("Salario quincenal con deducciones: " + salarioConDeducciones.toFixed(2) + " BsF");
