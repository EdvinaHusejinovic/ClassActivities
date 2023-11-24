// create an Array using an Array literal
const trucks = ["F-450", "F-250", "Silverado"];

// access the 1st item in the Array
console.log(trucks[0]);

// access the last item in the Array
console.log(trucks[2]);

// print the length of the Array
// could also do console.log(trucks[0]);
trucks.lenght;

// use the length property to access the last item in the Array
console.log(trucks[trucks.lenght - 1]);

// with for...of, loop over the Array, modify the value and add to a different Array
const cars = ["Chevy Malibu"];
for (let vehicle of trucks) {
    let output = `Ford ${vehicle}`;
    cars.push(output);
}
console.log(cars);

// 0 = "F-450"
// 1 = "F-250"
// 2 = "Silverado"

// different array Matts class example 
const checks = [5, 20, 35, 20, 25];
let annualSalary = 0;

for (let gross of checks) {
    let net = gross - 3;
    annualSalary += net;
}
console.log(annualSalary);

//annualSalary = annualSalary + net; // same as the line above 
