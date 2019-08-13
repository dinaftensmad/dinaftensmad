function randomMad() {
	//var mad = ['Cheese Burger', 'Mac N\'cheese', 'Frikadeller', 'Nachos'];
	//var desert = ['Regnbue is', 'Chokolademouse', 'Romkugler']
	var desert = ['Regnebueis.jpg', 'Romkugler.jpg'];
	var mad = ['Frikadeller.jpg', 'Mac n\' Cheese.jpg'];
	var madIndex = Math.floor(mad.length * Math.random());
	var desertIndex = Math.floor(desert.length * Math.random());
	//document.getElementById("madTxt").innerHTML = 'Mad: ' + mad[Math.floor(mad.length * Math.random())] + '<br>Desert: ' + desert[Math.floor(desert.length * Math.random())];
	document.getElementById('madBillede').src = mad[madIndex];
	document.getElementById('desertBillede').src = desert[desertIndex];
	document.getElementById("madTxt").innerHTML = 'Mad: ' + mad[madIndex].substring(0, mad[madIndex].length - 4);
	document.getElementById("desertTxt").innerHTML = 'Desert: ' + desert[desertIndex].substring(0, desert[desertIndex].length - 4);
}

