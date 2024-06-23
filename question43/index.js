function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(great) {
    return great.map(name => `The great ${name}`);
}
let magicians_names = ["Aamer", "Shahid", "Waqar", "Fiaz"];
let duplicate_array = magicians_names.slice();
let great_magician = make_great(duplicate_array);
show_magicians(magicians_names);
show_magicians(great_magician);
export {};
