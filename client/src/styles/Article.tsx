import styled from 'styled-components'
import * as include from 'styles/config/utilities'

export const Article = styled.article`
	${include.fontSizing('18px', '36px')};
	padding-top: ${include.sp['10']};
	padding-bottom: ${include.sp['10']};

	${include.media.md`
		padding-top: ${include.sp['12']};
		padding-bottom: ${include.sp['12']};
	`}

	${include.media.lg`
		padding-top: ${include.sp['16']};
		padding-bottom: ${include.sp['16']};
	`}

	${include.media.xl`
		padding-top: ${include.sp['20']};
		padding-bottom: ${include.sp['20']};
	`}

	ul,
	ol {
		margin-bottom: ${include.sp[3]};
		margin-left: ${include.sp[8]};

		&:first-of-type {
			margin-top: ${include.sp[3]};
		}
	}
`
