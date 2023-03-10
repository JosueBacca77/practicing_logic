// Every year, artists from around the world came to the city, where they make giant ice sculptures. The city becomes an open sky art gallery, since the sculptures are exposed in the street for weeks, without melting. This is because the average winter temperature in Harbin (time that will occur at the end of the world ICPC) is -20 degrees.

// The first step to make the sculpture is to assemble a large block of ice with the size requested by the artist. The blocks are cut from the glaciers of Harbin in blocks of standard height and depth, and several different lengths. The artist can determine the length he wishes his block of ice and the sculpture can begin to be carved.

// The lengths of the available blocks are {a1; a2; ...;  aN} and wished length by the artist is M. The block with length = 1 is widely used, for this reason he always appears in the list of available blocks. Your task is to find the minimum number of blocks such that the sum of their lengths is M.

// Input
// In the first input line there is an integer T indicating the number of test cases. Each test case contains two positive integer numbers N (1 ≤ N ≤ 25) and M (1 ≤ M ≤ 1000000). The number N represents the quantity of block types and the all size wished by the artist, respectively. The next line contains a1; a2; ...; aN integers, where (1 ≤ ai ≤ 100) for all i (1,2,...N) separated by a blank space.

// Output
// For each test case, print the minimum needed blocks to get a block with M length.

let M = 103

let blocks = [1, 5]

let selected = 0

let size = 0

let ordered = blocks.sort(function(a, b) {
    return b - a;
  });

  while (size < M) {
    for (let i = 0; i < blocks.length; i++) {
        console.log('elemento',blocks[i])
        if(blocks[i]+ size <= M){
            size += blocks[i]
            selected +=1
            i=-1
        }
    }
    
}

console.log('Total',size)
console.log('Amount',selected)