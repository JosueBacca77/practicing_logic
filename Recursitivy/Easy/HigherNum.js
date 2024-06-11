function getHigher(index, higher, array){

    if(array[index] > higher){
        higher = array[index]
    };
    index += 1;

    if(index == array.length) return higher;

    return getHigher(index, higher, array)
}


function getHigherNum(array){

    let index = 0;
    let higher = array[0];
    return getHigher(index, higher, array)
}

console.log('Higher num', getHigherNum([99,4,7,3,5,9,88,2,1]))