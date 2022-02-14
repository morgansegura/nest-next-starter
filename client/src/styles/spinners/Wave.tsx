import styled from 'styled-components'
import { motion } from 'styles/keyframes'

interface WrapperProps {
	sizeUnit: string
	size: number
}

interface BarProps {
	sizeUnit: string
	x: number
	y: number
	size: number
	color?: string
	index: number
}

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props: WrapperProps) => `${props.size * 2.5}${props.sizeUnit}`};
	height: ${(props: WrapperProps) => `${props.size}${props.sizeUnit}`};
	overflow: hidden;
`

export const Bar = styled.div`
	position: absolute;
	top: ${(props: BarProps) =>
		`${props.y + props.size / 10}${props.sizeUnit}`};
	left: ${(props: BarProps) => `${props.x}${props.sizeUnit}`};
	width: ${(props: BarProps) => `${props.size / 5}${props.sizeUnit}`};
	height: ${(props: BarProps) => `${props.size / 10}${props.sizeUnit}`};
	margin-top: ${(props: BarProps) =>
		`${props.size - props.size / 10}${props.sizeUnit}`};
	transform: skewY(0deg);
	background-color: ${(props: BarProps) => props.color};
	animation: ${motion} 1.25s ease-in-out infinite;
	animation-delay: ${(props: BarProps) => props.index * 0.15}s;
`
