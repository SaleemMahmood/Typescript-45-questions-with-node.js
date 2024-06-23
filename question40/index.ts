function make_album (artist_name:string, album_title:string, tracks?: number) {
    let album : {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    }
if(tracks !== undefined) {
    album.tracks = tracks
}
return album
}

console.log(make_album("Aamer", "Murree", 2))
console.log(make_album("Aamer", "Swat"))
console.log(make_album("Aamer", "Kaghan", 20))