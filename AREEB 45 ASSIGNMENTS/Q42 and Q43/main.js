// // Q42
// function show_magicians(magicians: string[]): void{
//     for (const magician of magicians){
//         console.log(magician.charAt(0).toUpperCase()+ magician.slice(1));
//     }
// }
// function make_great (magicians: string[]):void {
//     for (let i=0; i< magicians.length; i++){
//     magicians[i] = magicians [i]+ ' great'}
// }
// const magicians2 : string[] = ['areeb','usman']
// make_great(magicians2)
// show_magicians(magicians2)
// Q43
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the great');
    }
    return greatMagicians;
}
var magicians3 = ['areeb', 'usman'];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
