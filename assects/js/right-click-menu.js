const menu = document.getElementById("rightClickMenu");

document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
	let winWidth = window.innerWidth;
	let winHeight = window.innerHeight;
	// 鼠标点击位置
	let posX = e.pageX;
	let posY = e.pageY;
	let menuWidth = menu.getBoundingClientRect().width;
	let menuHeight = menu.getBoundingClientRect().height;
	// 菜单显示位置
	let posLeft = 0,
		posTop = 0;
	// 右边和底部同时超出
	if (posX + menuWidth >= winWidth && posY + menuHeight >= winHeight) {
		posLeft = posX - menuWidth;
		posTop = posY - menuHeight;
	} else if (posX + menuWidth >= winWidth) {
		// 右侧超出
		posLeft = posX - menuWidth;
		posTop = posY;
	} else if (posY + menuHeight >= winHeight) {
		// 底部超出
		posLeft = posX;
		posTop = posY - menuHeight;
	} else {
		// 不超出
		posLeft = posX;
		posTop = posY;
	}
	menu.style.left = posLeft + "px";
	menu.style.top = posTop + "px";
	menu.style.opacity = 1;
});

document.addEventListener("click", function () {
	menu.style.opacity = 0;
});
