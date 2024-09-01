import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import store from "./store.js"
import { Provider } from 'react-redux'
import { ContextApi } from './components/ContextApi.jsx';

createRoot(document.getElementById('root')).render(
    <ContextApi>
  <StrictMode>
    <Provider store={store}>
    <App /> 

    </Provider>

  </StrictMode>
    </ContextApi>,
)
