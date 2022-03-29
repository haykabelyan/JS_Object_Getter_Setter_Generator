// GETTER


const user1 = {
	name: 'hayk',
	yearOfBirth: 1981,
	get age () {
		return new Date().getFullYear() - this.yearOfBirth
	}
};

console.log( user1.name );
console.log( user1.yearOfBirth );
console.log( user1.age );
