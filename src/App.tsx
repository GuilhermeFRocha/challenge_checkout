import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import GlobalStyle from './styles/globalStyles';
import './styles/reset.css';
import Checkout from './pages/checkout';

const lightTheme = {
  body: '#ffffff',
  text: '#333333',
};

const darkTheme = {
  body: '#1e1e1e',
  text: '#ffffff',
};

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Checkout />
    </ThemeProvider>
  )
}

export default App
