let guests = ["Aamer", "Shahzad", "Waqar", "Shahid"];
console.log(`Hello friends, great news we have found a bigger table, now we are inviting three more friends.`);
guests.unshift("Taj Wali");
guests.push("Iqbal");
guests.splice(Math.floor(guests.length / 2), 0, "Fiaz");
guests.forEach((items) => console.log(`Dear ${items}, you are invited to the dinner today.`));
export {};
