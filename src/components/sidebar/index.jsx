import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { handleToggle } from '../../redux/slices/common.slice'

const Sidebar = ({ ...props }) => {
	const dispatch = useDispatch()

	const handleSidebarToggle = useCallback(
		() => dispatch(handleToggle()),
		[dispatch]
	)

	return (
		<div {...props}>
			<button
				aria-label="button"
				type="button"
				onClick={handleSidebarToggle}
				className="size-[40px] bg-white absolute top-1/2 -right-[20px] cursor-pointer -translate-y-1/2 border border-primary-300 rounded-full"
			/>
		</div>
	)
}

export default Sidebar
