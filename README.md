# Kolective Subgraph with Ponder

![Ponder Logo](./public/logo-ponder.png)

## 🚀 Overview
This project is a **Ponder Event Listener** setup that listens to on-chain events from various smart contracts on the **Base Sepolia**. It records events like **swaps and transfers** into a structured database.

## 📌 Features
- Listens to multiple smart contracts.
- Supports **swapping and token transfers**.
- Uses **Ponder** for indexing and event tracking.

## 📂 Project Structure
```
📦 ponder-event-listener
├── 📄 ponder.config.ts  # Ponder configuration (networks & contracts)
├── 📄 ponder.schema.ts  # Defines on-chain table schemas
├── 📄 src/index.ts      # Main event handlers
├── 📄 README.md         # Documentation
```

## ⚙️ Installation
To set up the project locally:
```sh
# Clone the repository
git clone https://github.com/Kolective/kolective-subgraph
cd kolective-subgraph

# Create a `.env` file and add necessary environment variables
```env
PONDER_RPC_URL_1=
DATABASE_URL=
DATABASE_SCHEMA=
```

# Install dependencies
yarn install
```

## 🏗️ Usage
Run the Ponder indexer to start listening for events:
```sh
yarn start --schema public
```

## 📡 Supported Events
### Kolective Contract
- `Swap`
- `Transfer`

## ⚡ Configuration
Modify the **ponder.config.ts** file to add/remove contracts or update network settings.
```js
export default createConfig({
  networks: {
    baseSepolia: {
      chainId: 50002,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    Kolective: { ... },
    // Add more contracts here
  },
});
```

## 📜 License
This project is licensed under the **MIT License**.

## 💡 Contributing
Feel free to submit issues or pull requests to improve the project.

## 🔗 Links
- [Ponder Documentation](https://ponder.sh/docs)
- [Viem Library](https://viem.sh/)