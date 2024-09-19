
function setupFormSubmissions() {
    const buyForm = document.getElementById('buy-form') as HTMLFormElement;
    const sellForm = document.getElementById('sell-form') as HTMLFormElement;

    buyForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const amount = (document.getElementById('buy-amount') as HTMLInputElement).value;
        const price = (document.getElementById('buy-price') as HTMLInputElement).value;
        const stockName = (document.getElementById('stock-name') as HTMLElement).innerText;

        // Store data in sessionStorage
        sessionStorage.setItem('orderType', 'buy');
        sessionStorage.setItem('amount', amount);
        sessionStorage.setItem('price', price);
        sessionStorage.setItem('stockName', stockName);

        // Redirect to checkout_form.html
        window.location.href = '../public/html/checkout_form.html';
    });

    sellForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const amount = (document.getElementById('sell-amount') as HTMLInputElement).value;
        const price = (document.getElementById('sell-price') as HTMLInputElement).value;
        const stockName = (document.getElementById('stock-name') as HTMLElement).innerText;

        // Store data in sessionStorage
        sessionStorage.setItem('orderType', 'sell');
        sessionStorage.setItem('amount', amount);
        sessionStorage.setItem('price', price);
        sessionStorage.setItem('stockName', stockName);

        // Redirect to checkout_form.html
        window.location.href = '../public/html/checkout_form.html';
    });
}

setupFormSubmissions();