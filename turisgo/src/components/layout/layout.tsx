import { Outlet, useNavigation } from 'react-router'
import { Header } from '../header/header'

export function Layout() {
	return (
		<div className="min-h-screen bg-base-100 flex flex-col">
			<Header />
			<main className="flex-1 container mx-auto px-4 py-6 h-full">
				<Outlet />
			</main>
		</div>
	)
}
