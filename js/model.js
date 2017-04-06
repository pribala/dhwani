// Model Definition

// Defining an array of objects with song info.
var saraliVarisais = [
		{title: 'Varisai 1', lines: ['s r g m | p d | n S ||', 'S n d p | m g | r s ||'], audioSrc: "static/sarali1.wav", type: 'Sarali varisai'},
		{title: 'Varisai 2', lines: ['s r - s r - | s r | g m ||', 's r g m | p d | n S ||',	
		'S n - S n - | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 3', lines: ['s r g - s | r g - | s r ||', 's r g m | p d | n S ||',
		'S n d - S | n d - | S n ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 4', lines: ['s r g m - | s r | g m - ||', 's r g m | p d | n S ||',
		'S n d p - | S n | d p - ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 5', lines: ['s r g m | p , - | s r ||', 's r g m | p d | n S ||',
		'S n d p | m , - | S n ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 6', lines: ['s r g m | p d - | s r ||', 's r g m | p d | n S ||',
		'S n d p | m g - | S n ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 7', lines: ['s r g m | p d | n , - ||', 's r g m | p d | n S ||',
		'S n d p | m g | r , - ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 8', lines: ['s r g m | p m | g r ||', 's r g m | p d | n S ||',
		'S n d p | m p | d n ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 9', lines: ['s r g m | p m | d p ||', 's r g m | p d | n S ||',
		'S n d p | m p | g m ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 10', lines: ['s r g m | p , | g m ||', 'p , , , | p , | , , ||',
		'g m p d | n d | p m ||', 'g m p - g | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 11', lines: ['S , n d | n , | d p ||', 'd , p m | p ,| p ,||',
		'g m p d | n d | p m ||', 'g m p - g | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 12', lines: ['S S n d | n n | d p ||', 'd d p m | p , | p , ||',
		'g m p d | n d | p m ||', 'g m p - g | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 13', lines: ['s r g r | g , - | g  m ||', 'p m p , - | d p | d , ||',
		'm p d p | d n | d p ||', 'm p d p | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 14', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 1', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai1.wav", type: 'Jantai varisai'},
		{title: 'Varisai 2', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai2.wav", type: 'Jantai varisai'},
		{title: 'Varisai 3', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai3.wav", type: 'Jantai varisai'},
		{title: 'Varisai 4', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai4.wav", type: 'Jantai varisai'},
		{title: 'Varisai 5', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai5.wav", type: 'Jantai varisai'},
		{title: 'Varisai 6', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai6.wav", type: 'Jantai varisai'},
		{title: 'Varisai 7', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai7.wav", type: 'Jantai varisai'},
		{title: 'Varisai 8', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai8.wav", type: 'Jantai varisai'},
		{title: 'Varisai 9', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai9.wav", type: 'Jantai varisai'},
		{title: 'Varisai 10', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai10.wav", type: 'Jantai varisai'},
		{title: 'Varisai 11', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai11.wav", type: 'Jantai varisai'},
		{title: 'Varisai 12', lines: ['s r g m | p , | p , ||', 'd d p , | m m | p , ||', 
		'd n S , | S n | d p ||', 'S n d p | m g | r s ||'], audioSrc: "static/jantai12.wav", type: 'Jantai varisai'},
	];
	
var geethams = [
	{title: 'Lambodhara Lakumikara', fileSrc: 'lambodara.html', audioSrc: 'static/lambodara.wav'},
	{title: 'Mandara (kundagowra)', fileSrc: 'mandara.html', audioSrc: 'static/mandara.wav'},
];	

var videos = [
	{title: 'Paluke Bangaramayena', videoSrc: 'https://www.youtube.com/embed/cmU08XHWnks', language: 'Telugu'},
	{title: 'Sri Ramachandra Kripalu', videoSrc: 'https://www.youtube.com/embed/MyNSOu-Fl-k?autoplay=1&html5=1', language: 'Sanskrit'},
	{title: 'Bhaja Govindam', videoSrc: 'https://www.youtube.com/embed/PxXrLNiPvNo?autoplay=1&html5=1', language: 'Sanskrit'},
	{title: 'Hari Hari Rama Naama', videoSrc: 'https://www.youtube.com/embed/JRF_pMdpZTw?autoplay=1&html5=1', language: 'Telugu'},
	{title: 'Govardhana Giridhari', videoSrc: '', language: 'Sanskrit'},
	{title: 'Bhagyada Lakshmi Baramma', videoSrc: 'https://www.youtube.com/embed/4WhkXpC2iqg?autoplay=1&html5=1', language: 'Kannada'},
	{title: 'Shree Kamakshi', videoSrc: '', language: 'Sanskrit'},
	{title: 'Seetha Kalyana Vaibhogame', videoSrc: 'https://www.youtube.com/embed/lBVRsXXDJA0?autoplay=1&html5=1', language: 'Tamil'},
	{title: 'Ye Theruga Nanu Dayachusedavo', videoSrc: 'https://www.youtube.com/embed/2EUysga8pMQ?autoplay=1&html5=1', language: 'Telugu'},
	{title: 'Darshan Dejo Aaj', videoSrc: '', language: 'Hindi'}
];

var bhajans = [
	{title: 'Paluke Bangaramayena', fileSrc: 'static/paluke.pdf', language: 'Telugu', audioSrc:''},
	{title: 'Sri Ramachandra Kripalu', fileSrc: 'static/shriram.pdf', language: 'Sanskrit', audioSrc:''},
	{title: 'Bhaja Govindam', fileSrc: 'static/bhajagovindam.pdf', language: 'Sanskrit', audioSrc:''},
	{title: 'Hari Hari Rama Naama', fileSrc: 'static/harihari.pdf', language: 'Telugu', audioSrc:''},
	{title: 'Govardhana Giridhari', fileSrc: 'static/govardhana.pdf', language: 'Sanskrit', audioSrc:''},
	{title: 'Bhagyada Lakshmi Baramma', fileSrc: 'static/bhagyadalakshmi.pdf', language: 'Kannada', audioSrc:''},
	{title: 'Shree Kamakshi', fileSrc: 'static/shreekamakshi.pdf', language: 'Sanskrit', audioSrc:''},
	{title: 'Seetha Kalyana Vaibhogame', fileSrc: 'static/seethakalyana.pdf', language: 'Tamil', audioSrc:''},
	{title: 'Ye Theruga Nanu Dayachusedavo', fileSrc: 'static/yetheruga.pdf', language: 'Telugu', audioSrc:''},
];

var alankarams = [
{title: 'Chaturashra Jaati Druva Taalam', fileSrc: 'druva.html', audioSrc: 'static/druva.wav'},
{title: 'Chaturashra Jaati Matya TaaLam: ', fileSrc: 'matya.html', audioSrc: 'static/matya.wav'},
{title: 'Chaturashra Jaati Roopaka Taalam:', fileSrc: 'roopaka.html', audioSrc: 'static/roopaka.wav'},
{title: 'Mishra Jaati Jhampa Taalam: ', fileSrc: 'jhampa.html', audioSrc: 'static/jhampa.wav'},
{title: 'Tishra Jaati Triputa Taalam', fileSrc: 'triputa.html', audioSrc: 'static/triputa.wav'},
{title: 'Khanda Jaati Ata Taalam', fileSrc: 'ata.html', audioSrc: 'static/ata.wav'},
{title: 'Chaturashra Jaati Eka Taalam: ', fileSrc: 'eka.html', audioSrc: 'static/eka.wav'},
{title: 'Sankeerna Jaati Eka Taalam: Version 1', fileSrc: 'sankeerna1.html', audioSrc: 'static/sankeerna1.wav'},
{title: 'Sankeerna Jaati Eka Taalam: Version 2', fileSrc: 'sankeerna2.html', audioSrc: 'static/sankeerna2.wav'},
];


filters = ['None', 'Tamil', 'Hindi', 'Telugu', 'Kannada', 'Sanskrit'];

varisaiFilter = ['Sarali varisai', 'Jantai varisai', 'Taatu varisai'];