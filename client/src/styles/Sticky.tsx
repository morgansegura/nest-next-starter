import styled, { css } from 'styled-components'
// import * as include from 'styles/config/utilities'

interface StickyInnerProps {
	sticky?: boolean
	animate?: boolean
	height?: number
}

export const StickyContainer = styled.div`
	${(props: StickyInnerProps) =>
		props.sticky &&
		css`
			padding-top: ${props.height}px;
		`}
`
export const StickyInner = styled.div`
	transition: all 0.4s ease-out;

	${(props: StickyInnerProps) =>
		props.sticky &&
		css`
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1;
			opacity: 1;
		`}
	${(props: StickyInnerProps) =>
		props.animate
			? css`
					opacity: 0.5;
			  `
			: css`
					opacity: 1;
			  `}
`
