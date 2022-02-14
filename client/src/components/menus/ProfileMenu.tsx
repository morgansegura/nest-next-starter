import React from 'react'
import { Link } from 'react-router-dom'

// [Styles]
import { Avatar, Badge, Menu, MenuSelector, Tab } from 'styles/ProfileMenu'

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
				<Link to='/profile'>My Profile</Link>
				<Link to='/account'>Account</Link>
				<Link to='/account'>
					Cart <Badge>3</Badge>
				</Link>
				<Link to='/account'>Logout</Link>
			</Menu>
		</div>
	)
}

export default ProfileMenu
