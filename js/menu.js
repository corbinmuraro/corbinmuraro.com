window.addEventListener("load", () => {
	let navButton = document.getElementById("nav-button");
	let navContainer = document.getElementById("nav-container");
	navButton.onclick = function() {
		console.log('clicked');
    	if (navContainer.className === "") {
    		console.log('opening');
    		navContainer.className = "active";
    	}
    	else {
			console.log('closing');
    		navContainer.className = "";
    	}
	};

	// document.body.onclick = function() {
	// 	if (navContainer.className === "open") {
	// 		navContainer.className = "";
	// 	}
	// }
});