import React from 'react'
import Link from 'next/link'
import NProgress from 'nprogress'
import { Router, useRouter } from 'next/router'

// [Components]
import { Button } from '@components/core'
// [Storage]
import useStorage from '@hooks/useStorage'

// [Styles]
import { Logo, Menu, Nav, NavItem, Header as Wrapper } from '@styles/Header'
import { Container } from '@styles/Container'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Header = () => {
	const router = useRouter()

	function isActive(route) {
		return router.pathname === route
	}

	React.useEffect(() => {}, [])

	return (
		<Container>
			<Wrapper>
				<Menu>
					<Link href='/'>
						<a>
							<Logo>Youth Sports</Logo>
						</a>
					</Link>
					<>
						{false ? (
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

								{/* <Logout /> */}
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
