import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
// [Components]
import { Button } from 'components/core'
import { TextInput } from 'components/inputs'
import { signup } from 'auth'

// [Styles]
import { AuthForm, FormTitle, ToggleForm } from 'styles/Form'
import { ButtonContainer } from 'styles/Button'

interface IProps {
	setToggleForm: React.Dispatch<React.SetStateAction<boolean>>
}

const SignupForm: React.FC<IProps> = (props: IProps) => {
	const [isError, setIsError] = React.useState(false)
	const [isLoggedIn, setIsLoggedIn] = React.useState(false)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	const onSubmit = async () => {
		await signup({
			name: watch('name'),
			email: watch('email'),
			password: watch('password'),
			phoneNumber: watch('phoneNumber')
		})
			.then(response => {
				console.log('Signup Successful', { response })
			})
			.catch(err => {
				console.log('Signup Error:', { err })
			})
			.finally(() => {
				console.log('It was good while it lasted')
			})
	}

	const handleToggleForm = () => {
		props.setToggleForm(true)
	}

	if (isLoggedIn) {
		return <Navigate to='/' />
	}

	return (
		<div>
			<FormTitle>
				<h3>Create an account</h3>
			</FormTitle>
			{errors && console.log({ errors })}
			<AuthForm onSubmit={handleSubmit(onSubmit)}>
				<TextInput
					type='text'
					name='name'
					label='Name'
					register={register}
					required
					watch={watch}
				/>
				<TextInput
					type='email'
					name='email'
					label='Email'
					register={register}
					required
					watch={watch}
				/>
				<TextInput
					type='tel'
					name='phoneNumber'
					label='Phone Number'
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
				{/* <TextInput
					type='password'
					name='passwordConfirm'
					label='Password Confirm'
					register={register}
					required
					watch={watch}
				/> */}
				<ButtonContainer>
					<Button theme='primary' radius='md' type='submit'>
						Sign Up
					</Button>
				</ButtonContainer>
			</AuthForm>

			<ToggleForm>
				<p>Already a member?</p>
				<Button
					theme='form'
					radius='base'
					size='xs'
					onClick={handleToggleForm}>
					Login Here
				</Button>
			</ToggleForm>
		</div>
	)
}

export default SignupForm
