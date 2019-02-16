// Library class
class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  //add playlists
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
    console.log(`\n\t@"${this.name.toUpperCase()}" library has the following playlists with regarded tracks:\n`);
    this.playlists.forEach((playlist) => {
      console.log(`\t\t${count++}o playlist`);
      playlist.showTracks();
    })
    console.log("\n");
  }
}

// Playlist class
class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
    this.overallRating = 0;
    this.totalDuration = 0;
  }

  // auxiliary function to update time and rating (used by add and delete methods bellow)
  _updatingInfo(track) {
    this.totalDuration += track.length;
    let tempRating = 0;
    this.tracks.forEach((track) => tempRating += track.rating);
    this.overallRating = (tempRating / this.tracks.length).toFixed(1);
  }

  // method to add tracks into a playlist
  addTrack(track) {
    this.tracks.push(track);

    //updating info
    this._updatingInfo(track);
  }

  // method to show all tracks for a specific playlist
  showTracks() {
    //check whether playlist is empty and, if so, sends a message
    if (this.tracks.length < 1) {
      console.log("\t\t\tNO tracks for this playlist for while");
      return;
    }

    let count = 1;
    console.log(`\t\t#"${this.name.toUpperCase()}" playlist has the following tracks:`);
    this.tracks.forEach((track) => {
      console.log(`\t\t${count++} - ${track.title} \t:${track.length}sec  -  rating: ${track.rating}`);
    })
    console.log(`\t\tOverall Rating is ${this.overallRating}
    \t\tTotal Duration is ${Math.floor(this.totalDuration/60)} minutes and ${this.totalDuration - Math.floor(this.totalDuration/60) * 60} seconds`);
    console.log("\n");
  }

  // method to delete the track from the playlist, based in its name
  deleteTrack(track) {
    console.log(`Deleting ${track} from ${this.name}`)
    this.tracks = this.tracks.filter((element) => {
      return element != track;
    });

    //updating info
    this._updatingInfo(track);
  }
}

// Track class
class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }

  changeTrack(title = this.title, rating = this.rating, length = this.rating) {
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
// playlist1.showTracks();
// lib1.showPlaylistsWithTracks();

playlist1.showTracks();
playlist1.deleteTrack(track1);
playlist1.showTracks();
console.log("track1: ", track1);
// console.log("track1: ", track1);
// track1.changeTrack("", 5, "");
// console.log("track1: ", track1);