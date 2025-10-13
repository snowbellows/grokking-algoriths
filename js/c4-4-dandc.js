function binarySearch(arr, search) {
  if (arr.length === 1) {
    if (arr[0] === search) {
      return arr[0];
    } else {
      return undefined;
    }
  }

  let low = 0;
  let high = arr.length;
  const mid = Math.floor((low + high) / 2);

  const guess = arr[mid];

  if (guess === search) {
    return guess;
  } else {
    if (guess > search) {
      high = mid;
    } else {
      low = mid;
    }
    return binarySearch(arr.slice(low, high), search);
  }
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));
