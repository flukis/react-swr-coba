import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main/page'
import MainLayout from '../pages/main/layout'
import Layout from './layout'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				path: '',
				Component: MainLayout,
				children: [
					{
						index: true,
						Component: MainPage,
					},
				],
			},
		],
	},
])
