import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router';
import { AuthProvider } from './contexts/UserContext/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { RecheioProvider } from './contexts/RecheioContext/RecheioProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RecheioProvider>
        <Toaster position='bottom-right' />
        <RouterProvider router={router} />
      </RecheioProvider>
    </AuthProvider>
  </React.StrictMode>,
)
