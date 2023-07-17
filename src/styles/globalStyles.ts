import { createGlobalStyle } from 'styled-components';

interface ThemeProps {
  theme: {
    body: string;
    text: string;
  }
}

const GlobalStyle = createGlobalStyle<ThemeProps>`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }
`;

export default GlobalStyle;