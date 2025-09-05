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
    var verificarCorreo = false;

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

	if (!Nombre) {
        document.getElementById('nombreError').innerText = 'Nombre no ingresado';
        return;
    } else if (Nombre.length > 50 || Nombre.length < 3) {
        document.getElementById('nombreError').innerText = 'Nombre demasiado corto o largo';
        return;
    } else {
        document.getElementById('nombreError').innerText = '';
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

    console.log('Correo:', email);
    console.log('Contraseña:', password);
	console.log('Nombre:', Nombre);
	console.log('ContraseñaConfirmada:', validarContra);
	console.log('Telefono:', telefono);
	console.log('Region:', region);
	console.log('Comuna:', comuna);
}
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