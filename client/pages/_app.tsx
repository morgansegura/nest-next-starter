import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
// [Components]
import { Scaffold } from '@components/utils'
// [Styles]
import { GlobalStyle } from '@styles/config/globalStyles'

export default function App({ Component, pageProps }: AppProps) {
	const { query } = useRouter()
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
			{query.scaffold === 'yesplease' && <Scaffold />}
		</>
	)
}
