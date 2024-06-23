let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinalnumber;
    if (number === 1) {
        ordinalnumber = "st";
    }
    else if (number === 2) {
        ordinalnumber = "nd";
    }
    else if (number === 3) {
        ordinalnumber = "rd";
    }
    else {
        ordinalnumber = "th";
    }
    console.log(`${number}${ordinalnumber}`);
}
export {};
