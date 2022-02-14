import React from 'react'
// [Providers]
import { ThemesProvider } from 'components/providers'
// [Styles]
import { GlobalStyle } from 'styles/config/globalStyles'

type Props = {
	children?: any
}

const AppProvider: React.FC<Props> = ({ children }) => {
	return (
		<ThemesProvider>
			<GlobalStyle />
			{children}
		</ThemesProvider>
	)
}

export default AppProvider
