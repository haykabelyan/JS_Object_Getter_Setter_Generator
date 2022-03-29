
let user1 = {name: 'kim', age: 21};

console.log('name' in user1); 		// true
console.log('age' in user1);		// true
console.log('toString' in user1);	// true
console.log('valueOf' in user1);	// true
console.log('length' in user1);		// false

console.log(user1.hasOwnProperty('name'));		// true
console.log(user1.hasOwnProperty('age'));		// true
console.log(user1.hasOwnProperty('toString'));	// false
console.log(user1.hasOwnProperty('valueOf'));	// false
