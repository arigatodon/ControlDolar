$('#btn').click(function(e) {
	e.preventDefault();
	var valor = $('#valor').val();
	var cantidad = $('#cantidad').val();

	var $elem = $('#dato');
	$.ajax({
		url: 'http://www.mindicador.cl/api',
		type: 'GET',
		dataType: 'json',

	})

	.done(function( data) {
		var html = '<h4>valor UF : '+data.uf.valor+'</h4>';
			html +='<h4>DOlaar : $'+data.dolar.valor+'</h4>';
			html +='<h4> valor Total a pagar :'+valor/cantidad +'</h4>' ;
		$elem.append(html);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		
	});
});