var countries = ['Pakistan', 'India', 'Afghanistan', 'France'];
console.log(countries);
// alphabetical order
var alphabetical = countries.slice().sort();
console.log(alphabetical);
console.log(countries);
// reverse order
var reverse = countries.slice().sort().reverse();
console.log(reverse);
console.log(countries);
// reverse the original list
countries.reverse();
console.log(countries);
// again reverse the original list
countries.reverse();
console.log(countries);
// alphabetical order 
countries.sort();
console.log(countries);
// reverse order
countries.sort().reverse();
console.log(countries);
