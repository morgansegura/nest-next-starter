import React from 'react'
// [Styles]
import { StickyContainer, StickyInner } from 'styles/Sticky'

interface StickyProps {
	children?: React.ReactChild | React.ReactChild[]
	top: number
	height: number
}

const Sticky: React.FC<StickyProps> = ({ children, top, height }) => {
	const [sticky, setSticky] = React.useState(false)
	const [animate, setAnimate] = React.useState(false)
	const [scrollDir, setScrollDir] = React.useState('down')
	const ref = React.useRef<HTMLInputElement>(null)

	React.useEffect(() => {
		const threshold = top
		let lastScrollY = window.pageYOffset
		let ticking = false

		const updateScrollDir = () => {
			const scrollY = window.pageYOffset

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				ticking = false
				return
			}
			setScrollDir(scrollY > lastScrollY ? 'down' : 'up')
			lastScrollY = scrollY > 0 ? scrollY : 0

			if (scrollY <= 0) {
				setSticky(false)
				setAnimate(false)
			}

			ticking = false
		}

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir)
				ticking = true
			}
			if (scrollDir === 'up') {
				setSticky(true)
				setAnimate(false)
			} else {
				setSticky(false)
				setAnimate(true)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [scrollDir])

	return (
		<StickyContainer sticky={sticky} height={height} ref={ref}>
			<StickyInner sticky={sticky} animate={animate}>
				{children}
			</StickyInner>
		</StickyContainer>
	)
}

export default Sticky
