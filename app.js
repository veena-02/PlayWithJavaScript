let name='Veena';
const noOfStates=28;
let add=noOfStates+name;
function sayHello(){
	window.alert("Hello World");
}
function checkAge(name,age) {
	if(age<21){
		window.alert("Sorry " + name + ", you aren't old enough to view this page!");
	}
}
sayHello();
checkAge('Charles',21);
checkAge('Abby',27);
checkAge('James',18);
checkAge('John',17);
let vegetables=['okra','onion','tomatoes','capsicum'];
for(var i=0;i<vegetables.length;i++){
	console.log(vegetables[i]);
}
var pet={
	name:'Shaun',
	breed:'German Sheperd'
}
console.log(pet.name);
console.log(pet.breed);
let pupils=[];
pupils.push({
	name:'Arya',
	age:21
});
pupils.push({
	name:'Binod',
	age:18
});
pupils.push({
	name:'Celina',
	age:25
});
pupils.push({
	name:'Dimple',
	age:31
});
pupils.push({
	name:'Eeshaan',
	age:12
});
for(var i=0;i<pupils.length;i++){
	checkAge(pupils[i].name,pupils[i].age);
}
function getLength(word){
	return word.length;
}
let mylength=getLength('HelloWorld');
if(mylength%2==0){
	console.log('The world is nice and even!');
}
else{
	console.log('The world is not nice and odd');
}
