import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';

const App = () => {
    state = {
        theme: 'light',
        toggleTheme: () => {
          this.setState(({ theme }) => ({
            theme: theme === 'light' ? 'dark' : 'light'
          }))
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)