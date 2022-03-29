
const user1 = {
	name: 'hayk',
	yearOfBirth: 1981,
	get age () {
		return new Date().getFullYear() - this.yearOfBirth
	},
	set age(age){
		this.yearOfBirth = new Date().getFullYear() - age;
	}
};

console.log(user1);
delete user1.age;
console.log(user1);