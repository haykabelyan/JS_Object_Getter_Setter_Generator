// GETTER, SETTER


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

user1.age = 99;	
console.log(user1.yearOfBirth); 