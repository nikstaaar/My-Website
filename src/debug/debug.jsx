import React from 'react'
import ReactDOM from 'react-dom/client'
import DebugApp from '/components/DebugApp.jsx'
import '/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<DebugApp />
	</React.StrictMode>
)