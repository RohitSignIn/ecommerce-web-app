import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './pages/Authentication/Auth.jsx'
import Signup from './pages/Authentication/Signup.jsx'
import { CookiesProvider } from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider defaultSetCookies={{ 
        id: null,
        username: null,
        email: null,
        auth: null,
      }}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
)
