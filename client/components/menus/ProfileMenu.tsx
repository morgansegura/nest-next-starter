import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
// [Styles]
import { Avatar, Badge, Menu, MenuSelector, Tab } from '@styles/ProfileMenu'

interface Props {}

const ProfileMenu: React.FC<Props> = () => {
	const router = useRouter()

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
				{console.log(focus)}
			</MenuSelector>
			<Menu isVisible={showMenu} focus={focus}>
				<Tab>Username </Tab>
				<Link href='/profile'>
					<a>My Profile</a>
				</Link>
				<Link href='/account'>
					<a>Account</a>
				</Link>
				<Link href='/account'>
					<a>
						Cart <Badge>3</Badge>
					</a>
				</Link>
				<Link href='/account'>
					<a>Logout</a>
				</Link>
			</Menu>
		</div>
	)
}

export default ProfileMenu
