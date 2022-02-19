import React from 'react'
import { Link } from 'react-router-dom'
// [Auth]
import { logout } from 'auth'
// [Styles]
import {
	Avatar,
	Badge,
	Menu,
	MenuSelector,
	Tab,
	NavItem
} from 'styles/ProfileMenu'

type Props = {}

const ProfileMenu: React.FC<Props> = () => {
	const [showMenu, setShowMenu] = React.useState(false)
	const [focus, setFocus] = React.useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
		setFocus(!focus)
	}

	return (
		<div>
			<MenuSelector onClick={toggleMenu}>
				<Avatar focus={focus}>UN</Avatar>
			</MenuSelector>
			<Menu isVisible={showMenu}>
				<Tab>Username </Tab>

				<Link to='/profile'>
					<NavItem>My Profile</NavItem>
				</Link>

				<Link to='/account'>
					<NavItem>Account</NavItem>
				</Link>

				<Link to='/cart'>
					<NavItem>
						Cart
						<Badge>3</Badge>
					</NavItem>
				</Link>

				<Link onClick={() => logout()} to='/'>
					<NavItem>Logout</NavItem>
				</Link>
			</Menu>
		</div>
	)
}

export default ProfileMenu
