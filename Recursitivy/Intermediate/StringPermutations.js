function factorial(number) {
  if (number === 0) return 1;

  return number * factorial(number - 1);
}

function getRandomOrderList(length) {
  const positions = [];

  for (let index = 0; index < length; index++) {
    positions.push(index);
  }

  const finalOrders = Array(length).fill(null);

  while (positions.length > 0) {
    const element = positions[0];

    const posibleNextPositions = [];

    //Obtenemos un array con las posiciones que quedan libres
    //en el orden final
    finalOrders.forEach((element, index) => {
      if (element === null) posibleNextPositions.push(index);
    });

    //Obtenemos un elemento aleatorio de las posiciones libres
    const randomPositiondex = Math.floor(
      Math.random() * posibleNextPositions.length
    );
    finalOrders[posibleNextPositions[randomPositiondex]] = element;

    positions.splice(0, 1);
  }

  return finalOrders;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getRandomOrderListFisherYates(length) {
  const positions = Array.from({ length }, (_, i) => i);
  return shuffle(positions);
}

function generatePermutations(string, permutations = [], orders = []) {
  const permutationsAmount = factorial(string.length);

  if (permutations.length === permutationsAmount) return permutations;

  let isNewOrder = false;
  let randomOrderString = "";
  let randomOrderList = [];

  while (!isNewOrder) {
    // randomOrderList = getRandomOrderList(string.length)
    randomOrderList = getRandomOrderListFisherYates(string.length);

    randomOrderString = randomOrderList.join("");

    //Si el orden ya existe, volvemos a generar otro
    if (orders.includes(randomOrderString)) continue;
    isNewOrder = true;
  }

  orders.push(randomOrderString);

  let newPermutation = "";

  randomOrderList.forEach((index) => {
    newPermutation += string[index];
  });

  permutations.push(newPermutation);

  return generatePermutations(string, permutations, orders);
}

const string = "AB";
const permutations = [];
let orders = [];

const start = Date.now();
console.log(generatePermutations(string, permutations, orders));

console.log("Time: ", Date.now() - start);
