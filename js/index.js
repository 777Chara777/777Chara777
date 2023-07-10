var size = 86;
var columns = Array.from(document.getElementsByClassName('column'));

var d = void 0, c = void 0;

var classList = ['visible', 'close', 'far', 'far', 'distant', 'distant'];


function getClock() {
	function padClock(p, n) {
		return p + ('0' + n).slice(-2);
	}
	d = new Date();

	return [d.getHours() % 12 || 12, d.getMinutes(), d.getSeconds()].reduce(padClock, '');
}

function getClass(n, i2) {
	return classList.find(
		function (class_, classIndex) {
			return Math.abs(n - i2) === classIndex; 
	} ) || '';
}

function changeBg() {
	var currentTime = new Date().getHours();
	document.body.style.backgroundImage = (7 <= currentTime) && (currentTime < 21) ? "url('img/background_day.jpg')" : "url('img/background_night.jpg')"; // if ? True : False
}

function main() {


	setInterval(function () {
		c = getClock();

		columns.forEach(function (ele, i) {
			var n = +c[i];
			var offset = -n * size;
			ele.style.transform = 'translateY(calc(50vh + ' + offset + 'px - ' + size / 2 + 'px))';
			Array.from(ele.children).forEach(function (ele2, i2) {
				ele2.className = 'num ' + getClass(n, i2);
			});
		});
	}, 200 + Math.E * 10);

	// changeBg();
	// setInterval(function(){ changeBg(); }, 300000); //300000 means 5 min

}
main();