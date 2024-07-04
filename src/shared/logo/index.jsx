import React from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '../../assets/utils/functions'
import { IMAGES } from '../../assets'

const Logo = ({ className, ...props }) => {
	const { isCollapsed } = useSelector(({ common }) => common)
	return (
		<div
			{...props}
			className={classNames('h-20 flex items-center justify-start', className)}
		>
			<IMAGES.Airify className="mr-1 w-12 h-12" />
			<p
				className={classNames(
					'text-2xl font-semibold text-primary-400',
					isCollapsed ? 'hidden' : ''
				)}
			>
				Airify
			</p>
		</div>
	)
}

export default Logo
