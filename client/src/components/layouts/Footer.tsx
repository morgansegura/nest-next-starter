import { Link } from 'react-router-dom'
// [styles]
import { Container } from 'styles/Container'
import {
	FooterCopyright,
	Logo,
	Menu,
	Nav,
	NavItem,
	Footer as Wrapper
} from 'styles/Footer'

type Props = {
	user: any
}

const Footer: React.FC<Props> = () => {
	const isRootOrAdmin = false

	const isActive = (route: string) => {
		return window.location.pathname === route
	}

	return (
		<Container>
			<Wrapper>
				<Menu>
					<Link to='/'>
						<Logo>ReactReserve</Logo>
					</Link>
					<Nav>
						<Link to='/product'>
							<NavItem active={isActive('/product')}>
								Products
							</NavItem>
						</Link>
						{false ? (
							<>
								<Link to='/cart'>
									<NavItem active={isActive('/cart')}>
										Cart
									</NavItem>
								</Link>

								{isRootOrAdmin && (
									<Link to='/create'>
										<NavItem active={isActive('/create')}>
											Create
										</NavItem>
									</Link>
								)}
								<Link to='/account'>
									<NavItem active={isActive('/account')}>
										Account
									</NavItem>
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
