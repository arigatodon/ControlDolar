$('#btn').click(function(e) {
	e.preventDefault();
	var valor = $('#valor').val();

	var $elem = $('#dato');
	$.ajax({
		url: 'http://www.mindicador.cl/api',
		type: 'GET',
		dataType: 'json',

	})

	.done(function( data) {
		console.log(data.uf.valor  +'  '+valor);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		
	});
});