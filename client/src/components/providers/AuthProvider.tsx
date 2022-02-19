import React from 'react'
import { useNavigate } from 'react-router-dom'

// [Components]
import { Authentication, isAuth } from 'auth'

type Props = {}

const AuthProvider: React.FC<Props> = ({ children }) => {
	const navigate = useNavigate()
	React.useEffect(() => {
		if (isAuth()) {
			navigate('/')
		}
	}, [])
	return (
		<>
			{isAuth() ? (
				children
			) : (
				<>
					<Authentication />
				</>
			)}
		</>
	)
}

export default AuthProvider
