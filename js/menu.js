window.addEventListener("load", () => {
	let navButton = document.getElementById("nav-button");
	let navContainer = document.getElementById("nav-container");
	navButton.onclick = function() {
    	if (navContainer.classList.contains("active")) {
    		console.log('closing');
    		navContainer.classList.remove("active");
    	}
    	else {
			console.log('opening');
    		navContainer.classList.add("active");
    	}
	};
});

window.onclick = function(event) {
	let navContainer = document.getElementById("nav-container");
	if (!event.target.matches('#nav-button')) {
		if (navContainer.classList.contains("active")) {
        	navContainer.classList.remove("active");
      	}

	}
}