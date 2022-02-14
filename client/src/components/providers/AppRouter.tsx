import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// [Components]
import { App } from 'pages'

type Props = {
	children?: React.ReactChild | React.ReactChild[]
}

const AppRouter: React.FC<Props> = ({ children }) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
			</Routes>
			{children}
		</BrowserRouter>
	)
}

export default AppRouter
