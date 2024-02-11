# Coindex CLI

Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://www.coingecko.com/en/api

## Usage

```
npm install

npm link
```

## Commands

```
# Help & Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set
coindex key show
coindex key remove

# Check Specific Coins (default: BTN,ETH,XRP)
coindex check --coin=BTC,ETH

# Choose Currency (Default: USD)
coindex check --cur=EUR

# Example
coindex check price --coin=bitcoin,ethereum,tether --cur=php  
# Crypto Check Commands
coindex check price
```

### Version

1.0.0

### License

MIT
