let age = 20;
if (age < 2) {
    console.log(`your age is ${age} (less than 2 years). You are a baby`);
}
else if (age >= 2 && age < 4) {
    console.log(`your age is ${age} (greater than equal to 2 years but less than 4 years. You are a toddler`);
}
else if (age >= 4 && age < 13) {
    console.log(`your age is ${age} (greater than equal to 4 years but less than 13 years. You are a kid`);
}
else if (age >= 13 && age < 20) {
    console.log(`your age is ${age} (greater than equal to 13 years but less than 20 years. You are a teenager`);
}
else if (age >= 20 && age < 65) {
    console.log(`your age is ${age} (greater than equal to 20 years but less than 65 years. You are an adult`);
}
else if (age >= 65) {
    console.log(`your age is ${age} (greater than or equal to 65). You are an elder`);
}
export {};
