// Playlist class holds info about playlist and tracks..
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
      console.log("\t\t\tNO tracks for this playlist for while\n");
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
    console.log(`Deleting "${track.title}" from "${this.name}"`)
    this.tracks = this.tracks.filter((element) => {
      return element != track;
    });
    //updating info
    this._updatingInfo(track);
  }
}

module.exports = Playlist;