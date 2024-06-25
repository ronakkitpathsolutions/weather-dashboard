import React, { useCallback } from 'react'
import { classNames, isFunction } from '../../assets/utils/functions'

const buttonUtilities = {
	primary: 'bg-neutral-900 text-white shadow hover:bg-neutral-900/90',
	secondary: 'bg-initial-200 text-black shadow-sm hover:bg-initial-200/80',
	outline:
		'border border-input bg-background shadow-sm hover:bg-initial-200/80 hover:text-accent-foreground',
	link: 'text-black underline-offset-4 hover:underline',
}

const Button = ({
	children,
	className = '',
	type = 'button',
	handleClick,
	fullWidth,
	label,
	variant = 'primary',
	...props
}) => {
	const handleButtonClick = useCallback(
		(e) => {
			if (isFunction(handleClick)) return handleClick(e)
			return false
		},
		[handleClick]
	)

	return (
		<button
			onClick={handleButtonClick}
			className={classNames(
				'inline-flex items-center h-9 justify-center disabled:opacity-50 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none px-4 py-2',
				className,
				fullWidth ? '!w-full' : '',
				buttonUtilities[variant]
			)}
			{...props}
			{...{ type }}
		>
			{label || children}
		</button>
	)
}

export default Button
