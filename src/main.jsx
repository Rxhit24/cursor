import { RouterProvider } from "react-router-dom"
import appRouter from './router.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider  router={appRouter}/>)

