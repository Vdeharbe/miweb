let miVector= [1,2,3,4,5];
console.log(miVector);
console.log(miVector[2]);

let miMatriz=[[1,2,3],[4,5,6],[7,8,9]];
console.log(miMatriz);
console.log(miMatriz [0][2]);


// creasr un vector desde cero vacio
let vector = new Array(3);

vector[0] = "uno";
vector[1]= "dos";
vector[2]= "tres";
console.log(vector);

// metodos con vectores
//agregar posiciones a los vectores
let fruta = ["banana", "manzana","pera"];
fruta.push("naranja");
console.log(fruta);
// elimino el ultimo elemento del vector
fruta.pop();
console.log(fruta);
// eliminar primer elemento
fruta.shift();
console.log(fruta);
//agregar elemento en el inicio
fruta.unshift("banana");
console.log(fruta);

//aplicar filtro
let frutasConA= fruta.filter(fruta => fruta.includes("a"));
console.log (frutasConA);

//concatenar vectores
let frutas1 = ["kiwi","durazno"];
let todasLasFrutas = fruta.concat(frutas1);
console.log(todasLasFrutas);

//revertir el orden de u vector
todasLasFrutas.reverse();
console.log(todasLasFrutas);

// ordenar alfabeticamente
todasLasFrutas.sort();
console.log(todasLasFrutas);