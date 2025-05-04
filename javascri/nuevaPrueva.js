// puedo generar el prompt en una variable asi mostrar la respuesta
//luego la muestro en un alert
let respuesta = window.prompt("te suscribiste?");
alert (respuesta);

// puedo dar la respuesta escrita en rl prompt, despues de te suscrisbiste con ,
 let respuesta2 = window.prompt ("te suscribiste", "si,no.quizas");

 // para confirmar o no algo
 let respuesta3 = window.confirm("te suscribiste?");
 if (respuesta3 == true){
    alert ("muchas gracias");
 } else{
 alert ("te esperamos la proxima");
 }