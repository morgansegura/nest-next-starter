import React from 'react'
import { off, on } from 'lib/utils'

const useScrollingUp = () => {
	const isBrowser = () => typeof window !== 'undefined'

	const [prevScroll, setPrevScroll] = React.useState(0)

	if (isBrowser()) {
		setPrevScroll(window.pageYOffset)
	}

	const [scrollingUp, setScrollingUp] = React.useState(false)

	const handleScroll = React.useCallback(() => {
		const currScroll = window.pageYOffset
		const isScrolled = prevScroll > currScroll
		setScrollingUp(isScrolled)
		setPrevScroll(currScroll)
	}, [prevScroll])

	React.useEffect(() => {
		on(window, 'scroll', handleScroll, { passive: true })

		return () => {
			off(window, 'scroll', handleScroll, { passive: true })
		}
	}, [handleScroll])

	return { scrolled: scrollingUp, scrollPos: prevScroll }
}

export default useScrollingUp
