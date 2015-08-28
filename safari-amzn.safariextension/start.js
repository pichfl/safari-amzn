;(function () {
	if (window.location.hostname.match('amazon.de')) {
		var path = window.location.pathname.match(/\/(\w{2}\/?\w*)\/([\d\w]{8,})/);
		if (path.length === 3) {
			history.replaceState(null, document.title, '/' + path[1] + '/' + path[2]);
		}
	}
} ());
