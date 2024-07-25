document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('mail');
    const usernameInput = document.getElementById('username');
    const numberInput = document.getElementById('mobile');
    const otpInput = document.getElementById('Otp');
    const checkbox = document.querySelector('.check');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        // Name validation
        if (nameInput.value.trim() === '') {
            showError('nameError', '***Name is required');
            valid = false;
        } else {
            clearError('nameError');
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            showError('emailError', '***Email is required');
            valid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError('emailError', '***Enter a valid email');
            valid = false;
        } else {
            clearError('emailError');
        }

        // Username validation
        if (checkbox.checked) {
            usernameInput.value = emailInput.value.trim();
            clearError('usernameError');
        } else {
            if (usernameInput.value.trim() === '') {
                showError('usernameError', '***Username is required');
                valid = false;
            } else {
                clearError('usernameError');
            }
        }

        // Number validation
        if (numberInput.value.trim() === '') {
            showError('numberError', '***Number is required');
            valid = false;
        } else if (!isValidNumber(numberInput.value.trim())) {
            showError('numberError', '***Enter a valid number');
            valid = false;
        } else {
            clearError('numberError');
        }

        // OTP validation
        if (otpInput.value.trim() === '') {
            showError('otpError', '***OTP is required');
            valid = false;
        } else {
            clearError('otpError');
        }

        if (valid) {
            form.submit();
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearError(elementId) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = '';
    }

    function isValidEmail(email) {
        // Simple email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidNumber(number) {
        // Simple number validation regex (e.g., 10 digits)
        return /^\d{10}$/.test(number);
    }
});
