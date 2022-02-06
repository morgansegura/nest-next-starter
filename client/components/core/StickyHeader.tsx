import React from 'react'
// [Hooks]
import useScrollingUp from '@hooks/useScrollingUp'
// [Styles]
import { Sticky, StickyInner } from '@styles/StickyHeader'

interface Props {
	children?: React.ReactChild | React.ReactChild[]
}

const StickyHeader: React.FC<Props> = ({ children }) => {
	const scrollOptions = useScrollingUp()
	const { scrolled, scrollPos } = scrollOptions
	const ref = React.useRef()
	const [sticky, setSticky] = React.useState(false)
	const [animate, setAnimate] = React.useState(false)

	const handleScroll = () => {
		if (!scrolled) {
			setSticky(false)
			setAnimate(true)
		} else {
			setSticky(true)
			setAnimate(false)
		}
	}

	React.useEffect(() => {
		console.log({ scrollPos })
		handleScroll()
	}, [scrollPos])

	return (
		<Sticky sticky={sticky}>
			<StickyInner ref={ref} animate={animate} sticky={sticky}>
				{children}
			</StickyInner>
		</Sticky>
	)
}

export default StickyHeader
