//calcuolar promedio
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let suma = 0;

  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  console.log(suma / numberList.length);
}

average(numbers);
