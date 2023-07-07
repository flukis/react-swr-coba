import { Outlet } from 'react-router-dom'
import Card from '../../modules/components/card'

export default function MainLayout() {
	return (
		<main className="w-full h-full flex">
			<div className="p-4 flex-shrink-0 w-[320px] h-screen bg-gray-100 overflow-y-hidden border-r">
				<h1 className="text-2xl mb-4 font-mono font-bold text-gray-700">📝 Notes</h1>
				<div className="h-full pb-16 hide-scrollbar overflow-y-auto">
					{Array(20)
						.fill('')
						.map((d, i) => (
							<Card key={i} />
						))}
				</div>
			</div>
			<div className="p-4 h-screen w-full overflow-x-hidden overflow-y-scroll">
				<Outlet />
			</div>
		</main>
	)
}
