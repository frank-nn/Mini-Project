document
  .getElementById("fetch-stock")
  .addEventListener("click", fetchStockData);

async function fetchStockData() {
  const symbol = document
    .getElementById("stock-symbol")
    .value.trim()
    .toUpperCase();
  const apiKey = "YOUR_API_KEY"; // Replace with your Alpha Vantage API key
  const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

  if (!symbol) {
    alert("Please enter a valid stock symbol!");
    return;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data["Global Quote"]) {
      alert("Invalid stock symbol or data not available.");
      return;
    }

    displayStockData(data["Global Quote"]);
  } catch (error) {
    console.error("Error fetching stock data:", error);
    alert("An error occurred while fetching stock data.");
  }
}

function displayStockData(stock) {
  const container = document.getElementById("stocks-container");

  // Clear previous data
  container.innerHTML = "";

  const priceChange = parseFloat(stock["09. change"]);
  const card = `
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="stock-card">
        <h3>${stock["01. symbol"]}</h3>
        <p>Price: $${parseFloat(stock["05. price"]).toFixed(2)}</p>
        <p>Change: <span class="${
          priceChange >= 0 ? "positive" : "negative"
        }">${priceChange.toFixed(2)}</span></p>
        <p>Change Percentage: ${stock["10. change percent"]}</p>
        <p>Last Trading Day: ${stock["07. latest trading day"]}</p>
      </div>
    </div>
  `;

  container.innerHTML = card;
}
