import { useRouter } from 'next/router'
// [Components]
import { Layout, Scaffold } from '@components/layouts'
// [Styles]
import { GlobalStyle } from '@styles/config/globalStyles'

export default function App({ Component, pageProps }) {
	const { query } = useRouter()
	return (
		<>
			<Layout>
				<GlobalStyle />
				<Component {...pageProps} />
			</Layout>
			{query.scaffold === 'yesplease' && <Scaffold />}
		</>
	)
}
