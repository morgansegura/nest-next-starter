import { HeadSeo, Layout } from '@components/layouts'
import { getAllPostIds, getPostData } from '@lib/posts'

import Date from '@components/utils/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import { siteMetadata } from 'data'

interface Author {
	name: string
}

export default function Post({
	postData
}: {
	postData: {
		title?: string
		description?: string
		createdAt?: string
		contentHtml?: string
		ogImageUrl?: string
		slug?: string
		author?: Author
	}
}) {
	return (
		<Layout>
			<HeadSeo
				title={`${postData?.title}`}
				description={postData?.description}
				canonicalUrl={`${siteMetadata.siteUrl}/posts/${postData?.slug}`}
				ogImageUrl={postData?.ogImageUrl}
				ogType={'article'}>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: `{"@context": "https://schema.org",
                        "@type": "BlogArticle",
                        "headline": "${postData?.title}",
                        "image": [
                          "${postData?.ogImageUrl}"
                        ],
                        "datePublished": "${postData?.createdAt}",
                        "author": [{
                            "@type": "Person",
                            "name": "${postData?.author?.name}"
                          }]
                      }`
					}}></script>
			</HeadSeo>

			<article>
				<h1>{postData.title}</h1>
				<div>
					<Date dateString={postData?.createdAt} />
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: postData?.contentHtml }}
				/>
			</article>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id as string)
	return {
		props: {
			postData
		}
	}
}
