var readMore = document.getElementById("readmore");
var hidden = document.getElementById("hidden");

hidden.style.display = "none";

readMore.addEventListener("click",function(){
	if(hidden.style.display == "none"){
		hidden.style.display = "";
	}else{
		hidden.style.display = "none";
	}
});
