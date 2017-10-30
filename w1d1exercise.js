function yearOfBirth(age){
    const yearOfBirth = 2017-age;
    try {
        age < 0;
    }
    catch(e) {
        console.log("Age cannot be negative");
        console.dir(e);
    }
	return yearOfBirth;
}

function whoAmI(name, age) {
    console.log(`My name is ${name} and I'm ${age} years old.`);
    const yob = yearOfBirth(age); 
    console.log(`I was born in ${yob}.`);
}


whoAmI("Tony", -2);
