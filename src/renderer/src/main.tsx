import './assets/main.css'

import { HeroUIProvider } from '@heroui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeroUIProvider>
      <main className="dark text-foreground">
        <App />
      </main>
    </HeroUIProvider>
  </React.StrictMode>
)
