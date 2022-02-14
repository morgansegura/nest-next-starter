import styled from 'styled-components'
import * as include from 'styles/config/utilities'

interface NavItemProps {
	active?: boolean
}

export const Header = styled.div`
	background-color: ${include.colors.white};
	margin-top: ${include.sp['1.5']};
	margin-bottom: ${include.sp['2.5']};
	${include.radius['md']};
	padding: ${include.sp['3']} ${include.sp['4']};

	${include.media['lg']`
		padding-right: ${include.sp['4']};
		padding-left: ${include.sp['4']};
	`}

	${include.media['xl']`
		padding-right: ${include.sp['6']};
		padding-left: ${include.sp['6']};
	`}

	${include.media['xxl']`
		padding-right: ${include.sp['8']};
		padding-left: ${include.sp['8']};
	`}

	a {
		text-decoration: none;
		ilin-height: 0;
	}
`
export const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const Logo = styled.div`
	${include.fontSizing('14px', '28px', 600)}

	text-transform: uppercase;
	color: ${include.colors.slate900};
`
export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-self: flex-end;
	grid-gap: ${include.sp['1.5']};
`
export const NavItem = styled.span`
	${include.tag['bold']};
	color: ${include.colors.slate700};

	${(props: NavItemProps) =>
		props.active &&
		`
        color: ${include.colors.blue600};
    `};
`
