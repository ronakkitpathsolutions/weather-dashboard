import React from 'react'
import { classNames } from '../../assets/utils/functions'
import useNavigation from './useNavigation'
import NavItem from './nav-item'

const Navigation = ({ isCollapsed, className, ...props }) => {
	const { navItems, settingTabItems } = useNavigation()

	return (
		<div
			{...props}
			className={classNames(
				'w-full h-[90vh] flex flex-col justify-between',
				className
			)}
		>
			<ul className={classNames('list-none', isCollapsed ? 'mx-3' : 'mx-8')}>
				{navItems?.map(({ id, label, icon }) => (
					<NavItem key={id} {...{ label, id, icon }} />
				))}
			</ul>
			<ul className={classNames('list-none', isCollapsed ? 'mx-3' : 'mx-8')}>
				{settingTabItems?.map(({ id, label, icon }) => (
					<NavItem key={id} {...{ label, id, icon }} />
				))}
			</ul>
		</div>
	)
}

export default Navigation
