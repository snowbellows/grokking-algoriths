function countArr(arr) {
  if (arr.length === 1) {
    return 1;
  }
  return 1 + countArr(arr.slice(1));
}

console.log(countArr([1, 2, 3, 4]));
