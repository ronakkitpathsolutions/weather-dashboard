import React from 'react'
import { classNames } from '../../../assets/utils/functions'
import FormField from '../inputs'

const FormGroup = ({ className, label, labelClass, error, ...props }) => {
	return (
		<div className={classNames('', className)}>
			{label ? (
				<label
					className={classNames(
						'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
						labelClass
					)}
				>
					{label}
				</label>
			) : null}
			<FormField {...props} />
			{error ? (
				<p className="text-[0.8rem] font-medium text-variants-error">{error}</p>
			) : null}
		</div>
	)
}

export default FormGroup
