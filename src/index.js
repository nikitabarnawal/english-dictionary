import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const hideDropdown = (e) => {
  if (
    e.target.className.includes('dropDown') ||
    e.target.parentElement.className.includes('dropDown')
  )
    return
  document.getElementsByClassName('dropdown-content')[0].style.display = 'none'
}

document.getElementById('root').addEventListener('click', hideDropdown)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
