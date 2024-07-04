import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleToggle } from '../../redux/slices/common.slice'
import Button from '../../shared/buttons/button'
import { ICONS } from '../../assets'
import Logo from '../../shared/logo'
import { classNames } from '../../assets/utils/functions'
import Navigation from './navigation'

const Sidebar = ({ className, ...props }) => {
	const dispatch = useDispatch()
	const { isCollapsed } = useSelector(({ common }) => common)

	const handleSidebarToggle = useCallback(
		() => dispatch(handleToggle()),
		[dispatch]
	)

	return (
		<div className={classNames('h-full p-1.5', className)} {...props}>
			<Logo className={isCollapsed ? 'mx-3' : 'mx-8'} />
			<Navigation {...{ isCollapsed }} />
			<Button
				type="button"
				onClick={handleSidebarToggle}
				className="bg-primary-100 !py-1 !px-1.5 hover:bg-primary-100 absolute top-1/2 -right-[20px] cursor-pointer -translate-y-1/2 border border-primary-400 !rounded-full"
			>
				{!isCollapsed ? (
					<ICONS.ChevronLeft className="w-6 h-6 text-primary-400" />
				) : (
					<ICONS.ChevronRight className="w-6 h-6 text-primary-400" />
				)}
			</Button>
		</div>
	)
}

export default Sidebar
