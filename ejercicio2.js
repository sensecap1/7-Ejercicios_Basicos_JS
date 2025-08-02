//1- Pasar la edad de Luke de 19 años a 25 años
const jedi = {nombre: "Luke Skywalker", edad: 25};
console.log("La edad de Luke Skywalker es:", jedi.edad);

//2- Presentación al estilo Leia Organa, crear 3 variables de personaje:
const princesa = {
  nombre: "Leia", 
  apellido: "Organa", 
  edad: 20
};

console.log("Soy " + princesa.nombre + " " + princesa.apellido + ", tengo " + princesa.edad + " años y soy una princesa de Alderaan.");

//3- Calculando el coste total de sables de luz:
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

console.log("El coste total de sables de Luz es:" + (sable1.precio + sable2.precio));

//4- Actualizar el precio final de las naves:
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

console.log("Precio final de " + nave1.nombre + ": " + (nave1.precioFinal = nave1.precioBase + precioBaseGlobal) + " créditos.");
console.log("Precio final de " + nave2.nombre + ": " + (nave2.precioFinal = nave2.precioBase + precioBaseGlobal) + " créditos.");

