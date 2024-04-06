window.onload = function () {
	let one = document.getElementById("one_password");
	let two = document.getElementById("two_password");
	one.addEventListener("change", () => {
		change();
	});
	two.addEventListener("change", () => {
		change();
	});
	function change() {
		if (one.value != two.value) {
			one.style.boxShadow = "rgb(255, 0, 21) 2px 2px 6px 0, rgba(10, 88, 255, .3) 0 1px 3px -1px";
			two.style.boxShadow = "rgb(255, 0, 21) 2px 2px 6px 0, rgba(10, 88, 255, .3) 0 1px 3px -1px";
		} else {
			one.style.boxShadow = "rgba(50, 50, 93, .25) 0 2px 5px -1px, rgba(0, 0, 0, .3) 0 1px 3px -1px";
			two.style.boxShadow = "rgba(50, 50, 93, .25) 0 2px 5px -1px, rgba(0, 0, 0, .3) 0 1px 3px -1px";
		}
	}
};
