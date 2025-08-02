const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  let index = nameList.indexOf(nameToFind);

  if (index !== -1) {
    console.log(true, index);
  } else {
    console.log(false);
  }
}

nameFinder(names, 'Tony');
nameFinder(names, 'Hulk');
