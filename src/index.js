//Import StrictMode from React
import { StrictMode } from 'react'

//Import the create route function that allows us to pass in a regular HTML element and create a root component
import { createRoot } from 'react-dom/client'

//Target the root dive inside index.html, so we can mount our react app to it
const root = document.getElementById('root')

//Import our main component, called App, which will contain our entire application
import App from './App'

//Mount the application together using the createRoot and render methods
//The HTML element from our index.html is passed into createRoot, and then we execute the render method
createRoot(root).render(
	<StrictMode> 
		<App />
	</StrictMode>
)