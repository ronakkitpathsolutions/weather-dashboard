import { useMemo, useCallback } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { loginValidation } from '../../../assets/utils/validations'
import useHistory from '../../useHistory'
import { fetchUserByLogin } from '../../../redux/slices/auth.slice'

const useLogin = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	const { isLoading, error } = useSelector(({ auth }) => auth)

	const handleLogin = useCallback(
		async (payload) => {
			dispatch(fetchUserByLogin(payload)).then((res) => {
				localStorage.setItem('token', res.payload?.token || '')
			})
		},
		[dispatch]
	)

	console.log('error', error)

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
		isLoading,
	}
}

export default useLogin
