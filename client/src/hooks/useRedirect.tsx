import React from 'react'
import { useNavigate } from 'react-router'

type Props = {
	path: string
}

const useRedirect: React.FC<Props> = path => {
	const navigate = useNavigate()

	return <>{navigate(`${path}`)}</>
}

export default useRedirect
