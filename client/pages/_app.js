import { useRouter } from 'next/router'
// [Components]
import { Scaffold } from '@components/layouts'
// [Styles]
import { GlobalStyle } from '@styles/config/globalStyles'

export default function App({ Component, pageProps }) {
	const { query } = useRouter()
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
			{query.scaffold === 'yesplease' && <Scaffold />}
		</>
	)
}
