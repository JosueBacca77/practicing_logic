function getFibonnacciNext(first, second, sum, current, limit) {
  current += 1;
  if (current > limit) return [first, second, sum];

  sum = first + second;
  first = second;
  second = sum;

  return getFibonnacciNext(first, second, sum, current, limit);
}

function fibonacci(num) {
  let first = 0;
  let second = 1;
  let result = 0;

  [first, second, result] = getFibonnacciNext(first, second, result, 1, num);

  return result;
}

console.log("Fibonacci: ", fibonacci(3));

//SEGUNDA VERSION
function fibonacci(first, second, count, limit) {
  if (count === limit) return [];
  const sum = first + second;
  count += 1;

  return [sum, ...fibonacci(second, sum, count, limit)];
}

function getFibonacci(number) {
  const first = 0;
  const second = 1;
  let count = 2;

  return [first, second, ...fibonacci(first, second, count, number)];
}

console.log(getFibonacci(6));

//Otra version
//Fibonacci

function getFibonacciSerie(first, second, limit, acum, i){
    if(limit===0) return '0'
    if(limit===1) return '0, 1'
    //dos o mas, empezamos a caluclar las sumas
    const sum = first+second
    acum = `${acum}, ${sum}`

    //corte
    if(limit===i) return acum
    i=i+1
    return getFibonacciSerie(second, sum, limit, acum, i)
}


function getFibonacci(limit){
    const first = 0
    const second = 1
    let acum = `${first}, ${second}`
    let i = 2

    return getFibonacciSerie(first, second, limit, acum, i)

}

console.log(getFibonacci(8))
