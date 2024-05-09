import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  button {
    border: 0;
    outline: 0;
    background-color: transparent;
  }
  p {
    margin: 0;
  }
`;

export const theme = {
  colors: {
    primary: '#d73a32',
    secondary: '#fed7d7',
    gray: '#a1a1a1',
    lightGray: '#d9d9d9',
    black: '#000000',
    white: '#ffffff',
    borderGray: '#bebebe',
  },
  fonts: {
    heading1: {
      fontSize: '48px',
      fontWeight: 'bold',
    },
    heading2: {
      fontSize: '28px',
      fontWeight: 'bold',
    },
    heading3: {
      fontSize: '48px',
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: '16px',
      fontWeight: 'normal',
    },
  },
};

export type Theme = typeof theme;
