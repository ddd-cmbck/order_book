interface OrderHistory {
    price: number;
    amount: number;
    total: number;
    timestamp: string;
}

const buyHistorySection = document.querySelector('#buy-history tbody') as HTMLTableSectionElement;
const sellHistorySection = document.querySelector('#sell-history tbody') as HTMLTableSectionElement;

const buyOrderHistory: OrderHistory[] = [
    { price: 100, amount: 2, total: 200, timestamp: '12:00' },
    { price: 90, amount: 3, total: 270, timestamp: '11:45' },
];

const sellOrderHistory: OrderHistory[] = [
    { price: 150, amount: 1, total: 150, timestamp: '13:00' },
    { price: 160, amount: 4, total: 640, timestamp: '14:20' },
];

function renderHistory(historyData: OrderHistory[], container: HTMLTableSectionElement): void {
    // Clear existing rows
    container.innerHTML = '';

    // Insert new history rows
    historyData.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${order.price}</td>
      <td>${order.amount}</td>
      <td>${order.total}</td>
      <td>${order.timestamp}</td>
    `;
        container.appendChild(row);
    });
}

// Initially render both buy and sell histories
renderHistory(buyOrderHistory, buyHistorySection);
renderHistory(sellOrderHistory, sellHistorySection);

