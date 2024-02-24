function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum('ali zafar', 'khul ke khel');
console.log(album);
album = makeAlbum('honey singh', 'love dose');
console.log(album);
