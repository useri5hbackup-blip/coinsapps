// Handle package selection
const packageCards = document.querySelectorAll(".package-card");
const summaryCoins = document.getElementById("summary-coins");
const summaryPrice = document.getElementById("summary-price");
const summaryTotal = document.getElementById("summary-total");
const balanceEl = document.getElementById("coin-balance");
const buyBtn = document.getElementById("buy-now");
const toast = document.getElementById("toast");

let selectedCoins = 70;
let selectedPrice = 0.99;

packageCards.forEach((card) => {
  card.addEventListener("click", () => {
    packageCards.forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");

    selectedCoins = parseInt(card.dataset.coins, 10);
    selectedPrice = parseFloat(card.dataset.price);

    summaryCoins.textContent = `${selectedCoins} Coins`;
    summaryPrice.textContent = `$${selectedPrice.toFixed(2)}`;
    summaryTotal.textContent = `$${selectedPrice.toFixed(2)}`;
  });
});

// Simulated purchase (front-end only)
buyBtn.addEventListener("click", () => {
  // Increase balance visually
  const currentBalance = parseInt(balanceEl.textContent || "0", 10);
  balanceEl.textContent = currentBalance + selectedCoins;

  // Show toast
  toast.classList.remove("hidden");
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
    toast.classList.add("hidden");
  }, 2500);
});
