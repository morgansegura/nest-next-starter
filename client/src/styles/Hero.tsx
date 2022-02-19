import styled from 'styled-components'
import * as include from 'styles/config/utilities'
import { readableColor } from 'polished'

interface HeroProps {
	color?: string
}

export const HeroContainer = styled.article`
	overflow: hidden;
	padding-top: ${include.sp[10]};
	padding-right: ${include.sp[2]};
	padding-bottom: ${include.sp[10]};
	padding-left: ${include.sp[2]};
	margin-top: ${include.sp[4]};
	margin-bottom: ${include.sp[4]};
	${include.radius.lg};
	${include.shadow.lg};
	color: ${(props: HeroProps) =>
		props.color
			? readableColor(props.color)
			: readableColor(include.colors.violet900)};
	background-color: ${(props: HeroProps) =>
		props.color ? props.color : include.colors.violet900};

	${include.media.md`
		padding-top: ${include.sp[16]};
		padding-bottom: ${include.sp[16]};
		padding-right: 0;
		padding-left: 0;
	`}

	${include.media.lg`
		padding-top: ${include.sp[22]};
		padding-bottom: ${include.sp[22]};
	`}

	${include.media.xl`
		padding-top: ${include.sp[20]};
		padding-bottom: ${include.sp[20]};
	`};

	${include.media.xxl`
		padding-top: ${include.sp[30]};
		padding-bottom: ${include.sp[30]};
	`};
`

export const HeroContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(1fr, 12);
`

export const HeroContent = styled.div`
	grid-column: 1 / 13;

	${include.media.md`
		grid-column: 1 / 9;
	`}

	${include.media.lg`
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-column: 1 / 7;
		padding-right: ${include.sp[10]};
	`}

	${include.media.xl`
        grid-column: 1 / 6;
		padding-right: ${include.sp[20]};
        max-width: 640px;
	`};
`

export const HeroTitle = styled.h1`
	margin-top: 0;
	margin-bottom: 0;
`

export const HeroSuperTitle = styled.p`
	${include.fontSizing('16px', '24px', 600)};
	margin-bottom: ${include.sp[2]};

	${include.media.md`
		${include.fontSizing('18px', '28px', 600)};
	`}

	${include.media.lg`
		margin-bottom: ${include.sp[4]};
	`}

	${include.media.xxl`
		${include.fontSizing('20px', '30px', 600)};
	`}
`

export const HeroDescription = styled.p`
	margin-top: ${include.sp[4]};

	${include.media.lg`
		margin-top: ${include.sp[6]};
	`}
`

export const HeroImageContainer = styled.div`
	margin-top: ${include.sp[12]};
	grid-column: 1 / 13;
	display: flex;
	justify-content: center;
	align-items: center;

	${include.media.md`
        margin-top: ${include.sp[16]};
	`}

	${include.media.lg`
        margin-top: 0;
        grid-column: 7 / 13;
	`}

	${include.media.xl`
		grid-column: 7 / 13;
	`}
`

export const HeroImage = styled.div`
	${include.media.lg`
		max-width: 369px;
	`}

	${include.media.xl`
		max-width: 580px;
	`}

	${include.media.xxl`
		max-width: 816px;
	`}

	img {
		display: flex;
		overflow: hidden;
		${include.radius.md};
		${include.shadow.lg};
		width: 100%;
	}
`

export const HeroButtonContainer = styled.div`
	display: flex;
`

export const HeroButton = styled.div`
	font-weight: 600;
	cursor: pointer;
	display: inline-flex;
	${include.fontSizing('16px', '24px', 600)};
	color: ${(props: HeroProps) =>
		props.color ? props.color : include.colors.white};
	background-color: ${(props: HeroProps) =>
		props.color ? readableColor(props.color) : include.colors.violet900};
	margin-top: ${include.sp[6]};
	padding: ${include.sp[3]} ${include.sp[4]};
	${include.radius.sm};

	&:hover {
	}

	${include.media.md`
		padding: ${include.sp[5]} ${include.sp[8]};
	`}

	${include.media.lg`
		margin-top: ${include.sp[8]};
		padding: ${include.sp[4]} ${include.sp[6]};
	`}

	${include.media.xxl`
		margin-top: ${include.sp[10]};
		padding: ${include.sp[5]} ${include.sp[8]};
	`}
`
