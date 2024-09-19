document.getElementById('payment-form')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    let isValid = true;

    // Name on Card Validation
    const ccNameInput = document.getElementById('cc-name') as HTMLInputElement;
    const ccName = ccNameInput.value.trim();
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(ccName)) {
        isValid = false;
        ccNameInput.classList.add('invalid');
        (ccNameInput.nextElementSibling?.nextElementSibling as HTMLElement).textContent = 'Please enter a valid full name.';
    } else {
        ccNameInput.classList.remove('invalid');
        (ccNameInput.nextElementSibling?.nextElementSibling as HTMLElement).textContent = '';
    }

    // Credit Card Number Validation
    const ccNumberInput = document.getElementById('cc-number') as HTMLInputElement;
    const ccNumber = ccNumberInput.value.replace(/\s+/g, '');
    const numberRegex = /^\d{13,19}$/;
    if (!numberRegex.test(ccNumber)) {
        isValid = false;
        ccNumberInput.classList.add('invalid');
        (ccNumberInput.nextElementSibling as HTMLElement).textContent = 'Please enter a valid credit card number.';
    } else {
        ccNumberInput.classList.remove('invalid');
        (ccNumberInput.nextElementSibling as HTMLElement).textContent = '';
    }

    // Expiration Date Validation
    const ccExpirationInput = document.getElementById('cc-expiration') as HTMLInputElement;
    const ccExpiration = ccExpirationInput.value.trim();
    const expirationRegex = /^\d{4}$/;
    if (!expirationRegex.test(ccExpiration)) {
        isValid = false;
        ccExpirationInput.classList.add('invalid');
        (ccExpirationInput.nextElementSibling as HTMLElement).textContent = 'Please enter expiration date in MMYY format.';
    } else {
        const month = parseInt(ccExpiration.slice(0, 2), 10);
        const year = parseInt(ccExpiration.slice(2, 4), 10) + 2000;
        const expiryDate = new Date(year, month - 1, 1);
        const currentDate = new Date();
        if (month < 1 || month > 12 || expiryDate < new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)) {
            isValid = false;
            ccExpirationInput.classList.add('invalid');
            (ccExpirationInput.nextElementSibling as HTMLElement).textContent = 'Card is expired or invalid month.';
        } else {
            ccExpirationInput.classList.remove('invalid');
            (ccExpirationInput.nextElementSibling as HTMLElement).textContent = '';
        }
    }

    // CVV Validation
    const ccCvvInput = document.getElementById('cc-cvv') as HTMLInputElement;
    const ccCvv = ccCvvInput.value.trim();
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(ccCvv)) {
        isValid = false;
        ccCvvInput.classList.add('invalid');
        (ccCvvInput.nextElementSibling as HTMLElement).textContent = 'Please enter a valid 3-digit CVV code.';
    } else {
        ccCvvInput.classList.remove('invalid');
        (ccCvvInput.nextElementSibling as HTMLElement).textContent = '';
    }

    if (isValid) {
        alert('Payment information is valid. Proceeding to checkout.');
        // Submit the form or redirect as needed
    }
});