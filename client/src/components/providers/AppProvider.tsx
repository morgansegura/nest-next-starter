import React from 'react'
// [Providers]
import { AuthProvider, ThemesProvider } from 'components/providers'

type Props = {
	children?: any
}

const AppProvider: React.FC<Props> = ({ children }) => {
	return (
		<ThemesProvider>
			<AuthProvider>{children}</AuthProvider>
		</ThemesProvider>
	)
}

export default AppProvider
