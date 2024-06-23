let userNames: string[] = ["Aamer", "Saleem", "Admin", "Waqar", "Shahid"]
userNames = []
if (userNames.length === 0) {
    console.log("We need to find some users!")
} else
userNames.forEach((user) => {
    if (user === "Admin") {
        console.log(`Hello ${user}, would you like to see a status report?`)
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`)
    }
})

