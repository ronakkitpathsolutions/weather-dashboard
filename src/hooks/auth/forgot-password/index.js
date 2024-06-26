import { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import useHistory from '../../useHistory'
import { emailValidation } from '../../../assets/utils/validations'

const useForgotPassword = () => {
	const history = useHistory()

	const handleForgotPassword = useCallback(async (payload) => {
		console.log('payload', payload)
	}, [])

	const { values, setValues, errors, handleSubmit, handleBlur, touched } =
		useFormik({
			initialValues: {
				email: '',
			},
			validationSchema: emailValidation,
			onSubmit: async (payload) => {
				await handleForgotPassword(payload)
			},
		})

	const handleNavigate = useCallback(
		(path = '') => {
			history(path)
		},
		[history]
	)

	const handleChange = useCallback(
		(e) => {
			const { name, value } = e.target
			setValues({
				...values,
				[name]: value,
			})
		},
		[setValues, values]
	)

	const formData = useMemo(
		() => [
			{
				id: 'email',
				placeholder: 'Enter Email',
				label: 'Email',
				error: errors.email,
				isError: touched.email && errors.email,
				name: 'email',
				type: 'email',
				value: values.email,
				handleChange,
				onBlur: handleBlur,
			},
		],
		[errors.email, handleBlur, handleChange, touched.email, values.email]
	)

	return {
		handleSubmit,
		formData,
		handleNavigate,
	}
}

export default useForgotPassword
