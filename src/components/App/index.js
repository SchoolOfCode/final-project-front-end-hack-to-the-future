
import React from 'react'
import Header from '../Header/index'
import Main from '../Main/index'
import "./App.css";
import theme from '../../theme'
import { ThemeProvider } from '@mui/material/styles'

function App() {
  return (
    <React.StrictMode>
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header  />
      <Main />
    </ThemeProvider>
    </div>
    </React.StrictMode>
  );
}

export default App;
