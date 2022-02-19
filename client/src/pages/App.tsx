import React from 'react'

// [Services]
// import { fetchUsers, User } from 'services/api/users'
// [Components]
import { Layout } from 'components/layouts'
import { Hero } from 'components/core'

// [Styles]
import { colors } from 'styles/config/utilities'
type Props = {}

const App: React.FC<Props> = () => {
	// const [users, setUsers] = React.useState<User[]>()

	// React.useEffect(() => {
	// 	const fetchData = async () => {
	// 		// Here we get users: User[]
	// 		const users = await fetchUsers()
	// 		setUsers(users)
	// 	}

	// 	fetchData()
	// }, [users])

	return (
		<Layout>
			<Hero
				supertitle='This is the supertitle'
				title='This is a new title'
				color={colors.violet900}
				description='The description should onlybe a few words long. Ok, maybe a couple of senctences.'
				imageSrc='https://images.pexels.com/photos/9669166/pexels-photo-9669166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
				imageAlt='Test Image'
				buttonLabel='Click Here'
				onClick={() => console.log('clicked')}
			/>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Augue mauris augue neque gravida in fermentum et sollicitudin.
				Est velit egestas dui id ornare. Orci eu lobortis elementum nibh
				tellus molestie nunc non. Sed lectus vestibulum mattis
				ullamcorper velit. Tristique nulla aliquet enim tortor. Sed odio
				morbi quis commodo odio aenean. Aliquam purus sit amet luctus
				venenatis lectus magna fringilla. Porta lorem mollis aliquam ut
				porttitor leo a diam. Ornare quam viverra orci sagittis eu.
				Fringilla phasellus faucibus scelerisque eleifend donec pretium
				vulputate sapien nec. At tellus at urna condimentum mattis
				pellentesque id. Eu ultrices vitae auctor eu augue ut lectus
				arcu. Pulvinar proin gravida hendrerit lectus a. Elementum
				curabitur vitae nunc sed velit dignissim sodales ut. Aliquam
				etiam erat velit scelerisque in. Tellus mauris a diam maecenas.
				Urna molestie at elementum eu facilisis. Sit amet aliquam id
				diam maecenas. Mauris nunc congue nisi vitae. Vestibulum morbi
				blandit cursus risus at ultrices mi tempus. Nibh cras pulvinar
				mattis nunc sed blandit libero volutpat sed. Dui faucibus in
				ornare quam. Blandit libero volutpat sed cras ornare arcu. Quis
				varius quam quisque id diam. Eu augue ut lectus arcu bibendum.
			</p>
			<p>
				Eu lobortis elementum nibh tellus molestie. Ac placerat
				vestibulum lectus mauris ultrices eros. Dignissim suspendisse in
				est ante. Ultricies leo integer malesuada nunc. Elementum
				facilisis leo vel fringilla. Scelerisque in dictum non
				consectetur. Vitae congue mauris rhoncus aenean vel elit
				scelerisque mauris pellentesque. Vulputate sapien nec sagittis
				aliquam malesuada bibendum. Ac turpis egestas sed tempus urna et
				pharetra pharetra. In aliquam sem fringilla ut morbi tincidunt.
				Integer malesuada nunc vel risus commodo viverra. Duis tristique
				sollicitudin nibh sit. Nisi scelerisque eu ultrices vitae
				auctor. Commodo nulla facilisi nullam vehicula ipsum a arcu
				cursus vitae. Tristique senectus et netus et malesuada fames.
				Vulputate odio ut enim blandit volutpat maecenas volutpat
				blandit aliquam. Nisi porta lorem mollis aliquam ut porttitor.
				Cras pulvinar mattis nunc sed. Laoreet non curabitur gravida
				arcu ac tortor. Laoreet non curabitur gravida arcu ac tortor.
				Nisi vitae suscipit tellus mauris a diam. Turpis massa tincidunt
				dui ut ornare lectus sit amet. Enim sit amet venenatis urna
				cursus. Id venenatis a condimentum vitae sapien pellentesque
				habitant morbi tristique. Id velit ut tortor pretium viverra
				suspendisse potenti. Leo a diam sollicitudin tempor id eu nisl.
			</p>
			<p>
				Lacus sed turpis tincidunt id. Nascetur ridiculus mus mauris
				vitae. Egestas egestas fringilla phasellus faucibus scelerisque
				eleifend donec pretium vulputate. Tortor at auctor urna nunc id
				cursus metus aliquam. Eget arcu dictum varius duis. Risus quis
				varius quam quisque id diam. Bibendum est ultricies integer quis
				auctor. Nulla at volutpat diam ut venenatis tellus. Libero enim
				sed faucibus turpis in eu mi bibendum. Vitae justo eget magna
				fermentum iaculis eu non. Faucibus in ornare quam viverra orci
				sagittis eu volutpat. Auctor elit sed vulputate mi. In mollis
				nunc sed id semper risus in hendrerit gravida. Mattis rhoncus
				urna neque viverra justo. Donec et odio pellentesque diam
				volutpat. Sagittis id consectetur purus ut faucibus. Neque
				gravida in fermentum et sollicitudin ac orci phasellus. Elit
				duis tristique sollicitudin nibh. Aliquet bibendum enim
				facilisis gravida neque convallis a cras semper. Facilisi morbi
				tempus iaculis urna id volutpat lacus. Vivamus at augue eget
				arcu dictum varius duis at consectetur. Egestas egestas
				fringilla phasellus faucibus scelerisque eleifend. Etiam tempor
				orci eu lobortis elementum. Molestie ac feugiat sed lectus
				vestibulum mattis ullamcorper velit sed. Amet purus gravida quis
				blandit turpis cursus. Proin nibh nisl condimentum id venenatis
				a condimentum vitae sapien. Habitant morbi tristique senectus et
				netus et. Tellus integer feugiat scelerisque varius morbi enim
				nunc faucibus. Sed cras ornare arcu dui. Duis at consectetur
				lorem donec massa sapien. A erat nam at lectus urna duis
				convallis convallis. Suspendisse faucibus interdum posuere lorem
				ipsum dolor sit. Sed pulvinar proin gravida hendrerit lectus.
			</p>
			<p>
				Mauris nunc congue nisi vitae suscipit. Sit amet commodo nulla
				facilisi nullam. Fermentum et sollicitudin ac orci phasellus
				egestas. Interdum posuere lorem ipsum dolor sit amet
				consectetur. Posuere morbi leo urna molestie at elementum eu
				facilisis. Pharetra magna ac placerat vestibulum lectus.
				Imperdiet massa tincidunt nunc pulvinar sapien et. Turpis
				egestas integer eget aliquet nibh praesent tristique. Sed
				vulputate odio ut enim blandit volutpat maecenas volutpat
				blandit. Risus pretium quam vulputate dignissim suspendisse in
				est. Aliquam ultrices sagittis orci a. Viverra maecenas accumsan
				lacus vel facilisis volutpat. Magna ac placerat vestibulum
				lectus mauris ultrices eros. Integer malesuada nunc vel risus
				commodo viverra maecenas accumsan. Morbi leo urna molestie at
				elementum eu. At tempor commodo ullamcorper a lacus vestibulum
				sed arcu. Erat nam at lectus urna duis convallis convallis.
				Cursus eget nunc scelerisque viverra. Mauris commodo quis
				imperdiet massa tincidunt nunc pulvinar. Egestas quis ipsum
				suspendisse ultrices gravida dictum fusce ut placerat.
			</p>
			<p>
				Suspendisse faucibus interdum posuere lorem. Pharetra magna ac
				placerat vestibulum lectus mauris ultrices. Ornare massa eget
				egestas purus viverra accumsan. Tristique senectus et netus et
				malesuada fames ac. Dolor sit amet consectetur adipiscing elit
				ut. Est pellentesque elit ullamcorper dignissim cras tincidunt
				lobortis feugiat. Sit amet cursus sit amet dictum sit. Dui
				faucibus in ornare quam viverra. Aliquam sem fringilla ut morbi
				tincidunt. Tellus in metus vulputate eu scelerisque felis. Amet
				aliquam id diam maecenas ultricies mi eget. Lobortis mattis
				aliquam faucibus purus in. Volutpat blandit aliquam etiam erat
				velit scelerisque in. Quam adipiscing vitae proin sagittis nisl
				rhoncus mattis rhoncus urna. Viverra justo nec ultrices dui
				sapien. Sed felis eget velit aliquet sagittis id consectetur
				purus ut. Integer feugiat scelerisque varius morbi enim nunc.
				Vel eros donec ac odio tempor orci dapibus ultrices. Imperdiet
				proin fermentum leo vel orci porta non. Quis auctor elit sed
				vulputate mi sit. In hac habitasse platea dictumst vestibulum
				rhoncus est. Tristique nulla aliquet enim tortor. Tempus quam
				pellentesque nec nam. Mauris in aliquam sem fringilla ut morbi.
				Quis blandit turpis cursus in hac habitasse platea dictumst. Sed
				cras ornare arcu dui vivamus arcu felis bibendum ut. Fermentum
				iaculis eu non diam. Vivamus at augue eget arcu dictum varius.
				Sit amet cursus sit amet dictum. Et pharetra pharetra massa
				massa ultricies mi quis. Nisl nisi scelerisque eu ultrices vitae
				auctor eu. Ante metus dictum at tempor commodo. Posuere
				sollicitudin aliquam ultrices sagittis orci. Ut venenatis tellus
				in metus vulputate eu scelerisque felis. Scelerisque felis
				imperdiet proin fermentum leo vel orci porta non. Sit amet
				consectetur adipiscing elit duis tristique sollicitudin.
			</p>
			<p>
				Elementum nisi quis eleifend quam adipiscing vitae. Nunc sed
				augue lacus viverra vitae congue eu consequat. Lectus magna
				fringilla urna porttitor rhoncus dolor purus non enim. Nibh sed
				pulvinar proin gravida hendrerit. Adipiscing diam donec
				adipiscing tristique risus nec feugiat in. Pretium viverra
				suspendisse potenti nullam. Imperdiet dui accumsan sit amet
				nulla. Eget sit amet tellus cras adipiscing enim. Ac auctor
				augue mauris augue neque. Pulvinar proin gravida hendrerit
				lectus. Donec pretium vulputate sapien nec sagittis aliquam.
				Habitasse platea dictumst vestibulum rhoncus est pellentesque.
				Eget aliquet nibh praesent tristique. Eget nullam non nisi est.
				In iaculis nunc sed augue. Accumsan in nisl nisi scelerisque eu
				ultrices vitae auctor. Ut tortor pretium viverra suspendisse
				potenti nullam ac. Tempor id eu nisl nunc mi ipsum faucibus
				vitae. Neque egestas congue quisque egestas diam in arcu cursus.
				Lacus sed turpis tincidunt id aliquet. Risus nec feugiat in
				fermentum. Ornare massa eget egestas purus viverra accumsan.
				Morbi tempus iaculis urna id volutpat lacus laoreet. Ut ornare
				lectus sit amet. Ultrices sagittis orci a scelerisque purus
				semper eget duis. Quisque id diam vel quam elementum pulvinar
				etiam non quam. Tincidunt dui ut ornare lectus sit amet. Aliquam
				malesuada bibendum arcu vitae elementum curabitur vitae nunc.
				Pellentesque dignissim enim sit amet venenatis urna cursus eget.
			</p>
			<p>
				Turpis tincidunt id aliquet risus. Facilisis leo vel fringilla
				est. Nam at lectus urna duis. Habitasse platea dictumst
				vestibulum rhoncus est pellentesque elit ullamcorper. Diam donec
				adipiscing tristique risus nec feugiat in fermentum. Orci eu
				lobortis elementum nibh tellus. Ac turpis egestas maecenas
				pharetra convallis. Vestibulum sed arcu non odio. Et malesuada
				fames ac turpis. Fermentum et sollicitudin ac orci phasellus
				egestas tellus rutrum tellus. Posuere urna nec tincidunt
				praesent. Sed turpis tincidunt id aliquet. Et netus et malesuada
				fames ac turpis egestas sed. Nibh tellus molestie nunc non
				blandit massa. Dignissim enim sit amet venenatis. At urna
				condimentum mattis pellentesque. Amet purus gravida quis blandit
				turpis. Dictum at tempor commodo ullamcorper a. Viverra ipsum
				nunc aliquet bibendum enim facilisis gravida neque convallis.
				Interdum varius sit amet mattis vulputate enim nulla aliquet
				porttitor. Maecenas sed enim ut sem viverra aliquet eget sit.
				Ullamcorper a lacus vestibulum sed arcu. Condimentum id
				venenatis a condimentum. Erat velit scelerisque in dictum non
				consectetur a erat nam. Placerat orci nulla pellentesque
				dignissim enim. In dictum non consectetur a erat nam. Sit amet
				consectetur adipiscing elit pellentesque habitant morbi. Nec dui
				nunc mattis enim ut tellus. Pretium fusce id velit ut tortor.
				Accumsan in nisl nisi scelerisque eu ultrices. Pellentesque elit
				eget gravida cum sociis natoque. Nibh nisl condimentum id
				venenatis a condimentum vitae sapien. Et malesuada fames ac
				turpis. Odio ut sem nulla pharetra diam sit amet nisl suscipit.
			</p>
			<p>
				Est ante in nibh mauris. Duis ultricies lacus sed turpis
				tincidunt id aliquet risus. Egestas quis ipsum suspendisse
				ultrices gravida dictum fusce. Tristique senectus et netus et
				malesuada fames. Aliquam sem et tortor consequat id porta nibh
				venenatis. Laoreet sit amet cursus sit. Libero justo laoreet sit
				amet cursus sit amet. Ipsum dolor sit amet consectetur
				adipiscing elit ut aliquam purus. Amet est placerat in egestas
				erat imperdiet sed euismod nisi. Ac odio tempor orci dapibus
				ultrices. Sollicitudin ac orci phasellus egestas tellus rutrum
				tellus pellentesque. Scelerisque purus semper eget duis. Amet
				venenatis urna cursus eget nunc scelerisque viverra mauris in.
				Elit pellentesque habitant morbi tristique senectus et netus.
				Maecenas volutpat blandit aliquam etiam erat velit scelerisque
				in dictum. Volutpat ac tincidunt vitae semper quis lectus nulla.
				Amet mattis vulputate enim nulla aliquet porttitor lacus luctus
				accumsan. Massa eget egestas purus viverra accumsan in nisl
				nisi. Elementum facilisis leo vel fringilla est ullamcorper.
				Tortor consequat id porta nibh venenatis. Ac feugiat sed lectus
				vestibulum mattis ullamcorper velit sed. Sit amet consectetur
				adipiscing elit ut aliquam purus. Amet venenatis urna cursus
				eget nunc. Feugiat in ante metus dictum at tempor. Aenean
				pharetra magna ac placerat. Eu turpis egestas pretium aenean
				pharetra. Scelerisque felis imperdiet proin fermentum leo vel
				orci. Dictum fusce ut placerat orci nulla pellentesque
				dignissim. Tincidunt nunc pulvinar sapien et ligula ullamcorper
				malesuada proin. Suspendisse sed nisi lacus sed viverra tellus.
				Blandit aliquam etiam erat velit scelerisque in dictum non. Sit
				amet nulla facilisi morbi tempus iaculis. Mattis molestie a
				iaculis at erat pellentesque adipiscing commodo. Tortor pretium
				viverra suspendisse potenti nullam. Maecenas accumsan lacus vel
				facilisis volutpat est velit. A arcu cursus vitae congue mauris
				rhoncus aenean. Adipiscing elit pellentesque habitant morbi
				tristique senectus et. Eu augue ut lectus arcu bibendum at.
			</p>
			<p>
				Cursus vitae congue mauris rhoncus aenean. Fames ac turpis
				egestas maecenas pharetra convallis posuere morbi. Et ligula
				ullamcorper malesuada proin libero nunc consequat. Ultricies leo
				integer malesuada nunc vel. Sed vulputate mi sit amet mauris.
				Aenean vel elit scelerisque mauris pellentesque pulvinar. Sociis
				natoque penatibus et magnis. Egestas fringilla phasellus
				faucibus scelerisque. Habitant morbi tristique senectus et netus
				et malesuada fames ac. Ut tellus elementum sagittis vitae et leo
				duis. Vivamus at augue eget arcu dictum varius duis. At lectus
				urna duis convallis convallis tellus id interdum velit. In
				egestas erat imperdiet sed. Nulla malesuada pellentesque elit
				eget gravida cum sociis. Facilisis magna etiam tempor orci eu
				lobortis elementum nibh tellus. Vivamus at augue eget arcu.
				Eleifend quam adipiscing vitae proin sagittis nisl. Orci
				sagittis eu volutpat odio facilisis mauris. Odio euismod lacinia
				at quis. Lobortis scelerisque fermentum dui faucibus in ornare
				quam viverra orci. Eget felis eget nunc lobortis mattis aliquam.
				Eget sit amet tellus cras adipiscing. Pellentesque massa
				placerat duis ultricies lacus sed. Quam adipiscing vitae proin
				sagittis nisl rhoncus mattis. Dui accumsan sit amet nulla
				facilisi morbi tempus iaculis. Arcu risus quis varius quam.
				Ornare lectus sit amet est placerat in egestas erat. Viverra
				nibh cras pulvinar mattis. Tortor aliquam nulla facilisi cras
				fermentum odio eu. Sit amet risus nullam eget. Suspendisse
				interdum consectetur libero id faucibus. Eu nisl nunc mi ipsum
				faucibus vitae aliquet nec. Tortor condimentum lacinia quis vel
				eros. Sit amet nisl purus in mollis nunc sed id. Rhoncus aenean
				vel elit scelerisque mauris pellentesque. Felis donec et odio
				pellentesque. Amet consectetur adipiscing elit duis tristique
				sollicitudin nibh sit. Malesuada proin libero nunc consequat
				interdum varius sit amet. Dolor sit amet consectetur adipiscing
				elit ut aliquam purus. Enim neque volutpat ac tincidunt vitae.
				Venenatis tellus in metus vulputate eu scelerisque felis
			</p>
			<p>
				Imperdiet proin. Mollis nunc sed id semper risus. Tincidunt dui
				ut ornare lectus sit amet est. Urna porttitor rhoncus dolor
				purus non enim praesent elementum facilisis. Eu sem integer
				vitae justo eget magna. Ipsum a arcu cursus vitae congue.
				Ullamcorper malesuada proin libero nunc consequat interdum
				varius sit amet. Neque aliquam vestibulum morbi blandit cursus
				risus at ultrices. Ipsum a arcu cursus vitae congue mauris
				rhoncus aenean vel. Ornare suspendisse sed nisi lacus sed. Elit
				duis tristique sollicitudin nibh. Diam donec adipiscing
				tristique risus nec feugiat. Amet dictum sit amet justo donec
				enim diam vulputate ut. Pulvinar mattis nunc sed blandit. Amet
				risus nullam eget felis eget nunc lobortis. Quisque egestas diam
				in arcu cursus euismod. Eu nisl nunc mi ipsum faucibus vitae.
				Pretium nibh ipsum consequat nisl vel pretium. Sapien nec
				sagittis aliquam malesuada bibendum arcu. Ornare massa eget
				egestas purus viverra accumsan in nisl. Velit egestas dui id
				ornare arcu odio ut sem. Pretium vulputate sapien nec sagittis.
				Pretium vulputate sapien nec sagittis aliquam malesuada.
			</p>
		</Layout>
	)
}

export default App
