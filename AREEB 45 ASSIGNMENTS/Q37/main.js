function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love typescript'; }
    console.log("you have order a ".concat(size, ", that says ").concat(text));
}
makeShirt();
makeShirt('medium');
makeShirt('small', 'I love cricket');
