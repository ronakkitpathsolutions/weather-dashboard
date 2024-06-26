import * as Yup from 'yup'

export const loginValidation = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.max(16, 'Password cannot be longer than 16 characters')
		.matches(/[a-z]/, 'Password must contain at least one lowercase letter')
		.matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
		.matches(/[0-9]/, 'Password must contain at least one number')
		.matches(
			/[@$!%*?&#]/,
			'Password must contain at least one special character'
		)
		.required('Password is required'),
})

export const emailValidation = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
})
