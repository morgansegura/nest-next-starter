import { HeadSeo, Layout } from '@components/layouts'
import { getAllPostIds, getPostData } from '@lib/posts'

import Date from '@components/utils/date'
import { GetStaticProps, GetStaticPaths } from 'next'
// import { siteMetadata } from '@/metadata'

export default function Post({
	postData
}: {
	postData: {
		title: string
		description: string
		date: string
		contentHtml: string
	}
}) {
	return (
		<Layout>
			<HeadSeo
				title={`${postData?.title} | ${siteMetadata.companyName} `}
				description={postData?.description}
				canonicalUrl={`${siteMetadata.siteUrl}/blog/${postData?.slug}`}
				ogImageUrl={postData?.ogImage.url}
				ogType={'article'}>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: `{"@context": "https://schema.org",
                        "@type": "BlogArticle",
                        "headline": "${postData?.title}",
                        "image": [
                          "${postData?.ogImage.url}"
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
					<Date dateString={postData.date} />
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
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
