// trends.js
async function fetchTrendData() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function updateTrendContent() {
    const trendData = await fetchTrendData();
    const trendContent = document.querySelector('.trends-content');

    trendData.forEach((coin) => {
        const coinCard = document.createElement('div');
        coinCard.classList.add('coin-card');
        coinCard.innerHTML = `
            <h2>${coin.name}</h2>
            <p>Price: $${coin.current_price}</p>
            <p>Market Cap: $${coin.market_cap}</p>
        `;
        trendContent.appendChild(coinCard);
    });
}

updateTrendContent();