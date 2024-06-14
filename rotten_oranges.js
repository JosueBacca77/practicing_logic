// You are given a matrix of integers where each cell can have one of the three following values:

// 0: Represents an empty cell.
// 1: Represents a fresh orange.
// 2: Represents a rotten orange.
// Every minute, any fresh orange that is adjacent (up, down, left, right) to a rotten orange becomes rotten.

// You need to determine the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Constraints
// The dimensions of the grid are given as 
// 𝑚
// ×
// 𝑛
// m×n where 
// 𝑚
// m is the number of rows and 
// 𝑛
// n is the number of columns.
// Each cell in the grid can contain only one of the three values (0, 1, 2).

// const matrix = [
//     [2, 1, 1, 0, 1],
//     [1, 0, 1, 1, 2],
//     [1, 0, 1, 0, 1],
//     [0, 2, 1, 1, 1]
// ]


//Simple case
// const matrix = [
//     [2, 1, 1],
//     [1, 1, 0],
//     [0, 1, 1]
// ]

//Isolated frash oranges
// const matrix = [
//     [2, 0, 1],
//     [0, 1, 0],
//     [1, 0, 2]
// ]

//Not all of them will be rotten
const matrix = [
    [2, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 2, 0, 1, 0]
]



function getPositionFromString(str){
    return [parseInt(str.split('-')[0]),parseInt(str.split('-')[1])]
}

function getAllAdyacentsPositions(x, y){
    return [`${x+1}-${y}`,`${x}-${y+1}`,`${x-1}-${y}`,`${x}-${y-1}`]
}

function makeStringPosition(x,y) {
    return `${x}-${y}`
}

function minuteProcess(matrix) {

    let rotten = [];
    let thereIsSomeFresh = false;

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];

        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            if(cell === 2 && 
                !rotten.find(visitedCell => {
                const [x,y] = getPositionFromString(visitedCell);
                    return x === i && y === j 
                }))
            {
                //Rotten and not visited in this minute yet
                getAllAdyacentsPositions(i,j).forEach(stringPosition => {
                    const [x,y] = getPositionFromString(stringPosition)
                    if (matrix[x] && matrix[x][y] === 1){
                        matrix[x][y] = 2;
                        rotten.push(makeStringPosition(x,y))
                    }
                });
            }
            if(cell === 1){
                thereIsSomeFresh = true
            }
        }
    }
    console.table(matrix);
    return [rotten.length, thereIsSomeFresh]
}

function rottenOranges(oranges) {
    let minutes = 0
    while (true) {
        const [rottenInMinute, thereIsFresh] = minuteProcess(oranges)
        if(!rottenInMinute && thereIsFresh) return -1;
        if(!rottenInMinute) return minutes

        minutes+=1;
    }
}


const result = rottenOranges(matrix)

console.log('Amount of minutes: ',result)