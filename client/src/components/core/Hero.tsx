import React from 'react'
// [Components]
import { Image } from 'components/core'

// [Styles]
import { Container, Content } from 'styles/Container'
import {
	HeroContainer,
	HeroContainerGrid,
	HeroContent,
	HeroTitle,
	HeroSuperTitle,
	HeroDescription,
	HeroImageContainer,
	HeroImage,
	HeroButton,
	HeroButtonContainer
} from 'styles/Hero'

type Props = {
	imageSrc?: string
	imageAlt?: string
	color?: string
	title?: string
	supertitle?: string
	description?: string
	buttonLabel?: string
	onClick?: any
}

const Hero: React.FC<Props> = ({
	color,
	imageSrc,
	imageAlt,
	title,
	supertitle,
	description,
	buttonLabel,
	onClick
}) => {
	return (
		<HeroContainer color={color}>
			<Container>
				<Content>
					<HeroContainerGrid>
						<HeroContent>
							{supertitle && (
								<HeroSuperTitle>{supertitle}</HeroSuperTitle>
							)}
							{title && <HeroTitle>{title}</HeroTitle>}
							{description && (
								<HeroDescription>{description}</HeroDescription>
							)}
							{buttonLabel && (
								<HeroButtonContainer>
									<HeroButton onClick={onClick}>
										{buttonLabel}
									</HeroButton>
								</HeroButtonContainer>
							)}
						</HeroContent>
						{imageSrc && (
							<HeroImageContainer>
								<HeroImage>
									<Image src={imageSrc} alt={imageAlt} />
								</HeroImage>
							</HeroImageContainer>
						)}
					</HeroContainerGrid>
				</Content>
			</Container>
		</HeroContainer>
	)
}

export default Hero
