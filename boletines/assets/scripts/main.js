// console.log( "Hola desde un archivo externo de Javascript" );

/*
// Obtener un elemento del DOM
let tabla = document.querySelector( "table" );
console.log( tabla );
*/

/*
// Obtener varios elementos del DOM
let lista = document.querySelectorAll( "div" );

lista.forEach( function( elemento ){
	console.log( elemento );
})

//console.log( lista );
*/

/*
// EVentos
let celdas = document.querySelectorAll( "td" );

celdas.forEach( function(td){
	td.addEventListener( 'click', function(){
		console.log( this );
	})
});
*/


// Obtener los elementos de la clase .close
let links = document.querySelectorAll( ".close" );

// Recorrer los elementos
links.forEach( function( link ){
	link.addEventListener( 'click', function( ev ){
		ev.preventDefault();		// Inhabilita la acción de default cuando se hace clic

		let content = document.querySelector( '.content' );

		// Quitarle las clases de animación que ya tiene (la de entrada)
		content.classList.remove( "animate__fadeInDown" );
		content.classList.remove( "animate__animated" );	// Se quita para que vuelva a hacer la animación

		// Agregarle las clases de animación para el efecto de salida
		content.classList.add( "animate__fadeOutUp" );
		content.classList.add( "animate__animated" );
		
		setTimeout( function(){
			location.href = "../index.html";
		}, 600);
		// setInterval(); 	// Lo hace varias veces, setTimeout solo 1 vez

		return false;
	});
});

// Agregar un evento click a cada uno de ellos

