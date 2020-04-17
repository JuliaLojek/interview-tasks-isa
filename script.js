function calcAverage(arr) {
  const sum = arr.reduce((acc, value) => {
    return acc + value
  }, 0);
  return sum / arr.length;
}

function calcMedian(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  const number1 = arrSorted[Math.floor((arr.length -1) / 2)];
  const number2 = arrSorted[Math.ceil((arr.length -1) / 2)];
  return (number1 + number2) / 2;
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}
