function permute(string) {
    const result = [];

    function generate(n, arr) {
        if (n === 1) {
            result.push(arr.join(''));
        } else {
            for (let i = 0; i < n - 1; i++) {
                generate(n - 1, arr);
                if (n % 2 === 0) {
                    [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];  // Swap elements for even indices
                } else {
                    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];  // Swap elements for odd indices
                }
            }
            generate(n - 1, arr);
        }
    }

    generate(string.length, string.split(''));
    return result;
}
const start = Date.now()

// Uso del algoritmo
const string = 'ABCDEF';
console.log(permute(string));

console.log('Time: ',Date.now() - start)
