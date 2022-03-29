

const user1 = {
	name: 'hayk',
	yearOfBirth: 1981,
	age () {
		return new Date().getFullYear() - this.yearOfBirth
	}
};

console.log(user1.age());
