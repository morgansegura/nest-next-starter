import React from 'react'
import { Navigate } from 'react-router-dom'

// [Context]
import { useAuth } from 'context'

type Props = {
	component: any
}

const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
	const { authTokens } = useAuth()

	return authTokens ? <Component /> : <Navigate to='/' />
}

export default PrivateRoute
