import './index.css'

import { createRoot } from 'react-dom/client'
import { App } from './App'
import { FiltersProvider } from './context/filters'

createRoot(document.getElementById('app')).render(

  <FiltersProvider>
    <App />
  </FiltersProvider>

)
