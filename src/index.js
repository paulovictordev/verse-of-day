import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { LoadingContextProvider } from './contexts/LoadingContext'
import { RandomVersesContextProvider } from './contexts/RandomVersesContext'

import HomePage from './components/HomePage'

function App() {
  return (
    <div className="App">
      <RandomVersesContextProvider>
        <LoadingContextProvider>
          <HomePage />
        </LoadingContextProvider>
      </RandomVersesContextProvider>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);