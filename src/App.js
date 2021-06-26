import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Assets/Style/design_system.css';
import { UserContext } from './Context/UserContext';
import Routes from './routes';
import './App.css';

const App = () => {

  const [theme, setTheme] = React.useState({
    palette: {
      primary: {
        main: "#282a36", // main blue
        mainLight: '#ff79c6'
      },
      secondary: {
        main: '#6272a4',
      },
    },
    typography: {
      fontFamil: 'Objektiv'
    }
  });

  const muiTheme = createMuiTheme(theme);

  return (
    <div id="app">
      <MuiThemeProvider theme={muiTheme}>
        <Router>
          <UserContext>
            <Routes></Routes>
          </UserContext>
        </Router>
      </MuiThemeProvider>
    </div>
  );

};

export default App;
