
let user1 = {name: 'kim', age: 21};
let user2 = {name: 'anna', age: 18};


user1.valueOf = user2.valueOf = function () {
	return this.age;
}


if(user1 > user2){
	console.log('YES');
}else {
	console.log('NO');
}

