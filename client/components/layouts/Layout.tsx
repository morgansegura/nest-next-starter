import React from 'react'

import { Footer, HeadSeo, Header } from '@components/layouts'
import { Container, Main, Wrapper } from '@styles/Container'

const name = '[Your Name]'
export const title = 'Next.js Sample Website'

interface User {
	name?: string
}

interface Props {
	title?: string
	description?: string
	canonicalUrl?: string
	ogTwitterImage?: string
	ogType?: string
	user?: User
	children?: React.ReactChild | React.ReactChild[]
}

const Layout: React.FC<Props> = ({ children, user, title, description }) => {
	return (
		<>
			<HeadSeo
				title={`${title} - ${process.env.SITE_TITLE}`}
				description={description}>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap'
				/>
				<link rel='stylesheet' type='text/css' href='/nprogress.css' />
				<link rel='stylesheet' type='text/css' href='/styles.css' />
			</HeadSeo>
			<Wrapper>
				<Header user={user} />
				<Main>
					<Container style={{ flex: 1 }}>{children}</Container>
				</Main>
				<Footer user={user} />
			</Wrapper>
		</>
	)
}

export default Layout
