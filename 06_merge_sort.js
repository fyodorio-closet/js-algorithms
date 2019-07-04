const myArray = [3,4,6,24,11,8,21,99,1,243,1231,2,81];

const merge = (leftArr, rightArr) => {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length){
    if (leftArr[leftIndex] < rightArr[rightIndex]){
      mergedArr.push(leftArr[leftIndex++]);
    } else {
      mergedArr.push(rightArr[rightIndex++]);
    }
  }

  const leftRemainder = leftArr.slice(leftIndex);
  const rightRemainder = rightArr.slice(rightIndex);

  return [...mergedArr, ...leftRemainder, ...rightRemainder];
};

const mergeSort = arr => {
	if (arr.length <= 1) {
		return arr;
	}

  const midIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, midIndex);
  const rightHalf = arr.slice(midIndex);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

console.log(mergeSort(myArray));
