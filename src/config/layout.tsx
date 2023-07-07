import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-[#f5f5f5] text-[#212121]">
			<Outlet />
		</div>
	)
}
