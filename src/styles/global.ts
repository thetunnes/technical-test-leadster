import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './theme/default'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${defaultTheme.colors.blue[500]};
  }

  html, body {
    width: 100%;
    background: ${defaultTheme.colors.white};
    color: ${defaultTheme.colors.blue[800]};
    min-height: 100vh;
    position: relative;
  }

  body, input, textarea, button {
    font-family: 'JakartaRegular', sans-serif;
    font-weight: 400;
    color: ${defaultTheme.colors.blue[800]};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'JakartaBold', sans-serif;
    font-weight: 700;
  }

  @media screen and (max-width: 1120px) {
    html {
      font-size: 93.75% !important;
    }
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 87.5% !important;
    }
  }
`
