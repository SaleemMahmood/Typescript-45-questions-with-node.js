let current_users = ["Aamer", "saleem", "Admin", "waqar", "Shahid"];
let new_users = ["Rabbani", "Shaheen", "Saleem", "Butt", "Waqar", "saleem"];
new_users.forEach(newUser => {
    let condition = current_users.some(currentUser => currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase());
    if (condition) {
        console.log(`Sorry, the user name ${newUser} is already taken`);
    }
    else {
        console.log(`The user name ${newUser} is available`);
    }
});
export {};
