import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/APP/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './Utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
