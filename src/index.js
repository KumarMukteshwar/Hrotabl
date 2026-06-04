// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// src/index.js

import React from 'react';

import ReactDOM from 'react-dom/client';

import { HeroUIProvider } from '@heroui/react';

import App from './App';
import AppTwo from './AppTwo';
import AppThree from './AppNoheck';
import AppFour from './AppFour';
import HeroTable from  './heroTable';

import './index.css';
import NewTable from './NewTable';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <HeroUIProvider>
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-content1 rounded-xl shadow-lg border border-divider p-8 space-y-8">
          {/* <App /> */}
          <div className="border-t border-divider pt-8">
            {/* <AppTwo />
            <HeroTable /> */}
            <NewTable />
        <AppThree />
          </div>
        </div>

 {/* <div className="bg-content1 rounded-xl shadow-lg border border-divider p-8 space-y-8">
          <div className="border-t border-divider pt-8">
            <AppFour />
          </div>
        </div> */}

      </div>
    </div>
  </HeroUIProvider>

);