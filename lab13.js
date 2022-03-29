// GENERATOR


function* foo() {
	console.log('a');
	const b = yield 1;
	console.log('b=' + b);
	yield 2;
}

const a = foo();
console.log( a.next() );	// {value: 1, done: false}
console.log( a.next('b') );	// {value: 2, done: false}
console.log( a.next() );	// {value: undefined, done, true}





