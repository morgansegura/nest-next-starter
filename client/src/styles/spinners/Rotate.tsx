import styled from 'styled-components'
import { rotate } from 'styles/keyframes'

interface WrapperProps {
	sizeUnit?: string
	size?: string
}

interface BallProps {
	ballSize?: string
	sizeUnit?: string
	color?: string
	index: number
}

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props: WrapperProps) => `${props.size}${props.sizeUnit}`};
	height: ${(props: WrapperProps) => `${props.size}${props.sizeUnit}`};
`

export const Ball = styled.div`
	position: absolute;
	left: 50%;
	top: 0%;
	width: ${(props: BallProps) => `${props.ballSize}${props.sizeUnit}`};
	height: ${(props: BallProps) => `${props.ballSize}${props.sizeUnit}`};
	border-radius: 50%;
	background-color: ${(props: BallProps) => props.color};
	transform: translateX(-50%) translateY(100%);
	transform-origin: 0 250% 0;
	animation: ${rotate} 4s both infinite;
	animation-timing-function: cubic-bezier(
		0.5,
		${(props: BallProps) => props.index * 0.3},
		0.9,
		0.9
	);
`
