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
  [0, 1, 0],
  [1, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
];

let visited = [];

let lengths = [];

function isVisited(x, y) {
  return visited.includes(`${x}${y}`);
}

function findExtensions(xy, grid) {
  let ext = [];
  if (grid[parseInt(xy[0]) + 1] && grid[parseInt(xy[0]) + 1][parseInt(xy[1])]) {
    // x+1,y
    ext.push((parseInt(xy[0]) + 1).toString() + parseInt(xy[1]).toString());
  }
  if (grid[parseInt(xy[0])] && grid[parseInt(xy[0])][parseInt(xy[1]) + 1]) {
    // x+1,y
    ext.push(parseInt(xy[0]).toString() + (parseInt(xy[1]) + 1).toString());
  }
  if (grid[parseInt(xy[0])] && grid[parseInt(xy[0])][parseInt(xy[1]) - 1]) {
    // x+1,y
    ext.push(parseInt(xy[0]).toString() + (parseInt(xy[1]) - 1).toString());
  }
  if (grid[parseInt(xy[0]) - 1] && grid[parseInt(xy[0]) - 1][parseInt(xy[1])]) {
    // x+1,y
    ext.push((parseInt(xy[0]) - 1).toString() + parseInt(xy[1]).toString());
  }
  return ext;
}

function nextStepInRIver(i, j, lengths, visited, inRiver, grid) {
  if (grid[i][j] === 1 && !isVisited(i, j, lengths, visited)) {
    //start river path
    if (!inRiver) {
      //first element of river, add to river lenghts
      inRiver = true;
      lengths.push(1);
    } else {
      //it's not the first element, sum 1 unit to the current river length
      lengths[lengths.length - 1] = lengths[lengths.length - 1] + 1;
    }

    //add to visited
    visited.push(`${i}${j}`);

    let actual_pos = i.toString() + j.toString();
    pos_length = lengths.length; //0 for the first 1 found

    let extensions = findExtensions(actual_pos, grid);

    for (let index = 0; index < extensions.length; index++) {
      const next_step = extensions[index];
      //ME VOY AL IF DE LA LINEA 39
      nextStepInRIver(
        next_step[0],
        next_step[1],
        lengths,
        visited,
        inRiver,
        grid
      );
    }
  }
}

let inRiver = false;
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    inRiver = false;
    //for each cell, check if it's 1 and if it's not in visited
    nextStepInRIver(i, j, lengths, visited, inRiver, grid);
  }
}
console.log("Lengths of rivers: ", lengths);

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

// [0, 1, 0 ],
// [1, 0, 0 ],
// [1, 0, 0 ],
// [1, 0, 0 ],

// output: [1, 2, 1]

function getStringPosition(position) {
  const { i, j } = position;
  return `${i}-${j}`;
}

function findAdjacentItems(position, visited, matrix) {
  const adjacents = [];
  const { i, j } = position;
  const iLimit = matrix.length - 1;
  const jLimit = matrix[0].length - 1;
  if (j + 1 <= jLimit && !visited.includes(getStringPosition({ i, j: j + 1 })))
    adjacents.push({ i, j: j + 1 }); //Item derecha
  if (j - 1 >= 0 && !visited.includes(getStringPosition({ i, j: j - 1 })))
    adjacents.push({ i, j: j - 1 }); //Item izquierda
  if (i + 1 <= iLimit && !visited.includes(getStringPosition({ i: i + 1, j })))
    adjacents.push({ i: i + 1, j: j }); //Item abajo
  if (i - 1 >= 0 && !visited.includes(getStringPosition({ i: i - 1, j })))
    adjacents.push({ i: i - 1, j }); //Item arriba

  return adjacents;
}

function traverRiver(position, visited, matrix, longRiver) {
  const adjacents = findAdjacentItems(position, visited, matrix);

  for (let k = 0; k < adjacents.length; k++) {
    if (
      visited.includes(
        getStringPosition({ i: adjacents[k].i, j: adjacents[k].j })
      )
    )
      continue;
    visited.push(getStringPosition({ i: adjacents[k].i, j: adjacents[k].j }));
    if (matrix[adjacents[k].i][adjacents[k].j] === 0) continue;
    longRiver.value = longRiver.value + 1;
    traverRiver(
      { i: adjacents[k].i, j: adjacents[k].j },
      visited,
      matrix,
      longRiver
    );
  }
}

function findRivers(matrix) {
  let visited = []; // [ [{i:0, j:1} , {i:2, j:0} ]
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    //Para cada fila
    for (let j = 0; j < matrix[i].length; j++) {
      //Para cada item
      if (visited.includes(getStringPosition({ i, j }))) continue;
      visited.push(getStringPosition({ i, j }));
      if (matrix[i][j] === 0) {
        continue;
      }
      var longRiver = { value: 1 };
      traverRiver({ i, j }, visited, matrix, longRiver);
      result.push(longRiver.value);
    }
  }

  return result;
}

const matrix = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

console.log(findRivers(matrix));
