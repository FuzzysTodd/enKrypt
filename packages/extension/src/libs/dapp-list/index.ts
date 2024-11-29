import { NetworkNames } from "@enkryptcom/types";

const lists: Partial<Record<NetworkNames, string>> = {
  [NetworkNames.Ethereum]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/eth.json",
  [NetworkNames.Binance]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/bsc.json",
  [NetworkNames.Matic]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/matic.json",
  [NetworkNames.EthereumClassic]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/etc.json",
  [NetworkNames.Kusama]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/ksm.json",
  [NetworkNames.Polkadot]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/dot.json",
  [NetworkNames.Acala]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/aca.json",
  [NetworkNames.Karura]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/kar.json",
  [NetworkNames.Moonbeam]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/glmr.json",
  [NetworkNames.Moonriver]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/movr.json",
  [NetworkNames.Astar]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/astr.json",
  [NetworkNames.AstarEVM]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/astr.json",
  [NetworkNames.Shiden]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/sdn.json",
  [NetworkNames.ShidenEVM]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/sdn.json",
  [NetworkNames.Okc]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/okc.json",
  [NetworkNames.Optimism]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/op.json",
  [NetworkNames.Canto]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/canto.json",
  [NetworkNames.Bifrost]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/bifrost.json",
  [NetworkNames.BifrostKusama]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/bifrost.json",
  [NetworkNames.Edgeware]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/edg.json",
  [NetworkNames.ZkSyncGoerli]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/zksyncgoerli.json",
  [NetworkNames.ZkSync]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/zksync.json",
  [NetworkNames.Rootstock]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/rootstock.json",
  [NetworkNames.TomoChain]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/tomo.json",
  [NetworkNames.Arbitrum]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/arb.json",
  [NetworkNames.Avalanche]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/avax.json",
  [NetworkNames.Fantom]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/ftm.json",
  [NetworkNames.Klaytn]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/klay.json",
  [NetworkNames.Aurora]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/aurora.json",
  [NetworkNames.Base]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/base.json",
  [NetworkNames.Celo]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/celo.json",
  [NetworkNames.MaticZK]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/matic-zkevm.json",
  [NetworkNames.Bitcoin]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/btc.json",
  [NetworkNames.Arthera]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/arthera.json",
  [NetworkNames.Blast]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/blast.json",
  [NetworkNames.ArbitrumNova]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/nova.json",
  [NetworkNames.Forma]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/forma.json",
  [NetworkNames.Godwoken]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/godwoken.json",
  [NetworkNames.ImmutableZkevm]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/imx.json",
  [NetworkNames.ZChains]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/zchains.json",
  [NetworkNames.MantaPacific]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/manta.json",
  [NetworkNames.Mode]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/mode.json",
  [NetworkNames.OpBNB]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/opBNB.json",
  [NetworkNames.Palm]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/palm.json",
  [NetworkNames.ProofOfPlayApex]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/popApex.json",
  [NetworkNames.Scroll]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/scroll.json",
  [NetworkNames.Rari]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/rari.json",
  [NetworkNames.Solana]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/sol.json",
  [NetworkNames.Linea]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/linea.json",
  [NetworkNames.XLayer]:
    "https://raw.githubusercontent.com/enkryptcom/dynamic-data/main/dapps/xlayer.json",
};

export default lists;
