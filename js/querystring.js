$(document).ready(function() {
	var querystring = $.QueryString;
	
	for (key in querystring) {
		if (querystring.hasOwnProperty(key)) {
			if (key == "version") {
				$(".container").addClass(querystring[key]);	
			}
		}
	}
});