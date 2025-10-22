function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const less = arr.slice(1).filter((x) => x <= pivot);
  const greater = arr.slice(1).filter((x) => x > pivot);
  return [...quicksort(less), pivot, ...quicksort(greater)];
}

console.log(quicksort([10, 5, 2, 3]));
