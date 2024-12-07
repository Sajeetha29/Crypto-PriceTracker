async function fetchCoinData(coinId) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data[coinId].usd;
    } catch (error) {
        console.error(error);
    }
}

async function updateCoinPrices() {
    const bitcoinPrice = await fetchCoinData('bitcoin');
    const ethereumPrice = await fetchCoinData('ethereum');
    const dogecoinPrice = await fetchCoinData('dogecoin');

    document.querySelector('.coin-list .coin:first-child h3').innerText = `$${bitcoinPrice}`;
    document.querySelector('.coin-list .coin:nth-child(2) h3').innerText = `$${ethereumPrice}`;
    document.querySelector('.coin-list .coin:last-child h3').innerText = `$${dogecoinPrice}`;
}

updateCoinPrices();
setInterval(updateCoinPrices, 10000);  // Update prices every 10 seconds