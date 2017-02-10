
class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
    addPlaylist(playlist) {
      this.playlists.push(playlist);
  }
}

class Playlist {
    constructor(name) {
    this.name = name;
    this.tracks = [];
    }
    addTrack(track) {
      this.tracks.push(track);
    }
    overallRate() {
      let rate = 0;
      this.tracks.forEach((track) => {
        rate+=track.rate;
      });
      return rate/this.tracks.length;
    }
    totalDuration() {
      let duration = 0;
      this.tracks.forEach((track) => {
        duration += track.length;
      });
      return duration;
    }
  }

class Track {
  constructor(title, rate, length) {
  this.title = title;
  this.rate = rate;
  this.length = length;
  }

}



var mainLibrary = new Library("dafault", "Sara");
var playlist1 = new Playlist("Playlist 1");
var track1 = new Track("Lemonade", 4, 180);
var track2 = new Track("Empire State Of Mind", 5, 281);
var track3 = new Track("The Next Episode", 4, 191);
var track4 = new Track("Still Dre", 4, 291);
//Adding tracks to Playlist//
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist1.addTrack(track4);


//Adding playlist to library//
mainLibrary.addPlaylist(playlist1);
//Printout Library1's overallRate and. total duration//

console.log(mainLibrary);
console.log(playlist1);
console.log("Playlist's overall rate is ",playlist1.overallRate());
console.log("This playlist's total duration is ",playlist1.totalDuration());


