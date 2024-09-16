interface Order {
    price: number;
    amount: number;
    total: number;
    percentage: number;
}

const orderBook = document.getElementById('order-book') as HTMLTableSectionElement;

// Example data structure for buy/sell orders
const sellOrders: Order[] = [
    { price: 250, amount: 500, total: 250000, percentage: 70 },
    { price: 240, amount: 300, total: 72000, percentage: 50 }
];

const buyOrders: Order[] = [
    { price: 220, amount: 400, total: 88000, percentage: 60 },
    { price: 210, amount: 200, total: 42000, percentage: 40 }
];

function renderOrders(): void {
    if (!orderBook) return;

    // Save reference to the average row
    const averageRow = document.querySelector('.divider-row') as HTMLTableRowElement;

    // Clear existing rows except the average row
    orderBook.innerHTML = '';

    // Insert sell orders
    sellOrders.forEach(order => {
        const row = document.createElement('tr');
        row.classList.add('sell-row');
        row.innerHTML = `
      <td class="price sell-price">${order.price}</td>
      <td>${order.amount}</td>
      <td>${order.total}</td>
      <td>
        <div class="bar-container">
          <div class="bar sell-bar" style="width: ${order.percentage}%;"></div>
        </div>
      </td>
    `;
        orderBook.appendChild(row);
    });

    // Re-insert the average price row
    if (averageRow) {
        orderBook.appendChild(averageRow);
    }

    // Insert buy orders
    buyOrders.forEach(order => {
        const row = document.createElement('tr');
        row.classList.add('buy-row');
        row.innerHTML = `
      <td class="price buy-price">${order.price}</td>
      <td>${order.amount}</td>
      <td>${order.total}</td>
      <td>
        <div class="bar-container">
          <div class="bar buy-bar" style="width: ${order.percentage}%;"></div>
        </div>
      </td>
    `;
        orderBook.appendChild(row);
    });
}

// Initial rendering of the table
renderOrders();
