// Function to handle tab switching
function handleTabSwitch(tabType: string) {
  const buyForm = document.getElementById('buy-form') as HTMLElement;
  const sellForm = document.getElementById('sell-form') as HTMLElement;
  const buyHistory = document.getElementById('buy-history') as HTMLElement;
  const sellHistory = document.getElementById('sell-history') as HTMLElement;

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
}

// Adding event listeners to all tab buttons
const tabButtons = document.querySelectorAll('.tab-button') as NodeListOf<HTMLButtonElement>;

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const tabType = button.dataset.tab as string;
    handleTabSwitch(tabType);
  });
});