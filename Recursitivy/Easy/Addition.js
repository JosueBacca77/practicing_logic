function addNumber(array, index, result) {
  result += array[index];
  index += 1;

  if (index === array.length) return result;

  return addNumber(array, index, result);
}

function addition(array) {
  let result = 0;
  let index = 0;

  return addNumber(array, index, result);
}

function addition2(array) {
  if (array.length === 0) return 0;
  return array[0] + addition(array.slice(1));
}

console.log("ADDITION: ", addition([2, 1, 3]));
