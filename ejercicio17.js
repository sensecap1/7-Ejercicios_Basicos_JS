const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
};

for (let prop in alien) {
  console.log("La propiedad " + prop + " tiene cómo valor: " + alien[prop]);
}
