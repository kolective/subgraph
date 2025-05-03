import { createConfig } from "ponder";
import { http } from "viem";
import { CoreABI } from "./abis/CoreABI";
import { TokenABI } from "./abis/TokenABI";

export default createConfig({
  // database: {
  //   kind: "postgres",
  //   connectionString: process.env.PONDER_DATABASE_URL,
  // },
  networks: {
    pharosDevnet: {
      chainId: 50002,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    Core: {
      network: "pharosDevnet",
      abi: CoreABI,
      address: "0xafA3F062af91486172d37fccD3a8A5938c61A0b8",
      startBlock: 18743612,
    },
    USDC: {
      network: "pharosDevnet",
      abi: TokenABI,
      address: "0x3445A76cf3dB3545369Ee77FF5AF1A43e3F0997b",
      startBlock: 18743612,
    },
    ETH: {
      network: "pharosDevnet",
      abi: TokenABI,
      address: "0x13c0D026D0EcAc809ADd4335DbA3c285923D33a3",
      startBlock: 18743612,
    },
    BTC: {
      network: "pharosDevnet",
      abi: TokenABI,
      address: "0x70f4ef9312B7509A5D147B0aC8bde530b55c12e6",
      startBlock: 18743612,
    },
    WETH: {
      network: "pharosDevnet",
      abi: TokenABI,
      address: "0xD0aDf7c15F78392387D79F26Ce73dfc82FE1DDEe",
      startBlock: 18743612,
    },
    PEPE: {
      network: "pharosDevnet",
      abi: TokenABI,
      address: "0xd5fe1780559c977Dc70C22C4153d6159F5b7414D",
      startBlock: 18743612,
    },
    TRUMP: {
      network: "pharosDevnet",
      abi: TokenABI,
      address: "0xe4Faf4dCA32CC724699d9405407AfD8CA44Ee8D8",
      startBlock: 18743612,
    },
    DOGEAI: {
      network: "pharosDevnet",
      abi: TokenABI,
      address: "0xE10960Da3cBA9186373b9B8Df5aB91470D199C0E",
      startBlock: 18743612,
    },
    WIF: {
      network: "pharosDevnet",
      abi: TokenABI,
      address: "0x3Bc0a07BaD012a82d63d058EaB6F121E72B73532",
      startBlock: 18743612,
    },
    STONKS: {
      network: "pharosDevnet",
      abi: TokenABI,
      address: "0x73Bb3b9AbdFB9aAf31f6feEd4a963E4816612e80",
      startBlock: 18743612,
    },
  },
});
