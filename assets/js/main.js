/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
// Funciones
	function correoYcontraseña() {
          event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('contraseña').value;

            if (!email || email.length > 100) {
                document.getElementById('emailError').innerText = 'Correo No ingresado o demasiado largo.';
                return;
            }else{
				document.getElementById('emailError').innerText = '';
			}
         
            if (!password || password.length < 4 || password.length > 10) {
                document.getElementById('contraseñaError').innerText = 'Contraseña No ingresada o inválida.';
                return;
            }else{
				document.getElementById('contraseñaError').innerText= '';
			}
			
            console.log('Correo:', email);
            console.log('Contraseña:', password);
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