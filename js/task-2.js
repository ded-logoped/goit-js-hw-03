function makeArray(firstArray, secondArray, maxLength) {
  let thirdArray = firstArray.concat(secondArray);
  if (thirdArray.length > maxLength) {
    thirdArray = thirdArray.slice(0, maxLength);
  }
  return thirdArray;
}
