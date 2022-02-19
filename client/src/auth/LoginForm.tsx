import React from 'react'

import { Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// [Auth]
import { login, setLocalStorage } from 'auth'
// [Components]
import { Button } from 'components/core'
import { TextInput } from 'components/inputs'
// [Styles]
import { AuthForm, FormTitle, ToggleForm } from 'styles/Form'
import { ButtonContainer } from 'styles/Button'

interface IProps {
	setToggleForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginForm: React.FC<IProps> = (props: IProps) => {
	const [isError, setIsError] = React.useState(false)
	const [isLoggedIn, setIsLoggedIn] = React.useState(false)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	const onSubmit = async () => {
		await login({
			email: watch('email'),
			password: watch('password')
		})
			.then(response => {
				if (response?.data?.name) {
					setLocalStorage('user', 'ApPleJaCkS&HappyLittleTrees')
					setIsLoggedIn(true)
				}
			})
			.catch(err => {
				console.log('Login Error', err)
			})
			.finally(() => {
				console.log('Login Finally', '...')
			})
	}

	const handleToggleForm = () => {
		props.setToggleForm(false)
	}

	if (isLoggedIn) {
		return <Navigate to='/' />
	}

	return (
		<div>
			<FormTitle>
				<h3>Sign into your account</h3>
			</FormTitle>
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
				<TextInput
					type='email'
					name='email'
					label='Email'
					register={register}
					required
					watch={watch}
				/>
				<TextInput
					type='password'
					name='password'
					label='Password'
					register={register}
					required
					watch={watch}
				/>
				<ButtonContainer>
					<Button theme='primary' radius='md' type='submit'>
						Sign In
					</Button>
				</ButtonContainer>
			</AuthForm>
			{isError && errors}

			<ToggleForm>
				<p>Need an account?</p>
				<Button
					theme='form'
					radius='base'
					size='xs'
					onClick={handleToggleForm}>
					Signup Here
				</Button>
			</ToggleForm>
		</div>
	)
}

export default LoginForm
