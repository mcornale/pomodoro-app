import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TimerContextProvider } from './store/TimerContext';

ReactDOM.render(
  <React.StrictMode>
    <TimerContextProvider>
      <App />
    </TimerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
