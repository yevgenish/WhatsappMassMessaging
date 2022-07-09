function loadNumbers(){
	var numbers = document.getElementById("numbers").value;	
	var text = document.getElementById("text").value;

	if(!numbers || !text){
		alert('Please fill numbers and text');
		return;
	}

	var arr = numbers.split("\n");

	text = text.replace(/\'/g, "");
	text = text.replace(/ /g, "%20");
	text = text.replace(/\n/g, "%0A");
	prepareMessages(arr, text);
}

function initPage(){
	document.getElementById('loadNumbers').addEventListener('click', function(e) {
		loadNumbers();
	  });
}

function prepareMessages(arr, text){
	var table = "";
	var text1 = "https://wa.me/";

	var text2 = "/?text=" + text;
	for(var i = 0; i<arr.length;i++){
		var num = arr[i];
		var href=text1 + num + text2;
		table+="<div><span>" + i +  "</span> - <a href='" + href + "' target='_blank'>" + num + "</a></div>";
	}

	document.getElementById("content").innerHTML = table;
	document.getElementById("contentDescr").classList.remove("hidden");
}

(function(){
	initPage();
})();
