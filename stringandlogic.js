function jediName(firstName, lastName) {
    let firstPart = lastName.slice(0, 3);
    let secondPart = firstName.slice(0, 2);
    return firstPart+secondPart;

}

console.log(jediName('Webb', 'Kayla'));
//first three letters of last nam and first two letters of first name