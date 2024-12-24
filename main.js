// Slice Method
function slice(array, start, end) {
	if (array == null && array instanceof Array) throw new Error("Invalid");

	(start = Number(start)), (end = Number(end));
	const n = array.length;

	if (!start && !end) {
		return [...array];
	}

	if (isNaN(start)) start = 0;
	if (isNaN(end)) end = n;

	if (start < 0) start = n + start;
	if (end < 0) end = n + end;

	const newArr = [];

	while (start < end) {
		newArr.push(array[start++]);
	}
	return newArr;
}

(() => {
	const arr = [1, 2, 3, 4, 5];

	console.log(slice(arr, 1));
})();
