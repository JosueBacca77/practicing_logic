// Crear un array de N elementos con valores del 1 al 10000
let array_to_sort = Array.from({ length: 50 }, (_, i) => i + 1);

// Desordenar el array usando el algoritmo de Fisher-Yates
for (let i = array_to_sort.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array_to_sort[i], array_to_sort[j]] = [array_to_sort[j], array_to_sort[i]];
}

console.log(array_to_sort)
