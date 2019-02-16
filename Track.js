// Track class holds tracks information
class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }


  // method to change track information
  changeTrack({title, rating, length}) {
    console.log(`\n\t\t Changing data about track "${this.title}"`);
    (title) ? this.title = title : 0;
    (rating) ? this.rating = rating : 0;
    (length) ? this.length = length : 0;
  }
}

module.exports = Track;