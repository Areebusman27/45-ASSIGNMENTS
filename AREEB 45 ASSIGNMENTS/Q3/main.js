var personName = 'Eric';
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.replace(/\b\ w/g, function (c) { return c.toUpperCase(); }));
