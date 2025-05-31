// form_validation.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const fields = {
        fullName: document.getElementById('fullName'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        testDate: document.getElementById('testDate'),
        notes: document.getElementById('notes')
    };

    const errorSpans = {
        fullName: document.getElementById('fullNameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        testDate: document.getElementById('testDateError')
    };

    const successMessage = document.getElementById('successMessage');

    // Helper: Validate email format
    function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // Helper: Validate 10 digit phone number
    function isValidPhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    // Helper: Validate required fields
    function isNotEmpty(value) {
        return value.trim() !== '';
    }

    // Clear error messages and invalid styles
    function clearErrors() {
        Object.values(errorSpans).forEach(span => span.textContent = '');
        Object.values(fields).forEach(field => field.classList.remove('invalid'));
    }

    // Clear the form fields
    function clearForm() {
        form.reset();
        clearErrors();
    }

    // Show error for a field
    function showError(field, message) {
        field.classList.add('invalid');
        errorSpans[field.id].textContent = message;
    }

    // Form submit handler
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();
        successMessage.textContent = '';

        let isValid = true;

        // Full Name validation
        if (!isNotEmpty(fields.fullName.value)) {
            showError(fields.fullName, "Full Name is required.");
            isValid = false;
        }

        // Email validation
        if (!isNotEmpty(fields.email.value)) {
            showError(fields.email, "Email is required.");
            isValid = false;
        } else if (!isValidEmail(fields.email.value)) {
            showError(fields.email, "Please enter a valid email address.");
            isValid = false;
        }

        // Phone validation
        if (!isNotEmpty(fields.phone.value)) {
            showError(fields.phone, "Phone number is required.");
            isValid = false;
        } else if (!isValidPhone(fields.phone.value)) {
            showError(fields.phone, "Phone number must be exactly 10 digits.");
            isValid = false;
        }

        // Test Date validation
        if (!isNotEmpty(fields.testDate.value)) {
            showError(fields.testDate, "Test date is required.");
            isValid = false;
        }

        // If valid, show success and clear form
        if (isValid) {
            successMessage.textContent = "Registration successful! Thank you for registering.";
            clearForm();
        }
    });

    // Remove error state on input
    Object.values(fields).forEach(field => {
        field.addEventListener('input', function () {
            if (field.classList.contains('invalid')) {
                field.classList.remove('invalid');
                errorSpans[field.id] && (errorSpans[field.id].textContent = '');
            }
        });
    });
});