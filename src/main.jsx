import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './Components/Navbar/index.jsx'
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <React.StrictMode>
    <App />
    <Navbar/>
  </React.StrictMode>,
  </ChakraProvider>
)
