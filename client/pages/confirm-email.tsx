import Link from 'next/link'
// [Components]
import { getSortedPostsData } from '@lib/posts'
import GoogleButton from '@components/auth/GoogleButton'
import { Layout, HeadSeo } from '@components/layouts'
// [Utils]
import { siteMetadata } from 'data'

// interface SiteMetadata {
// 	siteUrl: string
// 	siteLogoSquare: string
// }
interface Props {
	// siteMetadata: SiteMetadata
}

const ConfirmEmail: React.FC<Props> = () => {
	return (
		<Layout>
			<HeadSeo
				title={`Your Awesome Title Here`}
				description={`Your description goes here on every page.
                  Keep character count between 140 to 160 characters`}
				canonicalUrl={siteMetadata.siteUrl}
			/>
			<section>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like
					this in{' '}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>
					.)
				</p>
			</section>
			<section>
				<h2>To Confirm your email</h2>
				<GoogleButton />
			</section>
		</Layout>
	)
}

// export async function getStaticProps() {
// 	const allPostsData = getSortedPostsData()
// 	return {
// 		props: {
// 			allPostsData
// 		}
// 	}
// }

export default ConfirmEmail
