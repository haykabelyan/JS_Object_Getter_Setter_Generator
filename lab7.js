
let user1 = {name: 'kim', age: 21};
let user2 = user1;

user1.name = 'guest';
console.log(user2.name);	// guest


let user3 = {name: 'kim3', age: 23};
let user4 = Object.assign({}, user3); // Copy Objects property
user3.name = 'guest';
console.log(user4.name);

let user5 = {name: 'kim5', age: 25};
let user6 = Object.assign({}, user5, {admin: false});
console.log(user6);

console.log(Object.keys(user6)); 	// 	[name, age, admin]
