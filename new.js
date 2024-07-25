document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        // Username validation
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, '***Username is required');
            valid = false;
        } else {
            clearError(usernameInput);
        }

        // Password validation
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, '***Password is required');
            valid = false;
        } else {
            clearError(passwordInput);
        }

        if (valid) {
            form.submit();
        }
    });

    function showError(input, message) {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error')) {
            errorElement = document.createElement('div');
            errorElement.className = 'error';
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = message;
    }

    function clearError(input) {
        let errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.textContent = '';
        }
    }
});
