/**
 *  Values
 */

// primitives are values
var v1 = 'a';
var v2 = v1;
// console.log(v1, v2);

v2 = 'b';
// console.log(v1, v2);
// console.log(v1 === v2);


/**
 *  References
 */

// objects are references
var o1 = { a: 1 };
var o2 = o1;
// console.log(o1, o2);

o2.b = 2;
// console.log(o1, o2);
// console.log(o1 === o2);

// how do you think should be "normal"?
// "2 red cars"


/**
 *  Passing by Value vs. Passing by Reference
 */

function inc(nr) {
	nr += 1;
	return nr;
}
var n = 2;
// console.log(inc(n), n);

function incObj(obj) {
	obj.nr += 1;
	return obj;
}
var o = { nr: 2 };
// console.log(incObj(o), o);
// console.log(inc(o.nr), o.nr);


/**
 *  Equality vs. Deep Equality
 */

// console.log( 1 === 1 );
// console.log( 'a' === 'a' );
// console.log( {} === {} );

// objects are "equal" if they have the same reference
// objects are "deep equal" if they have the same "content"

// QUIZ: implement deepEqual()

function isDeepEqual(v1, v2) {

}

isDeepEqual(1, 1); // true
isDeepEqual(1, 2); // false
isDeepEqual({ a: 1 }, { a: 1 }); // true
isDeepEqual({ a: 1 }, { b: 1 }); // false


/**
 *  Object Cloning
 */

var o1 = { a: 1 };
var o2 = clone(o1);

// QUIZ: implement clone()

function clone(obj) {

}

// console.log( o1 === o2 ); // false
// console.log( isDeepEqual(o1, o2) ); // true
