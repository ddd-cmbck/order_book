document.getElementById('payment-form')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    let isValid = false;

    // Helper function to show validation messages
    function showValidationMessage(inputElement: HTMLInputElement, message: string) {
        const errorMessageDiv = inputElement.nextElementSibling as HTMLElement;

        if (message) {
            inputElement.classList.add('invalid');
            errorMessageDiv.textContent = message;
            errorMessageDiv.classList.add('visible');
        } else {
            inputElement.classList.remove('invalid');
            errorMessageDiv.textContent = '';
            errorMessageDiv.classList.remove('visible');
        }
    }

    // Store value in sessionStorage
    function storeValueInSessionStorage(key: string, value: string) {
        sessionStorage.setItem(key, value);
    }

    // Validate Name on Card
    function validateNameOnCard(): boolean {
        const ccNameInput = document.getElementById('cc-name') as HTMLInputElement;
        const ccName = ccNameInput.value.trim();
        const nameRegex = /^[A-Za-z\s]+$/;

        if (!nameRegex.test(ccName)) {
            showValidationMessage(ccNameInput, 'Please enter a valid full name');
            return false;
        }

        showValidationMessage(ccNameInput, '');
        storeValueInSessionStorage('ccName', ccName);
        return true;
    }

    // Validate Credit Card Number
    function validateCardNumber(): boolean {
        const ccNumberInput = document.getElementById('cc-number') as HTMLInputElement;
        const ccNumber = ccNumberInput.value.replace(/\s+/g, '');
        const numberRegex = /^\d{13,19}$/;

        if (!numberRegex.test(ccNumber)) {
            showValidationMessage(ccNumberInput, 'Please enter a valid credit card number');
            return false;
        }

        showValidationMessage(ccNumberInput, '');
        storeValueInSessionStorage('ccNumber', ccNumber);
        return true;
    }

    // Validate Expiration Date
    function validateExpirationDate(): boolean {
        const ccExpirationInput = document.getElementById('cc-expiration') as HTMLInputElement;
        const ccExpiration = ccExpirationInput.value.trim();
        const expirationRegex = /^\d{4}$/;

        if (!expirationRegex.test(ccExpiration)) {
            showValidationMessage(ccExpirationInput, 'Please enter expiration date in MMYY format');
            return false;
        }

        const month = parseInt(ccExpiration.slice(0, 2), 10);
        const year = parseInt(ccExpiration.slice(2, 4), 10) + 2000;
        const expiryDate = new Date(year, month - 1, 1);
        const currentDate = new Date();

        if (month < 1 || month > 12 || expiryDate < new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)) {
            showValidationMessage(ccExpirationInput, 'Card is expired or invalid month');
            return false;
        }

        showValidationMessage(ccExpirationInput, '');
        storeValueInSessionStorage('ccExpiration', ccExpiration);
        return true;
    }

    // Validate CVV
    function validateCvv(): boolean {
        const ccCvvInput = document.getElementById('cc-cvv') as HTMLInputElement;
        const ccCvv = ccCvvInput.value.trim();
        const cvvRegex = /^\d{3}$/;

        if (!cvvRegex.test(ccCvv)) {
            showValidationMessage(ccCvvInput, 'Please enter a valid 3-digit CVV code');
            return false;
        }

        showValidationMessage(ccCvvInput, '');
        storeValueInSessionStorage('ccCvv', ccCvv);
        return true;
    }

    isValid = validateNameOnCard() && validateCardNumber() && validateExpirationDate() && validateCvv();

    if (isValid) {
        alert('Payment information is valid. Proceeding to checkout');
        // Submit the form or redirect as needed
    }
});