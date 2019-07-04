// Sum of array elements
const arrSum = data => data.length === 0 ? 0 : data[0] + arrSum(data.slice(1));

// Array length
const arrLength = data => data[0] === undefined ? 0 : 1 + arrLength(data.splice(1));

// Find max value among array elements
const arrMax = data => {
    if (data.length === 0) return 'No data in the array';
    if (data.length === 1) return data[0];
    if (data[0] > data[1]) data[1] = data[0];
    return arrMax(data.splice(1));
}

// Binary search
const arrBS = (data, item, base = 0, top = data.length - 1) => {
    const guessIndex =  Math.floor((top - base) / 2 + base);
    if (data[guessIndex] === item) {
        return guessIndex;
    }
    if (top - base === 0) {
        return 'No match'
    }
    if (data[guessIndex] < item) {
      return arrBS(data, item, guessIndex+1, top);
    } 
    if (data[guessIndex] > item) {
      return arrBS(data, item, base, guessIndex);
    }
}

// Tests
console.log(arrMax([3,4,6,24,11,8,21,99,1,243,1231,2,81]));
console.log(arrSum([3,4,6,24,11,8,21,99,1,243,1231,2,81]));
console.log(arrLength([3,4,6,24,11,8,21,99,1,243,1231,2,81]));
console.log(arrBS([1,2,3,4,6,8,11,21,24,81,99,243,1231], 81));