import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const userInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const initilaVlaue = {
  theme: {
    type: userInDarkMode ? 1 : 2,
    userTheme: false,
    pointerPos: 0,
  },
  calculator: {
    firstValue: '0',
    operator: '',
    secondValue: '',
    result: '',
  },
  data: {
    name: 'state',
    storageType: localStorage,
  }
}


root.render(
  <React.StrictMode>
    <App text={''} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
