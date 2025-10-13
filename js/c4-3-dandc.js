function findMax(arr, max) {
  if (!max) {
    max = 0;
  }
  if (arr.length === 1) {
    if (arr[0] > max) {
      return arr[0];
    }
    return max;
  } else {
    if (arr[0] > max) {
      max = arr[0];
    }
    return findMax(arr.slice(1), max);
  }
}

console.log(findMax([4, 1, 3, 5, 2]));
