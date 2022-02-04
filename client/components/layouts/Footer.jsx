import Link from 'next/link'
import { useRouter } from 'next/router'
// [styles]
import { Container } from '@styles/Container'
import {
	FooterCopyright,
	Logo,
	Menu,
	Nav,
	NavItem,
	Footer as Wrapper
} from '@styles/Footer'

const Footer = ({ user }) => {
	const router = useRouter()

	const isActive = route => {
		return router.pathname === route
	}

	return (
		<Container>
			<Wrapper>
				<Menu>
					<Link href='/'>
						<a>
							<Logo>ReactReserve</Logo>
						</a>
					</Link>
					<Nav>
						<Link href='/product'>
							<a>
								<NavItem active={isActive('/product')}>
									Products
								</NavItem>
							</a>
						</Link>
						{false ? (
							<>
								<Link href='/cart'>
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
								</Link>

								{/* <Logout /> */}
							</>
						) : (
							<>Non Member</>
						)}
					</Nav>
					<FooterCopyright>
						&copy; {new Date().getFullYear()} / All rights reserved.
					</FooterCopyright>
				</Menu>
			</Wrapper>
		</Container>
	)
}

export default Footer
