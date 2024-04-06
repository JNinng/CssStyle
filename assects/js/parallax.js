class Parallax {
	constructor(element, offset, h_right = 1, v_right = 1) {
		this.element = element;
		this.offset = offset;
		this.h_right = h_right;
		this.v_right = v_right;

		window.addEventListener("mousemove", this.onMouseMove.bind(this));
	}

	onMouseMove(e) {
		let horizontal = e.clientX / parseInt(getComputedStyle(this.element).width, 10);
		let vertical = e.clientY / parseInt(getComputedStyle(this.element).height, 10);
		this.element.style.transform = `translate(${(horizontal * this.offset * this.h_right) / 0.5}px,${
			(vertical * this.offset * this.v_right) / 0.5
		}px)`;
	}
}
