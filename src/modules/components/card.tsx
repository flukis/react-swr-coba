export default function Card() {
	return (
		<div
			tabIndex={0}
			role="link"
			className="border-2 hover:border-blue-400 cursor-pointer focus:border-blue-600 p-2 bg-yellow-50 border-yellow-100 rounded-md my-4"
		>
			<h3 className="text-xl font-semibold text-gray-700">Title</h3>
			<time className="text-xs font-mono text-gray-500">10 May 2023</time>
			<p className="text-gray-600 truncate">Short and glorius notes about my previous power</p>
		</div>
	)
}
