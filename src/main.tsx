import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/layout/WeatherLayout.tsx'

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
