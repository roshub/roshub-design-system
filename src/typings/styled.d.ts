import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    color: {
      text: string
      primaryText: string
      secondaryText: string

      divider: string

      primary: string
      lightPrimary: string
      darkPrimary: string
      accentColor: string

      background: string

      disabled: string

      idle: string
      pending: string
      running: string
      success: string
      error: string
    }

    zIndex: {
      logo: number
      fab: number
      modal: number
    }

    fontSize: {
      header: number
    }

    content: {}

    font: {
      title: string
      subtitle: string
      text: string
      code: string
    }
  }
}
