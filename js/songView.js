// View Definition

// Song constructor to create a song object for the list view.
var Song = function(data) {
	this.title = ko.observable(data.title);
	this.lines = ko.observableArray(data.lines);
	this.audioSrc = ko.observable(data.audioSrc);
};

var Geetham = function(data) {
	this.title = ko.observable(data.title);
	this.fileSrc = ko.observable(data.fileSrc);
};

var Bhajan = function(data) {
	this.title = ko.observable(data.title);
	this.fileSrc = data.fileSrc;
	this.language = data.language;
	this.showBhajan = ko.observable(true);
};

var Video = function(data) {
	this.title = ko.observable(data.title);
	this.videoSrc = ko.observable(data.videoSrc);
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
	this.videosList = ko.observableArray([]);
	videos.forEach(function(video) {
		self.videosList.push(new Video(video));
	});
	this.currentVideo = ko.observable(this.videosList()[0]);
	this.setSelectedVideo = function(currentvideo) {
		self.currentVideo(currentvideo);
	};
	this.removeSrc = function() {
		$("#video-window").attr('src', '');
	};
	this.bhajanList = ko.observableArray([]);
	bhajans.forEach(function(bhajan) {
		self.bhajanList.push(new Bhajan(bhajan));
	});
	this.currentBhajan = ko.observable(this.bhajanList()[0]);
	this.setSelectedBhajan = function(currentbhajan) {
		self.currentBhajan(currentbhajan);
	};
	// Define a filter option for the bhajan list.
	// Show and hide the location and its marker based on the filter.
	this.optionList = ko.observableArray([]);
	filters.forEach(function(filterOption) {
		self.optionList.push(filterOption);
	});
	this.selectedOption = ko.observable(self.optionList()[0]);
	this.subsetBhajan = ko.computed(function() {
		var bhajanList = self.bhajanList();
		for(var i=0;i<bhajanList.length;i++) {
			if (self.selectedOption() === 'None') {
				bhajanList[i].showBhajan(true);
			} else if(self.selectedOption() !== bhajanList[i].language){
				bhajanList[i].showBhajan(false);
			} else {
				bhajanList[i].showBhajan(true);
			}
		}
	});
};

ko.applyBindings(new ViewModel());
