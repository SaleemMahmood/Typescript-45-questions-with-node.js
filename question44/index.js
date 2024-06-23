function makeSandwich(...items) {
    console.log("\n\nSandwich is made with following items: ");
    items.forEach(item => console.log(item));
    console.log("\nEnjoy your sandwich!");
}
makeSandwich("Egg", "Bread");
makeSandwich("Suger", "Mango", "Butter");
makeSandwich("Chicken", "Cheese", "Butter", "bread");
export {};
