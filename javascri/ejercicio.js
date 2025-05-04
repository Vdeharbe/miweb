//parseInt para convertir un string a numero
let num1 = parseInt( window.prompt("Ingrese un numero"));
let num2 = parseInt(window.prompt ("ingrese otro numero"));

if(num1>num2){
    alert ( num1 + " es mayor que  " + num2)
} else if(num1<num2){
    alert ( num2 + " es mayor que  " + num1)
} else {
    alert ("los numeros ingresados son iguales");

}


let fecha = new Date();
let dia = fecha.getDate();
alert ("el dia de hoy es " + dia);

var fechaIngreso = prompt("ingrese la fecha","mm,dd,aaaa");
var fecha2 = new Date (fechaIngreso);
var dia2 = fecha2.getDay();
var diaSemana;

switch (dia2){
    case 0 :
    diaSemana = "domingo"
    break;
    case 1: 
    diaSemana = "lunes";
    break;
    case 2: 
    diaSemana = "martes";
    break;
    case 3: 
    diaSemana = "miercoles";
    break;
    case 4: 
    diaSemana = "jueves";
    break;
    case 5: 
    diaSemana = "viernes";
    break;
    case 6: 
    diaSemana = "sabado";
    break;
    default:
        dia2 = "no es dia de la semana"
}
alert ("el dia de la semana que ingresaste es: "+ diaSemana)