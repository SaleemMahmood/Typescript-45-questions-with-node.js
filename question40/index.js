function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Aamer", "Murree", 2));
console.log(make_album("Aamer", "Swat"));
console.log(make_album("Aamer", "Kaghan", 20));
export {};
