		function randomMad() {
	//var mad = ['Cheese Burger', 'Mac N\'cheese', 'Frikadeller', 'Nachos', ];
	//var desert = ['Regnbue is', 'Chokolademouse', 'Romkugler'];
	
	//Dessert ting
	var desert = [
	'Regnbueis.jpg', 
	'Romkugler.jpg'];
	
	
	//Mad Ting
	var mad = [
	'Frikadeller.jpg', 
	'Mac_N_Cheese.jpg', 
	'Cheeseburger.jpg', 
	'Nachos.png',
	'Flaeskesteg.jpg'
	];
	var madIndex = Math.floor(mad.length * Math.random());
	var desertIndex = Math.floor(desert.length * Math.random());
	var linkDesertOpskrifter = [
	'https://www.alt.dk/mad/opskrift/regnbueis', 
	'http://www.mums-opskrifter.dk/romkugler/',
	''
	
	];
	var linkMadOpskrifter = [
	'https://www.alt.dk/mad/opskrift/klassiske-frikadeller', 
	'https://vielskermad.dk/opskrift/macaroni-cheese/', 
	'https://www.dr.dk/mad/opskrift/cheeseburger-nem-og-hurtig-udgave',
	'https://www.hurtigmums.dk/nachos/',
	'https://www.arla.dk/opskrifter/artikler/julens-24-sporgsmal-om-mad/flaskesteg-med-sprod-svar/'
	];
	//document.getElementById("madTxt").innerHTML = 'Mad: ' + mad[Math.floor(mad.length * Math.random())] + '<br>Desert: ' + desert[Math.floor(desert.length * Math.random())];
	document.getElementById('madBillede').src = mad[madIndex];
	document.getElementById('desertBillede').src = desert[desertIndex];
	document.getElementById("madTxt").innerHTML = 'Mad: ' + mad[madIndex].substring(0, mad[madIndex].length - 4);
	document.getElementById("desertTxt").innerHTML = 'Desert: ' + desert[desertIndex].substring(0, desert[desertIndex].length - 4);
	document.getElementById("madLinks").href = linkMadOpskrifter[madIndex];
	document.getElementById("deLinks").href = linkDesertOpskrifter[desertIndex];
	
}


