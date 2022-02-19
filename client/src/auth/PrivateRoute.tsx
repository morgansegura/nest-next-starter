import React from 'react'
import { Navigate } from 'react-router-dom'

// [Context]
import { isAuth } from 'auth'

type Props = {
	component: any
}

const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
	const { authTokens } = isAuth()

	return authTokens ? <Component /> : <Navigate to='/' />
}

export default PrivateRoute
