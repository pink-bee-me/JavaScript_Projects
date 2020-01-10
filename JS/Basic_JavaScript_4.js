function my_Dictionary() {
    var music_Track = {
        Title:"Golden Brown",
        Artist:"The Stranglers",
        };
        delete music_Track.Artist;
        document.getElementById("Dictionary").innerHTML = "Now Playing: " + music_Track.Title + " by " + music_Track.Artist
}