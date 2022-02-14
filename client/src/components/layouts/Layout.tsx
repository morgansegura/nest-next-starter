import React from 'react'

// [Components]
import { Footer, Header } from 'components/layouts'
import { Sticky } from 'components/core'
// [Styles]
import { Container, Main, Wrapper } from 'styles/Container'

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
			<Sticky top={0} height={80}>
				<Header user={user} />
			</Sticky>
			<Main>
				<Container style={{ flex: 1 }}>{children}</Container>
			</Main>
			<Footer user={user} />
		</Wrapper>
	)
}

export default Layout
