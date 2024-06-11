// Crear un array de 10000 elementos con valores del 1 al 10000
let array_to_sort = Array.from({ length: 5000 }, (_, i) => i + 1);

// Desordenar el array usando el algoritmo de Fisher-Yates
for (let i = array_to_sort.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array_to_sort[i], array_to_sort[j]] = [array_to_sort[j], array_to_sort[i]];
}


//Using recursivity

function sortLists(sorted, unsorted) {
    if (unsorted.length === 0) return sorted;
    const elementToSet = unsorted.shift();

    const newSorted = [];
    //Set current element into the right position of sorted list
    for (let index = 0; index < sorted.length; index++) {
        const currentElement = sorted[index];

        if(newSorted.includes(elementToSet)){
            // If element to set is already in newSorted list,
            //is because it's already sorted, just push the element
            newSorted.push(currentElement)
        }else{
            //Scenario 1: current element is smaller than elementToSet
            if(elementToSet > currentElement){
                //Add the current element to the sorted list
                newSorted.push(currentElement)
            };

            //Scenario 2: current element is higher than elementToSet
            if(currentElement > elementToSet){
                //Add the current element to the sorted list
                newSorted.push(elementToSet)
                newSorted.push(currentElement)
            };

            //ElementToSet is hogher than all the sorted list
            if(index === sorted.length -1 && !newSorted.includes(elementToSet)){
                newSorted.push(elementToSet)
            }
        }
    };
    return sortLists(newSorted, unsorted)
}

function InsertionSort(list) {
    const inititalSorted = [list.shift()];

    const unsorted = [...list];

    return sortLists(inititalSorted, unsorted)

};

console.log('-----RECURSIVE----')

const startRecursive = Date.now()
const sortedList = InsertionSort([...array_to_sort]);

console.log('Sorted: ', sortedList )
console.log('Time: ', Date.now()-startRecursive)

//Iterative alternative

function InsertionSorting(list) {
    const sortedList = [list[0]];

    list.shift();

    const unsortedList = [...list];

    for (let i = 0; i < unsortedList.length; i++) {
        const elementToInsert = unsortedList[0];
        
        let j = sortedList.length -1;// index to arrange sorted list to find new element's position

        //Arrange list from right (higher) to left (smaller) until we found an element smaller than the currrent
        //one to insert
        while ( sortedList[j] > elementToInsert && j > -1 ){

            if(j===0){
                //If we get to the fisrt element of the list
                //and none of them is smaller than the current, 
                //the current is the smallest, set it at the top of the list
                sortedList.unshift(elementToInsert)
            }

            j-=1

        }
        if(j>-1){
            //We dont get the top of the list, there is an element smaller
            //in the list, we have to put it in its posiiton

            //Move one space next every element higher than the current one
            for (let k = sortedList.length-1; k > j; k--) {
                
                sortedList[k+1] = sortedList[k]
                                
            }
            sortedList[j+1] = elementToInsert
        }
        unsortedList.shift()
        i-=1
    };

    return sortedList;
}

console.log('-----ITERATIVE----')

const start = Date.now()
// console.log('start',start)

// console.log('END',Date.now() )
console.log('Sorted: ', InsertionSorting(array_to_sort) )

console.log('Time: ',Date.now() - start)
