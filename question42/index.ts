function show_magicians (magicians: string[]) {
    magicians.forEach(name => console.log(name))
}
function make_great (great: string[]) {
    return great.map(name => `The great ${name}`)
}
let magicians_names: string[] = ["Aamer", "Shahid", "Waqar", "Fiaz"]

let great_magicinas = make_great(magicians_names)
show_magicians(great_magicinas)