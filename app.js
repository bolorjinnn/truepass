function check() {
        const passwordInput = document.getElementById('password').value;

        // Check for the length requirement
        const isLengthValid = passwordInput.length >= 10;

        // Check for lowercase, uppercase, digit, and special character requirements
        const containsLowercase = /[a-z]/.test(passwordInput);
        const containsUppercase = /[A-Z]/.test(passwordInput);
        const containsDigit = /[0-9]/.test(passwordInput);
        const containsSpecialChar = /[!@#$%^&*]/.test(passwordInput);

        // Update the check icons and messages
        document.getElementById('checkIcon0').classList.toggle('bi-check-circle', isLengthValid);
        document.getElementById('checkMessage0').classList.toggle('valid', isLengthValid);

        document.getElementById('checkIcon1').classList.toggle('bi-check-circle', containsLowercase);
        document.getElementById('checkMessage1').classList.toggle('valid', containsLowercase);

        document.getElementById('checkIcon2').classList.toggle('bi-check-circle', containsDigit);
        document.getElementById('checkMessage2').classList.toggle('valid', containsDigit);

        document.getElementById('checkIcon3').classList.toggle('bi-check-circle', containsUppercase);
        document.getElementById('checkMessage3').classList.toggle('valid', containsUppercase);

        document.getElementById('checkIcon4').classList.toggle('bi-check-circle', containsSpecialChar);
        document.getElementById('checkMessage4').classList.toggle('valid', containsSpecialChar);
    }

    function togglePasswordVisibility() {
        const passwordInput = document.getElementById('password');
        const seeIcon = document.getElementById('see');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            seeIcon.classList.remove('bi-eye-fill');
            seeIcon.classList.add('bi-eye-slash-fill');
        } else {
            passwordInput.type = 'password';
            seeIcon.classList.remove('bi-eye-slash-fill');
            seeIcon.classList.add('bi-eye-fill');
        }
    }


