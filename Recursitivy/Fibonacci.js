function getFibonnacciNext(first, second, sum, current, limit){
    current += 1
    if(current> limit) return [first, second, sum]

    sum = first + second;
    first = second
    second = sum

    return getFibonnacciNext(first, second, sum, current, limit)
    
}

function fibonacci(num){

    let first = 0;
    let second = 1;
    let result = 0;

    [first, second, result] = getFibonnacciNext(first, second, result, 1, num)

    return result

}

console.log('Fibonacci: ', fibonacci(3))