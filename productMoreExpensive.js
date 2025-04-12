function getMostExpensive(products) {
  // Tu código acá

  const sorted = products.sort((a, b) => {
    return b.price - a.price;
  });

  return sorted[0];
}

const sample = [
  { name: "Teclado", price: 3000 },
  { name: "Mouse", price: 1500 },
  { name: "Monitor", price: 25000 },
];

console.log(getMostExpensive(sample));
