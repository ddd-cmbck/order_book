interface Order {
    price: number;
    amount: number;
    total: number;
    percentage: number;
}

interface AveragePrice {
    price: number;
    arrow: boolean;
}

const orderBook = document.getElementById('order-book') as HTMLTableSectionElement;
const dyn_label = document.getElementById('avrg-price-label') as HTMLParagraphElement;

// Example data structure for buy/sell orders

const currAvrgPrice: AveragePrice = {price: 250, arrow: false};

const sellOrders: Order[] = [
    { price: 300, amount: 10, total: 3000, percentage: 10 },
    { price: 290, amount: 100, total: 72000, percentage: 50 },
    { price: 280, amount: 40, total: 72000, percentage: 32 },
    { price: 270, amount: 35, total: 72000, percentage: 31 },
    { price: 260, amount: 100, total: 72000, percentage: 62 }
];

const buyOrders: Order[] = [
    { price: 250, amount: 400, total: 88000, percentage: 40 },
    { price: 240, amount: 370, total: 42000, percentage: 38 },
    { price: 230, amount: 800, total: 42000, percentage: 70 },
    { price: 220, amount: 1200, total: 42000, percentage: 80 },
    { price: 210, amount: 1500, total: 42000, percentage: 90 },

];



function render_avrg_label():void {
    dyn_label.innerHTML = `<p id="avrg-price-label">${currAvrgPrice.price}</p>`;
}

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
        const row = document.createElement('tr');
        row.classList.add('divider-row');
        row.innerHTML = `
        <td colspan="4" class="average-price 
                        ${currAvrgPrice.arrow ? 'buy-price': 'sell-price'}"
                        >
                ${currAvrgPrice.price} ${currAvrgPrice.arrow ? '&uarr;': '&darr;'}
        </td>
        `;

        orderBook.appendChild(row);


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
render_avrg_label()
