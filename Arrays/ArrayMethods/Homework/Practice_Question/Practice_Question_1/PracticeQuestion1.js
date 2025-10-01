// Create an array to store companies, and perform removal, modification and addition ops on the array
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// remove first company from array
console.log(`Original companies: ${companies}`);
companies.shift();
console.log(`Companies array after removing first element: ${companies}`);

// Replace "Uber" with "Ola"
companies.splice(companies.indexOf("Uber"), 1, "Ola");
console.log(`Companies array after removing "Uber" and adding "Ola" in its place: ${companies}`);

// Add Amazon at the end
companies.push("Amazon");
console.log(`Adding "Amazon" to the end of the companies array: ${companies}`);
