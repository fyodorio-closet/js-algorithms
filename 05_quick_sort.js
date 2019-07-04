const myArray = [3,4,6,24,11,8,21,99,1,243,1231,2,81];

const quickSort = arr => {
	if (arr.length <= 1) {
		return arr;
	}

	let pivot = arr[0];

	let less = [];
	let greater = [];

	arr.slice(1)
		.forEach(element =>
				 element < pivot ? less.push(element) : greater.push(element)
				);

	return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(myArray));
