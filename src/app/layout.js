import Script from 'next/script'
import Navbar from '@/components/ui/navigation/ui/Navbar'
import LayoutUI from '@/components/ui/(layout)/LayoutUI'
import '../assets/css/root.css'

export const metadata = {
	title: 'Next.js and Redux Toolkit basic example',
	description: 'A demostration of how powerful the Redux-TK could be. It library design is awsome for React State Managment',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='body'>
				<Navbar />
				<LayoutUI>
					<div id='Layout_Auxiliar_Children'>
						{children}
					</div>
				</LayoutUI>
				<Script type='module' src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js' />
			</body>
		</html>
	)
}