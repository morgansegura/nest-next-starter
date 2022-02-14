//github.com/mbrevda/react-image
import React, { Suspense } from 'react'
import { Img } from 'react-image'

// [Styles]
import { ImageContainer } from 'styles/Image'

type Props = {
	src: string
	alt?: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
	return (
		<Suspense fallback={null}>
			<ImageContainer>
				<Img src={src} alt={alt} />
			</ImageContainer>
		</Suspense>
	)
}

export default Image
