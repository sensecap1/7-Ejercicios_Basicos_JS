//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
console.log("4.1:",aldeanos[3]);

//4.2 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("cervasio");
console.log("4.2:", aldeanos);


//4.3 - Cambia el primer elemento de este array por "Bambina".
aldeanos[0] = "Bambina";
console.log("4.3:", aldeanos);

//4.4 - Dale la vuelta a este array.
aldeanos.reverse();
console.log("4.4:", aldeanos);

//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
let indexNarciso = aldeanos.indexOf("Narciso");
if (indexNarciso !== -1) {
  aldeanos.splice(indexNarciso, 1, "Canela");

//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.
  console.log("4.6:", aldeanos[aldeanos.lenght -1]);
}