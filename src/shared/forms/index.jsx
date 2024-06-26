import React, { useCallback } from 'react'
import { isFunction } from '../../assets/utils/functions'

const Form = ({ children, handleSubmit, ...props }) => {
	const onSubmit = useCallback(
		(e) => {
			e.preventDefault()
			if (isFunction(handleSubmit)) handleSubmit()
		},
		[handleSubmit]
	)

	return (
		<form {...props} {...{ onSubmit }}>
			{children}
		</form>
	)
}

export default Form
