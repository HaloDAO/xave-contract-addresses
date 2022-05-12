type Pool = {
  address: string
  poolId: string
  assets: string[]
}

export type AddressCollection = {
  protocol: {
    XAV: string
    veXAV: string
    RNBW: string
    xRNBW: string
  }
  rewards: {
    ammRewards: string
    rewardsManager?: string
    epochManager?: string
  }
  amm: {
    vault: string
    pools: {
      genesis: Pool[]
      enabled: Pool[]
      disabled: Pool[]
    }
    proportionalLiquidity: string
    assimilatorFactory: string
    swapLibrary: string
    oracles: {
      USDC?: string
      fxPHP?: string
      XSGD?: string
      EURS?: string
    }
  }
  tokens: {
    AMPL?: string
    wETH?: string
    wBTC?: string
    USDC?: string
    EURS?: string
    XSGD?: string
    XIDR?: string
    TCAD?: string
    TAUD?: string
    TGBP?: string
    fxPHP?: string
    fxAUD?: string
    UST?: string
    CHF?: string
    fakeUSDC?: string
    fakeFxPHP?: string
  }
  lendingMarket?: {
    protocol: {
      lendingPoolAddressesProvider: string
      lendingPoolAddressesProviderRegistry: string
      reserveLogic: string
      genericLogic: string
      validationLogic: string
      lendingPoolImpl?: string
      lendingPool: string
      lendingPoolConfiguratorImpl: string
      lendingPoolConfigurator: string
      stableAndVariableTokensHelper: string
      aTokensAndRatesHelper: string
      aaveOracle: string
      lendingRateOracle: string
      aaveProtocolDataProvider: string
      stableDebtToken: string
      variableDebtToken: string
      aToken: string
      defaultReserveInterestRateStrategy: string
      wethGateway: string
      lendingPoolCollateralManager: string
      walletBalanceProvider: string
      rnbwIncentivesController: string
      treasury: string
      uiIncentiveDataProvider: string
      uiHaloPoolDataProvider: string
      mockAggregator?: string
      wethMocked?: string
      mockFlashLoanReceiver?: string
    }
    lpAssets: {
      HLP_XSGD_USDC?: string
      HLP_UST_USDC?: string
      HLP_CHF_USDC?: string
      HLP_GBP_USDC?: string
    }
    priceOracles: {
      AMPL?: string
      fxPHP?: string
      XSGD?: string
      UST?: string
      CHF?: string
      RNBW?: string
      xRNBW?: string
      HLP_PHP_USD?: string
      HLP_XSGD_USDC?: string
      HLP_UST_USDC?: string
      HLP_CHF_USDC?: string
      HLP_GBP_USDC?: string
    }
  }
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
