(function(){
	var counter=2452;
	var obj = document.getElementById("numbers");
	obj.innerHTML = counter++;
	setInterval(function(){
		obj.innerHTML = counter++;
	}, 3000);
})();
