import React from 'react'

import { Footer, HeadSeo, Header } from '@components/layouts'
import { Container, Main, Wrapper } from '@styles/Container'

const name = '[Your Name]'
export const title = 'Next.js Sample Website'

interface User {
	name?: string
}

interface Props {
	user?: User
	children?: React.ReactChild | React.ReactChild[]
}

const Layout: React.FC<Props> = ({ children, user }) => {
	return (
		<Wrapper>
			<Header user={user} />
			<Main>
				<Container style={{ flex: 1 }}>{children}</Container>
			</Main>
			<Footer user={user} />
		</Wrapper>
	)
}

export default Layout
