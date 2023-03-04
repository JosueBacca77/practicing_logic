// You receive a string of brackets, square brackets and keys and you have to determine if
// the sintax is correct eg:
// {[](())} -> valid
// [()) -> invalid

let a = '()'

const isAp=(ch)=>{
    return(
        ch === '(' ||
        ch === '{' ||
        ch === '['
    )
}

function isValidApCloser(ap,cl){
    return(
        ap === '(' && cl === ')' ||
        ap === '{' && cl === '}' ||
        ap === '[' && cl === ']' 
    )
}

let isValid =(a)=>{
    let arr = a.split('')
    let aperturas = []

    for (var i = 0; i < arr.length; i++) {
        if(isAp(arr[i])){
            aperturas.push(arr[i])
        }else{
            //is closer, its app must be at the end of aperturas array
            if( !(aperturas.length) ){
                return ('INVALID')
            }
            const lastAp = aperturas.pop()
            if( !(isValidApCloser(lastAp, arr[i])) ){
                return ('INVALID')
            }
        }
    }
    if( !(aperturas.length) ){
        return ('VALID')
    }else{
        return ('INVALID')
    }
    
} 

console.log(isValid(a))