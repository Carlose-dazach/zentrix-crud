import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Negocio from './Negocio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Negocio />
  </StrictMode>
)
