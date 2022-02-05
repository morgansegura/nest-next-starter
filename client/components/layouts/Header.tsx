import React from 'react'
import Link from 'next/link'
import nProgress from 'nprogress'
import { Router, useRouter } from 'next/router'
// [Components]
import { Button } from '@components/core'
import { ProfileMenu } from '@components/menus'
// [Metadata]
import { siteMetadata } from 'data'
// [Storage]
import useStorage from '@hooks/useStorage'
// [Styles]
import { Logo, Menu, Nav, Header as Wrapper } from '@styles/Header'
import { Container } from '@styles/Container'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

interface User {
	name?: string
}
interface Props {
	user?: User
}

const Header: React.FC<Props> = ({ user }) => {
	const router = useRouter()

	function isActive(route: string) {
		return router.pathname === route
	}

	React.useEffect(() => {}, [])

	return (
		<Container>
			<Wrapper>
				<Menu>
					<Link href='/'>
						<a>
							<Logo>{siteMetadata.companyName}</Logo>
						</a>
					</Link>
					<>
						{!user ? (
							<Nav>
								{/* <Link href='/cart'>
									<a>
										<NavItem active={isActive('/cart')}>
											Cart
										</NavItem>
									</a>
								</Link>
								{isRootOrAdmin && (
									<Link href='/create'>
										<a>
											<NavItem
												active={isActive('/create')}>
												Create
											</NavItem>
										</a>
									</Link>
								)}
								<Link href='/account'>
									<a>
										<NavItem active={isActive('/account')}>
											Account
										</NavItem>
									</a>
								</Link> */}

								<ProfileMenu />
							</Nav>
						) : (
							<Nav>
								{!isActive('/') && (
									<Button
										size='xs'
										theme='primary'
										onClick={() => router.push('/')}>
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
