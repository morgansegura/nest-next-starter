import React from 'react'

type TAuthContext = {
	authTokens?: string
	setAuthTokens: (any: any) => any
}

const defaultState = {
	authtokens: '',
	setAuthTokens: (data: any) => data
}

export const AuthContext = React.createContext<TAuthContext>(defaultState)

console.log(AuthContext)

export const useAuth = () => {
	return React.useContext(AuthContext)
}
