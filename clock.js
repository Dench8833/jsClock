function jsClock() {
	var date = new Date();
	var d = date.toLocaleDateString();
	var t = date.toLocaleTimeString();
	var ms = date.getUTCMilliseconds();
	document.getElementById("clockJs").innerHTML = d + ' ' + t + ':' + ms;
}
setInterval(jsClocK, 10);
