const myArray = [3,4,6,24,11,8,21,99,1,243,1231,2,81];

const selectionSort = (arr) => {
  const sortedArray = arr;
  for (let i = 0; i < sortedArray.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[smallestIndex]) smallestIndex = j;
    }
    [sortedArray[i], sortedArray[smallestIndex]] = [sortedArray[smallestIndex], sortedArray[i]];
  }
  return sortedArray;
}

console.log(selectionSort(myArray));