import React from 'react'
import ReactDOM from 'react-dom/client'
import NotasApp from "./NotasApp.jsx";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./auth/context/AuthProvider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <AuthProvider>
          <NotasApp></NotasApp>
          </AuthProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
