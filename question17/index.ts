let guests: string[] = ["Taj Wali", "Aamer", "Jadoon", "Fiaz",  "Waqar", "Shahid", "Iqbal"]
console.log(`Due to unavoidable circumstances, I can now invite only two friends.`)
while (guests.length > 2) {
    let remove: string | undefined = guests.pop();
    if(remove !== undefined) {
    console.log(`sorry ${remove}, you are not invited to the dinner.`)
}}
guests.forEach((guest) => console.log(`${guest}, you are still invoted.`))
guests.splice(0, guests.length)
console.log("Updated guest list: ", guests);
