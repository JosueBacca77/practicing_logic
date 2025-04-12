// You are given a grid of size
//  that has the following specifications:

// - Each cell in the grid contains either a policeman or a thief.
// - A policeman can only catch a thief if both of them are in the same row.
// - Each policeman can only catch one thief.
// - A policeman cannot catch a thief who is more than K units away from the policeman.
// - Write a program to find the maximum number of thieves that can be caught in the grid.

//WE MUST LOOK ALWAYS AT THE LEFT FIRST, THEN RIGHT

const grid = [
  ["P", "T", "P", "T", "P", "P"],
  ["T", "T", "T", "T", "T", "T"],
  ["T", "T", "T", "T", "T", "T"],
  ["T", "T", "T", "T", "T", "T"],
];

const K = 2;

function isFreeThief(r, c, caught) {
  return !caught.includes(r.toString() + c.toString());
}

let total_caught = 0;
let caught_thieves = [];
for (var i = 0; i < grid.length; i++) {
  //on each row
  let row_caught = 0;
  for (var j = 0; j < grid[i].length; j++) {
    //on each cell
    let police_caught = 0;
    if (grid[i][j] === "P") {
      //look at left
      for (var w = K; w > 0; w--) {
        if (grid[i][j - w] === "T" && isFreeThief(i, j - w, caught_thieves)) {
          police_caught++;
          caught_thieves.push(`${i}${j - w}`);
          w = 0;
        }
      }
      if (!police_caught) {
        //didnt catch at left, look for thieves at right
        for (var w = 1; w <= K; w++) {
          if (grid[i][j + w] === "T" && isFreeThief(i, j + w, caught_thieves)) {
            caught_thieves.push(`${i}${j + w}`);
            police_caught++;
            w = K + 1;
          }
        }
      }
    }
    row_caught += police_caught;
  }
  total_caught += row_caught;
}
console.log("TOTAL ", total_caught);

// You are given a grid of size
//  that has the following specifications:

// - Each cell in the grid contains either a policeman or a thief.
// - A policeman can only catch a thief if both of them are in the same row.
// - Each policeman can only catch one thief.
// - A policeman cannot catch a thief who is more than K units away from the policeman.
// - Write a program to find the maximum number of thieves that can be caught in the grid.

//WE MUST LOOK ALWAYS AT THE LEFT FIRST, THEN RIGHT

// const grid = [
//   ["P", "P", "P", "T", "T", "T"],
//   ["T", "T", "T", "T", "T", "T"],
//   ["P", "T", "T", "T", "T", "T"],
//   ["T", "T", "T", "T", "P", "P"],
// ];

// const K = 3;

function main(grid, k) {
  let totalCaught = 0;
  for (let i = 0; i < grid.length; i++) {
    let caughtIndexes = [];
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const element = row[j];
      if (element === "T") continue;
      let hasCaught = false;

      //Recorro hacia la izquierda
      for (let l = j - k; l < j; l++) {
        if (
          l >= 0 &&
          !hasCaught &&
          !caughtIndexes.includes(l) &&
          grid[i][l] &&
          grid[i][l] === "T"
        ) {
          caughtIndexes.push(l);
          totalCaught += 1;
          hasCaught = true;
        }
      }

      if (!hasCaught) {
        //Recorro hacia la derecha
        for (let l = j + k; l > j; l--) {
          if (
            l < row.length &&
            !hasCaught &&
            !caughtIndexes.includes(l) &&
            grid[i][l] &&
            grid[i][l] === "T"
          ) {
            caughtIndexes.push(l);
            totalCaught += 1;
            hasCaught = true;
          }
        }
      }
    }
  }

  return totalCaught;
}

// console.log(main(grid, K));
