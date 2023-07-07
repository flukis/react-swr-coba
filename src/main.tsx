import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './config/routes'
import { RouterProvider } from 'react-router-dom'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} fallbackElement={<Fallback />} />
	</React.StrictMode>
)

export function Fallback() {
	return <p>Performing initial data load</p>
}
