const myArray = [3,4,6,24,11,8,21,99,1,243,1231,2,81];

const bubbleSort = unsortedArray => {
    let sortedArray = JSON.parse(JSON.stringify(unsortedArray));
    let numberOfSwaps = 0;

    for (let i = 0; i < sortedArray.length; i++) {

        for (let j = 0; j < sortedArray.length - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                sortedArray = JSON.parse(JSON.stringify(swapArrayElements(sortedArray, j)));
                numberOfSwaps++;
            }
        }

        if (numberOfSwaps === 0) {
            break;
        }
    }

    return { sortedArray, numberOfSwaps };
};

const swapArrayElements = (array, index) => {
    const swappedArray = JSON.parse(JSON.stringify(array));
    const temporaryElement = swappedArray[index];
    swappedArray[index] = swappedArray[index + 1];
    swappedArray[index + 1] = temporaryElement;
    return swappedArray;
};

console.log(bubbleSort(myArray));
