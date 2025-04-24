import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './router/app.routes'

import "../styles/input.scss";
import "../styles/text.css";
import "../styles/container.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
