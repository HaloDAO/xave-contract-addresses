import { AddressCollection, ZERO_ADDRESS } from './types'

const addresses: AddressCollection = {
  protocol: {
    XAV: ZERO_ADDRESS,
    veXAV: ZERO_ADDRESS,
    RNBW: '0xA4b7999A1456A481FB0F2fa7E431b9B641A00770',
    xRNBW: '0x323C11843DEaEa9f13126FE33B86f6C5086DE138'
  },
  rewards: {
    ammRewards: '0x254e3D5F964E770F3a51a19d809bcE36308d797d'
  },
  amm: {
    vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
    pools: {
      genesis: [],
      enabled: [],
      disabled: []
    },
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: ZERO_ADDRESS,
    oracles: {
      USDC: '0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3',
      fxPHP: '0xfF82AAF635645fD0bcc7b619C3F28004cDb58574',
      XSGD: '0xF0d38324d1F86a176aC727A4b0c43c9F9d9c5EB1',
      EURS: '0xA14d53bC1F1c0F31B4aA3BD109344E5009051a84'
    }
  },
  tokens: {}
}

export default addresses
