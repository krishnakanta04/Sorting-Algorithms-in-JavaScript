function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
      console.table(arr);
    }
  }
  return arr;
}

console.table(insertionSort([5, 4, 3, 2, 1]));
