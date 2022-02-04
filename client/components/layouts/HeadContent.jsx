const HeadContent = ({ siteTitle }) => (
	<>
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta charSet='utf-8' />
		<link
			rel='apple-touch-icon'
			sizes='180x180'
			href='/favicon/apple-touch-icon.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='32x32'
			href='/favicon/favicon-32x32.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='16x16'
			href='/favicon/favicon-16x16.png'
		/>
		<link rel='manifest' href='/favicon/site.webmanifest' />
		<link
			rel='mask-icon'
			href='/favicon/safari-pinned-tab.svg'
			color='#0041df'
		/>
		<meta name='msapplication-TileColor' content='#00df94' />
		<meta name='theme-color' content='#00df94' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta charSet='utf-8' />
		<link
			rel='apple-touch-icon'
			sizes='180x180'
			href='/favicon/apple-touch-icon.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='32x32'
			href='/favicon/favicon-32x32.png'
		/>
		<link
			rel='icon'
			type='image/png'
			sizes='16x16'
			href='/favicon/favicon-16x16.png'
		/>
		<link rel='manifest' href='/favicon/site.webmanifest' />
		<link
			rel='mask-icon'
			href='/favicon/safari-pinned-tab.svg'
			color='#0041df'
		/>
		<meta name='msapplication-TileColor' content='#00df94' />
		<meta name='theme-color' content='#00df94' />

		<link rel='icon' href='/favicon.ico' />
		<meta
			name='description'
			content='Learn how to build a personal website using Next.js'
		/>
		<meta
			property='og:image'
			content={`https://og-image.vercel.app/${encodeURI(
				siteTitle
			)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
		/>
		<meta name='og:title' content={siteTitle} />
		<meta name='twitter:card' content='summary_large_image' />
	</>
)

export default HeadContent
