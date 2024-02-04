function filterArray(numbers, value) {
  const newArray = [];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > value) {
      newArray.push(numbers[index]);
    }
  }
  return newArray;
}
