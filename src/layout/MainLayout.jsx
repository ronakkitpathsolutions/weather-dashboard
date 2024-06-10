import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../components/sidebar'
import TopBar from '../components/topbar'
import ContainerLayout from '../components/container'

const MainLayout = () => {
	const { isCollapsed } = useSelector(({ common }) => common)

	return (
		<section className="w-full h-screen bg-white">
			<div className="flex w-full h-full">
				<Sidebar
					className={`transition-width ease-in-out duration-300 relative bg-white border-r-[1px] border-primary-300 ${isCollapsed ? 'w-20' : 'w-64'}`}
				/>
				<div
					className={`flex flex-col transition-width ease-in-out duration-300 ${isCollapsed ? 'w-[calc(100%-80px)]' : 'w-[calc(100%-256px)]'}`}
				>
					<TopBar className="w-full h-20 bg-white border-b-[1px] border-primary-300">
						TopBar
					</TopBar>
					<ContainerLayout>Layout</ContainerLayout>
				</div>
			</div>
		</section>
	)
}

export default MainLayout
