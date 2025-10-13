function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    const e = arr[i];
    if (e < smallest) {
      smallest = e;
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];
  let i = 0;
  while (0 < arr.length) {
    const smallestIndex = findSmallest(arr);
    newArr.push(arr[smallestIndex]);
    arr.splice(smallestIndex, 1);
  }
  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
