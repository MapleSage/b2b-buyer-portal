declare interface CustomFieldItems {
  [key: string]: any
}

declare interface CustomFieldStringItems {
  [key: string]: string | number
}

declare interface Window {
  tipDispatch: import('./shared/global/context/config.ts').DispatchProps
  b3Tipmessage: any
  b2bStorefrontApp: any
  globalTipDispatch: any
  B3Local: any
  b2b: {
    utils: {
      openPage: (page: import('./constants').HeadlessRoute) => void
      quote: {
        addProductFromPage: () => Promise<void>
        addProductsFromCart: () => Promise<void>
        addProducts: (items: CustomFieldItems[]) => Promise<boolean>
      }
      user: {
        getProfile: () => Record<string, string | number>
        getMasqueradeState: () => Promise<{
          current_company_id: number
          companies: CustomFieldStringItems[]
        }>
        getB2BToken: () => string
        setMasqueradeCompany: (companyId: number) => Promise<void>
        endMasquerade: () => Promise<void>
        logInWithStorefrontToken: (
          customerJWTToken: string
        ) => Promise<{ role: number; userType: string } | undefined>
      }
    }
  }
}
