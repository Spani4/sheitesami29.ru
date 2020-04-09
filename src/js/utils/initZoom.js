export default function initZoom(elem) {

    var info = elem.getBoundingClientRect();

	elem.onmousemove = function(event) {
		var e = event ? event : window.event;
		var posX = (e.clientX - info.left) * 100 / info.width;
		var posY = (e.clientY - info.top) * 100 / info.height;

        elem.style.backgroundPosition = posX + '% ' + posY + '%';
        elem.style.backgroundSize = '150%';
	}

	elem.onmouseout = function () {

        elem.style.backgroundPosition = '';
        elem.style.backgroundSize = '';
	}
}