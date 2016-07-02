/**
 *  Scope
 */

// variable visibility
// relative to how we "declare" functions
// regardless of function type

var x = 1;

function a() {
	var y = 2;
	// x = 3;
}
a();

// console.log(x);

// function = masina cu geamuri fumurii
// global variables
// local variables
// global scope ("global" in Node, "window" in browser)


// -------------------------------------------------------------------

var x = 1;

function a() {
	var x = 2;
	console.log(x, 'inner scope');
}
a();

console.log(x, 'global scope');

// variable shadowing
// variable lookup
// functions inside functions


/**
 *  Implicit globals
 */

function a() {
	y = 1;
}
console.log(y);


/**
 *  Strict mode
 */

'use strict';

x = 1;

function a() {
	y = 1;
}
console.log(y);

// optional
// eliminates bad-parts, without removing features
// no implicit globals
// affects code "after" statement, "within" the scope
// don't put it in global scope
// use IIFE
// always use Strict Mode
// implicit in ES6 Modules & Classes


/**
 *  Hoisting
 */

console.log(x);
var x = 1;

// function expressions
// function declarations


/**
 *  Blocks
 */

if (true) {
	var x = 1;
}
console.log(x);

// there is no block level scope in ES5
// other languages have


/**
 *  Block-level scope (ES6)
 */

if (true) {
	let x = 1;
}
console.log(x);


/**
 *  Temporal Dead Zone (TDZ)
 */

console.log(x);
let x = 1;


/**
 *  Constants
 */

const x = 1;
x = 2;
// var MAX_AGE = 90;


/**
 *  Function arguments
 */

function a(param) {
	console.log(param);
}
a(20);

// part of the local scope


/**
 *  Not defined vs. Undefined
 */

// var z;
console.log(z);
