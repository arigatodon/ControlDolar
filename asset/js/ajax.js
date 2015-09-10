$(document).ready(function($) {
$.ajax({
	url: 'http://www.mindicador.cl/api',
	type: 'GET',
	dataType: 'json',
	
})
.done(function(data) {
	console.log(data);
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
});