import React from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '../../assets/utils/functions'

const NavItem = ({ id, label, icon: Icon, ...props }) => {
	const { isCollapsed } = useSelector(({ common }) => common)

	return (
		<li
			{...props}
			className={classNames(
				'cursor-pointer flex items-center my-4 rounded-xl',
				'hover:bg-primary-200',
				isCollapsed
					? 'px-2 py-2.5 justify-center'
					: 'px-2.5 py-2.5 justify-start'
			)}
		>
			<Icon className="w-5 h-5 font-medium text-primary-500" />
			<span
				className={classNames(
					'transition-width ease-in-out duration-300 font-medium text-sm text-primary-500 ml-2',
					isCollapsed ? 'hidden ' : 'block'
				)}
			>
				{label}
			</span>
		</li>
	)
}

export default NavItem
