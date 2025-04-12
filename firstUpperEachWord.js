const string = "la casa rosada";

function capitalizeFirstLetter(string) {
  const arrayWords = string.split(" ");

  return arrayWords.map((word) => {
    // const firstLetterUpper = word[0].toUpperCase();
    // const rest = word.slice(1);
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  });
}

console.log(capitalizeFirstLetter(string));
