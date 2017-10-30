function yearOfBirth(age){
	const yearOfBirth = 2017-age;
	return yearOfBirth;
}

function whoAmI(name, age) {
    console.log(`My name is ${name} and I'm ${age} years old.`);
    const yob = yearOfBirth(age); 
    console.log(`I was born in ${yob}.`);
}


whoAmI("Tony", 21);
