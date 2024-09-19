console.log(`Hello World`);

window.addEventListener('DOMContentLoaded', () => {
    const orderType = sessionStorage.getItem('orderType');
    const amount = sessionStorage.getItem('amount');
    const price = sessionStorage.getItem('price');
    const stockName = sessionStorage.getItem('stockName');

    console.log(orderType);
    console.log(amount);
    console.log(price);
    console.log(stockName);

    if (orderType && amount && price && stockName) {
        const total = parseFloat(amount) * parseFloat(price);
        const formattedTotal = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        // Update the order section
        const orderTypeHeader = document.getElementById('order-type-header') as HTMLElement;
        orderTypeHeader.textContent = orderType.charAt(0).toUpperCase() + orderType.slice(1) + ' Order';

        (document.getElementById('stock-name') as HTMLTableCellElement).textContent = stockName;
        (document.getElementById('amount') as HTMLTableCellElement).textContent = amount;
        (document.getElementById('price') as HTMLTableCellElement).textContent = `$${parseFloat(price).toFixed(2)}`;
        (document.getElementById('total') as HTMLTableCellElement).textContent = formattedTotal;
    } else {
        // If no data is found, redirect back to the index page
        window.location.href = 'index.html';
    }
});
