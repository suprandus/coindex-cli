const axios = require("axios");
const colors = require("colors");

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.coingecko.com/api/v3/coins/markets";
  }

  async getPriceData(coinOption, curOption) {
    try {
      // Formatter for currency
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curOption,
      });

      const res = await axios.get(
        `${this.baseUrl}?x_cg_demo_api_key=${this.apiKey}&ids=${coinOption}&vs_currency=${curOption}`
      );

      let output = "";

      res.data.forEach((coin) => {
        const rankStr = coin.market_cap_rank.toString(); // convert the value into a string
        output += `Coin: ${coin.symbol.toUpperCase().yellow} (${
          coin.name
        }) |  Price: ${formatter.format(coin.current_price).green} | Rank: ${
          rankStr.blue
        }\n`;
      });

      return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error(
      "Your API key is invalid - Go to https://www.coingecko.com/en/api"
    );
  } else if (err.response.status === 404) {
    throw new Error("Your API is not responding");
  } else {
    throw new Error("Something is not working");
  }
}

module.exports = CryptoAPI;
