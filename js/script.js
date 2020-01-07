document.addEventListener('DOMContentLoaded', init);
function init(){
  var products = [];
  var producto1 = {};
  producto1.id = '1';
  //producto1.nombre = 'macbookpro2019';
  //producto1.fechaDeCompra = new Date(2020, 00, 07);//macbookpro2019
  //producto1.precio = '2800';
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

	const oneDay = 24 * 60 * 60 * 1000; //h*min*sec*mil (mil en 1 dia)
/*
  for(let i = 0; i<products.length; i++){
  	console.log('Calculando datos para producto ' + i);	
  }
*/
	producto1.dias = Math.round(Math.abs((producto1.fechaDeCompra-producto1.hoy) / oneDay));	
  var cadaDia = producto1.dias/producto1.precio;
  console.log("El producto " + producto1.nombre + " se compró hace " + producto1.dias + " días y te ha costado " +  	 parseFloat(cadaDia).toFixed(8) + '€ por día'); 
  var p = document.createElement('p');
  p.id = "idZonaProductos";
  p.innerHTML = "El producto " + producto1.nombre + " se compró hace " + producto1.dias + " días y te ha costado " +  	 parseFloat(cadaDia).toFixed(8) + '€ por día'; 
  document.getElementById("idProductos").appendChild(p);

	producto2.dias = Math.round(Math.abs((producto2.fechaDeCompra-producto2.hoy) / oneDay));	
  var cadaDia = producto2.dias/producto2.precio;
  console.log("El producto " + producto2.nombre + " se compró hace " + producto2.dias + " días y te ha costado " +  	 parseFloat(cadaDia).toFixed(8) + '€ por día'); 
  var p = document.createElement('p');
  p.id = "idZonaProductos";
  p.innerHTML = "El producto " + producto2.nombre + " se compró hace " + producto2.dias + " días y te ha costado " +  	 parseFloat(cadaDia).toFixed(8) + '€ por día'; 
  document.getElementById("idProductos").appendChild(p);
}
