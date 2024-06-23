let guests = ["Aamer", "Shahzad", "Waqar", "Shahid"];
console.log(`${guests[1]} can not attend the dinner.`);
guests.splice(1, 1, "Jadoon");
guests.map((items) => console.log(`Dear ${items}, you are invited to the dinner today.`));
export {};
