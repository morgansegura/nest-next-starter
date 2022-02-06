import Link from 'next/link'
// [Components]
import { Layout, HeadSeo } from '@components/layouts'
// [Utils]
import { siteMetadata } from 'data'

interface Props {
	allPostsData?: any
}

const Home: React.FC<Props> = ({ allPostsData }) => {
	return (
		<Layout>
			<HeadSeo
				title={`Your Awesome Title Here`}
				description={`Your description goes here on every page.
                  Keep character count between 140 to 160 characters`}
				canonicalUrl={siteMetadata.siteUrl}
				ogTwitterImage={siteMetadata?.siteLogoSquare}
				ogType={'website'}
			/>
			<section>
				<h2>Home</h2>
				<p>Home page is nice!</p>
			</section>
		</Layout>
	)
}

export default Home
