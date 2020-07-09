document.addEventListener('DOMContentLoaded', init);
function init(){
  var products = [];
  /*var producto0 = {};
  producto0.id = '0';
  producto0.nombre = 'TEST';
  producto0.fechaDeCompra = new Date(2019, 11, 11);//iphone00
  producto0.hoy = new Date();
  producto0.precio = '100';
	producto0.dias = 0;*/

  var producto1 = {};
  producto1.id = '1';
  producto1.nombre = 'iphone11';
  producto1.fechaDeCompra = new Date(2019, 09, 28);//iphone11
  producto1.hoy = new Date();
  producto1.precio = '800';
	producto1.dias = 0;

	var producto2 = {};
  producto2.nombre = 'macbookpro2019';
  producto2.fechaDeCompra = new Date(2020, 00, 07);//macbookpro2019
  producto2.hoy = new Date();
  producto2.precio = '2800';
	producto2.dias = 0;

	var producto3 = {};
  producto3.nombre = 'conga 1590';
  producto3.fechaDeCompra = new Date(2020, 01, 24);//conga
  producto3.hoy = new Date();
  producto3.precio = '220';
	producto3.dias = 0;
  
	var producto4 = {};
  producto4.nombre = 'suscripción wikiloc';
  producto4.fechaDeCompra = new Date(2020, 02, 01);//wikiloc
  producto4.hoy = new Date();
  producto4.precio = '11';
	producto4.dias = 0;

	var producto5 = {};
  producto5.nombre = 'Televisor Xiaomi 4S 43 pulgadas';
  producto5.fechaDeCompra = new Date(2020, 06, 05);//xiaomi TV
  producto5.hoy = new Date();
  producto5.precio = '299';
	producto5.dias = 0;

  //products.push(producto0);
  products.push(producto1);
  products.push(producto2);
  products.push(producto3);
  products.push(producto4);
  products.push(producto5);
  //Un ejemplo de un producto que no sirve para esta web:
  //Pago 1 año de gimnasio con 365 días a 160 -> 160/365 = 0,43€ el día de gimnasio

  //Por meses: Si compras un iphone de 800€ y lo tienes
  //2 meses, te sale a 400 euros por mes

	const oneDay = 24 * 60 * 60 * 1000; //h*min*sec*mil (mil en 1 dia)
	const oneMonth = 30 * 24 * 60 * 60 * 1000; //h*min*sec*mil (mil en 1 mes)
	const oneYear = 12 * 30 * 24 * 60 * 60 * 1000; //h*min*sec*mil (mil en 1 mes)

  for(let i = 0; i<products.length; i++){
    muestraAmortizacionProducto(products[i]);
  }

  function muestraAmortizacionProducto(p)
  {
    p.dias = Math.round(Math.abs((p.fechaDeCompra-p.hoy) / oneDay));	
    p.meses = Math.abs((p.fechaDeCompra-p.hoy) / oneMonth);//dias expresados en meses
    p.años = Math.abs((p.fechaDeCompra-p.hoy) / oneYear);//dias expresados en años

    console.log("número de días: "+p.dias);
    console.log("número de meses: "+p.meses);
    console.log("número de años: "+p.años);

    //BUG: no calcula bien la cantidad de días y años 

    var cadaDia = p.precio/p.dias;
    var cadaMes = p.precio/p.meses;
    var cadaAño = p.precio/p.años;
//console.log("El producto " + p.nombre + " se compró hace " + p.dias + " días y te ha costado " + parseFloat(cadaDia).toFixed(8) + '€ por día'); 
    var productoAInsertar = document.createElement('p');
    productoAInsertar.id = "idZonaProductos";
    productoAInsertar.innerHTML = "El producto " + p.nombre + " se compró hace " + p.dias + " días y te ha costado " + parseFloat(cadaDia).toFixed(8) + '€ por día. '; 
    //productoAInsertar.innerHTML += " A " + parseFloat(cadaMes).toFixed(2) + '€ cada mes, ';
    //productoAInsertar.innerHTML += " y a " + parseFloat(cadaAño).toFixed(8) + '€ cada año ';
    document.getElementById("idProductos").appendChild(productoAInsertar);
  }
}
