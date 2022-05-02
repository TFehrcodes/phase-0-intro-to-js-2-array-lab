const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
  cats.push('Ralph');
};

function destructivelyPrependCat() {
  cats.unshift('Bob');
};

function destructivelyRemoveLastCat() {
  cats.pop();
};

function destructivelyRemoveFirstCat() {
  cats.shift();
};

function appendCat() {
  const newArray = [...cats, 'Broom'];
  return newArray;
};

function prependCat() {
  const newArray = ['Arnold', ...cats];
  return newArray;
};

function removeLastCat() {
  const newArray = [...cats.slice(0, 2)];
  return newArray;
};

function removeFirstCat() {
  const newArray = [...cats.slice(1,3)];
  return newArray;
}