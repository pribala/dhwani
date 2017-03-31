// View Definition

// Song constructor to create a song object for the list view.
var Song = function(data) {
	this.title = ko.observable(data.title);
	this.lines = ko.observableArray(data.lines);
};

var Geetham = function(data) {
	this.title = ko.observable(data.title);
	this.fileSrc = ko.observable(data.fileSrc);
};

// View Model

var ViewModel = function(){
	var self = this;
	this.songList = ko.observableArray([]);
	saraliVarisais.forEach(function(songItem) {
		self.songList.push(new Song(songItem));
	});
	this.currentSong = ko.observable(this.songList()[0]);
	this.setSelectedSong = function(currentsong) {
		self.currentSong(currentsong);
	};
	this.geethamList = ko.observableArray([]);
	geethams.forEach(function(geetham) {
		self.geethamList.push(new Geetham(geetham));
	});
	this.currentGeetham = ko.observable(this.geethamList()[0]);
	this.setSelectedGeetham = function(currentgeetham) {
		self.currentGeetham(currentgeetham);
	};
}
ko.applyBindings(new ViewModel());