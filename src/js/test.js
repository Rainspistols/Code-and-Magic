function getRandom(itemNum) {
  return Math.floor(Math.random() * itemNum);
}

var numbers = {
  '0': 0,
  '1': 0,
  '2': 0,
  '3': 0,
  '4': 0,
  '5': 0,
};

function randomCheckNum(itemNum) {
  for (var i = 0; i < 1000; i++) {
    var index = getRandom(itemNum);
    if ((numbers.hasOwnProperty(index))) {
      numbers[index]++;
    }
  }
}

randomCheckNum(6);

Object.keys(numbers).forEach((key) => {
  console.log(`${key} : ${numbers[key]}`);
});
