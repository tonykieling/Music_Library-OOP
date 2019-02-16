const Library = require("./Library");
const Playlist = require("./Playlist");
const Track = require("./Track");


//-- create library  and tracks
let lib1 = new Library("Golden Success", "Tony Kieling");

//-- create playlists and insert them into a library
let playlist1 = new Playlist("First_playlist");
let playlist2 = new Playlist("Second_playlist");
let playlist3 = new Playlist("Third_playlist");
lib1.addPlaylist(playlist1);
lib1.addPlaylist(playlist2);
lib1.addPlaylist(playlist3);

//-- create tracks and insert them into libraries
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


// //-- show all information about library
lib1.showPlaylistsWithTracks();


// //-- show a particular playlist
// playlist3.showTracks();


// //-- delete and update playlist data
// playlist1.showTracks();
// playlist1.deleteTrack(track1);
// playlist1.showTracks();
// console.log("track1: ", track1);


// //-- change track data
// let x = {
//   title: "newname"  
// }
// console.log("track1: ", track1);
// track1.changeTrack(x);
// console.log("track1: ", track1);
