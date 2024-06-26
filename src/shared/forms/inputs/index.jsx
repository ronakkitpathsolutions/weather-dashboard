import React, { useCallback } from 'react'
import { classNames, isFunction } from '../../../assets/utils/functions'

const FormField = ({ isError, handleChange, inputClass, ...props }) => {
	const onChange = useCallback(
		(e) => {
			if (isFunction(handleChange)) return handleChange(e)
		},
		[handleChange]
	)

	return (
		<input
			{...props}
			{...{ onChange }}
			className={classNames(
				'flex w-full rounded-lg h-9 border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900 disabled:cursor-not-allowed disabled:opacity-50',
				inputClass,
				isError
					? '!border-variants-error focus-visible:ring-0 focus-visible:!ring-variants-error'
					: ''
			)}
		/>
	)
}

export default FormField
