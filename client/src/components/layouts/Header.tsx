import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// [Components]
import { Button } from 'components/core'
import { ProfileMenu } from 'components/menus'
// [Metadata]
import { siteMetadata } from 'data'
// [Storage]
// import useStorage from 'hooks/useStorage'
// [Styles]
import { Logo, Menu, Nav, NavItem, Header as Wrapper } from 'styles/Header'
import { Container } from 'styles/Container'

type User = {
	name?: string
}
type Props = {
	user?: User
}

const Header: React.FC<Props> = ({ user }) => {
	const navigate = useNavigate()

	function isActive(route: string) {
		return window.location.pathname === route
	}

	React.useEffect(() => {}, [])

	return (
		<Container>
			<Wrapper>
				<Menu>
					<Link to='/'>
						<Logo>{siteMetadata.companyName}</Logo>
					</Link>
					<>
						{!user ? (
							<Nav>
								<Link to='/'>
									<NavItem active={isActive('/home')}>
										Home
									</NavItem>
								</Link>
								<ProfileMenu />
							</Nav>
						) : (
							<Nav>
								{!isActive('/') && (
									<Button
										size='xs'
										theme='primary'
										onClick={() => navigate('/')}>
										Get Started
									</Button>
								)}
							</Nav>
						)}
					</>
				</Menu>
			</Wrapper>
		</Container>
	)
}

export default Header
