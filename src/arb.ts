import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  USDC: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  EURS: '0xD22a58f79e9481D1a88e00c343885A588b34b68B',
  fxPHP: '0x3d147cD9aC957B2a5F968dE9d1c6B9d0872286a0',
  testUSDC: '0x9cFf4A10b6Fb163a4DF369AaFed9d95838222ca6', // Test mintable token
  testFxPHP: '0x03612728266b82EF5dB751fbf15ea7F1370502eE', // Test mintable token
  testXSGD: '0x6d934DcbA7F8e89713b4334147c03e76f30CE094', // Test mintable token
  testEURS: '0xe42827D98C053b6e9c97E39BE8b611102E8c1805' // Test mintable token
}

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
      enabled: [
        {
          assets: [tokens.testFxPHP, tokens.testUSDC],
          address: '0x540C3126DF05CfB001eaEEBB08D1659439d02a95',
          poolId:
            '0x540c3126df05cfb001eaeebb08d1659439d02a9500020000000000000000007d'
        },
        {
          assets: [tokens.testXSGD, tokens.testUSDC],
          address: '0x8e13Acc4780f78d13E92a30b72DF526bE76561eF',
          poolId:
            '0x8e13acc4780f78d13e92a30b72df526be76561ef00020000000000000000007e'
        }
      ],
      disabled: []
    },
    proportionalLiquidity: '0x3af74d19F50f24C75e4000Fe665d718387b1DA74',
    assimilatorFactory: '0xB474537769c335BC96cB86DeC70E6C7F36b39b1e',
    swapLibrary: '0xF82fd35163D1383e76ceD09c605DF5DB81439014',
    oracles: {
      USDC: '0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3',
      fxPHP: '0xfF82AAF635645fD0bcc7b619C3F28004cDb58574',
      XSGD: '0xF0d38324d1F86a176aC727A4b0c43c9F9d9c5EB1',
      EURS: '0xA14d53bC1F1c0F31B4aA3BD109344E5009051a84'
    }
  },
  tokens
}

export default addresses
