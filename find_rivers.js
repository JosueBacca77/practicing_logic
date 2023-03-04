//You have a matrix of 1s and 0s, 1s represent rivers and 0s represent land
//rivers are represented by consucutive 1s in horizontal and vertical way (not diagonal)
//you have to uotput an array with all the lengths of every river found. e.g.: 
// [0, 1, 0 ],
// [1, 0, 0 ],
// [1, 0, 0 ],
// [0, 1, 0 ],

// output: [1, 2, 1] 

// [1, 1, 1 ],
// [1, 0, 0 ],
// [1, 0, 0 ],
// [0, 1, 0 ],

// output: [5, 1] 

const grid = [
    [0, 1, 0 ],
    [1, 0, 0 ],
    [1, 0, 0 ],
    [0, 1, 0 ],
]

let visited = []

let lengths = []

function isVisited(x,y){
    return (visited.includes(`${x}${y}`))
}

function findExtensions(xy, grid){
    let ext = []
    if( grid[parseInt(xy[0]) +1] && grid[parseInt(xy[0]) +1][parseInt(xy[1])] ){ // x+1,y
        ext.push( ( parseInt(xy[0]) +1).toString() + parseInt(xy[1]).toString())
    }
    if(grid[parseInt(xy[0])] && grid[parseInt(xy[0])][parseInt(xy[1])+1] ){ // x+1,y
        ext.push( ( parseInt(xy[0])).toString() + ( parseInt(xy[1])+1).toString())
    }
    if(grid[ parseInt(xy[0])] && grid[ parseInt(xy[0])][parseInt(xy[1])-1] ){ // x+1,y
        ext.push( parseInt(xy[0]).toString() + (parseInt(xy[1])-1).toString())
    }
    if(grid[ parseInt(xy[0])-1] && grid[ parseInt(xy[0])-1][parseInt(xy[1])] ){ // x+1,y
        ext.push( ( parseInt(xy[0])-1).toString() + parseInt(xy[1]).toString())
    }
    return ext
}


function nextStepInRIver(i,j, lengths, visited, inRiver, grid){
    if( grid[i][j] === 1 && !isVisited(i,j, lengths, visited) ){
        //start river path
        if (!inRiver){
            //first element of river, add to river lenghts
            inRiver = true
            lengths.push(1)
        }else{
            //it's not the first element, sum 1 unit to the current river length
            lengths[lengths.length-1] = lengths[lengths.length-1]+1 
        }

        //add to visited
        visited.push(`${i}${j}`)

        let actual_pos = i.toString()+j.toString()
        pos_length = lengths.length //0 for the first 1 found
        
        let extensions = findExtensions(actual_pos, grid)
    
        for (let index = 0; index < extensions.length; index++) {
            const next_step = extensions[index];
            //ME VOY AL IF DE LA LINEA 39
            nextStepInRIver(next_step[0], next_step[1], lengths, visited, inRiver, grid)
        }
    }
}

let inRiver = false
for(let i=0; i<grid.length;i++){
    for(let j=0; j<grid[i].length;j++){
        inRiver = false
        //for each cell, check if it's 1 and if it's not in visited
        nextStepInRIver(i, j, lengths, visited, inRiver, grid)
    }
}
console.log('Lengths of rivers: ',lengths)