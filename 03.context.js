/**
 *  Context
 */

// relative to how we "call" functions
// depends of function type
// "this" keyword


/**
 *  "Simple" Functions
 */

function foo() {
	// 'use strict';
	// console.log(this);
}
foo();

// in non-strict : global
// in strict mode: undefined
// same for declarations & expressions


/**
 *  Constructors
 */

function User() {
	console.log(this);
}
new User();

// newly created object
// WARN: "new"


/**
 *  Methods
 */

// const user = {
// 	getName: function() {
// 		console.log(this);
// 	}
// };
// user.getName();

// the object containing the method


/**
 *  Arrows
 */

const user = {
	getName: () => {
		console.log(this);
	}
};
user.getName();

// outer context
// work best with callbacks


/**
 *  ES6 specific syntax
 */

// callbacks    - arrow functions
// methods      - simplified syntax
// constructors - classes
// IIFE         - modules


/**
 *  Context change
 */

const user1 = {
	name: 'Andrei',
	getName(greet, end) {
		console.log( greet, this.name, end );
	}
};

const user2 = {
	name: 'Matei'
};

user1.getName.call(user2, 'Salut', '!!!');
user1.getName.apply(user2, ['Salut', '!!!']);

const getUserName2 = user1.getName.bind(user2, 'Hello', '...');
getUserName2();

// call, apply: temporar
// bind: permanent
