import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100% !important;
    overflow: hidden;
  }

  #root {
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  :root {
    --background: #e5e5e5;
    --black: #373435;
    --red-pink: #f60846;
    --soft-pink: #fce6ec;
    --soft-gray: #cecfd0;
  }

  @media(max-width: 1680px) {
    html {
    font-size: 93.75%;
    }
  }

  @media(max-width: 1440px) {
    html {
    font-size: 87.5%;
    }
  }

  @media(max-width: 1360px) {
    html {
      font-size: 81.25%;
    }
  }

  @media(max-width: 1280px) {
    html {
      font-size: 78.125%;
    }
  }

  @media(max-width: 1024px) {
    html {
      font-size: 75%;
    }
  }

  @media(max-width: 960px) {
    html {
      font-size: 68.75%;
      zoom: 80%;
    }
  }

  body {
    background: var(--background);
  }

  body, input, textarea, button {
    font: 400 16px "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
