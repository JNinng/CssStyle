window.onload = function () {
	const shell = document.querySelector(".shell");
	const images = document.querySelectorAll(".img");
	const backgrounds = document.querySelectorAll(".bg");
	const h1 = document.getElementById("title");
	// 定义一个范围变量 range，其值为 40
	const range = 40;
	// 定义一个函数 calcValue，用于计算旋转角度，接收两个参数 a 和 b，返回一个结果值
	const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);
	// 定义一个变量 timeout
	let timeout;
	// 给文档对象添加鼠标移动事件监听器，当鼠标移动时执行函数
	document.addEventListener(
		"mousemove",
		({ x, y }) => {
			// 如果 timeout 变量有值，则取消该动画帧
			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}
			// 设置 timeout 变量，执行下一帧动画
			timeout = window.requestAnimationFrame(() => {
				// 计算旋转角度值
				const yValue = calcValue(y, window.innerHeight);
				const xValue = calcValue(x, window.innerWidth);
				// 设置旋转角度
				shell.style.transform = `rotateX(${-yValue}deg) rotateY(${xValue}deg)`;
				// 对所有图片进行平移变换
				[].forEach.call(images, (image) => {
					image.style.transform = `translateX(${xValue}px) translateY(${yValue}px)`;
				});
				h1.style.transform = `translateX(${xValue * 0.6}px) translateY(${yValue * 0.6}px)`;
				// 对所有背景图片进行位置调整
				[].forEach.call(backgrounds, (background) => {
					background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
				});
			});
		},
		false
	);
};
