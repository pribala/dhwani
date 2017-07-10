// Model Definition

// Defining an array of objects with song info.
var saraliVarisais = [
		{title: 'Varisai 1', fileSrc: 'sarali/sarali1.html', audioSrc: "static/sarali1.wav", type: 'Sarali varisai'},
		{title: 'Varisai 2', fileSrc: 'sarali/sarali2.html', audioSrc: "static/sarali2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 3', fileSrc: 'sarali/sarali3.html', audioSrc: "static/sarali3.wav", type: 'Sarali varisai'},
		{title: 'Varisai 4', fileSrc: 'sarali/sarali4.html', audioSrc: "static/sarali4.wav", type: 'Sarali varisai'},
		{title: 'Varisai 5', fileSrc: 'sarali/sarali5.html', audioSrc: "static/sarali5.wav", type: 'Sarali varisai'},
		{title: 'Varisai 6', fileSrc: 'sarali/sarali6.html', audioSrc: "static/sarali6.wav", type: 'Sarali varisai'},
		{title: 'Varisai 7', fileSrc: 'sarali/sarali7.html', audioSrc: "static/sarali7.wav", type: 'Sarali varisai'},
		{title: 'Varisai 8', fileSrc: 'sarali/sarali8.html', audioSrc: "static/sarali8.wav", type: 'Sarali varisai'},
		{title: 'Varisai 9', fileSrc: 'sarali/sarali9.html', audioSrc: "static/sarali9.wav", type: 'Sarali varisai'},
		{title: 'Varisai 10-14', fileSrc: 'sarali/sarali10-14.html', audioSrc: "static/sarali10-14.wav", type: 'Sarali varisai'},
		//{title: 'Varisai 11', fileSrc: 'sarali11.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		//{title: 'Varisai 12', fileSrc: 'sarali12.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		//{title: 'Varisai 13', fileSrc: 'sarali13.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		//{title: 'Varisai 14', fileSrc: 'sarali14.html', audioSrc: "varisai2.wav", type: 'Sarali varisai'},
		{title: 'Varisai 1', fileSrc: 'jantai/jantai1.html', audioSrc: "static/jantai1.wav", type: 'Jantai varisai'},
		{title: 'Varisai 2', fileSrc: 'jantai/jantai2.html', audioSrc: "static/jantai2.wav", type: 'Jantai varisai'},
		{title: 'Varisai 3', fileSrc: 'jantai/jantai3.html', audioSrc: "static/jantai3.wav", type: 'Jantai varisai'},
		{title: 'Varisai 4', fileSrc: 'jantai/jantai4.html', audioSrc: "static/jantai4.wav", type: 'Jantai varisai'},
		{title: 'Varisai 5', fileSrc: 'jantai/jantai5.html', audioSrc: "static/jantai5.wav", type: 'Jantai varisai'},
		{title: 'Varisai 6', fileSrc: 'jantai/jantai6.html', audioSrc: "static/jantai6.wav", type: 'Jantai varisai'},
		{title: 'Varisai 7', fileSrc: 'jantai/jantai7.html', audioSrc: "static/jantai7.wav", type: 'Jantai varisai'},
		{title: 'Varisai 8', fileSrc: 'jantai/jantai8.html', audioSrc: "static/jantai8.wav", type: 'Jantai varisai'},
		{title: 'Varisai 1', fileSrc: 'taatu/taatu1.html', audioSrc: "static/taatu1.wav", type: 'Taatu varisai'},
		{title: 'Varisai 2', fileSrc: 'taatu/taatu2.html', audioSrc: "static/taatu2.wav", type: 'Taatu varisai'},
	];
	
var geethams = [
	{title: 'Lambodhara Lakumikara', fileSrc: 'geethams/lambodara.html', audioSrc: 'static/lambodara.wav'},
	{title: 'Mandara (kundagowra)', fileSrc: 'geethams/mandara.html', audioSrc: 'static/mandara.wav'},
	{title: 'Vara Veena', fileSrc: 'geethams/varaveena.html', audioSrc: 'static/varaveena.wav'},
	{title: 'Hamsadhwani- Swarapallavi', fileSrc: 'geethams/hamsadhwani.html', audioSrc:'static/Hamsadhwani.wav'},
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
	{title: 'Paluke Bangaramayena', fileSrc: 'bhajans/paluke.html', language: 'Telugu', audioSrc:''},
	{title: 'Sri Ramachandra Kripalu', fileSrc: 'bhajans/shriram.html', language: 'Sanskrit', audioSrc:''},
	{title: 'Bhaja Govindam', fileSrc: 'bhajans/bhajagovindam.html', language: 'Sanskrit', audioSrc:''},
	{title: 'Hari Hari Rama Naama', fileSrc: 'bhajans/harihari.html', language: 'Telugu', audioSrc:''},
	{title: 'Govardhana Giridhari', fileSrc: 'bhajans/govardhana.html', language: 'Sanskrit', audioSrc:''},
	{title: 'Bhagyada Lakshmi Baramma', fileSrc: 'bhajans/bhagyadalakshmi.html', language: 'Kannada', audioSrc:''},
	{title: 'Shree Kamakshi', fileSrc: 'bhajans/ShreeKamakshi.html', language: 'Sanskrit', audioSrc:'static/ShreeKamakshi.wav'},
	{title: 'Seetha Kalyana Vaibhogame', fileSrc: 'bhajans/seethakalyana.html', language: 'Tamil', audioSrc:''},
	{title: 'Ye Theruga Nanu Dayachusedavo', fileSrc: 'bhajans/YeTheeruga.html', language: 'Telugu', audioSrc:'static/YeTheeruga.wav'},
	{title: 'Varde Veena Vadini', fileSrc: 'bhajans/vardeveena.html', language: 'Sanskrit', audioSrc:'static/VardeVeena.wav'},
	{title: 'Brahmam Okate', fileSrc: 'bhajans/brahmamokate.html', language: 'Telugu', audioSrc:'static/BrahmamOkate.wav'},
	{title: 'Darashan Dejo Aaj', fileSrc: 'bhajans/darashandejo.html', language: 'Hindi', audioSrc:'static/DarashanDejo.wav'},
];

var alankarams = [
{title: 'Chaturashra Jaati Druva Taalam', fileSrc: 'alankaram/druva.html', audioSrc: 'static/druva.wav'},
{title: 'Chaturashra Jaati Matya TaaLam', fileSrc: 'alankaram/matya.html', audioSrc: 'static/matya.wav'},
{title: 'Chaturashra Jaati Roopaka Taalam', fileSrc: 'alankaram/roopaka.html', audioSrc: 'static/roopaka.wav'},
{title: 'Mishra Jaati Jhampa Taalam', fileSrc: 'alankaram/jhampa.html', audioSrc: 'static/jhampa.wav'},
{title: 'Tishra Jaati Triputa Taalam', fileSrc: 'alankaram/triputa.html', audioSrc: 'static/triputa.wav'},
{title: 'Khanda Jaati Ata Taalam', fileSrc: 'alankaram/ata.html', audioSrc: 'static/ata.wav'},
{title: 'Chaturashra Jaati Eka Taalam', fileSrc: 'alankaram/eka.html', audioSrc: 'static/eka.wav'}
];


filters = ['None', 'Tamil', 'Hindi', 'Telugu', 'Kannada', 'Sanskrit'];

varisaiFilter = ['Sarali varisai', 'Jantai varisai', 'Taatu varisai'];