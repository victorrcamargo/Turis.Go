import { Outlet } from 'react-router'
import { Header } from '../header/header'

export function Layout() {
	return (
		<div className="min-h-screen bg-base-100 flex flex-col">
			<Header />
			<main className="flex-1 container mx-auto px-4 py-6 h-full">
				<Outlet />
			</main>
			<footer className="bg-base-200 text-center py-4 border-t border-base-300">
				<p className="text-sm text-gray-500">
					&copy; {new Date().getFullYear()} Turis.Go! Todos os direitos reservados.
				</p>
			</footer>
		</div>
	)
}
