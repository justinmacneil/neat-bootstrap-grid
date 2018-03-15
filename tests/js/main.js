if (Modernizr.cssgrid || Modernizr.cssgridlegacy) {
	var htmlRoot = document.getElementsByTagName( 'html' )[0];
	htmlRoot.classList.remove('no-cssgrid');
}

/* $(function() {
	if (Modernizr.cssgrid,cssgridlegacy) {
		$('html').removeClass('no-cssgrid');
	}
}); */
