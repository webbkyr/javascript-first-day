function yearOfBirth(age){
    //define the year of birth//
    const yearOfBirth = 2017-age;
    //try statement tests a block of code for errors, in this case a negative age//
    try {
        //defined the invalid age//
        let invalidAge = age < 0;
        //if the age is invalid, throw an error with the custom message below//
        if (invalidAge === true) {
        throw new Error('Age cannot be negative');
        }
    }
    catch(e) {
        console.log("User error: " + e.message);
    }
	return 2017-age;
}

yearOfBirth(-2);

function whoAmI(name, age) {
    if (name !== typeof string || age !== typeof number) {
        return console.error('Arguments not valid');
    }
    console.log(`My name is ${name} and I'm ${age} years old.`);
    const yob = yearOfBirth(age); 
    console.log(`I was born in ${yob}.`);
}


whoAmI(3, 'one');
