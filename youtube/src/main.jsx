import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './sidebar/Sidebar'
import Mainone from './mainone/Mainone'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="main">
    <Sidebar />
    <Mainone />
    </div>
  </StrictMode>,
)
