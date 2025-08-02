const toys = [
  'Muñeca Elsa',
  'Robot programable',
  'Gato de peluche',
  'Coche teledirigido',
  'Casa para gatos',
  'Pelota',
  'Puzzle de animales'
];

const filteredToys = [];

for (let toy of toys) {
  if (!toy.toLowerCase().includes('gato')) {
    filteredToys.push(toy);
  }
}

console.log(filteredToys);