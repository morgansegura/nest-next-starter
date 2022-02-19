import React from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { config } from 'lib'

//[Providers]
import { AppProvider } from 'components/providers'
// [Auth]
import { PrivateRoute } from 'auth'
// [Components]
import { App, Profile } from 'pages'

axios.defaults.baseURL = `${config.apiPath}/`
axios.create({ withCredentials: true })

type Props = {
	children?: React.ReactChild | React.ReactChild[]
}

const AppRouter: React.FC<Props> = ({ children }) => {
	return (
		<BrowserRouter>
			<AppProvider>
				<Routes>
					<Route path='/' element={<App />} />
					<Route
						path='/profile'
						element={<PrivateRoute component={Profile} />}
					/>
				</Routes>
				{children}
			</AppProvider>
		</BrowserRouter>
	)
}

export default AppRouter
