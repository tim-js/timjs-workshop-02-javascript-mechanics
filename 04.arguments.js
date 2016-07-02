/**
 *  Arguments
 */

function a(x) {
	console.log(x);
}
// a(1);
// a(1, 2);
// a();


/**
 *  Default values
 */

function double(arr) {
	arr = (typeof arr === 'undefined') ? [] : arr;
	arr = arr || [];
	return arr.map(i => i + i);
}

function double(arr = []) {
	return arr.map(i => i + i);
}

// console.log( double([1, 2]) );
// console.log( double() );


/**
 *  Arguments object
 */

function b() {
	console.log(arguments);
}
b();
b(1);
b(1, 2);

// contains all passed arguments
// has a length property
// "array-like" object
// but not an actual array


/**
 *  Dynamic arguments
 */

function sum() {
	const arr = [].slice.call(arguments);
}

sum(); // 0
sum(1); // 1
sum(1, 2); // 3
sum(1, 2, 3, 4, 5); // 15