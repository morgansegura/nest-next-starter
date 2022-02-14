import { render, screen } from '@testing-library/react'
import { App } from 'pages'

test('renders learn react link', () => {
	render(<App />)
	const linkElement = screen.getByText(/App Shellt/i)
	expect(linkElement).toBeInTheDocument()
})
