const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  let counts = {};

  for (let i = 0; i < list.length; i++) {
    let word = list[i];

    if (counts[word]) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }

  console.log(counts);
}

repeatCounter(words);
