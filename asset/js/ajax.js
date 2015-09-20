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
		var prestamo_pesos = data.uf.valor * valor ;
		var interes = cantidad * 0.015;
		var valor_total = prestamo_pesos+prestamo_pesos*interes;
		var html ='<h4>valor en pesos del prestamo: $'+ parseInt(prestamo_pesos) +'</h4>';
			html +='<h4> valor Total a pagar : $ '+ parseInt(valor_total)+'</h4>' ;
			html +="<h4> el valor por cuota es de : $"+ parseInt(valor_total /cantidad )+" </h4>";
		$elem.html(html);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		
	});
});