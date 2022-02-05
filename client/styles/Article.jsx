import styled from 'styled-components'
import * as include from '@styles/config/utilities'
import { rgba } from 'polished'

export const Article = styled.article`
	${include.fontSizing('18px', '36px')}

	ul, ol {
		margin-bottom: ${include.sp[3]};
		margin-left: ${include.sp[8]};

		&:first-of-type {
			margin-top: ${include.sp[3]};
		}
	}
`
