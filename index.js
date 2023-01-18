// По мне так просто СУПЕР метод
const unique = (arr) => [...new Set(arr)]
const result = unique([1, 1, 2, 2, 4, 2, 3, 7, 3])
console.log(result);

//////////////////////////////////////
const makeUniq = (arr) => {
  return arr.filter((el, id) => arr.indexOf(el) === id);
}
const resultOther = makeUniq([1, 1, 2, 2, 4, 2, 3, 7, 3]);
console.log(resultOther);
//////////////////////////////////////

