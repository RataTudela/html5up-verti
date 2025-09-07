/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// Funciones
function correoYcontraseña() {
    event.preventDefault(); 
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('contraseña').value;
    
    var termina = ["@duocuc.cl","@profesor.duoc.cl","@gmail.com"];
    var correoValido = false;

    for (var i = 0; i < termina.length; i++) {
        if (email.endsWith(termina[i])) {
            correoValido = true;
            break;
        }
    }
    
    if (!email) {
        document.getElementById('emailError').innerText = 'Correo no ingresado.';
        return;
    } else if (email.length > 100) {
        document.getElementById('emailError').innerText = 'Correo demasiado largo.';
        return;
    } else if (!correoValido) {
        document.getElementById('emailError').innerText = 'Correo no termina en "@duocuc.cl","@profesor.duoc.cl","@gmail.com';
        return;
    } else {
        document.getElementById('emailError').innerText = '';
    }
    
    if (!password) {
        document.getElementById('contraseñaError').innerText = 'Contraseña no ingresada.';
        return;
    } else if (password.length < 4 || password.length > 10) {
        document.getElementById('contraseñaError').innerText = 'Contraseña inválida.';
        return;
    } else {
        document.getElementById('contraseñaError').innerText = '';
    }
    
    console.log('Correo:', email);
    console.log('Contraseña:', password);
}

