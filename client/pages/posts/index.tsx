import Link from 'next/link'
// [Components]
import { getSortedPostsData } from '@lib/posts'
import { Layout, HeadSeo } from '@components/layouts'
// [Utils]
import { Date } from '@components/utils'
import { siteMetadata } from 'data'

interface Props {
	allPostsData?: any
}

const PostsPage: React.FC<Props> = ({ allPostsData }) => {
	return (
		<Layout>
			<HeadSeo
				title={`Your Awesome Title Here`}
				description={`Your description goes here on every page.
                  Keep character count between 140 to 160 characters`}
				canonicalUrl={`${siteMetadata.siteUrl}/posts`}
				ogTwitterImage={siteMetadata?.siteLogoSquare}
				ogType={'articles'}
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
				<h2>Blog</h2>
				<ul>
					{allPostsData.map(({ id, createdAt, title }) => (
						<li key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small>
								<Date dateString={createdAt} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}

export default PostsPage
