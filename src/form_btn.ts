// Function to handle form tab switching (Buy/Sell)
function handleFormTabSwitch(tabType: string) {
    const buyForm = document.getElementById('buy-form') as HTMLElement;
    const sellForm = document.getElementById('sell-form') as HTMLElement;

    // Handle form visibility
    if (tabType === 'buy') {
        buyForm.classList.add('active-form');
        buyForm.classList.remove('hidden-form');
        sellForm.classList.remove('active-form');
        sellForm.classList.add('hidden-form');
    } else if (tabType === 'sell') {
        sellForm.classList.add('active-form');
        sellForm.classList.remove('hidden-form');
        buyForm.classList.remove('active-form');
        buyForm.classList.add('hidden-form');
    }

    // Update active class for form tabs
    document.querySelectorAll('.form-tab-button').forEach((button) => {
        button.classList.remove('active'); // Remove active class from all buttons
    });

    const activeFormTabButton = document.querySelector(`.form-tab-button[data-tab="${tabType}"]`);
    if (activeFormTabButton) {
        activeFormTabButton.classList.add('active'); // Add active class to the clicked form tab
    }
}

// Function to handle order history tab switching (Buy Orders/Sell Orders)
function handleOrderHistoryTabSwitch(tabType: string) {
    const buyHistory = document.getElementById('buy-history') as HTMLElement;
    const sellHistory = document.getElementById('sell-history') as HTMLElement;

    // Handle history table visibility
    if (tabType === 'buy-history') {
        buyHistory.classList.add('active-form');
        buyHistory.classList.remove('hidden-form');
        sellHistory.classList.remove('active-form');
        sellHistory.classList.add('hidden-form');
    } else if (tabType === 'sell-history') {
        sellHistory.classList.add('active-form');
        sellHistory.classList.remove('hidden-form');
        buyHistory.classList.remove('active-form');
        buyHistory.classList.add('hidden-form');
    }

    // Update active class for order history tabs
    document.querySelectorAll('.history-tab-button').forEach((button) => {
        button.classList.remove('active'); // Remove active class from all buttons
    });

    const activeHistoryTabButton = document.querySelector(`.history-tab-button[data-tab="${tabType}"]`);
    if (activeHistoryTabButton) {
        activeHistoryTabButton.classList.add('active'); // Add active class to the clicked history tab
    }
}

// Adding event listeners to all form tabs (Buy/Sell)
const formTabButtons = document.querySelectorAll('.form-tab-button') as NodeListOf<HTMLButtonElement>;
formTabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const tabType = button.dataset.tab as string;
        handleFormTabSwitch(tabType);
    });
});

// Adding event listeners to all order history tabs (Buy Orders/Sell Orders)
const orderHistoryTabButtons = document.querySelectorAll('.history-tab-button') as NodeListOf<HTMLButtonElement>;
orderHistoryTabButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const tabType = button.dataset.tab as string;
        handleOrderHistoryTabSwitch(tabType);
    });
});
