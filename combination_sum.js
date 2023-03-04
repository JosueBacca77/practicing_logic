//You have an array of candidates numbers, and a target
//You have to return an array where every element id an array of a combination of numbers which the su of them is equal to the target e.g.:
//Candidates: [1,2]
//Target: 3
//Output : [ [1,1,1], [1,2]]

const candidates = [1,2,3]
const target = 3

let sorted = candidates.sort(function(a, b) {
    return a - b;
  });

let combinations = []

let sum = 0
let combo = []
for (let i = 0; i < sorted.length; i++) {
    const number = sorted[i];
    //get current sum of number in the current combo
    for (let j = 0; j < combo.length; j++){
        sum += combo[j]
    }

    //sum is bigger than target, the last number in combo has to be removed and
    //we step to the next number
    if (number + sum > target){
        if(combo.length === 0 || //we dont have any other numbers to check
            ( combo.length > 0 && number === combo[0]) // the number where we're in, is bigger to the target, so the next ones numbers are too, or the number is smaller than the target but is the smallest value and added to itself, exceed the target (e.g, value is 2 and target 3)
        ){
            i = sorted.length -1
        }else{
            //we removed the last element
            combo = combo.slice(0,-1)
            i = i -1 //in the next loopt, it'll be index again (the same number)
        }
    }

    if (number + sum < target){
        combo.push(number)
        i = i -1 //in the next loopt, it'll be index again (the same number)
    }

    if (number + sum == target){
        const right_combination = combo
        combinations.push(right_combination)
        //remove the last element that makes achive the target
        combo = combo.slice(0,-1)
    }
    sum = 0
}

console.log('Combinations: ',combinations)