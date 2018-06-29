var menuButton = document.getElementById("menuButton");
var navMenu = document.getElementById("menu");

menuButton.addEventListener("click",function(){
 	if(navMenu.className == "open"){
		navMenu.className = "";
	}else{
		navMenu.className = "open";
	}	
});


// menuButton.addEventListener("click",toggleMenu);

// function toggleMenu(){
// 	if(navMenu.className == "open"){
// 		navMenu.className = "";
// 	}else{
// 		navMenu.className = "open";
// 	}
// }
