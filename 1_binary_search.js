const myArray = [3,4,6,24,11,8,21,99,1,243,1231,2,81];
const myNumber = 81;
  
const binarySearch = (array, item) => {
  let base = 0;
  let top = array.length - 1;
  while (base <= top) {
    const mid =  Math.floor((base + top) / 2);
    const guess = array[mid];
    if (guess === item) {
      return mid;
    };
    if (guess < item) {
      base = mid + 1;
    } else {
      top = mid - 1;
    };
  };
  return null;
};

const sortedArray = myArray.sort((a,b) => a-b);

console.log(`Number ${myNumber} is at position ${binarySearch(sortedArray, myNumber)+1} of array [${sortedArray}]`);