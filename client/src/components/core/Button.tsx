import React from 'react'
import { Button as ButtonType } from 'styles/Button'

type Props = {
	children?: React.ReactChild | React.ReactChild[]
	as?: any
	size?: string
	theme?: string
	onClick?: any
}

const Button: React.FC<Props> = ({
	children,
	as = 'button',
	size,
	theme,
	onClick
}) => {
	return (
		<ButtonType as={as} size={size} theme={theme} onClick={onClick}>
			{children}
		</ButtonType>
	)
}

export default Button
