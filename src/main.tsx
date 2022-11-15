import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { GlobalStyle } from './theme/globalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
    <GlobalStyle />
  </React.StrictMode>,
)
