const toys = [
  { name: 'Muñeca Elsa', sellCount: 10 },
  { name: 'Robot programable', sellCount: 42 },
  { name: 'Pelota', sellCount: 17 },
  { name: 'Gato de peluche', sellCount: 8 },
  { name: 'Coche teledirigido', sellCount: 33 }
];

const popularToys = [];

for (let toy of toys) {
  if (toy.sellCount > 15) {
    popularToys.push(toy);
  }
}

console.log(popularToys);
