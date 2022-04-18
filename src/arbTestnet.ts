import { AddressCollection, ZERO_ADDRESS } from './types'

const addresses: AddressCollection = {
  protocol: {
    XAV: ZERO_ADDRESS,
    veXAV: ZERO_ADDRESS,
    RNBW: '0xfbBf11Ae3E8A4b6D9C866B3f16741D1641ccc4d5',
    xRNBW: '0xAe0429F26ed25c8Ad22D2582315Cc99aa5de8fF6'
  },
  rewards: {
    ammRewards: '0xAfeC667A5a02C1EFC27Dd617Ce1dF47C9E8f0F1e'
  },
  amm: {
    vault: ZERO_ADDRESS,
    pools: {
      genesis: [],
      enabled: [],
      disabled: []
    },
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    oracles: {}
  },
  tokens: {}
}

export default addresses
