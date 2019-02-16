
// Library class holds library info
class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  //add playlists to the library
  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }

  //method to show all playlists and their creators
  showPlaylists() {
    let count = 1;
    console.log(`\n\t@"${this.name.toUpperCase()}" library, created by -${this.creator.toUpperCase()}-, has the following playlists:`);
    this.playlists.forEach((playlist) => {
      console.log(`\t\t${count++} - ${playlist.name}`);
    })
    console.log("\n");
  }

  //method to show all playlist with their track's information
  showPlaylistsWithTracks() {
    let count = 1;
    console.log(`\n\t@"${this.name.toUpperCase()}" library, created by -${this.creator.toUpperCase()}-, has the following playlists with respective tracks:\n`);
    this.playlists.forEach((playlist) => {
      console.log(`\t\t${count++}o playlist`);
      playlist.showTracks();
    })
    console.log("\n");
  }
}

module.exports = Library;
