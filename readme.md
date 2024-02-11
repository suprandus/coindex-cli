# Coindex CLI

Command line interface written in Node.js to check cryptocurrency prices.

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

# Check Specific Coins (default: bitcoin,ethereum,tether).
# Currently, only the name is available for a specific coin. The symbol will be added soon.

coindex check price --coin=ripple,cardano

# Choose Currency (Default: USD)
coindex check --cur=PHP

# Crypto Check Commands
coindex check price

# Example
coindex check price --coin=bitcoin,ethereum,tether
```

### Version

1.0.0

### License

MIT
