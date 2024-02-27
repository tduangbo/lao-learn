import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App_v';
import Navbar from './components/navbar';
import Lecture from './lecture';
import Header from './header';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store'
import { Provider } from 'react-redux'
import 'antd/dist/antd.min.css'
import { ContextProvider } from './Context';
import './styles.css';

import * as process from 'process';

window.global = window;
window.process = process;
window.Buffer = [];

// (window as any).global = window;
// (window as any).process = process;
// (window as any).Buffer = [];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <Provider store={store}>
       <Header></Header>
      <ContextProvider>
         <App />
      </ContextProvider>
    </Provider>,
 
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
