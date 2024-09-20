function getElementValueFromSessionStorage(key: string): string {
    const value = sessionStorage.getItem(key);
    if (!value) {
        const errorMessage = `Value with key ${key} not found in sessionStorage.`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
    return value.trim();
}

function getOrderDataFromSessionStorage(keys: string[]): Record<string, string> {
    const data: Record<string, string> = {};

    keys.forEach(key => {
        data[key] = getElementValueFromSessionStorage(key);
    });

    return data;
}

window.addEventListener('DOMContentLoaded', () => {
    renderCheckoutForm();

    document.getElementById('payment-form')?.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        const keysToExtract = ['stockName', 'amount', 'price', 'ccName'];

        const orderData = getOrderDataFromSessionStorage(keysToExtract);

        const socket = new WebSocket('http://localhost:3002');

        socket.addEventListener('open', () => {
            console.log('Connected to WebSocket server');
            socket.send(JSON.stringify(orderData));
        });

        socket.addEventListener('message', (event: MessageEvent) => {
            console.log('Message from server:', event.data);
        });

        socket.addEventListener('close', () => {
            console.log('WebSocket connection closed');
        });
    });
});

function renderCheckoutForm() {
    const orderType = sessionStorage.getItem('orderType');
    const amount = sessionStorage.getItem('amount');
    const price = sessionStorage.getItem('price');
    const stockName = sessionStorage.getItem('stockName');

    if (orderType && amount && price && stockName) {
        const total = parseFloat(amount) * parseFloat(price);
        const formattedTotal = `$${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        const orderTypeHeader = document.getElementById('order-type-header') as HTMLElement;
        orderTypeHeader.textContent = orderType.charAt(0).toUpperCase() + orderType.slice(1) + ' Order';

        (document.getElementById('stock-name') as HTMLTableCellElement).textContent = stockName;
        (document.getElementById('amount') as HTMLTableCellElement).textContent = amount;
        (document.getElementById('price') as HTMLTableCellElement).textContent = `$${parseFloat(price).toFixed(2)}`;
        (document.getElementById('total') as HTMLTableCellElement).textContent = formattedTotal;
    } else {
        window.location.href = 'index.html';
    }
}