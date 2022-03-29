

let names = ['a', 'b', 'c'];
names.toString = function(){
	return this.join(',');
}
console.log(typeof names);
console.log('' + names);