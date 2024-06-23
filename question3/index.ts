let personName: string = "Saleem mahmood";
function titleCase(person_name: string) {
    let array = person_name.split(' ');
    let capitalizeFristLettter = array.map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLocaleLowerCase())
    let joinArray = capitalizeFristLettter.join(' ');
    return joinArray
};
console.log(personName.toLocaleLowerCase())
console.log(personName.toLocaleUpperCase())
console.log(titleCase(personName))