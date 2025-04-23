import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './router/app.routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
