function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(great) {
    return great.map(name => `The great ${name}`);
}
let magicians_names = ["Aamer", "Shahid", "Waqar", "Fiaz"];
let great_magicinas = make_great(magicians_names);
show_magicians(great_magicinas);
export {};
