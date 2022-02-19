import React from 'react'
// [Components]
import { Layout } from 'components/layouts'
// [Auth]
import { LoginForm, SignupForm, isAuth } from 'auth'

type Props = {}

const Authentication: React.FC<Props> = () => {
	const [toggleForm, setToggleForm] = React.useState(true)

	return (
		<Layout>
			{toggleForm ? (
				<>
					<LoginForm setToggleForm={setToggleForm} />
				</>
			) : (
				<>
					<SignupForm setToggleForm={setToggleForm} />
				</>
			)}
		</Layout>
	)
}

export default Authentication
