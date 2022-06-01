const user = document.getElementById('usuario');
const pass = document.getElementById('clave');
const enviar = document.getElementById('enviar');


enviar.addEventListener('click', () => {

    user.setCustomValidity ('');
    pass.setCustomValidity ('');
    
    if (user.value === '') {        
        user.setCustomValidity('El campo usuario debe ser completado');
        user.style.background = 'pink';
    } else if (user.value.indexOf ("@") == -1) {
        user.setCustomValidity('El usuario debe incluír una @');
        user.style.background = 'pink';
    } else if (pass.value == '') {
        pass.setCustomValidity('Por favor ingrese su clave');        
        pass.style.background = 'pink';
    }
});


document.addEventListener('focusout', () => {

    if (user.value.indexOf ("@") !== -1) {
        user.style.background = 'white';
    }
    else if (pass.value !== '') {
        pass.style.background = 'white';
    }
});




/*
const validacion = (usuario, clave) => {
    
    usuario.setCustomValidity ('');
    clave.setCustomValidity ('');

    if (usuario.value === '') {
        
        usuario.setCustomValidity('El campo usuario debe ser completado');
    
    } else if (usuario.value.indexOf('@') === -1) {

        usuario.setCustomValidity('El campo usuario debe contener al menos una @');

    } else if (clave.value === '') {

        clave.setCustomValidity('El campo contraseña no puede estar vacío');
    
    } else {

        usuario.setCustomValidity('');
        clave.setCustomValidity('');
        alert('Bienvenid@' + usuario.value);
    }

    enviar.addEventListener ('click', (e) => {
        validacion(user, pass);
    })
}


*/




// INVIABLE 1

/*let validRegex = '/w/@/gi';

enviar.addEventListener('click', () => {

    let userValue = usuario.value;
        
    if (userValue == '') {
        usuario.setCustomValidity('Complete el campo con su usuario');
        usuario.style.background = 'pink';
    }
    else if (userValue.indexOf ("@") == -1) {
        usuario.setCustomValidity('El usuario debe incluír una @');
        usuario.style.background = 'pink';
    }
    /*else if (passValue == '') {
        clave.setCustomValidity('Por favor ingrese su clave');        
        clave.style.background = 'pink';
    }
    else {
            alert(`Bienvenid@ ${userValue}`);
    }
});


document.addEventListener('focusout', () => {
    usuario.style.background = 'white';
});
            
*/        
        

// INVIABLE 2

/*

enviar.addEventListener('click', () => {

    let userValue = usuario.value;
    let passValue = clave.value;
    
    if (userValue.indexOf ("@") == -1) {
        usuario.setCustomValidity('El usuario debe incluír una @');
        usuario.style.background = 'pink';
    }
    else if (passValue == '') {
        clave.setCustomValidity('Por favor ingrese su clave');        
        clave.style.background = 'pink';
    }
});


document.addEventListener('focusout', () => {

    if (userValue.indexOf ("@") !== -1) {
        usuario.style.background = 'white';
    }
    else if (passValue !== '') {
        clave.style.background = 'white';
    }
});
*/


// INVIABLE 3

/*function acceso() {

    let validacion = {
    validUser: ['\w\@|\@\w$', 'Tu usuario debe incluír @'],
    validPass: ['\w+$','Por favor ingresá tu clave. Puede incluír letras, números y guión bajo (_)']
    }

    let usuario = document.getElementById('usuario').value;
    let clave = document.getElementById('clave');    

    let validador = new RegExp(acceso[usuario][0]);

    if (validador.test(clave.value)) {
        clave.setCustomValidity('');
    } else {
        clave.setCustomValidity(acceso[usuario][1])
    }
}


window.onload= function(){
	document.getElementById('usuario').onchange= acceso
	document.getElementById('clave').oninput= acceso
	document.getElementById('enviar').onsubmit= alert('¡Bienvenido'+ usuario +'!')
}*/