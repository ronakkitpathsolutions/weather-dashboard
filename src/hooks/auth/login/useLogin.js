import { useMemo, useCallback } from 'react'
import { useFormik } from 'formik'
import { loginValidation } from '../../../assets/utils/validations'
import useHistory from '../../useHistory'

const useLogin = () => {
	const history = useHistory()

	const handleLogin = useCallback(async (payload) => {
		console.log('payload', payload)
	}, [])

	const { values, setValues, errors, handleSubmit, handleBlur, touched } =
		useFormik({
			initialValues: {
				email: '',
				password: '',
			},
			validationSchema: loginValidation,
			onSubmit: async (payload) => {
				await handleLogin(payload)
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
			{
				id: 'password',
				placeholder: 'Enter Password',
				label: 'Password',
				error: errors.password,
				isError: touched.password && errors.password,
				name: 'password',
				type: 'password',
				value: values.password,
				handleChange,
				onBlur: handleBlur,
			},
		],
		[errors, handleBlur, handleChange, touched, values]
	)

	return {
		formData,
		handleSubmit,
		handleNavigate,
	}
}

export default useLogin
