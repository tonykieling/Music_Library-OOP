const Playlist = require("./Playlist");
const Track = require("./Track");

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
    console.log(`\n\t@"${this.name.toUpperCase()}" library, created by -${this.creator.toUpperCase()}-, has the following playlists with regarded tracks:\n`);
    this.playlists.forEach((playlist) => {
      console.log(`\t\t${count++}o playlist`);
      playlist.showTracks();
    })
    console.log("\n");
  }
}


// // Playlist class holds info about playlist and tracks..
// class Playlist {
//   constructor(name) {
//     this.name = name;
//     this.tracks = [];
//     this.overallRating = 0;
//     this.totalDuration = 0;
//   }

//   // auxiliary function to update time and rating (used by add and delete methods bellow)
//   _updatingInfo(track) {
//     this.totalDuration += track.length;
//     let tempRating = 0;
//     this.tracks.forEach((track) => tempRating += track.rating);
//     this.overallRating = (tempRating / this.tracks.length).toFixed(1);
//   }

//   // method to add tracks into a playlist
//   addTrack(track) {
//     this.tracks.push(track);
//     //updating info
//     this._updatingInfo(track);
//   }

//   // method to show all tracks for a specific playlist
//   showTracks() {
//     //check whether playlist is empty and, if so, sends a message
//     if (this.tracks.length < 1) {
//       console.log("\t\t\tNO tracks for this playlist for while\n");
//       return;
//     }
//     let count = 1;
//     console.log(`\t\t#"${this.name.toUpperCase()}" playlist has the following tracks:`);
//     this.tracks.forEach((track) => {
//       console.log(`\t\t${count++} - ${track.title} \t:${track.length}sec  -  rating: ${track.rating}`);
//     })
//     console.log(`\t\tOverall Rating is ${this.overallRating}
//     \t\tTotal Duration is ${Math.floor(this.totalDuration/60)} minutes and ${this.totalDuration - Math.floor(this.totalDuration/60) * 60} seconds`);
//     console.log("\n");
//   }

//   // method to delete the track from the playlist, based in its name
//   deleteTrack(track) {
//     console.log(`Deleting ${track} from ${this.name}`)
//     this.tracks = this.tracks.filter((element) => {
//       return element != track;
//     });
//     //updating info
//     this._updatingInfo(track);
//   }

// }


// // Track class holds tracks information
// class Track {
//   constructor(title, rating, length) {
//     this.title = title;
//     this.rating = rating;
//     this.length = length;
//   }


//   // method to change track information
//   changeTrack({title, rating, length}) {
//     (title) ? this.title = title : 0;
//     (rating) ? this.rating = rating : 0;
//     (length) ? this.length = length : 0;
//   }
// }


let lib1 = new Library("Golden Success Library", "Tony Kieling");
let playlist1 = new Playlist("First_playlist");
let playlist2 = new Playlist("Second_playlist");
let playlist3 = new Playlist("Third_playlist");
let track1 = new Track("Track1", 3, 400);
let track2 = new Track("Track2", 5, 500);
let track3 = new Track("Track3", 5, 350);
let track4 = new Track("Track1", 4, 200);
let track5 = new Track("Track2", 4, 100);
let track6 = new Track("Track3", 5, 150);
let track7 = new Track("Track4", 3, 230);
let track8 = new Track("Track5", 5, 123);

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist3.addTrack(track4);
playlist3.addTrack(track5);
playlist3.addTrack(track6);
playlist3.addTrack(track7);
playlist3.addTrack(track8);

lib1.addPlaylist(playlist1);
lib1.addPlaylist(playlist2);
lib1.addPlaylist(playlist3);

// lib1.showPlaylists();
// playlist1.showTracks();
// lib1.showPlaylistsWithTracks();

// playlist3.showTracks();

// playlist1.showTracks();
// playlist1.deleteTrack(track1);
// playlist1.showTracks();
// console.log("track1: ", track1);

lib1.showPlaylistsWithTracks();

// playlist1.showTracks();


// let x = {
//   title: "newname"  
// }
// console.log("track1: ", track1);
// track1.changeTrack(x);
// console.log("track1: ", track1);
