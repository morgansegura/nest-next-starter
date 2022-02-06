import { useEffect, useState } from 'react'
import { off, on } from '@lib/utils'

const useScrollingUp = () => {
	const isBrowser = () => typeof window !== 'undefined'
	let prevScroll: number
	if (isBrowser()) {
		prevScroll = window.pageYOffset
	}
	const [scrollingUp, setScrollingUp] = useState(false)
	const handleScroll = () => {
		const currScroll = window.pageYOffset
		const isScrolled = prevScroll > currScroll
		setScrollingUp(isScrolled)
		prevScroll = currScroll
	}
	useEffect(() => {
		on(window, 'scroll', handleScroll, { passive: true })
		return () => {
			off(window, 'scroll', handleScroll, { passive: true })
		}
	}, [])
	return { scrolled: scrollingUp, scrollPos: prevScroll }
}

export default useScrollingUp
