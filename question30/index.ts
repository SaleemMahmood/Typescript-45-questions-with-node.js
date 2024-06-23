let userNames: string[] = ["Aamer", "Saleem", "Admin", "Waqar", "Shahid"]

userNames.forEach((user) => {
    if (user === "Admin") {
        console.log(`Hello ${user}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
})
