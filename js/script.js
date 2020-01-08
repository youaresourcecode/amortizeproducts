document.addEventListener('DOMContentLoaded', init);
function init(){
  var products = [];
  var producto1 = {};
  producto1.id = '1';
  producto1.nombre = 'iphone11';
  producto1.fechaDeCompra = new Date(2019, 11, 01);//iphone11
  producto1.hoy = new Date();
  producto1.precio = '800';
	producto1.dias = 0;

	var producto2 = {};
  producto2.nombre = 'macbookpro2019';
  producto2.fechaDeCompra = new Date(2020, 00, 07);//macbookpro2019
  producto2.hoy = new Date();
  producto2.precio = '2800';
	producto2.dias = 0;

  products.push(producto1);
  products.push(producto2);
  //Un ejemplo de un producto que no sirve para esta web:
  //Pago 1 año de gimnasio con 365 días a 160 -> 160/365 = 0,43€ el día de gimnasio

  //Por meses: Si compras un iphone de 800€ y lo tienes
  //2 meses, te sale a 400 euros por mes

	const oneDay = 24 * 60 * 60 * 1000; //h*min*sec*mil (mil en 1 dia)
	const oneMonth = 30 * 24 * 60 * 60 * 1000; //h*min*sec*mil (mil en 1 mes)
  for(let i = 0; i<products.length; i++){
    muestraAmortizacionProducto(products[i]);
  }

  function muestraAmortizacionProducto(p)
  {
    p.dias = Math.round(Math.abs((p.fechaDeCompra-p.hoy) / oneDay));	
    var cadaDia = p.precio/p.dias;
//console.log("El producto " + p.nombre + " se compró hace " + p.dias + " días y te ha costado " + parseFloat(cadaDia).toFixed(8) + '€ por día'); 
    var productoAInsertar = document.createElement('p');
    productoAInsertar.id = "idZonaProductos";
    productoAInsertar.innerHTML = "El producto " + p.nombre + " se compró hace " + p.dias + " días y te ha costado " + parseFloat(cadaDia).toFixed(8) + '€ por día'; 
    document.getElementById("idProductos").appendChild(productoAInsertar);
  }
}
