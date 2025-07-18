// Importing StrictMode from React library
import { StrictMode } from 'react'
// StrictMode is a tool for highlighting potential problems in an application.
// It helps during development to identify unsafe lifecycles, legacy APIs, and more.
// It doesn’t affect the production build — it’s purely a development aid.

// Importing createRoot from react-dom/client
import { createRoot } from 'react-dom/client'
// createRoot is the new API introduced in React 18 for creating a root render node.
// It replaces the older ReactDOM.render method and supports concurrent rendering features.

// Importing global styles
import './index.css'
// This line brings in your TailwindCSS and other custom styles that apply to the entire application.

// Importing the main App component
import App from './App.jsx'
// This is the root component of your application. All other components live inside this.

// Creating the root of the React app and rendering it into the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Let's break this part down:
// 1. document.getElementById('root') selects the HTML element with the id "root".
//    This is usually found in the index.html file of your Vite project.
// 2. createRoot(...) creates a React root attached to that DOM element.
// 3. .render(...) tells React what to render inside that root — in this case, <App />.
// 4. The <App /> component is wrapped in <StrictMode> to enable the development checks mentioned earlier.