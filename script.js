
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const captcha = document.getElementById('captcha').value;
    const captchaText = document.getElementById('captchaText').innerText;
    const errorMessage = document.getElementById('error-message');

    // Validar correo electrónico
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Ingresa un correo electrónico válido.';
        return;
    }

    // Validar contraseña
    if (!validatePassword(password)) {
        errorMessage.textContent = 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.';
        return;
    }

    // Validar confirmación de contraseña
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        return;
    }

    // Validar CAPTCHA
    if (captcha !== captchaText) {
        errorMessage.textContent = 'El código CAPTCHA es incorrecto.';
        return;
    }

    // Si todo está correcto
    errorMessage.textContent = '';
    alert('Registro exitoso!');
    // Aquí podrías enviar los datos al servidor o redirigir al usuario
});

// Función para validar el correo electrónico
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para validar la contraseña
function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%-.*?&])[A-Za-z\d@-.$!%*?&]{8,}$/;
    return regex.test(password);
}

document.getElementById('password').addEventListener('input', function() {
    document.getElementById('error-message').textContent = '';
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    document.getElementById('error-message').textContent = '';
});