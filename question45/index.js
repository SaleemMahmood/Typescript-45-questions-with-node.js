function create_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        ...Object.assign({}, ...options)
    };
    return car;
}
let car1 = create_car("toyota", "corllla");
let car2 = create_car("toyota", "corllla", { color: "red" });
let car3 = create_car("toyota", "corllla", { color: "red" }, { optional_feature: ["power window", "air bag"] });
console.log("Car-1 Features: ");
console.log(car1);
console.log("Car-2 Features: ");
console.log(car2);
console.log("Car-3 Features: ");
console.log(car3);
export {};
