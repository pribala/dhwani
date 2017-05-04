// Model Definition

// Defining an array of objects with song info.
var saraliVarisais = [
		{title: 'Varisai 1', fileSrc: 'sarali1.html', audioSrc: "static/sarali1.wav", type: 'Sarali varisai'},
		{title: 'Varisai 2', fileSrc: 'sarali2.html', audioSrc: "static/varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 3', fileSrc: 'sarali3.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 4', fileSrc: 'sarali4.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 5', fileSrc: 'sarali5.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 6', fileSrc: 'sarali6.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 7', fileSrc: 'sarali7.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 8', fileSrc: 'sarali8.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 9', fileSrc: 'sarali9.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 10', fileSrc: 'sarali10.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 11', fileSrc: 'sarali11.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 12', fileSrc: 'sarali12.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 13', fileSrc: 'sarali13.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 14', fileSrc: 'sarali14.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 1', fileSrc: 'jantai1.html', audioSrc: "static/jantai1.wav", type: 'Jantai varisai'},
		{title: 'Varisai 2', fileSrc: 'jantai2.html', audioSrc: "static/jantai2.wav", type: 'Jantai varisai'},
		{title: 'Varisai 3', fileSrc: 'jantai3.html', audioSrc: "static/jantai3.wav", type: 'Jantai varisai'},
		{title: 'Varisai 4', fileSrc: 'jantai4.html', audioSrc: "static/jantai4.wav", type: 'Jantai varisai'},
		{title: 'Varisai 5', fileSrc: 'jantai5.html', audioSrc: "static/jantai5.wav", type: 'Jantai varisai'},
		{title: 'Varisai 6', fileSrc: 'jantai6.html', audioSrc: "static/jantai6.wav", type: 'Jantai varisai'},
		{title: 'Varisai 7', fileSrc: 'jantai7.html', audioSrc: "static/jantai7.wav", type: 'Jantai varisai'},
		{title: 'Varisai 8', fileSrc: 'jantai8.html', audioSrc: "static/jantai8.wav", type: 'Jantai varisai'},
		{title: 'Varisai 9', fileSrc: 'jantai9.html', audioSrc: "static/jantai9.wav", type: 'Jantai varisai'},
		{title: 'Varisai 10', fileSrc: 'jantai10.html', audioSrc: "static/jantai10.wav", type: 'Jantai varisai'},
		{title: 'Varisai 11', fileSrc: 'jantai11.html', audioSrc: "static/jantai11.wav", type: 'Jantai varisai'},
		{title: 'Varisai 12', fileSrc: 'jantai12.html', audioSrc: "static/jantai12.wav", type: 'Jantai varisai'},
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
	{title: 'Shree Kamakshi', fileSrc: 'static/ShreeKamakshi.pdf', language: 'Sanskrit', audioSrc:'static/ShreeKamakshi.wav'},
	{title: 'Seetha Kalyana Vaibhogame', fileSrc: 'static/seethakalyana.pdf', language: 'Tamil', audioSrc:''},
	{title: 'Ye Theruga Nanu Dayachusedavo', fileSrc: 'static/yetheruga.pdf', language: 'Telugu', audioSrc:''},
];

var alankarams = [
{title: 'Chaturashra Jaati Druva Taalam', fileSrc: 'druva.html', audioSrc: 'static/druva.wav'},
{title: 'Chaturashra Jaati Matya TaaLam', fileSrc: 'matya.html', audioSrc: 'static/matya.wav'},
{title: 'Chaturashra Jaati Roopaka Taalam', fileSrc: 'roopaka.html', audioSrc: 'static/roopaka.wav'},
{title: 'Mishra Jaati Jhampa Taalam', fileSrc: 'jhampa.html', audioSrc: 'static/jhampa.wav'},
{title: 'Tishra Jaati Triputa Taalam', fileSrc: 'triputa.html', audioSrc: 'static/triputa.wav'},
{title: 'Khanda Jaati Ata Taalam', fileSrc: 'ata.html', audioSrc: 'static/ata.wav'},
{title: 'Chaturashra Jaati Eka Taalam', fileSrc: 'eka.html', audioSrc: 'static/eka.wav'},
{title: 'Sankeerna Jaati Eka Taalam: Version 1', fileSrc: 'sankeerna1.html', audioSrc: 'static/sankeerna1.wav'},
{title: 'Sankeerna Jaati Eka Taalam: Version 2', fileSrc: 'sankeerna2.html', audioSrc: 'static/sankeerna2.wav'},
];


filters = ['None', 'Tamil', 'Hindi', 'Telugu', 'Kannada', 'Sanskrit'];

varisaiFilter = ['Sarali varisai', 'Jantai varisai', 'Taatu varisai'];