function correoYcontraseñaRegistro() {
    event.preventDefault(); 
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('contraseña').value;
	var Nombre = document.getElementById('nombre').value;
    var validarContra = document.getElementById('confirmarContraseña').value;
	var telefono = document.getElementById('Telefono').value;
	var region = document.getElementById('Region').value;
	var comuna = document.getElementById('Comuna').value;

    var termina = ["@duocuc.cl","@profesor.duoc.cl","@gmail.com"];
    var verificarCorreo = false;

    for (var i = 0; i < termina.length; i++) {
        if (email.endsWith(termina[i])) {
            verificarCorreo = true;
            break;
        }
    }
    
    if (!Nombre) {
        document.getElementById('nombreError').innerText = 'Nombre no ingresado';
        return;
    } else if (Nombre.length > 50 || Nombre.length < 3) {
        document.getElementById('nombreError').innerText = 'Nombre demasiado corto o largo';
        return;
    } else {
        document.getElementById('nombreError').innerText = '';
    }

    if (!email) {
        document.getElementById('emailError').innerText = 'Correo no ingresado';
        return;
    } else if (email.length > 100) {
        document.getElementById('emailError').innerText = 'Correo demasiado largo';
        return;
    } else if (!verificarCorreo) {
        document.getElementById('emailError').innerText = 'Correo no termina en "@duocuc.cl","@profesor.duoc.cl","@gmail.com';
        return;
    } else {
        document.getElementById('emailError').innerText = '';
    }
    
    if (!password) {
        document.getElementById('contraseñaError').innerText = 'Contraseña no ingresada';
        return;
    } else if (password.length < 4 || password.length > 10) {
        document.getElementById('contraseñaError').innerText = 'Contraseña mas corta que 4 o mas larga que 10';
        return;
    } else {
        document.getElementById('contraseñaError').innerText = '';
    }
    
	if (!validarContra){
		document.getElementById('confirmarContraseñaError').innerText = 'No Confirmo su contraseña';
        return;
	} else if (validarContra !== password){
		document.getElementById('confirmarContraseñaError').innerText = 'Contraseñas no coinciden';
		return;
	} else {
        document.getElementById('confirmarContraseñaError').innerText = '';
    }

	if(!telefono){
		document.getElementById('telefonoError').innerText = 'No Ingreso su telefono';
		return;
	} else if(telefono.length != 9){
		document.getElementById('telefonoError').innerText = 'Telefono debe tener 9 digitos';
		return;
	} else {
		document.getElementById('telefonoError').innerText = '';
	}

	if(!region){
		document.getElementById('regionError').innerText = 'No Ingreso su region';
		return;
	} else if(region.length < 4 || region.length > 20){
		document.getElementById('regionError').innerText = 'Region demasiado corta o larga';
		return;
	} else {
		document.getElementById('regionError').innerText = '';
	}

	if(!comuna){
		document.getElementById('comunaError').innerText = 'No Ingreso su comuna';
		return;
	} else if(comuna.length < 4 || comuna.length > 20){
		document.getElementById('comunaError').innerText = 'Comuna demasiado corta o larga';
		return;
	} else {
		document.getElementById('comunaError').innerText = '';
	}

    var enviado = document.getElementById('registroExitoso');
    enviado.innerText = 'Registro Exitoso';

    console.log('Correo:', email);
    console.log('Contraseña:', password);
	console.log('Nombre:', Nombre);
	console.log('ContraseñaConfirmada:', validarContra);
	console.log('Telefono:', telefono);
	console.log('Region:', region);
	console.log('Comuna:', comuna);
}

    function validarContacto() {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var texto = document.getElementById('texto').value;

    
    var termina = ["@duocuc.cl","@profesor.duoc.cl","@gmail.com"];
    var correoValido = false;

    for (var i = 0; i < termina.length; i++) {
        if (email.endsWith(termina[i])) {
            correoValido = true;
            break;
        }
    }
    

    if (!nombre){
        document.getElementById('nombreError').innerText = 'Nombre no ingresado';
        return;
    } else if (nombre.length > 50 || nombre.length < 3) {
        document.getElementById('nombreError').innerText = 'Nombre demasiado corto o largo';
        return;
    } else {
        document.getElementById('nombreError').innerText = '';
    }

    if (!email) {
        document.getElementById('emailError').innerText = 'Correo no ingresado.';
        return;
    } else if (email.length > 100) {
        document.getElementById('emailError').innerText = 'Correo demasiado largo.';
        return;
    } else if (!correoValido) {
        document.getElementById('emailError').innerText = 'Correo no termina en "@duocuc.cl","@profesor.duoc.cl","@gmail.com';
        return;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if(!texto){
        document.getElementById('textoError').innerText = 'No ingreso comentario';
        return;
    } else if(texto.length > 500){ 
        document.getElementById('textoError').innerText = 'Comentario demasiado largo';
        return;
    } else {
        document.getElementById('textoError').innerText = '';
    }
    
    var enviado = document.getElementById('Enviado');
    enviado.innerText = 'Mensaje Enviado';

    
    console.log('Correo:', email);
    console.log('Nombre:', nombre);
    console.log('Comentario:', texto);
    }

const products = [
  { nombre: "Persona 3 Reload", 
    comentario: "Juego JRPG, Para PC, XBOX y PS4/PS5",
    precio: 18500, 
    imagen: "images/pic01.jpg" },
  { nombre: "God of War Ragnarok",
    comentario: "Secuela de God Of War, donde volvemos a ser Kratos.",
    precio: 25500, imagen: "images/pic02.jpg" },
  { nombre: "SilkSong", 
    comentario: "Secuela de Hollow Knight, Controlamos a Hornet.", 
    precio: 10500, 
    imagen: "images/pic03.jpg" },
  { nombre: "Lego BatMan", 
    comentario: "Vuelves Como el Caballero de la noche en forma de Lego.", 
    precio: 5500, 
    imagen: "images/pic04.jpg" },
  { nombre: "Elden Ring", 
    comentario: "Nuevo Entrega de FromSoftware, Juego Tipo DarkSouls.", 
    precio: 30000, 
    imagen: "images/pic05.jpg" },
  { nombre: "Sekiro", 
    comentario: "Es un Japón ficticio de finales del siglo XVI Reinado por la violencia.", 
    precio: 22000, 
    imagen: "images/pic06.jpg" },
  { nombre: "Call Of Duty BO2", 
    comentario: "Sumergete Como David Mason, en la busqueda de Menendez.", 
    precio: 19990, 
    imagen: "images/blackOPs.jpg" },
  { nombre: "2K26", 
    comentario: "2K26 se trata de una nueva edición del simulador de la NBA.", 
    precio: 40000, 
    imagen: "images/2K26.jpg" },
  { nombre: "No Man's Sky", 
    comentario: "Videojuego de exploración y supervivencia en el universo.", 
    precio: 15000, 
    imagen: "images/nomansky.jpg" }
];

// Función para mostrar el producto principal
function mostrarProductoPrincipal() {
  const params = new URLSearchParams(window.location.search);
  const index = params.get('index');

  if (index !== null && products[index]) {
    const product = products[index];
    document.getElementById('imagen-principal').src = product.imagen;
    document.getElementById('titulo-principal').textContent = product.nombre;
    document.getElementById('comentario-principal').textContent = product.comentario;
    document.getElementById('precio-principal').textContent = `$${product.precio.toLocaleString()}`;
  }
}

// Función para generar todas las cards :v
function generarCards() {
  const container = document.getElementById('productos-container');
  products.forEach((prod, i) => {
    const col = document.createElement('div');
    col.className = 'col-sm mb-3';

    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';

    const img = document.createElement('img');
    img.src = prod.imagen;
    img.className = 'card-img-top';
    img.alt = prod.nombre;

    const body = document.createElement('div');
    body.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = prod.nombre;

    const text = document.createElement('p');
    text.className = 'card-text';
    text.textContent = prod.comentario;

    // Hacer clic en la card redirigiendo al producto principal
    card.onclick = () => window.location.href = `?index=${i}`;

    body.appendChild(title);
    body.appendChild(text);
    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    container.appendChild(col);
  });
}

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  mostrarProductoPrincipal();
  generarCards();
});

function mostrarProductoPrincipal() {
  const params = new URLSearchParams(window.location.search);
  const index = params.get('index');

  if (index !== null && products[index]) {
    const product = products[index];
    document.getElementById('imagen-principal').src = product.imagen;
    document.getElementById('titulo-principal').textContent = product.nombre;
    document.getElementById('comentario-principal').textContent = product.comentario;
    document.getElementById('precio-principal').textContent = `$${product.precio.toLocaleString()}`;
  }
}

document.addEventListener('DOMContentLoaded', mostrarProductoPrincipal);
// Fin Funciones
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);