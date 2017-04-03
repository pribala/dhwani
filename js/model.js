// Model Definition

// Defining an array of objects with song info.
var saraliVarisais = [
		{title: 'Varisai 1', lines: ['s r g m | p d | n S ||', 'S n d p | m g | r s ||'], audioSrc: "static/varisai1.wav"},
		{title: 'Varisai 2', lines: ['s r - s r - | s r | g m ||', 's r g m | p d | n S ||',	
		'S n - S n - | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/varisai2.wav"},
		{title: 'Varisai 3', lines: ['s r g - s | r g - | s r ||', 's r g m | p d | n S ||',
		'S n d - s | n d - | s n ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 4', lines: ['s r g m - | s r | g m - ||', 's r g m | p d | n s ||',
		'S n d p - | S n | d p - ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 5', lines: ['s   r   g   m   |   p   , - |   s   r   ||', 's   r   g   m   |   p   d   |   n   S   ||',
		'S   n   d   p   |   m   , - |   S   n   ||', 'S   n   d   p   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 6', lines: ['s   r   g   m   |   p   d - |   s   r   ||', 's   r   g   m   |   p   d   |   n   S   ||',
		'S   n   d   p   |   m   g - |   S   n   ||', 'S   n   d   p   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 7', lines: ['s   r   g   m   |   p   d   |   n   , - ||', 's   r   g   m   |   p   d   |   n   S   ||',
		'S   n   d   p   |   m   g   |   r   , - ||', 'S   n   d   p   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 8', lines: ['s   r   g   m   |   p   m   |   g   r   ||', 's   r   g   m   |   p   d   |   n   S   ||',
		'S   n   d   p   |   m   p   |   d   n   ||', 'S   n   d   p   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 9', lines: ['s   r   g   m   |   p   m   |   d   p   ||', 's   r   g   m   |   p   d   |   n   S   ||',
		'S   n   d   p   |   m   p   |   g   m   ||', 'S   n   d   p   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 10', lines: ['s   r   g   m   |   p   ,   |   g   m   ||', 'p   ,   ,   ,   |   p   ,   |   ,   ,   ||',
		'g   m   p   d   |   n   d   |   p   m   ||', 'g   m   p - g   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 11', lines: ['S   ,   n   d   |   n   ,   |   d   p   ||', 'd   ,   p   m   |   p   ,   |   p   ,   ||',
		'g   m   p   d   |   n   d   |   p   m   ||', 'g   m   p - g   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 12', lines: ['S   S   n   d   |   n   n   |   d   p   ||', 'd   d   p   m   |   p   ,   |   p   ,   ||',
		'g   m   p   d   |   n   d   |   p   m   ||', 'g   m   p - g   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 13', lines: ['s   r   g   r   |   g   , - |   g   m   ||', 'p   m   p   , - |   d   p   |   d   ,   ||',
		'm   p   d   p   |   d   n   |   d   p   ||', 'm   p   d   p   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
		{title: 'Varisai 14', lines: ['s   r   g   m   |   p   ,   |   p   ,   ||', 'd   d   p   ,   |   m   m   |   p   ,   ||',
		'd   n   S   ,   |   S   n   |   d   p   ||', 'S   n   d   p   |   m   g   |   r   s   ||'], audioSrc: "varisai2.wav"},
	];
	
var geethams = [
	{title: 'Lambodhara Lakumikara', fileSrc: 'lambodara.html'},
	{title: 'Mandara (kundagowra)', fileSrc: 'mandara.html'},
];	

var videos = [
	{title: 'Paluke Bangaramayena', videoSrc: 'https://www.youtube.com/embed/cmU08XHWnks'},
	{title: 'Sri Ramachandra Kripalu', videoSrc: 'https://www.youtube.com/embed/MyNSOu-Fl-k?autoplay=1&html5=1'},
	{title: 'Bhaja Govindam', videoSrc: 'https://www.youtube.com/embed/PxXrLNiPvNo'},
	{title: 'Hari Hari Rama Naama', videoSrc: 'https://www.youtube.com/embed/JRF_pMdpZTw'},
	{title: 'Govardhana Giridhari', videoSrc: ''},
	{title: 'Bhagyada Lakshmi Baramma', videoSrc: 'https://www.youtube.com/embed/4WhkXpC2iqg'},
	{title: 'Shri Kamakshi', videoSrc: ''},
	{title: 'Seetha Kalyana Vaibhogame', videoSrc: 'https://www.youtube.com/embed/lBVRsXXDJA0'},
	{title: 'Ye Theruga Nanu Dayachusedavo', videoSrc: 'https://www.youtube.com/embed/2EUysga8pMQ'},
];