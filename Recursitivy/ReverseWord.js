//Given a word, print it reverse, for example: hello --> olleh

const word = 'hello'

//Using recursivity
let reverse = ''
for (let index = word.length -1; index >= 0; index--) {
    const letter = word[index];

    reverse = reverse + letter
}

console.log('FINAL WITHOUT', reverse)

//Using recursitivy
function getReverse(str) {
    if(!str) return '';

    return str[str.length-1] + getReverse(str.substring(0,str.length-1))
}

console.log('FINAL USING RECURSIVE:',getReverse(word))