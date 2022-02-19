import React, { ReactEventHandler } from 'react'
import { TextField } from 'styles/Form'

type Props = {
	label: string
	register: any
	type: string
	required: boolean
	watch: any
	name: string
}

const TextInput: React.FC<Props> = ({
	label,
	register,
	type,
	required = false,
	watch,
	name,
	...rest
}) => {
	const [focus, setFocus] = React.useState(false)
	const [blur, setBlur] = React.useState(true)

	const onFocus = (e: ReactEventHandler) => {
		setFocus(true)
		setBlur(false)
	}

	const onBlur = (e: ReactEventHandler) => {
		if (watch(name).length > 0) {
			setFocus(true)
		} else {
			setFocus(false)
			setBlur(true)
		}
	}

	return (
		<>
			<TextField focus={focus} blur={blur}>
				<div>{label}</div>
				<input
					name={name}
					onFocus={onFocus}
					onBlur={onBlur}
					type={type}
					{...register(name, { required })}
					{...rest}
				/>
			</TextField>
		</>
	)
}

export default TextInput
