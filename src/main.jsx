import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './Context.jsx'
import App from './App.jsx'

import './app.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
)
