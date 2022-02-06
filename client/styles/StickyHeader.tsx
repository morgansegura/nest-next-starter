import styled, { css } from 'styled-components'
import * as include from '@styles/config/utilities'

export const Sticky = styled.div`
	${props =>
		props.sticky &&
		css`
			margin-top: 80px;
		`}
`
export const StickyInner = styled.div`
	transition: all 250ms ease-in-out;

	/* ${props => {
		if (props.sticky) {
			return css`
				& > div:nth-child(1) {
					${include.shadow.lg}
				}
			`
		}
	}} */

	${props =>
		props.sticky &&
		css`
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 1;
			opacity: 1;
		`}
	${props =>
		props.animate &&
		css`
			opacity: 0.5;
		`}
`
