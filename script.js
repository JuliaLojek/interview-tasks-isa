function calcAverage(...arr) {
  const sum = arr.reduce((acc, value) => {
    return acc + value
  }, 0);
  return sum / arr.length;
}

function calcMedian(...arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  const number1 = arrSorted[Math.floor((arr.length -1) / 2)];
  const number2 = arrSorted[Math.ceil((arr.length -1) / 2)];
  return (number1 + number2) / 2;
}

function getMin(...arr) {
  return Math.min(...arr);
}

function getMax(...arr) {
  return Math.max(...arr);
}

console.log(calcAverage(4, 90, 27, 38) === 39.75);
console.log(calcMedian(4, 90, 27, 38) === 32.5);
console.log(calcMedian(4, 90, 490, 27, 38) === 38);
console.log(getMin(4, 90, 27, 38) === 4);
console.log(getMax(4, 90, 27, 38) === 90);

function createObject(arr) {
  return {
    average: calcAverage(...arr),
    median: calcMedian(...arr),
    min: getMin(...arr),
    max: getMax(...arr)
  };
}

console.log(createObject([49, 274, 402, 40, 29]));