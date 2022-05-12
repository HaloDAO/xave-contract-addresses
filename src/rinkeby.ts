import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  WETH: '0x8Ac6F66307d1bcFBb4a7b7d4EB86b36b644192Ca',
  WBTC: '0xf5b0b3b50328B2595BC6a31A526A8A3568CEa42d',
  USDC: '0x9875C5C44C10e24AEa48C422f819c5c8f933701D',
  fxPHP: '0x2BFD80c4E72164F62515850cec591D06AB857c65',
  XSGD: '0x9347839e0257516565C9Dfa03B5756f3401FA237',
  EURS: '0x8e6d2797DFB73A31d696D7C124C2edDD9932d3e4'
}

const addresses: AddressCollection = {
  protocol: {
    XAV: ZERO_ADDRESS,
    veXAV: ZERO_ADDRESS,
    RNBW: '0x357bdb97FB9555bede5ed5201dBD15a8f3f6B7B8',
    xRNBW: '0xC1cFbAdE2df5fe70C18273F926553D9d2c8f944C'
  },
  rewards: {
    ammRewards: '0xf3585984B956f2A26694ee1BAede7eAB658A5e7E'
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
    swapLibrary: ZERO_ADDRESS,
    oracles: {}
  },
  tokens
}

export default addresses
