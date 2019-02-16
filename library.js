// Library class
class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
    // console.log(this.playlists);
  }

  showPlaylists() {
    let count = 1;
    console.log(`\n\t"${this.name.toUpperCase()}" library has the following playlists:`);
    // console.log(this.playlists[0].name);
    this.playlists.forEach((playlist) => {
      console.log(`\t\t${count++} - ${playlist.name}`);
    })
    console.log("\n");
  }

  // showPlaylistsAndTracks() {
  //   let count = 1;
  //   console.log(`\n\t"${this.name.toUpperCase()}" library has the following playlists:`);
  //   // console.log(this.playlists[0].name);
  //   this.playlists.forEach((playlist) => {
  //     console.log(`\t\t${count++} - ${playlist.name}`);
  //   })
  //   console.log("\n");
  // }

}

// Playlist class
class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
    this.overallRating = 0;
    this.totalDuration = 0;
  }

  addTrack(track) {
    this.tracks.push(track);
    this.totalDuration += track.length;
    let tempRating = 0;
    this.tracks.forEach((track) => tempRating += track.rating);
    this.overallRating = (tempRating / this.tracks.length).toFixed(1);
    console.log("tempRating: ", tempRating);
    
  }

  showTracks() {
    let count = 1;
    console.log(`\n\t"${this.name.toUpperCase()}" playlist has the following tracks:`);
    // console.log(this.playlists[0].name);
    this.tracks.forEach((track) => {
      console.log(`\t\t${count++} - ${track.title} \t:${track.length}sec  -  rating: ${track.rating}`);
    })
    console.log(`\tOverall Rating is ${this.overallRating}
    \tTotal Duration is ${(this.totalDuration/60).toFixed(2)} minutes`);
    console.log("\n");
  }
}

// Track class
class Track {
  constructor(title, rating, length)  {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

let lib1 = new Library("test", "me");
let playlist1 = new Playlist("first_playlist");
let playlist2 = new Playlist("second_playlist");
let track1 = new Track("track1", 3, 400);
let track2 = new Track("track2", 5, 500);
let track3 = new Track("track3", 5, 350);
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
lib1.addPlaylist(playlist1);
lib1.addPlaylist(playlist2);
// lib1.showPlaylists();
playlist1.showTracks();

// console.log("lib: ", lib);