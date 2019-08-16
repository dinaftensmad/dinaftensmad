		function randomMad() {
	//var mad = ['Cheese Burger', 'Mac N\'cheese', 'Frikadeller', 'Nachos', ];
	//var desert = ['Regnbue is', 'Chokolademouse', 'Romkugler'];
	var desert = ['Regnbueis.jpg', 'Romkugler.jpg'];
	var mad = ['Frikadeller.jpg', 'Mac n\' Cheese.jpg', 'Cheeseburger.jpg' 'Nachos.jpg'];
	//var drik = [''];
	var madIndex = Math.floor(mad.length * Math.random());
	var desertIndex = Math.floor(desert.length * Math.random());
	var linkDesertOpskrifter = [
	'https://www.alt.dk/mad/opskrift/regnbueis', 
	'http://www.mums-opskrifter.dk/romkugler/'
	
	];
	var linkMadOpskrifter = [
	'https://www.alt.dk/mad/opskrift/klassiske-frikadeller', 
	'https://vielskermad.dk/opskrift/macaroni-cheese/', 
	'https://www.dr.dk/mad/opskrift/cheeseburger-nem-og-hurtig-udgave' 
	];
	//document.getElementById("madTxt").innerHTML = 'Mad: ' + mad[Math.floor(mad.length * Math.random())] + '<br>Desert: ' + desert[Math.floor(desert.length * Math.random())];
	document.getElementById('madBillede').src = mad[madIndex];
	document.getElementById('desertBillede').src = desert[desertIndex];
	document.getElementById("madTxt").innerHTML = 'Mad: ' + mad[madIndex].substring(0, mad[madIndex].length - 4);
	document.getElementById("desertTxt").innerHTML = 'Desert: ' + desert[desertIndex].substring(0, desert[desertIndex].length - 4);
	document.getElementById("madLinks").href = linkMadOpskrifter[madIndex];
	document.getElementById("deLinks").href = linkDesertOpskrifter[desertIndex];
	
}

function randomOpskrifter() {
	var opskriftLinks = [
	'https://www.alt.dk/mad/opskrift/klassiske-frikadeller', 
	'https://vielskermad.dk/opskrift/macaroni-cheese/', 
	'https://www.dr.dk/mad/opskrift/cheeseburger-nem-og-hurtig-udgave',
	'https://www.alt.dk/mad/opskrift/regnbueis', 
	'http://www.mums-opskrifter.dk/romkugler/'
	];
	
	
	//var linksIndex = Math.floor(linksIndex.length * Math.random());
	
	//document.getElementById("lykkebtn").href = opskriftLinks;
}
