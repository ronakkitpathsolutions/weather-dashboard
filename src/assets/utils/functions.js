import { jwtDecode } from 'jwt-decode'

export const isFunction = (fn) => typeof fn === 'function'

export const passMultipleFilesIntoFormData = (formData, fileArray, key) => {
	;[...fileArray].forEach((file) => {
		formData.append(key, file)
	})
}

export const classNames = (...params) =>
	[...params].filter((val) => !!val).join(' ')

export const isTokenActive = (token = null) => {
	if (!token) return false
	const decoded = jwtDecode(token)
	return decoded?.exp > Date.now() / 1000
}

export const decodeToken = async (token = null) => {
	if (!token) return {}
	const tokenValues = await jwtDecode(token)
	return tokenValues
}
